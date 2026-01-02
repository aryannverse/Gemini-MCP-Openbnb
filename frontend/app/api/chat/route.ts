
export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Create a thread ID for the session (simplification: use one or random)
  const threadId = "default_thread_v1"; 
  
  // LangGraph API Endpoint
  const BACKEND_URL = "http://localhost:2024";

  const payload = {
    assistant_id: "agent",
    input: {
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
        // Map 'user' to 'human' for LangChain, 'assistant' to 'ai'
        type: m.role === 'user' ? 'human' : 'ai' 
      }))
    },
    config: {
      configurable: {
        thread_id: threadId
      }
    },
    stream_mode: ["messages"] 
  };

  try {
     // Use /runs/stream endpoint for LangGraph Cloud / CLI
     const response = await fetch(`${BACKEND_URL}/runs/stream`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
       const errText = await response.text();
       console.error("Backend Error:", errText);
       return new Response(`Error connecting to backend: ${errText}`, { status: 500 });
    }

    if (!response.body) {
        return new Response("No response body", { status: 500 });
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    
    const stream = new ReadableStream({
      async start(controller) {
        let lastProcessedContent = "";
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');
            
            for (const line of lines) {
              if (line.startsWith('event: messages/partial')) {
                 continue;
              }
              if (line.startsWith('data: ')) {
                try {
                  const dataStr = line.slice(6);
                  if (dataStr.trim() === '[DONE]') continue;
                  
                  const data = JSON.parse(dataStr);
                  
                  // Helper function to process individual message item
                  const processItem = (item: any) => {
                    if (item.content && item.type === 'ai') {
                        const currentContent = item.content;
                        // Smart Diff: Check if this is a full-text update of the previous state
                        if (currentContent.startsWith(lastProcessedContent)) {
                            // It is an extension of the previous content (or identical)
                            const delta = currentContent.slice(lastProcessedContent.length);
                            if (delta) {
                                controller.enqueue(new TextEncoder().encode(delta));
                            }
                            lastProcessedContent = currentContent;
                        } else {
                            // It's a chunk or a non-contiguous update - treat as delta
                            controller.enqueue(new TextEncoder().encode(currentContent));
                            lastProcessedContent += currentContent;
                        }
                    }
                  };

                  if (Array.isArray(data)) {
                    for (const item of data) {
                        processItem(item);
                    }
                  } else {
                      processItem(data);
                  }
                  
                } catch (e) {
                  // ignore parse errors for partial lines
                }
              }
            }
          }
        } catch (e) {
           console.error("Stream reading error", e);
        } finally {
          controller.close();
        }
      }
    });

    return new Response(stream);
  } catch (e) {
     console.error("Route handler error", e);
     return new Response("Failed to fetch from backend", { status: 500 });
  }
}
