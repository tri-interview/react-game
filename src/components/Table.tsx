import React from 'react';

interface TableProps {
  children: React.ReactNode;
}

interface TableRowProps {
  children: React.ReactNode;
  isHeader?: boolean;
}

interface TableCellProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export function Table({ children }: TableProps) {
  return <table style={{width: '100%', borderCollapse: 'collapse'}}>{children}</table>;
}

export function TableRow({ children, isHeader = false }: TableRowProps) {
  return <tr style={{borderBottom: isHeader ? '2px solid #ddd' : '1px solid #eee'}}>{children}</tr>;
}

export function TableCell({ children, align = 'left' }: TableCellProps) {
  return <td style={{padding: '10px', textAlign: align}}>{children}</td>;
}

export function TableHeader({ children, align = 'left' }: TableCellProps) {
  return <th style={{padding: '10px', textAlign: align}}>{children}</th>;
}