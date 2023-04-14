import QuestionComponent from "./QuestionComponent"
import AnswersComponent from "./AnswersComponent"
import style from "./QuestionAndAnswers.module.css"
function QuestionAndAnswers({triviaQuestion,getNextQuestion}){
    
    
    return(
        
        <div className={`${style.boxShape}`}>
            <QuestionComponent question={triviaQuestion.question} />
            <AnswersComponent answers={triviaQuestion.answers} correctAnswer={triviaQuestion.correctAnswer} getNewQuestion={getNextQuestion} />
        </div>

    )
}

export default QuestionAndAnswers