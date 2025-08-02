import React from 'react';

export function Container({ children }) {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0'}}>
      {children}
    </div>
  );
}