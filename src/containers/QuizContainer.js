import React, {useState, useEffect} from "react";
import QuestionSelector from "../components/QuestionSelector";
import QuestionDetail from "../components/QuestionDetail";
import Answer from "../components/Answer";
import ShowQuestion from "../components/ShowQuestion";

const QuizContainer = () =>{
    const [questions, setQuestions] = useState([]);
    const[selectedQuestion, setSelectedQuestion] = useState(null)
    const[answer, setAnswer] = useState(null)
    

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
        
        setAnswer(selectedQuestion.answer)
    }

    const onStarClick =()=>{
        
    }



    return(
        <>
        <QuestionSelector quizQuestions = {questions} onQuestionSelected = {onQuestionSelected}/>
        {selectedQuestion ? <QuestionDetail selectedQuestion = {selectedQuestion} showAnswer = {showAnswer}/> : null}
        {answer ? <Answer answer = {answer}/>:null}
        <img src="https://cdn4.iconfinder.com/data/icons/nature-1-8/32/36-512.png"></img>
        </>
    )
}

export default QuizContainer;