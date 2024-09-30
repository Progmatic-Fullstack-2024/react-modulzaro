export default function QuizResult({ score, total, reset }) {
  const message =
    score / total >= 0.8
      ? "Congratulations"
      : score / total >= 0.5
      ? "Not bad"
      : "You can do better";

  const colorClass =
    score / total >= 0.8
      ? "bg-green-500 hover:bg-green-600"
      : score / total >= 0.5
      ? "bg-yellow-500 hover:bg-yellow-600"
      : "bg-red-500 hover:bg-red-600";

  return (
    <div className="border border-gray-400 rounded w-full max-w-2xl mx-auto">
      <div className="bg-gray-200 p-6 border-b border-gray-400">
        <p>Quiz Completed</p>
      </div>
      <div className="flex flex-col items-center">
        <p className={`my-4 py-2 px-4 ${colorClass} text-white rounded-2xl`}>
          {message}
        </p>
        <p>Your final score:</p>
        <p className="text-4xl">{(score / total) * 100}%</p>
        <button
          className={`my-4 py-2 px-4 ${colorClass} text-white rounded`}
          onClick={reset}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}
