import { db } from './db';
import fs from 'fs';
import path from 'path';

const initDatabase = async () => {
  const schemaPath = path.join(__dirname, 'schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf-8');
  
  const statements = schema.split(';').filter(stmt => stmt.trim());
  
  for (const statement of statements) {
    await new Promise((resolve, reject) => {
      db.run(statement, (err) => {
        if (err) reject(err);
        else resolve(null);
      });
    });
  }
  
  console.log('Database initialized successfully');
  db.close();
};

initDatabase().catch(console.error);