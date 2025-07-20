'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import styles from './scoreboard.module.css';

export default function ScoreboardPage() {
  const [topScores, setTopScores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { userId, requireAuth, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    requireAuth();
    if (userId) {
      fetchScoreboard(userId);
    }
  }, [userId]);

  const fetchScoreboard = async (userId: string) => {
    try {
      // See api documentation in README.md
      const response = await fetch(`/api/scoreboard`);
      const data = await response.json();
      
      if (response.ok) {
        setTopScores(data.topScores);
      }
    } catch (error) {
      console.error('Error fetching scoreboard:', error);
    }
    setLoading(false);
  };

  const handleReturnToLogin = () => {
    logout();
  };

  const handlePlayAgain = () => {
    router.push('/game');
  };

  if (loading) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.scoreCard}>
        <h1 className={styles.title}>
          Scoreboard
        </h1>
        <div className={styles.bestScoreBox}>
          <h2 className={styles.bestScoreText}>
            Your Best Score: 
          </h2>
        </div>
        <div className={styles.scoresSection}>
          <h3 className={styles.sectionTitle}>Top 10 Scores</h3>
          <table className={styles.scoresTable}>
            <thead>
              <tr className={styles.tableHeader}>
                <th className={styles.tableHeaderCell}>Rank</th>
                <th className={styles.tableHeaderCell}>Player</th>
                <th className={styles.tableHeaderCell} style={{textAlign: 'center'}}>Score</th>
                <th className={styles.tableHeaderCell}>Date</th>
              </tr>
            </thead>
            <tbody>
              {topScores.length > 0 && (
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>1</td>
                  <td className={styles.tableCell}>{topScores[0].username}</td>
                  <td className={styles.tableCellCenter}>{topScores[0].score}/{topScores[0].totalQuestions}</td>
                  <td className={styles.tableCell}>{topScores[0].createdDate}</td>
                </tr>
              )}
              {topScores.length > 1 && (
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>2</td>
                  <td className={styles.tableCell}>{topScores[1].username}</td>
                  <td className={styles.tableCellCenter}>{topScores[1].score}/{topScores[1].totalQuestions}</td>
                  <td className={styles.tableCell}>{topScores[1].createdDate}</td>
                </tr>
              )}
              {topScores.length > 2 && (
                <tr className={styles.tableRow}>
                  <td className={styles.tableCell}>3</td>
                  <td className={styles.tableCell}>{topScores[1].username}</td>
                  <td className={styles.tableCellCenter}>{topScores[1].score}/{topScores[1].totalQuestions}</td>
                  <td className={styles.tableCell}>{topScores[1].createdDate}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handlePlayAgain} className={`${styles.button} ${styles.buttonGreen}`}>
            Play Again
          </button>
          <button onClick={handleReturnToLogin} className={`${styles.button} ${styles.buttonRed}`}>
            Return to Login
          </button>
        </div>
      </div>
    </div>
  );
}