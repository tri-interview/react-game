import React from 'react';

export function QuestionCard({ question, userAnswer, correctAnswer, isCorrect }) {
  return (
    <div style={{marginBottom: '15px', padding: '10px', backgroundColor: isCorrect ? '#d4edda' : '#f8d7da', borderRadius: '4px'}}>
      <p style={{marginBottom: '5px', fontWeight: 'bold'}}>{question}</p>
      <p style={{margin: '0', fontSize: '14px'}}>
        Your answer: {userAnswer} | Correct answer: {correctAnswer} | {isCorrect ? '✓ Correct' : '✗ Incorrect'}
      </p>
    </div>
  );
}