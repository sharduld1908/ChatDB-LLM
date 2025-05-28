    # ChatDB-LLM

    A SQL training platform that allows you to learn complex SQL queries using the Chinook database. ChatDB-LLM leverages Large Language Models (LLMs) to help you interact with the database using natural language, making SQL learning and data exploration more intuitive and accessible.

    ## 🚀 Check it out

    Try the live demo: [https://chatdb-llm-m8r0.onrender.com/](https://chatdb-llm-m8r0.onrender.com/)

    ---

    ## 🛠️ Tech Stack

    - **Frontend:** React, Vite
    - **Backend:** Node.js, Express
    - **Database:** SQLite (Chinook sample database)
    - **LLM Integration:** LangChain, Gemini (or other LLMs)

    ## 🤖 About LLMs

    Large Language Models (LLMs) like Gemini and GPT-4 are advanced AI models trained on vast amounts of text data. They can understand and generate human-like language, making them ideal for tasks such as question answering, summarization, and natural language interfaces. In this project, LLMs are used to translate user questions into SQL queries and explain database results in plain English.

    ## 🔗 About LangChain

    [LangChain](https://python.langchain.com/) is a powerful framework for building applications with LLMs. It provides tools to connect language models with external data sources, APIs, and databases. In ChatDB-LLM, LangChain is used to bridge the gap between natural language and SQL, enabling seamless interaction with the database.

    ## 🏗️ How to Build & Run

    ### Prerequisites
    - Node.js (v18+ recommended)
    - npm or yarn

    ### 1. Clone the repository
    ```bash
    git clone https://github.com/sharduld1908/ChatDB-LLM
    cd ChatDB-LLM
    ```

    ### 2. Install dependencies
    ```bash
    cd server
    npm install
    cd ../client
    npm install
    ```

    ### 3. Start the backend server
    ```bash
    cd ../server
    npm run start
    ```

    ### 4. Start the frontend
    ```bash
    cd ../client
    npm run dev
    ```

    The frontend will be available at `http://localhost:5173` by default.

    ---

    ## 📂 Project Structure

    - `client/` — React frontend (Vite-powered)
    - `server/` — Node.js backend, LLM and database logic
    - `server/data/Chinook.db` — Sample SQLite database
