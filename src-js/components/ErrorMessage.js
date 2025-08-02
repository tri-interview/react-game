import React from 'react';

export function ErrorMessage({ message }) {
  return <p style={{color: 'red', textAlign: 'center', marginTop: '15px'}}>{message}</p>;
}