import { createContext } from "react";

export const fetchQuestionUrl="https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";

export const ScoreContext=createContext();

export const trivia=()=>(
    {
        category:"",
        question:"",
        difficulty:"",
        correctAnswer:"",
        answers:[]

    }
)

export const gameOptions=()=>({
  numberOfQuestions:5,
  difficultyLevel:"easy",
  category:null

})

export const difficultyLevelSelect=()=>(
  [{value:"easy",label:"Easy"},{value:"medium",label:"Medium"},{value:"hard",label:"Hard"}]
)
export const categorySelect=()=>(
  [{value:"",label:"Any Category"},{value:9,label:"General Knowledge"},{value:17,label:"Science And Nature"},
  {value:19,label:"Science: Mathematics"},{value:23,label:"History"},{value:27,label:"Animal"}]
)

export const shuffleArray =(array)=> {
    let newArray=[...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray
  }