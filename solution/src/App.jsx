import { useEffect } from "react";
import { useState } from "react";
import { getQuestions } from "./services/quizService";
import { randomizeQuestions } from "./services/randomizeQuestions";
import QuestionCard from "./components/QuestionCard";
import QuizResult from "./components/QuizResult";

const TOTALQUESTIONS = 10;

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      const fetchedQuestions = await getQuestions();
      setQuestions(randomizeQuestions(fetchedQuestions));
    }
    fetchQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < TOTALQUESTIONS) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setIsCompleted(false);
    setScore(0);
    setQuestions(randomizeQuestions(questions));
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-semibold my-4">My Quiz App</h1>
      <div className="w-full">
        {isCompleted ? (
          <QuizResult
            score={score}
            total={TOTALQUESTIONS}
            reset={handleReset}
          />
        ) : (
          questions.length && (
            <QuestionCard
              currentQuestion={currentQuestion}
              total={TOTALQUESTIONS}
              question={questions[currentQuestion]}
              handleAnswer={handleAnswer}
            />
          )
        )}
      </div>
    </div>
  );
}
