import React from "react";

const Answer = ({answers}) => {
    const answerToShow = answers.map((answer, index) =>{
        return <p key = {index}>{answer.answer}</p>
    })
    

    return(
        
        <p id="answer">Answer: {answerToShow}</p>
        
    )
}
export default Answer;