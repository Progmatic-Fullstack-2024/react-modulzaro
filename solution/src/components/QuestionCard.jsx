import { useState } from "react";
import QuizProgress from "./QuizProgress";
import AddQuestionModal from "./AddQuestionModal";

export default function QuestionCard({
  currentQuestion,
  total,
  question,
  handleAnswer,
}) {
  const [selected, setSelected] = useState(null);
  const handleNext = () => {
    if (selected !== null) {
      handleAnswer(question.correctAnswer === question.options[selected]);
      setSelected(null);
    } else {
      alert("Please select an answer");
    }
  };
  return (
    <div className="border border-gray-400 rounded w-full max-w-2xl mx-auto">
      <div className="bg-gray-200 p-6 border-b border-gray-400">
        <p>Question Category: {question.category}</p>
        <QuizProgress currentQuestion={currentQuestion + 1} total={total} />
      </div>
      <div className="p-6">
        <p className="text-2xl">Question {currentQuestion + 1}</p>
        <p className="mb-4">{question.question}</p>
        <div className="flex flex-col space-y-2">
          {question.options.map((answer, index) => (
            <button
              onClick={() => setSelected(index)}
              className={`py-2 px-4 border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 rounded-lg ${
                selected === index ? "bg-blue-500 text-white" : ""
              }`}
              key={answer}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6 bg-gray-200 flex justify-between border-t border-gray-400">
        <button
          onClick={handleNext}
          className="py-2 px-4 bg-blue-500 rounded hover:bg-blue-600 text-white"
        >
          Next Question
        </button>
        <AddQuestionModal />
      </div>
    </div>
  );
}
