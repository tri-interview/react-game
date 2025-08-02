import React from 'react';

export function ScoreDisplay({ score, total }) {
  return <h2 style={{color: '#28a745', marginBottom: '10px'}}>Your Score: {score}/{total}</h2>;
}