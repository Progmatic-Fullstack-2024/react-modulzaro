import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { addQuestion } from "../services/quizService";

const initialValues = {
  category: "",
  question: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  correctAnswer: "",
};

export default function AddQuestionModal() {
  const [isOpen, setIsOpen] = useState(false);

  const validationSchema = Yup.object({
    category: Yup.string().required("Category is required"),
    question: Yup.string().required("Question is required"),
    option1: Yup.string().required("Option 1 is required"),
    option2: Yup.string().required("Option 2 is required"),
    option3: Yup.string().required("Option 3 is required"),
    option4: Yup.string().required("Option 4 is required"),
    correctAnswer: Yup.string()
      .oneOf(
        ["option1", "option2", "option3", "option4"],
        "Select a correct answer"
      )
      .required("Correct answer is required"),
  });

  const handleSubmit = (values) => {
    const newQuestion = {
      category: values.category,
      question: values.question,
      options: [values.option1, values.option2, values.option3, values.option4],
      correctAnswer: values[values.correctAnswer],
    };

    addQuestion(newQuestion);
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="py-2 px-4 bg-green-600 text-white hover:bg-green-700 rounded"
      >
        Add Question
      </button>
      {isOpen && (
        <div className="fixed z-10 inset-0 bg-gray-900 bg-opacity-70">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-100 p-6 rounded w-1/2">
              <h2 className="text-xl font-semibold mb-2">Add New Question</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-4">
                      <label
                        htmlFor="category"
                        className="text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <Field
                        id="category"
                        name="category"
                        type="text"
                        className="w-full mt-1 rounded-lg border border-gray-300"
                      />
                      <ErrorMessage
                        name="category"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="question"
                        className="text-sm font-medium text-gray-700"
                      >
                        Question
                      </label>
                      <Field
                        as="textarea"
                        id="question"
                        name="question"
                        className="w-full mt-1 rounded-lg border border-gray-300"
                      />
                      <ErrorMessage
                        name="question"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="option1"
                        className="text-sm font-medium text-gray-700"
                      >
                        Option 1
                      </label>
                      <Field
                        id="option1"
                        name="option1"
                        className="w-full mt-1 rounded-lg border border-gray-300"
                      />
                      <ErrorMessage
                        name="option1"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="option2"
                        className="text-sm font-medium text-gray-700"
                      >
                        Option 2
                      </label>
                      <Field
                        id="option2"
                        name="option2"
                        className="w-full mt-1 rounded-lg border border-gray-300"
                      />
                      <ErrorMessage
                        name="option2"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="option3"
                        className="text-sm font-medium text-gray-700"
                      >
                        Option 3
                      </label>
                      <Field
                        id="option3"
                        name="option3"
                        className="w-full mt-1 rounded-lg border border-gray-300"
                      />
                      <ErrorMessage
                        name="option3"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="option4"
                        className="text-sm font-medium text-gray-700"
                      >
                        Option 4
                      </label>
                      <Field
                        id="option4"
                        name="option4"
                        className="w-full mt-1 rounded-lg border border-gray-300"
                      />
                      <ErrorMessage
                        name="option4"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="correctAnswer"
                        className="text-sm font-medium text-gray-700"
                      >
                        Correct answer
                      </label>
                      <Field
                        as="select"
                        id="correctAnswer"
                        name="correctAnswer"
                        className="w-full mt-1 rounded-lg border border-gray-300"
                      >
                        <option value="">Select correct answer</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                      </Field>
                      <ErrorMessage
                        name="correctAnswer"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="py-2 px-4 bg-red-500 rounded text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="py-2 px-4 bg-blue-500 rounded text-white"
                      >
                        Add Question
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
