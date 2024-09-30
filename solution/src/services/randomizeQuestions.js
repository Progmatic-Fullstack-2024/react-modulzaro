export const randomizeQuestions = (questions) => {
  const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  return shuffledQuestions.map((question) => ({
    ...question,
    options: question.options.sort(() => Math.random() - 0.5),
  }));
};
