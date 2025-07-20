# React Trivia Game

A simple full-stack trivia game application built. 

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Initialize the database (already done)
npx tsx src/lib/init-db.ts

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to play the game.

## 🔐 Test Credentials

- **Username:** demo
- **Password:** demo

## 📁 Project Structure

```
react-game/
├── src/
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

- **Frontend:** React 19, Next.js 15, TypeScript
- **Backend:** Next.js API Routes
- **Database:** SQLite 3
- **Custom Hooks:** useAuth (authentication), useTimer (game timing)