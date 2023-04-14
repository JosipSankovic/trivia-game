import { useEffect, useState,useContext } from "react"
import {ScoreContext} from "../utils"
import style from "./AnswersComponent.module.css"
function AnswersComponent({answers,correctAnswer,getNewQuestion}){
    const [correctAnswerIndex,setCorrectAnswerIndex]=useState(0)
    const [showCorrectAnswer,setShowCorrectAnswer]=useState(false)
    const score=useContext(ScoreContext)
    //restart kad dodu novi odgovori
    useEffect(()=>{
        setShowCorrectAnswer(false);
    },[answers])

   function validateSubmit(value,i){
    setCorrectAnswerIndex(answers.findIndex(answer=>answer===correctAnswer))
    if(showCorrectAnswer===false)
        if(value===correctAnswer)
            setTimeout(()=>{getNewQuestion();score.incrementScore()},1000)
        else
        setTimeout(()=>{getNewQuestion()},1000)
    setShowCorrectAnswer(true);
    }
    return(
        <div className="AnswersComponent">
            {answers.map((answer,i)=>{
                return <p key={i} className={`${style.answer}`} style={{backgroundColor:(correctAnswerIndex==i&&showCorrectAnswer==true)&&"greenyellow"} }
                 onClick={(e)=>validateSubmit(e.target.innerHTML ,i)}>{answer}</p>
            })}
        </div>

    )
}

export default AnswersComponent