# GoTiny - URL Shortener

A modern, full-stack URL shortener application built with React, Node.js, and MongoDB.

![GoTiny Logo](client/public/logo.png)

## Features

- 🔗 Shorten long URLs instantly
- 👤 User authentication system
- ✨ Custom URL slugs for registered users
- 📊 Track click statistics for your shortened URLs
- 💨 Fast redirection
- 🎯 Dashboard for managing your URLs
- 🌐 Guest mode available

## Live Demo

[Demo URL] - Coming soon!

## Tech Stack

### Frontend
- React 19 with Vite
- Redux Toolkit for state management
- Tailwind CSS for styling
- Axios for API requests

### Backend
- Node.js & Express
- MongoDB with Mongoose
- JWT for authentication
- Cookie-based sessions
- CORS enabled

## Project Structure

```
GoTiny/
├── client/                   # Frontend React application
│   ├── src/
│   │   ├── api/             # API integration layer
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── routing/         # Router configuration
│   │   ├── store/          # Redux store and slices
│   │   └── utils/          # Utility functions
│   └── public/              # Static assets
│
└── server/                  # Backend Node.js application
    └── src/
        ├── config/          # Configuration files
        ├── controller/      # Route controllers
        ├── dao/             # Data Access Objects
        ├── middleware/      # Express middlewares
        ├── models/          # Mongoose models
        ├── routes/          # Express routes
        ├── services/        # Business logic
        └── utils/           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/GoTiny.git
cd GoTiny
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Set up environment variables
```bash
# Create .env file in server directory
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

4. Install client dependencies
```bash
cd ../client
npm install
```

5. Start the development servers

In the server directory:
```bash
npm run dev
```

In the client directory:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Environment Variables

### Server
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
APP_URL=http://localhost:3000/
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### URL Operations
- `POST /api/create` - Create short URL
- `GET /:id` - Redirect to original URL
- `POST /api/user/urls` - Get user's URLs

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- [nanoid](https://github.com/ai/nanoid) for generating unique URLs
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
