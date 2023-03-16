import {useState} from 'react'

export const useHandleQuestions = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question:
        "Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.",
    },
    {
      id: 2,
      question:
        "Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.",
    },
  ]);

  const addQuestions = (question) => {
    let newQuestion = {
      id: questions.length + 1,
      question: question
    }
    let arr = [...questions, newQuestion];
    setQuestions(arr)
  }
  
  const deleteQuestions = (id) => {
    let arr = questions.filter(question => question.id !== id)
    setQuestions(arr)
  }

  return {questions, addQuestions,deleteQuestions}
}