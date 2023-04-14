import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { fetchQuestionUrl, trivia,ScoreContext,gameOptions,shuffleArray} from './utils'
import QuestionAndAnswers from './components/QuestionAndAnswers'
import PopupComponent from './components/PopupComponent'
import InfoComponent from './components/InfoComponent'


function App() {
  const[questionList,setQuestionList]=useState(null)
  const[questionCount,setQuestionCount]=useState(1)
 // const[numberOfQuestions,setNumberOfQuestions]=useState(0)
  const[gameScore,setGameScore]=useState(0)
  const[showGame,setShowGame]=useState(false)
  const[selectedGameOptions,setSelectedGameOptions]=useState(gameOptions)
  
  
  function getData(){
    axios({
      method:'get',
      url:fetchQuestionUrl,
      params:{amount:selectedGameOptions.numberOfQuestions,
        category:selectedGameOptions.category,
        difficulty:selectedGameOptions.difficultyLevel}
    }).then((response)=>{
      setQuestionList(
        response.data.results.map((data)=>{
          let triviaQuestion=trivia();
          triviaQuestion.question=data.question;
          triviaQuestion.category=data.category;
          triviaQuestion.correctAnswer=data.correct_answer;
          triviaQuestion.difficulty=data.difficulty;
          triviaQuestion.answers=shuffleArray([...data.incorrect_answers,data.correct_answer]);
          setShowGame(true)
          
          return triviaQuestion;

        })
      )
    })
  }

  function setGame(){
    getData();
  }

  function endGame(){
    setShowGame(false)
    setQuestionCount(1);
    setGameScore(0);
    setSelectedGameOptions(gameOptions)
   // setNumberOfQuestions(selectedGameOptions.numberOfQuestions)
  }
  function nextQuestion(){
    
    
    if(questionCount<selectedGameOptions.numberOfQuestions){
    setShowGame(true)
    setQuestionCount(prev=>prev+1)
    }
    else{
      setTimeout(()=>{endGame();
        },1000)
    
    }
  }

  return (
    <div className="App">
      <h1>Trivia game</h1>
      {questionList!=undefined&&showGame&&<div className='questionsAndAnswers'>
        <ScoreContext.Provider value={{score:gameScore,incrementScore:()=>setGameScore(prev=>prev+1)}}>
            {(questionList!=undefined&&showGame)&& <QuestionAndAnswers triviaQuestion={questionList[questionCount-1]} getNextQuestion={nextQuestion} />}
            <InfoComponent numberOfQuestions={selectedGameOptions.numberOfQuestions} questionCount={questionCount} />
        </ScoreContext.Provider>
      </div>}
      {!showGame&&<PopupComponent setGame={setGame} gameOptions={selectedGameOptions} setGameOptions={setSelectedGameOptions} />}
    </div>
  )
}

export default App
