import React from 'react';

export function Input({ type = 'text', placeholder, value, onChange, required = false, textAlign = 'left' }) {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} style={{width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box', fontSize: type === 'number' ? '18px' : '14px', textAlign}} required={required} />;
}