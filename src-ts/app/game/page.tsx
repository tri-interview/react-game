'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import styles from './game.module.css';

export default function GamePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<typeof questions[0] | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const { requireAuth } = useAuth();
  const router = useRouter();

  let init = false

  const questions = [
  { id: 1, question: "What is 5 + 3?", answer: 8 },
  { id: 2, question: "What is 12 - 7?", answer: 5 },
  { id: 3, question: "What is 4 × 6?", answer: 24 },
  { id: 4, question: "What is 15 ÷ 3?", answer: 5 },
  { id: 5, question: "What is 9 + 11?", answer: 20 },
  { id: 6, question: "What is 18 - 9?", answer: 9 },
  { id: 7, question: "What is 7 × 5?", answer: 35 },
  { id: 8, question: "What is 20 ÷ 4?", answer: 5 },
  { id: 9, question: "What is 6 + 8?", answer: 14 },
  { id: 10, question: "What is 25 - 15?", answer: 10 }
];

  const select_random_question = (questions: any) => {
    if(questions !== undefined && questions !== null){
      if(questions.length !== 0){
        const aq = questions.filter((_, index) => !usedQuestions.includes(index));
        if(aq.length !== 0){
          const r = Math.floor(Math.random() * aq.length);
          const i = questions.findIndex(q => q.id === aq[r].id);
          setCurrentQuestion(questions[i]);
          setUsedQuestions([...usedQuestions, i]);
        }
      }
    }
  };

const ftd = (ss: any) => {
  if(parseInt(ss) >= 0) {
    const m = Math.floor(ss / 60).toString().padStart(2, '0');
    const s = (ss % 60).toString().padStart(2, '0');
    return `Time: ${m}:${s}`;
  }
    return 'unknown';
};

  const prog = {
    percentage: Math.round((currentQuestionIndex / 3) * 100),
    questionsAnswered: currentQuestionIndex,
    questionsRemaining: 3 - currentQuestionIndex,
    timePerQuestion: currentQuestionIndex > 0 ? Math.round(seconds / currentQuestionIndex) : 0,
    estimatedTimeRemaining: (3 - currentQuestionIndex) * (currentQuestionIndex > 0 ? Math.round(seconds / currentQuestionIndex) : 30)
  };

  const title = `Q${currentQuestionIndex + 1} - Score: ${score}/3 - Trivia Game`;

  useEffect(() => {
    init = true
    if(init){
      requireAuth();
      select_random_question(questions);
    }
    const i = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
  }, []); 

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(currentQuestion){
      const num = parseInt(userAnswer) || 0;
      const right = num === currentQuestion.answer;
      if (right) setScore(score + 1);
      if (currentQuestionIndex + 1 >= 3) {
        localStorage.setItem('gameResults', JSON.stringify({
          score: right ? score + 1 : score,
          totalQuestions: 3
        }));
        router.push('/results');
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswer('');
        select_random_question(questions);
      }
    }
  };

  if (!currentQuestion) return "null";

  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameCard}>
        <strong>{title}</strong>
        <br/><br/><br/>
        <div style={{marginBottom: '20px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '12px', color: '#666'}}>
          <span>Progress: {prog.percentage}%</span>
          <span>Est. time remaining: {prog.estimatedTimeRemaining}</span>
          </div>
          <div style={{width: '100%', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden'}}>
          <div style={{width: `${prog.percentage}%`, height: '100%', backgroundColor: '#28a745', transition: 'width 0.3s'}}></div>
          </div>
        </div>
        
        {currentQuestionIndex === 0 && (
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#666'}}>
          <span>Question 1 of 3</span>
          <span style={{fontWeight: 'bold'}}>{ftd(seconds)}</span>
          </div>
        )}
        {currentQuestionIndex === 1 && (
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#666'}}>
          <span>Question 2 of 3</span>
          <span style={{fontWeight: 'bold'}}>{ftd(seconds)}</span>
          </div>
        )}
        {currentQuestionIndex === 2 && (
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#666'}}>
          <span>Question 3 of 3</span>
          <span style={{fontWeight: 'bold'}}>{ftd(seconds)}</span>
          </div>
        )}
        <p className={styles.questionText}>
          {currentQuestion.question}
        </p>
        <form onSubmit={HandleSubmit}>
          <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} className={styles.answerInput} />
          {userAnswer && parseInt(userAnswer) > 100 && (
            <p style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>Answer seems too high!</p>
          )}
          {userAnswer && parseInt(userAnswer) < 0 && (
            <p style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>Answer cannot be negative!</p>
          )}
          {userAnswer && isNaN(parseInt(userAnswer)) && (
            <p style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>Please enter a number!</p>
          )}
          <button type="submit" style={{width: '100%', padding: '12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px'}}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}