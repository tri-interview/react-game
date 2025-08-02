import { NextRequest, NextResponse } from 'next/server';
import { runQuery } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId, score, totalQuestions } = await request.json();
    
    if (!userId || score === undefined || !totalQuestions) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    await runQuery(
      'INSERT INTO scores (userId, score, totalQuestions) VALUES (?, ?, ?)',
      [userId, score, totalQuestions]
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Score save error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}