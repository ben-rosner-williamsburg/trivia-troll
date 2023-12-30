import { Question } from './types'
import { Dispatch, SetStateAction } from 'react';

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
    .catch(err => console.error(err));
};