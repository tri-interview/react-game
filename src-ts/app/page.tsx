'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { ErrorMessage } from '@/components/ErrorMessage';
import './globals.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const result = await login(username, password);
    
    if (result.success) {
      router.push('/game');
    } else {
      setError(result.error || 'Login failed');
    }
  };

  return (
    <Container>
      <Card width="300px">
        <h1 style={{textAlign: 'center', marginBottom: '30px', color: '#333'}}>
          Trivia Game Login
        </h1>
        <p style={{textAlign: 'center', marginBottom: '20px', color: '#666', fontSize: '14px'}}>
          Test credentials: demo/demo
        </p>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
        {error && <ErrorMessage message={error} />}
      </Card>
    </Container>
  );
}