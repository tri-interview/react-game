-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  lastLogin TEXT,
  createdDate TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Scores table
CREATE TABLE IF NOT EXISTS scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER NOT NULL,
  score INTEGER NOT NULL,
  totalQuestions INTEGER NOT NULL,
  createdDate TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);

-- Insert demo user
INSERT OR IGNORE INTO users (username, password, createdDate) VALUES ('demo', 'demo', CURRENT_TIMESTAMP);

-- Insert sample scores
INSERT INTO scores (userId, score, totalQuestions) VALUES 
  (1, 3, 3),
  (1, 2, 3),
  (1, 1, 3),
  (1, 3, 3),
  (1, 2, 3),
  (1, 0, 3),
  (1, 1, 3);