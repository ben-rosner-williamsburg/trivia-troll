import { Question } from './types'
import { Dispatch, SetStateAction } from 'react';

// export function getQuestions(setQuestions: (value: Question | null) => void) {

export async function getQuestions() {
  return fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
    .then(response => {
      console.log(response)
      if (response.ok) {
        return response.json();
      } else if (response.status !== 429) {
      throw Error("GET request failed!");
      } else {
        return "DUPLICATE DEV FETCH"
      }
    })
    // .then(questions => {
    //   const triviaQuestions = questions.results;
    //   setQuestions(triviaQuestions); // Update state directly with the fetched data
    // })

    // const questionInfo = {
    //           category: triviaQuestions.category,
    //           type: triviaQuestions.type,
    //           difficulty: triviaQuestions.difficulty,
    //           question: triviaQuestions.question,
    //           correctAnswer: triviaQuestions.correct_answer,
    //           incorrectAnswers: triviaQuestions.incorrect_answers
    //         }

    // .catch(err => console.error(err));
}




// // import { setQuestions } from './App/App'

// export function getQuestions(): void {
//   fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw Error("GET request failed!");
//     })
//     .then(questions => {
//       const triviaQuestion = questions.results;

//       const questionInfo = {
//         category: triviaQuestion.category,
//         type: triviaQuestion.type,
//         difficulty: triviaQuestion.difficulty,
//         question: triviaQuestion.question,
//         correctAnswer: triviaQuestion.correct_answer,
//         incorrectAnswers: triviaQuestion.incorrect_answers
//       }
//       console.log(questionInfo)
//       // setQuestions(questionInfo);
//     })
//     .catch(err => console.error(err));
// };