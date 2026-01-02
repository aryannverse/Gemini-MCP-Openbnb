import asyncio
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_mcp_adapters.client import MultiServerMCPClient
from langgraph.prebuilt import create_react_agent
from langgraph.graph import StateGraph, MessagesState, START
from langchain_core.messages import HumanMessage

from dotenv import load_dotenv
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

async def get_tools():
    mcp_client = MultiServerMCPClient(
        {
            "airbnb": {
                "command": "npx",
                "args": [
                    "-y", 
                    "@openbnb/mcp-server-airbnb",
                    "--ignore-robots-txt" 
                ],
                "transport": "stdio",
            }
        }
    )


try:
    mcp_client = MultiServerMCPClient(
        {
            "airbnb": {
                "command": "npx",
                "args": [
                    "-y", 
                    "@openbnb/mcp-server-airbnb",
                    "--ignore-robots-txt" 
                ],
                "transport": "stdio",
            }
        }
    )

    tools = [] 
    
    async def load_tools():
        return await mcp_client.get_tools()
        
    tools = asyncio.run(load_tools())
    
except Exception as e:
    print(f"Warning: Could not connect to MCP server during initialization: {e}")
    tools = []

model = ChatGoogleGenerativeAI(
    model="gemini-2.0-flash",
    google_api_key=GEMINI_API_KEY,
    temperature=0
)

graph = create_react_agent(model, tools)