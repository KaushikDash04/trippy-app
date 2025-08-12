# trippy-frontend
-----

# 🗺️ Trip Planner Frontend

This is the frontend for the Trip Planner application, built with modern web technologies. It provides a fast, responsive, and user-friendly interface for users to plan their trips by interacting with the AI-powered backend.

-----

## ✨ Features

  - **Intuitive Interface**: A clean and simple UI for inputting travel preferences.
  - **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
  - **Dynamic Plan Display**: Beautifully renders the travel itineraries received from the backend.
  - **Fast Performance**: Built with Vite for near-instant server start and Hot Module Replacement (HMR).
  - **Code Quality**: Enforced code consistency and quality with ESLint.

-----

## 🛠️ Tech Stack

  - **Build Tool**: [Vite](https://vitejs.dev/)
  - **UI Framework**: React / Vue / Svelte (You can specify which one you're using)
  - **Styling**: [Tailwind CSS](https://tailwindcss.com/)
  - **Linting**: [ESLint](https://eslint.org/)
  - **Package Manager**: NPM / Yarn

-----

## 📂 Project Structure

A brief overview of the key files and directories:

```
.
├── public/             # Static assets (icons, images, fonts)
├── src/                # Main source code
│   ├── components/     # Reusable UI components
│   ├── pages/          # Application pages/views
│   └── App.jsx         # Main application component
├── .gitignore          # Files ignored by Git
├── index.html          # The HTML entry point for Vite
├── package.json        # Project metadata and dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

-----

## 🚀 Getting Started

Follow these instructions to get the project set up and running on your local machine for development and testing.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) and `npm` installed.

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/your-username/trip-planner-frontend.git
    cd trip-planner-frontend
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Set up environment variables**

    Create a `.env` file in the root of the project and add the URL for the backend API. Vite requires environment variables to be prefixed with `VITE_`.

    ```env
    # URL of the backend server
    VITE_API_BASE_URL="http://127.0.0.1:8000"
    ```

-----

## 📜 Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

This runs the app in development mode. Open [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) (or the port specified in your terminal) to view it in your browser. The page will reload when you make changes.

### `npm run build`

This builds the app for production to the `dist` folder. It correctly bundles your code and optimizes it for the best performance.

### `npm run preview`

This command starts a local static web server that serves the files from `dist`. It's a useful way to check if the production build works correctly before deploying.