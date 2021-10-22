import React, {useState, useEffect} from "react";
import QuestionSelector from "../components/QuestionSelector";
import QuestionDetail from "../components/QuestionDetail";

const QuizContainer = () =>{
    const [questions, setQuestions] = useState([]);
    const[selectedQuestion, setSelectedQuestion] = useState(null)
    

    function fetchQuestions(){
        fetch("https://jservice.io/api/clues")
        .then (response => response.json())
        .then(questions => setQuestions(questions))
    }

    useEffect(fetchQuestions, [])

    const onQuestionSelected = function(question){
        setSelectedQuestion(question)
    }



    return(
        <>
        <QuestionSelector quizQuestions = {questions} onQuestionSelected = {onQuestionSelected}/>
        {selectedQuestion ? <QuestionDetail selectedQuestion = {selectedQuestion}/> : null}
        </>
    )
}

export default QuizContainer;