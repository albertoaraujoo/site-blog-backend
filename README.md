# Blog Backend API

A RESTful API for blog post management built with Node.js, Express.js and MongoDB.

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [How to Run](#how-to-run)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Data Model](#data-model)
- [Usage Examples](#usage-examples)
- [Available Scripts](#available-scripts)

## 🚀 About the Project

This project is a backend for a blog system that allows creating, reading, updating and deleting posts. It was developed following the MVC (Model-View-Controller) architecture and provides a complete RESTful API for content management.

## 🛠️ Technologies Used

- **Node.js** - JavaScript Runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variables management
- **Nodemon** - Development tool for automatic restart

## 📋 Prerequisites

Before starting, you need to have installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (or a MongoDB Atlas account)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## ⚙️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd site-blog-backend
```

2. Install dependencies:
```bash
npm install
```

## 🔧 Configuration

1. Create a `.env` file in the project root:
```bash
touch .env
```

2. Add the following environment variables:
```env
MONGODB_URI=mongodb://localhost:27017/blog-database
PORT=3001
```

### MongoDB Configuration

#### Option 1: Local MongoDB
- Install MongoDB locally
- Start the MongoDB service
- Use the URI: `mongodb://localhost:27017/blog-database`

#### Option 2: MongoDB Atlas (Cloud)
- Create an account on [MongoDB Atlas](https://www.mongodb.com/atlas)
- Create a cluster
- Get the connection string
- Use in the format: `mongodb+srv://<username>:<password>@cluster.mongodb.net/blog-database`

## 🚀 How to Run

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start at `http://localhost:3001` (or the port defined in the PORT variable).

## 📡 API Endpoints

### Base URL
```
http://localhost:3001/api/posts
```

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get a specific post |
| POST | `/api/posts` | Create a new post |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

## 📁 Project Structure

```
site-blog-backend/
├── controllers/
│   └── post.controller.js    # Post control logic
├── models/
│   └── post.model.js        # Post data model
├── routes/
│   └── post.route.js        # Route definitions
├── index.js                 # Main application file
├── package.json            # Dependencies and scripts
├── .env                    # Environment variables (create)
└── README.md              # Project documentation
```

## 📊 Data Model

### Post Schema

```javascript
{
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: false
    }
  },
  image: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  createdAt: Date,
  updatedAt: Date
}
```

## 💡 Usage Examples

### 1. Create a new post

**Request:**
```bash
POST /api/posts
Content-Type: application/json

{
  "title": "My First Post",
  "content": "This is the content of my first blog post.",
  "author": {
    "name": "John Silva",
    "avatar": "https://example.com/avatar.jpg"
  },
  "image": "https://example.com/post-image.jpg"
}
```

**Response:**
```json
{
  "message": "Post created successfully",
  "post": {
    "_id": "64f5a8b4c123456789abcdef",
    "title": "My First Post",
    "content": "This is the content of my first blog post.",
    "author": {
      "name": "John Silva",
      "avatar": "https://example.com/avatar.jpg"
    },
    "image": "https://example.com/post-image.jpg",
    "date": "2023-09-04T10:30:00.000Z",
    "createdAt": "2023-09-04T10:30:00.000Z",
    "updatedAt": "2023-09-04T10:30:00.000Z"
  }
}
```

### 2. Get all posts

**Request:**
```bash
GET /api/posts
```

**Response:**
```json
[
  {
    "_id": "64f5a8b4c123456789abcdef",
    "title": "My First Post",
    "content": "This is the content of my first blog post.",
    "author": {
      "name": "John Silva",
      "avatar": "https://example.com/avatar.jpg"
    },
    "image": "https://example.com/post-image.jpg",
    "date": "2023-09-04T10:30:00.000Z",
    "createdAt": "2023-09-04T10:30:00.000Z",
    "updatedAt": "2023-09-04T10:30:00.000Z"
  }
]
```

### 3. Get a specific post

**Request:**
```bash
GET /api/posts/64f5a8b4c123456789abcdef
```

### 4. Update a post

**Request:**
```bash
PUT /api/posts/64f5a8b4c123456789abcdef
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated post content."
}
```

### 5. Delete a post

**Request:**
```bash
DELETE /api/posts/64f5a8b4c123456789abcdef
```

**Response:**
```json
{
  "message": "Post deleted successfully"
}
```

## 📝 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `start` | `npm start` | Start the server in production mode |
| `dev` | `npm run dev` | Start the server in development mode with auto-reload |
| `build` | `npm run build` | Install dependencies |

## 🔍 API Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK - Successful request |
| 201 | Created - Resource successfully created |
| 404 | Not Found - Resource not found |
| 500 | Internal Server Error - Internal server error |

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the ISC license. See the `package.json` file for more details.

## 👨‍💻 Developed as part of the Rocketseat course

This project was developed as part of web development studies with Node.js and Next.js from Rocketseat.

## 👨‍💻 Author

**Alberto Araújo**
- GitHub: [@albertoaraujoo](https://github.com/albertoaraujoo)

---

⚡ **Developed with Node.js and Express.js** ❤️

*Made with love by [Alberto](https://github.com/albertoaraujoo)*
