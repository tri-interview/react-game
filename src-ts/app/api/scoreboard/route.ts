import { NextRequest, NextResponse } from 'next/server';
import { allQuery, getQuery } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 });
    }
    
    // Get all user's scores
    const userScores = await allQuery(
      `SELECT s.score, s.totalQuestions, s.createdDate 
       FROM scores s 
       WHERE s.userId = ? 
       ORDER BY s.createdDate DESC`,
      [userId]
    );
    
    // Get top 10 scores
    const topScores = await allQuery(
      `SELECT u.username, s.score, s.totalQuestions, s.createdDate 
       FROM scores s 
       JOIN users u ON s.userId = u.id 
       ORDER BY s.score DESC, s.createdDate DESC 
       LIMIT 10`
    );
    
    return NextResponse.json({
      userScores,
      topScores
    });
  } catch (error) {
    console.error('Scoreboard error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}