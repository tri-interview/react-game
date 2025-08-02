import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  textAlign?: 'left' | 'center' | 'right';
}

export function Input({ type = 'text', placeholder, value, onChange, required = false, textAlign = 'left' }: InputProps) {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} style={{width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box', fontSize: type === 'number' ? '18px' : '14px', textAlign}} required={required} />;
}