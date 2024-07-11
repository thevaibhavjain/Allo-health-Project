

# Meal Selection Application

## Overview
The Meal Selection Application is a React-based web application that allows users to select meals and drinks for a flight. The total cost is dynamically updated based on the selected items. The application also includes a simple Express.js backend to serve meal and label data.

## Features
- Display a list of available meals and drinks.
- Select and deselect meals for passengers.
- Dynamic update of total price based on selected meals and drinks.
- Fetch meal and label data from a backend server.

## Technologies Used
- Frontend: React
- Backend: Express.js
- Styling: CSS
- Data: JSON

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- npm or yarn package manager.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thevaibhavjain/Allo-health-Project
   cd Allo-health-Project
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   node index.js
   ```
   The backend server will run on `http://localhost:3001`.

2. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend application will run on `http://localhost:3000`.


## Running Tests
To run tests, you can add a testing framework like Jest for unit tests and integration tests.

## Deployment
For deployment, you can use services like Vercel for the frontend and Heroku for the backend.

## Contributing
Feel free to submit issues and pull requests to improve this project.

## License
This project is licensed under the MIT License.

