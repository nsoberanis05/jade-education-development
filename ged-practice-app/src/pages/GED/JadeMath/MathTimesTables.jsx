import React, { useState, useRef } from 'react'
import Navbar from '../../../components/Navbar'
import {
          timesTables,
       } from './QuestionGenerator/JadeMQG'
function MathTimesTables() {
    
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [answerStatus, setAnswerStatus] = useState('')
    const [currentQuestion, setCurrentQuestion] = useState(timesTables)
    const [score, setScore] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)

    function handleSubmit(e){
         e.preventDefault()
         if(!answerStatus) return validateAnswer(selectedAnswer, currentQuestion.correct_answer)
         else(nextQuestion(timesTables))
    }

    function validateAnswer(answer, correct_answer){
      if(!answer) return
      if(answer != correct_answer){
        setScore(score - 1)
        setIncorrect(incorrect + 1)
        return setAnswerStatus('Incorrect answer')
      }

      setScore(score + 1)
      setCorrect(correct + 1)
      return setAnswerStatus('Correct answer')
    }
  
    function nextQuestion(question){
      if(!question){
        question = timesTables        
      }
      
      setSelectedAnswer('')
      setAnswerStatus('')
      setCurrentQuestion(question)
    }

   return (
    <> 
    <Navbar/>
    <main className='p-2 flex items-center flex-col'>  
         
         <div className={`${answerStatus == "Incorrect answer" ? `bg-red-200` : answerStatus == "Correct answer" ? `bg-emerald-200` :'bg-slate-200'} flex items-center flex-col p-8 rounded-md w-full h-full lg:w-2/4 lg:h-2/4`}>
            <p className='font-semibold mb-2'>{currentQuestion.question}</p>
            {answerStatus ? <p className='mb-2'> {answerStatus} </p> : <p className='mb-2'> Choose an option </p>}

            <form className='w-full' onSubmit={handleSubmit}>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={selectedAnswer} onChange={(e) => {setSelectedAnswer(e.target.value)}} type="text" />
            </form>

            <div className='mt-4 flex flex-rows items-center gap-4'>
                <p className='font-semibold'> Score: {score}</p>
                <p className='font-semibold'> Correct: {correct}</p>
                <p className='font-semibold'> Incorrect: {incorrect}</p>
                <button 
                  className='ml-auto rounded-md bg-emerald-600 py-2 px-3 text-white' 
                  onClick={!answerStatus ? () => {validateAnswer(selectedAnswer, currentQuestion.correct_answer)} :() => {nextQuestion()} }> {!answerStatus ? 'Check' : 'Next Question'} 
                </button>
            </div>
        </div>
        
        
        <div className='hidden flex items-center flex-col bg-slate-200 p-8 mt-2 rounded-md w-2/4 h-2/4 lg:w-1/4 lg:h-1/4'>
          <p> {currentQuestion.info ?  currentQuestion.info.map((item) => (<p> {item} </p>)  ) : 'hi'} </p>
        </div>

    </main>
    </>
   )
    
}

export default MathTimesTables