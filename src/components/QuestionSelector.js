import React from "react";

const QuestionSelector = ({quizQuestions, onQuestionSelected}) => {

    const handleChange = function(event){
        const chosenQuestion = quizQuestions[event.target.value];
        onQuestionSelected(chosenQuestion);
    }

    const questionOptions = quizQuestions.map((question, index) =>{
        return <option value ={index} key= {index}>{question.question}</option>
    })


    return(
        <select id = "dropdown" defaultValue ="" onChange= {handleChange}>
            <option value ="" selected>Pick a question</option>
            {questionOptions}
        </select>
    )
}

export default QuestionSelector;