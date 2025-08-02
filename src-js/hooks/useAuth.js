import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const [authState, setAuthState] = useState({
    userId: null,
    username: null,
    isAuthenticated: false,
    isLoading: true
  });
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    
    setAuthState({
      userId,
      username,
      isAuthenticated: !!userId && !!username,
      isLoading: false
    });
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('username', data.username);
        setAuthState({
          userId: data.userId,
          username: data.username,
          isAuthenticated: true,
          isLoading: false
        });
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Login failed' };
      }
    } catch (err) {
      return { success: false, error: 'Network error' };
    }
  };

  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('gameResults');
    setAuthState({
      userId: null,
      username: null,
      isAuthenticated: false,
      isLoading: false
    });
    router.push('/');
  };

  const requireAuth = () => {
    if (!authState.isLoading && !authState.isAuthenticated) {
      router.push('/');
    }
  };

  return {
    ...authState,
    login,
    logout,
    requireAuth
  };
}