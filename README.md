# trippy-app

AI-powered travel planner with a FastAPI backend and a Vite frontend. For more details, see the README in each subdirectory.

-----
 <img src="assets/trippy-demo.gif" alt="Trippy Demo" width="700">
-----

## Tech Stack

| Service    | Technology                                                   |
| :--------- | :----------------------------------------------------------- |
| **Backend** | Python 3.11+, FastAPI, Uvicorn, LangGraph, Pydantic          |
| **Frontend** | Vite, JS Framework (React/Vue/Svelte), Tailwind CSS, NPM     |

-----

## Local Development

### Prerequisites

  - **Python** 3.11+
  - **Node.js** 18+
  - **Git**

### Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/trippy-app.git
    cd trippy-app
    ```

2.  **Run Backend (Terminal 1):**

    ```bash
    # Navigate to backend
    cd backend

    # Create & activate virtual environment
    python3 -m venv venv && source venv/bin/activate

    # Install dependencies
    pip install -r requirements.txt

    # Create .env file with your API key
    echo 'OPENAI_API_KEY="your_openai_api_key_here"' > .env

    # Start server
    uvicorn main:app --port 8000 --reload
    ```

3.  **Run Frontend (Terminal 2):**

    ```bash
    # Navigate to frontend (from root)
    cd frontend

    # Install dependencies
    npm install

    # Create .env file to point to the backend
    echo 'VITE_API_BASE_URL="http://127.0.0.1:8000"' > .env

    # Start dev server
    npm run dev
    ```

4.  **Access Points:**

      - **Frontend:** `http://localhost:5173`
      - **Backend API:** `http://127.0.0.1:8000`