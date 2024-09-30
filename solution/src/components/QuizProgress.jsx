export default function QuizProgress({ currentQuestion, total }) {
  return (
    <div className="mt-2 w-full bg-gray-300 h-4 rounded-2xl">
      <div
        className="bg-blue-500 h-4 rounded-2xl text-center"
        style={{ width: `${(currentQuestion / total) * 100}%` }}
      >
        <p className="text-white text-[10px]">{`${currentQuestion} / ${total}`}</p>
      </div>
    </div>
  );
}
