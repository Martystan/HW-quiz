import React, {useState, useEffect} from "react";
import QuestionSelector from "../components/QuestionSelector";
import QuestionDetail from "../components/QuestionDetail";
import Answer from "../components/Answer";

const QuizContainer = () =>{
    const [questions, setQuestions] = useState([]);
    const[selectedQuestion, setSelectedQuestion] = useState(null)
    const[answers, SetAnswers] = useState([])
    

    function fetchQuestions(){
        fetch("https://jservice.io/api/clues")
        .then (response => response.json())
        .then(questions => setQuestions(questions))
    }

    useEffect(fetchQuestions, [])

    const onQuestionSelected = function(question){
        setSelectedQuestion(question)
    }

    const showAnswer = () =>{
        const updatedAnswer = [...answers, selectedQuestion];
        SetAnswers(updatedAnswer);
    }



    return(
        <>
        <QuestionSelector quizQuestions = {questions} onQuestionSelected = {onQuestionSelected}/>
        {selectedQuestion ? <QuestionDetail selectedQuestion = {selectedQuestion} showAnswer = {showAnswer}/> : null}
        <Answer answers = {answers}/>
        </>
    )
}

export default QuizContainer;