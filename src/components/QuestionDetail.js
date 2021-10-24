import React from "react";

const QuestionDetail = ({selectedQuestion, showAnswer})=>{

    const handleClick = () => {
        showAnswer();
      }

    return(
        <>
        <div id = "quest-cat">
        <h4>Category: {selectedQuestion.category.title}</h4>
        <h2>Question: {selectedQuestion.question}</h2>
        </div>
        <button id = "button" onClick={handleClick}>Show the answer</button>
        </>
    )
}
export default QuestionDetail;