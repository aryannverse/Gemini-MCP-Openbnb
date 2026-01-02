<div align="center">

# Gemini-MCP-Openbnb

![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Gemini](https://img.shields.io/badge/Google%20Gemini-2.0%20flash-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-Orchestration-1C3C3C?style=for-the-badge)
![Airbnb](https://img.shields.io/badge/Airbnb-OpenBNB-FF5A5F?style=for-the-badge&logo=airbnb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</div>

A full-stack agentic application bridging **Google's Gemini 2.0 Flash** with **Airbnb** data via the **OpenBNB** project and **Model Context Protocol (MCP)**. This project enables AI agents to autonomously plan trips, search for specific listings, and analyze accommodation data using advanced scraping and direct booking logic.

## 🚀 About The Project

**Gemini-MCP-Openbnb** empowers AI agents to act as intelligent travel concierges. By exposing OpenBNB's Airbnb search capabilities through an MCP Server, the Gemini agent can query real-time listing availability, prices, and amenities, all controlled by a cutting-edge frontend.

### Key Features
* **AI-Driven Frontend**: Built entirely using **Google Antigravity** powered by **Gemini 3.0 Pro (High)** for a futuristic "vibe coding" experience.
* **Intelligent Backend**: Uses **LangGraph** to define cyclical agentic workflows (e.g., "Search -> Refine -> Compare").
* **Travel Logic**: Integrates with the **OpenBNB** project to bypass standard API limitations, allowing for direct search and "Book Direct" link discovery.
* **Observability**: Integrated with **LangSmith** for deep tracing of the travel planning process.
* **MCP Standard**: Adheres to the Model Context Protocol, making the travel tools plug-and-play for any MCP-compliant client.

---
## 🛠️ Tech Stack

### **Frontend (Google Antigravity)**
* **Engine**: Gemini 3.0 Pro (High)
* **Framework**: React / TypeScript (Next.js)
* **Styling**: Tailwind CSS / CSS Modules
* **Generation Platform**: [Google Antigravity](https://antigravity.google/)

### **Backend (Custom Built)**
* **Language**: Python
* **Agent Framework**: [LangGraph](https://langchain-ai.github.io/langgraph/) (Stateful orchestration)
* **Tracing & Eval**: [LangSmith](https://smith.langchain.com/)
* **Integration**: OpenBNB (Airbnb Search Logic)
* **Protocol**: [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)

## ⚙️ Project Structure 
```bash
Gemini-MCP-Openbnb/
├── backend/                # The MCP Server & Agent Logic
│   ├── agent.py/           # Source code for agents and tools
│   ├── requirements.txt    # Python dependencies (langgraph, mcp, etc.)
│   └── langgraph.json 
├── frontend/               # The AI-Generated UI
│   ├── src/                
│   ├── public/             
│   └── package.json        
├── .env.example            # Secrets (API Keys)
└── README.md               # This documentation
```

## 💻  Live Demo

<img width="4110" height="1956" alt="Group 7" src="https://github.com/user-attachments/assets/2e50e77f-f8dc-4547-9c4b-95b39e313766" />

## 🏗️ Architecture & Workflows

### System Architecture
The following diagram illustrates how the Frontend (Gemini 3.0 generated) connects to the Backend Agent, which then uses MCP to "speak" to the OpenBNB tools.

[![](https://mermaid.ink/img/pako:eNqNVNtu4jAQ_RXLT10JKIGQhTysBPSirtqSBfqyyT6YZBqsJnbkOC1s039fO0649aL1CzPDmczxnCO_4pBHgF0cC5Kt0fIiYEidvFiZwpXgTAKLkB_gXXx2zXmcABozSRXsmcrttwD_Ma36PNz4cyChVAE6R9M1kehGtYpHEsIB7BpSyug0ocCkbxLU73SRqdRANTBgJ6wmJHyqSTXhmbeVa87Q3dRDCxDPII4pmZq__xtdMim2yON0N0qfW8Liaz3E30VoHMMRZh_tGC05T3LNZ5YBm9xPTOGIgWFBRLj2x1Ss2KrOKugJ7gIkoUnu39JcUhY3-YdQKiCUvvlBE86fdMMVZRGIA2i1xs_2eblR4jCS6AvsYr0mGsLxJQzz5gJeQuQjF-k7TcfejV-bpNZVVU62vEipNFuuIrQUJFTU38uuTNRu_ygfciWaJ3iaybw88o6BHVaqBq21wkse8kTZ8Odidt-ee9OyNoDpqs2g8TMlBuRSEAnl3gcGtjeDRl5uICw0yij4JaSW7iOMvjGghYQsL_craXhV3tCwRag64PxXAWJb1goYUGOLr1HHQ5UzlLhjlr-A-HQVc8gzznL4rz3PQXutVDrhlnpHaIRdKQpo4RRESnSKX3VrgOUaUgiwq8KIiKcAB-xN9WSE_eY8bdoEL-I1dh9JkqusyCIlyAUlyqp7SDVyygsmsdsb2NU3sPuKNyp1nM6ob3ct2x5Zdm9oOy28xW671-9Ylj3sD6yBNRoMnWH_rYX_VnOtTtfq9kZO33HsXnfQHX5vYYio5OLOvI7VI_n2DzaFpeM?type=png)](https://mermaid.live/edit#pako:eNqNVNtu4jAQ_RXLT10JKIGQhTysBPSirtqSBfqyyT6YZBqsJnbkOC1s039fO0649aL1CzPDmczxnCO_4pBHgF0cC5Kt0fIiYEidvFiZwpXgTAKLkB_gXXx2zXmcABozSRXsmcrttwD_Ma36PNz4cyChVAE6R9M1kehGtYpHEsIB7BpSyug0ocCkbxLU73SRqdRANTBgJ6wmJHyqSTXhmbeVa87Q3dRDCxDPII4pmZq__xtdMim2yON0N0qfW8Liaz3E30VoHMMRZh_tGC05T3LNZ5YBm9xPTOGIgWFBRLj2x1Ss2KrOKugJ7gIkoUnu39JcUhY3-YdQKiCUvvlBE86fdMMVZRGIA2i1xs_2eblR4jCS6AvsYr0mGsLxJQzz5gJeQuQjF-k7TcfejV-bpNZVVU62vEipNFuuIrQUJFTU38uuTNRu_ygfciWaJ3iaybw88o6BHVaqBq21wkse8kTZ8Odidt-ee9OyNoDpqs2g8TMlBuRSEAnl3gcGtjeDRl5uICw0yij4JaSW7iOMvjGghYQsL_craXhV3tCwRag64PxXAWJb1goYUGOLr1HHQ5UzlLhjlr-A-HQVc8gzznL4rz3PQXutVDrhlnpHaIRdKQpo4RRESnSKX3VrgOUaUgiwq8KIiKcAB-xN9WSE_eY8bdoEL-I1dh9JkqusyCIlyAUlyqp7SDVyygsmsdsb2NU3sPuKNyp1nM6ob3ct2x5Zdm9oOy28xW671-9Ylj3sD6yBNRoMnWH_rYX_VnOtTtfq9kZO33HsXnfQHX5vYYio5OLOvI7VI_n2DzaFpeM)


### Agent Workflow (LangGraph)

This flow shows how the agent processes a travel request, loops to refine search criteria if needed, and outputs a final itinerary.

[![](https://mermaid.ink/img/pako:eNqtlF1v2jAUhv-K5apSK9EuEPJZaVJb2quVTaO7WeHCJCdg4diZbbay0v--ky8IGtt6MSNFNj7nycl7XvuFJioFGtOFZsWSPI6mkuA4PSUjyLgEMmJ6RR4whkzsRoCp9xPBjMEIkkLG1sKSjAsRn_Sz8tczVqsVxCdZNZrlxQ-e2mU8KJ57iRJKt9tXNbF-TizT9uzpiwFNPsO3NRg7OycXF-_J9QKkHWMdT9UMd5lREvSsm74LKlO2I0h4CoZYRSbAdLLckkelRAW5e4ZkbYF8LEDejG-agNkxzBggNSiHZVyYbTM5gHzgxnK5aGOOUm5VXgiwsCV3Mj17uueSCfwIUyhpYHY-lXVSW2CVg9uorSH3ai3T7R54JHSsSBP97k5rpbe4LPtX1VlPm28kn5hmeVvkPupQ5a6q-y_-cwwa5rooxIZMClQ94wm5LZvc2MWU1qmb2zhlyPrDIes4JYgS_9Ap7oFTuiBUsDXcsATtMJ6TsWD-Vsy-QTXMyVzHC3awcA5Rlv4bthOgOiDELoEgGDRqYLFFRKrGhDmzKH9aHigMyqFby66ZdSluNfby9DMWJn87SF1Wp1__gdZxyHFaNg_9N9B2Mj2wFZBESQmJ5UoSgXiDz8XS4qnPlCbfueFzLrjdENyvBJuzZLXQ5TloLIVZq1rw9gpqC2LV-K2gK9rDS46nNLZ6DT2ag85ZuaQvJXFK657QGKflK6d0Kl8xp2Dyq1J5m4Y1LJY0zpgwuFoXKbMw4gyvz3z3rwaZgr7Fai2N3SiqIDR-oc809qPLIHI9xxn4YRSEntujGxp7_UvHiwJ36AwGfuS54WuP_qze6lyGnh8MnX7g-0EQOC7SIOVW6Yf64q7u79dfGpjonw?type=png)](https://mermaid.live/edit#pako:eNqtlF1v2jAUhv-K5apSK9EuEPJZaVJb2quVTaO7WeHCJCdg4diZbbay0v--ky8IGtt6MSNFNj7nycl7XvuFJioFGtOFZsWSPI6mkuA4PSUjyLgEMmJ6RR4whkzsRoCp9xPBjMEIkkLG1sKSjAsRn_Sz8tczVqsVxCdZNZrlxQ-e2mU8KJ57iRJKt9tXNbF-TizT9uzpiwFNPsO3NRg7OycXF-_J9QKkHWMdT9UMd5lREvSsm74LKlO2I0h4CoZYRSbAdLLckkelRAW5e4ZkbYF8LEDejG-agNkxzBggNSiHZVyYbTM5gHzgxnK5aGOOUm5VXgiwsCV3Mj17uueSCfwIUyhpYHY-lXVSW2CVg9uorSH3ai3T7R54JHSsSBP97k5rpbe4LPtX1VlPm28kn5hmeVvkPupQ5a6q-y_-cwwa5rooxIZMClQ94wm5LZvc2MWU1qmb2zhlyPrDIes4JYgS_9Ap7oFTuiBUsDXcsATtMJ6TsWD-Vsy-QTXMyVzHC3awcA5Rlv4bthOgOiDELoEgGDRqYLFFRKrGhDmzKH9aHigMyqFby66ZdSluNfby9DMWJn87SF1Wp1__gdZxyHFaNg_9N9B2Mj2wFZBESQmJ5UoSgXiDz8XS4qnPlCbfueFzLrjdENyvBJuzZLXQ5TloLIVZq1rw9gpqC2LV-K2gK9rDS46nNLZ6DT2ag85ZuaQvJXFK657QGKflK6d0Kl8xp2Dyq1J5m4Y1LJY0zpgwuFoXKbMw4gyvz3z3rwaZgr7Fai2N3SiqIDR-oc809qPLIHI9xxn4YRSEntujGxp7_UvHiwJ36AwGfuS54WuP_qze6lyGnh8MnX7g-0EQOC7SIOVW6Yf64q7u79dfGpjonw)


---

## 📂 Backend Structure

The backend is the brain of the operation, designed to handle complex travel logic.

* **`agent.py`**: Defines the LangGraph workflow. It creates a graph of nodes (Reasoning, Tool Execution) that the agent traverses to fulfill travel queries.
* **LangSmith Integration**: Every step of the agent's execution is logged to LangSmith, allowing for real-time debugging of the "thought process."

## ⚡ Getting Started

Follow these steps to clone and run the project locally.

### Prerequisites
* **Python 3.10+**
* **Node.js 18+**
* **Git**
* **LangSmith API Key** (optional, for tracing)

### 1. Clone the Repository
```bash
git clone https://github.com/aryannverse/Gemini-MCP-Openbnb.git
cd Gemini-MCP-Openbnb
```

### 2. Backend Setup

```bash
cd backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```
**Configuration:** Create a .env file in the backend/ directory based on .env.example:

```bash
LANGCHAIN_API_KEY=your_langsmith_key
LANGCHAIN_TRACING_V2=true
GEMINI_API_KEY=your_google_ai_key
```
Run the MCP Server 
```bash
python agent.py
```


### 3. Frontend Setup
```bash
cd frontend
npm install # Install dependencies
npm run dev # Start the development server
```
**The frontend should now be running on `http://localhost:3000` and the backend on `http://localhost:2024`**

## 🔌 Connecting MCP to Gemini Agent

To enable the Gemini Agent (in Antigravity or a desktop client) to use your backend tools:

1. Ensure your Backend MCP Server is running.
2. Configure your MCP Client (e.g., config file in Antigravity or Claude Desktop).
3. Add the server command:
   ```json
   "mcpServers": {
     "airbnb-agent": {
       "command": "python",
       "args": ["/absolute/path/to/Gemini-MCP-Openbnb/backend/server.py"]
     }
   }

## 🔗 Connecting Frontend to Backend

The frontend communicates with the backend via API endpoints or through the MCP connection depending on the architecture.

* **Direct API**: Ensure the `API_BASE_URL` in `frontend/.env` points to your running backend (e.g., `http://localhost:8000`).
* **Agentic**: The frontend sends natural language prompts to Gemini, which then calls the MCP tools running in your backend to fetch data, returning the result to the UI.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Built with ❤️ by [aryannverse](https://github.com/aryannverse)*
