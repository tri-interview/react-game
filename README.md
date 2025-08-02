# React Trivia Game

A simple full-stack trivia game application built with both TypeScript and JavaScript versions.

## 🚀 Quick Start

This project includes both TypeScript and JavaScript versions.  Run the respective build, as instructed.

**Important:** The switching scripts copy the appropriate version (`src-ts` or `src-js`) to the `/src` directory. The `/src` directory is generated and should not be edited directly - make all changes in the `src-ts` or `src-js` directories.

```bash
# Switch to appropriate version
npm run switch:js  # Switch to JavaScript version
  or 
npm run switch:ts  # Switch back to TypeScript version

# Install dependencies
npm install

# Start the development server
npm run dev # if switched to TypeScript
  or 
npm run dev:js # if switched to Javascript
```

Visit [http://localhost:3000](http://localhost:3000) to play the game.

### Additional Info
```bash
# TypeScript version
npm run dev        # Development server on port 3000
npm run build      # Production build
npm run start      # Production server

# JavaScript version
npm run dev:js     # Development server on port 3001
npm run build:js   # Production build  
npm run start:js   # Production server on port 3001

# (already done, can skip) Initialize the database
npx tsx src-ts/lib/init-db.ts
```

## 🔐 Test Credentials

- **Username:** demo
- **Password:** demo

## 📁 Project Structure

```
react-game/
├── src-ts/                  # TypeScript source files
│   ├── app/                 # Next.js app directory
│   │   ├── api/             # API routes
│   │   │   ├── login/       # Authentication endpoint
│   │   │   ├── score/       # Score saving endpoint
│   │   │   └── scoreboard/  # Leaderboard endpoint
│   │   ├── game/            # Game page
│   │   ├── results/         # Results page
│   │   ├── scoreboard/      # Scoreboard page
│   │   └── page.tsx         # Login page (home)
│   ├── components/          # Reusable React components
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utilities and data
│       ├── db.ts            # Database connection
│       └── schema.sql       # Database schema
├── src-js/                  # JavaScript source files
│   ├── app/                 # Same structure as TypeScript version
│   ├── components/          # JavaScript components
│   ├── hooks/               # JavaScript hooks
│   └── lib/                 # JavaScript utilities
├── src/                     # Generated directory (do not edit)
├── switch-to-js.sh          # Script to switch to JavaScript version
├── switch-to-ts.sh          # Script to switch to TypeScript version
├── .env                     # Environment variables
├── trivia.db               # SQLite database
```

## 🔌 API Endpoints

### POST /api/login
Authenticates a user.

**Request:**
```json
{
  "username": "demo",
  "password": "demo"
}
```

**Response:**
```json
{
  "success": true,
  "userId": 1,
  "username": "demo"
}
```

### POST /api/score
Saves a game score.

**Request:**
```json
{
  "userId": 1,
  "score": 2,
  "totalQuestions": 3
}
```

### GET /api/scoreboard?userId=1
Retrieves scoreboard data.

**Response:**
```json
{
  "userScores": [
    {
      "score": 3,
      "totalQuestions": 3,
      "createdDate": "2025-01-19T..."
    },
    {
      "score": 2,
      "totalQuestions": 3,
      "createdDate": "2025-01-19T..."
    }
  ],
  "topScores": [
    {
      "username": "demo",
      "score": 3,
      "totalQuestions": 3,
      "createdDate": "2025-01-19T..."
    }
  ]
}
```

## 💾 Database Schema

### users
- `id` (INTEGER, PRIMARY KEY)
- `username` (TEXT, UNIQUE)
- `password` (TEXT)
- `lastLogin` (TEXT)
- `createdDate` (TEXT)

### scores
- `id` (INTEGER, PRIMARY KEY)
- `userId` (INTEGER, FOREIGN KEY)
- `score` (INTEGER)
- `totalQuestions` (INTEGER)
- `createdDate` (TEXT)

## 🛠️ Tech Stack

- **Frontend:** React 19, Next.js 15, TypeScript/JavaScript
- **Backend:** Next.js API Routes
- **Database:** SQLite 3
- **Custom Hooks:** useAuth (authentication), useTimer (game timing)