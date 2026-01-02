# Gemini-MCP-Openbnb

![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Gemini](https://img.shields.io/badge/Google%20Gemini-3.0%20Pro-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-Orchestration-1C3C3C?style=for-the-badge)
![Airbnb](https://img.shields.io/badge/Airbnb-OpenBNB-FF5A5F?style=for-the-badge&logo=airbnb&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-Protocol-333333?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

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

## 🏗️ Architecture & Workflows

### System Architecture
The following diagram illustrates how the Frontend (Gemini 3.0 generated) connects to the Backend Agent, which then uses MCP to "speak" to the OpenBNB tools.

```mermaid
graph TD
    subgraph Frontend_Antigravity [Frontend (Google Antigravity)]
        UI[React UI / Chat Interface]
        GeminiClient[Gemini 3.0 Client]
    end

    subgraph Backend_MCP [Backend (Python MCP Server)]
        Server[MCP Server Entry Point]
        LangGraph[LangGraph Agent]
        
        subgraph Tools [OpenBNB Tools]
            Search[Airbnb Search Tool]
            Details[Listing Details Tool]
            Direct[Direct Booking Finder]
        end
    end

    subgraph External_Services [External Services]
        Airbnb[Airbnb Platform]
        GeminiAPI[Google Gemini API]
        LangSmith[LangSmith Tracing]
    end

    UI -->|User Prompts| GeminiClient
    GeminiClient -->|MCP Protocol / JSON-RPC| Server
    Server -->|Orchestrate| LangGraph
    LangGraph -->|Execute| Search
    LangGraph -->|Execute| Details
    LangGraph -->|Trace Steps| LangSmith
    Search -->|Scrape/Query| Airbnb
    Details -->|Scrape/Query| Airbnb
    LangGraph -->|Final Answer| Server
    Server -->|Response| GeminiClient
    GeminiClient -->|Render| UI
```
