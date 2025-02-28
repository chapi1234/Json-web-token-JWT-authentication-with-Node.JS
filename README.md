# AWT Project

This project is a Node.js application that uses Express.js and MongoDB to provide user authentication and basic CRUD operations for posts. The application includes JWT-based authentication and password hashing for security.

## Features

- User registration with hashed passwords
- User login with JWT token generation
- Protected routes using JWT authentication
- Basic CRUD operations for posts

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/awt-project.git
   cd awt-project
2. Install the dependencies:
   ```sh
   npm install
3. Create a .env file in the root directory and add the following environment variables:
4.  ```sh
    MONGO_DB=your_mongodb_connection_string
SECRET_KEY=your_secret_key
``<vscode_annotation details='%5B%7B%22title%22%3A%22hardcoded-credentials%22%2C%22description%22%3A%22Embedding%20credentials%20in%20source%20code%20risks%20unauthorized%20access%22%7D%5D'>`

### Running the Application
1. Start the server
```sh
npm start
or
nodemon index.js
2. The server will start on port 3000. You can access the API at http://localhost:3000.

##API Endpoints
###User Authentication
####Register a New User
Endpoint: POST /api/user/register
Description: Registers a new user with a hashed password.
Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response:

```sh
{
  "message": "Successfully registered",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "password": "hashed_password"
  }
}

###User 
Endpoint: POST /api/user/login
Description: Logs in a user and returns a JWT token.
Request Body:
```sh
{
  "email": "john@example.com",
  "password": "password123"
}

Response:
```sh
{
  "message": "Logged in!",
  "token": "jwt_token"
}

###Posts
####Get All Posts
Endpoint: GET /api/posts
Description: Retrieves all posts. This route is protected and requires a valid JWT token.
Headers:
```sh
{
  "auth-token": "jwt_token"
}

Response:
```sh
{
  "posts": {
    "title": "my first post",
    "description": "random data you shouldn't access"
  }
}

###Project Structure
JWT/
├── routes/
│   ├── auth.js
│   ├── [posts.js](http://_vscodecontentref_/1)
│   └── verifytoken.js
├── models/
│   └── User.js
├── validation/
│   └── [index.js](http://_vscodecontentref_/2)
├── .env
├── [index.js](http://_vscodecontentref_/3)
├── [package.json](http://_vscodecontentref_/4)
└── README.md

###License
This project is licensed under the MIT License. See the LICENSE file for details.

###Acknowledgments
Express.js
Mongoose
JWT
bcryptjs
dotenv
