'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { QuestionCard } from '@/components/QuestionCard';

export default function ResultsPage() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const gameResults = localStorage.getItem('gameResults');
    
    if (!userId || !gameResults) {
      router.push('/');
      return;
    }
    
    const parsedResults = JSON.parse(gameResults);
    setResults(parsedResults);
    saveScore(userId, parsedResults);
  }, []);

  const saveScore = async (userId, gameResults) => {
    setLoading(true);
    try {
      await fetch('/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: parseInt(userId),
          score: gameResults.score,
          totalQuestions: gameResults.totalQuestions
        })
      });
    } catch (error) {
      console.error('Error saving score:', error);
    }
    setLoading(false);
  };

  const handlePlayAgain = () => {
    localStorage.removeItem('gameResults');
    router.push('/game');
  };

  const handleViewScoreboard = () => {
    router.push('/scoreboard');
  };

  if (!results) return <div>Loading...</div>;

  return (
    <Container>
      <Card width="500px">
        <h1 style={{textAlign: 'center', marginBottom: '30px', color: '#333'}}>
          Game Results
        </h1>
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
          <ScoreDisplay score={results.score} total={results.totalQuestions} />
          {loading && <p style={{color: '#666'}}>Saving score...</p>}
        </div>
        <div style={{display: 'flex', gap: '10px'}}>
          <div style={{flex: 1}}>
            <Button onClick={handlePlayAgain} variant="primary">Play Again</Button>
          </div>
          <div style={{flex: 1}}>
            <Button onClick={handleViewScoreboard} variant="secondary">View Scoreboard</Button>
          </div>
        </div>
      </Card>
    </Container>
  );
}