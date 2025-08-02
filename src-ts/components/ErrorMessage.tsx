import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return <p style={{color: 'red', textAlign: 'center', marginTop: '15px'}}>{message}</p>;
}