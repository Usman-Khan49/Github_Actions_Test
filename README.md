# Event Reminder App

## Overview
The Event Reminder App is a web application that allows users to create, manage, and receive reminders for events. Users can register, log in, and create events with customizable reminders. The application uses JWT for authentication and MongoDB for data storage.

## Features
- User registration and login
- Create, retrieve, update, and delete events
- Set reminders for events
- Authentication using JWT
- MongoDB as the database

## Project Structure
```
event-reminder-app
├── src
│   ├── controllers          # Contains logic for handling requests
│   │   ├── authController.js
│   │   └── eventController.js
│   ├── middlewares          # Contains middleware functions
│   │   └── auth.js
│   ├── models               # Contains Mongoose models
│   │   ├── event.js
│   │   └── user.js
│   ├── routes               # Contains route definitions
│   │   ├── authRoutes.js
│   │   └── eventRoutes.js
│   ├── utils                # Contains utility functions
│   │   └── db.js
│   ├── app.js               # Initializes the Express application
│   └── server.js            # Entry point of the application
├── package.json             # NPM configuration file
├── .env                     # Environment variables
└── README.md                # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd event-reminder-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your environment variables:
   ```
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   PORT=<your_port>
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. Access the API endpoints as documented in the code.

## API Endpoints
- **POST /api/users/register** - Register a new user
- **POST /api/users/login** - Login and get JWT token
- **POST /api/events** - Create a new event
- **GET /api/events** - Get all events (with optional sorting and filtering)
- **GET /api/events/:id** - Get a specific event
- **PUT /api/events/:id** - Update an event
- **DELETE /api/events/:id** - Delete an event

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.