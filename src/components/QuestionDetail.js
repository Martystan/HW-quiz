import React from "react";

const QuestionDetail = ({selectedQuestion})=>{

    

    return(
        <>
        <h4>{selectedQuestion.category.title}</h4>
        <h2>{selectedQuestion.question}</h2>
        <button >Show the answer</button>
        </>
    )
}
export default QuestionDetail;