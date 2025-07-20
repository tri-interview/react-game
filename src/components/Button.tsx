import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'success' | 'secondary' | 'danger';
  fullWidth?: boolean;
}

const variantStyles = {
  primary: { backgroundColor: '#007bff' },
  success: { backgroundColor: '#28a745' },
  secondary: { backgroundColor: '#6c757d' },
  danger: { backgroundColor: '#dc3545' }
};

export function Button({ children, onClick, type = 'button', variant = 'primary', fullWidth = true }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} style={{width: fullWidth ? '100%' : 'auto', padding: '12px', ...variantStyles[variant], color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px'}}>
      {children}
    </button>
  );
}