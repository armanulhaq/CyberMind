# Job Board Application

A modern, full-stack job board application built with React, Node.js, Express, and MongoDB. This application allows users to browse job listings, filter them by various criteria, and post new job opportunities.

## Features

-   **Frontend**:

    -   Built with React 19 and Vite
    -   Responsive UI with Tailwind CSS
    -   Job listing with search and filter functionality
    -   Create job postings with a user-friendly form
    -   Interactive UI components from Radix UI

-   **Backend**:
    -   RESTful API with Express.js
    -   MongoDB database with Mongoose ODM
    -   CORS enabled for cross-origin requests
    -   Environment variable support with dotenv

## Tech Stack

-   **Frontend**:

    -   React 19
    -   Vite
    -   Tailwind CSS
    -   React Hook Form
    -   Lucide Icons
    -   Radix UI

-   **Backend**:
    -   Node.js
    -   Express.js
    -   MongoDB with Mongoose
    -   CORS

## Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn
-   MongoDB (local or MongoDB Atlas)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/armanulhaq/CyberMind.git
cd cyberworks-assignment
```

### 2. Set Up the Backend

```bash
# Navigate to server directory
cd server

# Install dependencies
npm i

# Create a .env file in the server directory and add your MongoDB URI:
# MONGODB_URI=your_mongodb_connection_string
# PORT=3000 (optional, defaults to 3000)

# Start the development server
npm run start
```

### 3. Set Up the Frontend

```bash
# From the project root, navigate to client directory
cd ../client

# Install dependencies
npm i

# Start the development server
npm run dev
```

The application should now be running on `http://localhost:5173` (or another available port if 5173 is in use).
