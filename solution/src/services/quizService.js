import axios from "axios";

const baseURL = "http://localhost:3000/questions";

export const getQuestions = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.log("Error fetching questions:", error);
    throw error;
  }
};

export const addQuestion = async (newQuestion) => {
  try {
    const response = await axios.post(baseURL, newQuestion);
    return response.data;
  } catch (error) {
    console.log("Error creating question:", error);
    throw error;
  }
};
