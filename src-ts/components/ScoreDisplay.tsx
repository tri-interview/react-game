import React from 'react';

interface ScoreDisplayProps {
  score: number;
  total: number;
}

export function ScoreDisplay({ score, total }: ScoreDisplayProps) {
  return <h2 style={{color: '#28a745', marginBottom: '10px'}}>Your Score: {score}/{total}</h2>;
}