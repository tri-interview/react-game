import './globals.css';

export const metadata = {
  title: 'React Quiz Game',
  description: 'Test your knowledge with our trivia game',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}