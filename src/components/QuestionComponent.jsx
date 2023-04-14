import style from "./QuestionComponent.module.css"

function QuestionComponent({question}){

    return(
        <div className="QuestionComponent">
            <h3 className={style.question}>{question}</h3>
        </div>

    )
}

export default QuestionComponent