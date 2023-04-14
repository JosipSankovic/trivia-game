import { useContext } from "react"
import { ScoreContext } from "../utils"

const infoStyle={
    width:"20%",
    fontSize:"2em",
    fontFamily:"cursive"
}
function InfoComponent({numberOfQuestions,questionCount}){
    const score=useContext(ScoreContext)
    return(
        <div style={infoStyle}>
            <p>Pitanje:</p>
            <p>{questionCount}/{numberOfQuestions}</p>
            <p>Rezultat:</p>
            <p>{score.score}</p>
        </div>
    )
}

export default InfoComponent