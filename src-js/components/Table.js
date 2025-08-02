import React from 'react';

export function Table({ children }) {
  return <table style={{width: '100%', borderCollapse: 'collapse'}}>{children}</table>;
}

export function TableRow({ children, isHeader = false }) {
  return <tr style={{borderBottom: isHeader ? '2px solid #ddd' : '1px solid #eee'}}>{children}</tr>;
}

export function TableCell({ children, align = 'left' }) {
  return <td style={{padding: '10px', textAlign: align}}>{children}</td>;
}

export function TableHeader({ children, align = 'left' }) {
  return <th style={{padding: '10px', textAlign: align}}>{children}</th>;
}