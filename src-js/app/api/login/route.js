import { NextRequest, NextResponse } from 'next/server';
import { getQuery, runQuery } from '@/lib/db';

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    
    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password required' }, { status: 400 });
    }
    
    const user = await getQuery('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    
    await runQuery('UPDATE users SET lastLogin = ? WHERE id = ?', [new Date().toISOString(), user.id]);
    
    return NextResponse.json({ success: true, userId: user.id, username: user.username });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}