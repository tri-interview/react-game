import React from 'react';

interface CardProps {
  children: React.ReactNode;
  width?: string;
}

export function Card({ children, width = '400px' }: CardProps) {
  return (
    <div style={{backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width}}>
      {children}
    </div>
  );
}