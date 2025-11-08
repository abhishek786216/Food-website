# Food Recipe Website

A full-stack web application for managing and sharing food recipes. Users can create, view, edit, and manage their favorite recipes with images and detailed instructions.

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Repository Structure](#repository-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)

## 🔍 Overview

This repository contains a complete food recipe management system with:
- **Backend**: RESTful API built with Express.js and MongoDB
- **Frontend**: Modern React application with Vite build tool
- **Authentication**: User registration and login with JWT tokens
- **Image Upload**: Support for recipe images using Multer
- **Database**: MongoDB for storing recipes and user data

## 🛠 Technologies Used

### Backend
- **Node.js** (v22.16.0) - Runtime environment
- **Express.js** (v5.1.0) - Web framework
- **MongoDB** with **Mongoose** (v8.16.1) - Database and ODM
- **JWT** (jsonwebtoken v9.0.2) - Authentication
- **bcrypt** (v6.0.0) - Password hashing
- **Multer** (v2.0.1) - File upload handling
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

### Frontend
- **React** (v19.1.0) - UI library
- **Vite** (v7.0.0) - Build tool and dev server
- **React Router DOM** (v7.6.3) - Client-side routing
- **Axios** (v1.10.0) - HTTP client
- **React Icons** (v5.5.0) - Icon library
- **ESLint** - Code linting

## 📁 Repository Structure

```
Food-website/
├── backend/                    # Backend API server
│   ├── config/                 # Configuration files
│   │   └── connectionDb.js     # MongoDB connection
│   ├── controllers/            # Route controllers
│   │   └── user.js            # User authentication logic
│   ├── middleware/             # Custom middleware
│   ├── models/                 # Mongoose schemas
│   │   ├── recipe.js          # Recipe model
│   │   └── user.js            # User model
│   ├── routes/                 # API routes
│   │   ├── recipe.js          # Recipe endpoints
│   │   └── user.js            # User endpoints
│   ├── public/                 # Static files
│   │   └── images/            # Uploaded recipe images
│   ├── .env                    # Environment variables
│   ├── package.json           # Backend dependencies
│   └── server.js              # Entry point
│
├── frontend/                   # Frontend React application
│   └── food_app/
│       ├── src/
│       │   ├── components/    # React components
│       │   │   ├── Navbar.jsx
│       │   │   ├── footer.jsx
│       │   │   ├── Recipeitem.jsx
│       │   │   ├── inputform.jsx
│       │   │   ├── MainNavigation.jsx
│       │   │   └── Modal.jsx
│       │   ├── pages/         # Page components
│       │   │   ├── Home.jsx
│       │   │   ├── Addfoodrecipe.jsx
│       │   │   └── EditRecipe.jsx
│       │   ├── assets/        # Images and static assets
│       │   ├── App.jsx        # Main app component
│       │   ├── App.css        # Main styles
│       │   ├── index.css      # Global styles
│       │   └── main.jsx       # Entry point
│       ├── dist/              # Build output
│       ├── package.json       # Frontend dependencies
│       ├── vite.config.js     # Vite configuration
│       └── index.html         # HTML template
│
└── render.yaml                # Render deployment config
```

## ✨ Features

### User Management
- User registration with email and password
- Secure login with JWT authentication
- Password encryption using bcrypt

### Recipe Management
- **Create**: Add new recipes with title, ingredients, instructions, and cooking time
- **Read**: View all recipes or specific recipe details
- **Update**: Edit existing recipes
- **Delete**: Remove recipes
- **Image Upload**: Upload cover images for recipes

### Recipe Model
Each recipe contains:
- Title
- Ingredients (array)
- Instructions
- Cooking time
- Cover image
- Creator reference (user who created it)
- Timestamps (created/updated dates)

## 📋 Prerequisites

Before running this project, make sure you have:
- **Node.js** v22.16.0 or higher
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn** package manager

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/abhishek786216/Food-website.git
cd Food-website
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file with the following variables:
# PORT=8080
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key

npm start
# or for development with auto-reload:
npm run dev
```

The backend server will run on `http://localhost:8080`

### 3. Frontend Setup
```bash
cd frontend/food_app
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port)

## 🎯 Usage

### Development Mode
1. Start the backend server: `cd backend && npm run dev`
2. Start the frontend dev server: `cd frontend/food_app && npm run dev`
3. Open your browser and navigate to `http://localhost:5173`

### Production Build
```bash
# Build frontend
cd frontend/food_app
npm run build

# The built files will be in the dist/ folder
# Serve with:
npm run preview
```

## 🔌 API Endpoints

### User Routes
- `POST /register` - Register a new user
- `POST /login` - Login user and get JWT token

### Recipe Routes
- `GET /recipes` - Get all recipes
- `GET /recipe/:id` - Get a specific recipe
- `POST /recipe` - Create a new recipe (requires authentication)
- `PUT /recipe/:id` - Update a recipe (requires authentication)
- `DELETE /recipe/:id` - Delete a recipe (requires authentication)

### Static Files
- `GET /images/:filename` - Access uploaded recipe images

## 🌐 Deployment

This project is configured for deployment on **Render** (see `render.yaml`):
- Frontend is deployed as a static site from `frontend/food_app/dist`
- Backend can be deployed as a web service

### Render Configuration
The `render.yaml` file includes:
- Static site configuration for the frontend
- Automatic deployment from the repository

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

**Abhishek**
- GitHub: [@abhishek786216](https://github.com/abhishek786216)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Happy Cooking! 🍳👨‍🍳**
