import { useEffect, useState } from "react"
import {difficultyLevelSelect,categorySelect} from "../utils"
import SelectComponent from "./SelectComponent";
import style from "./PopupComponent.module.css"

function PopupComponent({setGame,gameOptions,setGameOptions}){

    const[questionCount,setQuestionCount]=useState("5");

    
   
    function setNumberOfQuestions(value){
        setGameOptions(prev=>({...prev,numberOfQuestions:value}))
    }
    function setDifficultyLevel(value){
        setGameOptions(prev=>({...prev,difficultyLevel:value}))
    }
    function setCategory(value){
        setGameOptions(prev=>({...prev,category:value}))
    }
   

    return(
        <div className={style.popupComponentBoxShape}>
            <span>Number of questions:</span>
            <input className={style.input} type="text" value={gameOptions.numberOfQuestions} onChange={(e)=>(setNumberOfQuestions(e.target.value))}></input>
            <span>Difficulty level:</span>
            <SelectComponent listForSelecting={difficultyLevelSelect()} setSelectedValue={setDifficultyLevel} />
            <span>Category:</span>
            <SelectComponent listForSelecting={categorySelect()} setSelectedValue={setCategory}/>
            <button className={style.button} onClick={setGame}>Set game</button>
        </div>
    )

}

export default PopupComponent