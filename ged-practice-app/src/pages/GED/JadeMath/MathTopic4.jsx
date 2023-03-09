import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import OptionMC from '../../../components/OptionMC'
import {
          solveForXEasy, 
          randomNumber,
          solveSlopeWithTwoPoints,
          arithmeticSequence_Generator,
          quadraticFunctionGivenVertexAndPoint_Generator,
       } from './QuestionGenerator/JadeMQG'

function MathTopic4() {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [answerStatus, setAnswerStatus] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(solveForXEasy)

  function validateAnswer(answer, correct_answer){
    if(!answer) return
    if(answer !== correct_answer) return setAnswerStatus('Incorrect answer')
    return setAnswerStatus('Correct answer')
  }

  function nextQuestion(question){
    if(!question){
      let questionNum = randomNumber(4)
      switch(questionNum){
        case 1: 
          question = solveForXEasy
          break;
        case 2: 
          question = solveSlopeWithTwoPoints
          break;
        case 3:
          question = arithmeticSequence_Generator
          break;
        case 4:
          question = quadraticFunctionGivenVertexAndPoint_Generator
          break;
        default:
          question = solveForXEasy
      }
    }
    setSelectedAnswer('')
    setAnswerStatus('')
    setCurrentQuestion(question)
  }
  
  return (
    
    <> 
     <Navbar/>
     <main className='p-2 flex items-center flex-col'>
 
         
          
        <div className='flex items-center flex-col bg-slate-200 p-8 rounded-md w-full h-full lg:w-2/4 lg:h-2/4'>
            {/* Prompt */}
            <p className='font-semibold mb-2'>{currentQuestion.question}</p>
            {answerStatus ? <p className='mb-2'> {answerStatus} </p> : <p className='mb-2'> Choose an option </p>}

            {/* Options (Multiple Choice) */}
            <div className='w-full'>
                
                <OptionMC 
                  selectAnswer={() => {setSelectedAnswer(currentQuestion.answer1)}} 
                  answer={currentQuestion.answer1} 
                  correct_answer={currentQuestion.correct_answer} 
                  answerStatus={answerStatus} selectedAnswer={selectedAnswer}/>
                  

                <OptionMC 
                  selectAnswer={() => {setSelectedAnswer(currentQuestion.answer2)}} 
                  answer={currentQuestion.answer2} 
                  correct_answer={currentQuestion.correct_answer} 
                  answerStatus={answerStatus} 
                  selectedAnswer={selectedAnswer}/>

                <OptionMC 
                  selectAnswer={() => {setSelectedAnswer(currentQuestion.answer3)}} 
                  answer={currentQuestion.answer3} 
                  correct_answer={currentQuestion.correct_answer} 
                  answerStatus={answerStatus} 
                  selectedAnswer={selectedAnswer}/>

                <OptionMC 
                  selectAnswer={() => {setSelectedAnswer(currentQuestion.answer4)}} 
                  answer={currentQuestion.answer4} 
                  correct_answer={currentQuestion.correct_answer} 
                  answerStatus={answerStatus} 
                  selectedAnswer={selectedAnswer}/> 


            </div>

            {/* Check answer button */}
            <button 
                className='ml-auto mt-4 rounded-md bg-emerald-600 py-2 px-3 text-white' 
                type="submit"
                onClick={!answerStatus ? () => {validateAnswer(selectedAnswer, currentQuestion.correct_answer)}
                :() => {nextQuestion()} }> {!answerStatus ? 'Check' : 'Next Question'} 
            </button>
            
            {/* Question info (for dev purposes, remove on deploy) */}
            <div className='hidden flex items-center flex-col bg-slate-200 p-8 mt-2 rounded-md w-2/4 h-2/4 lg:w-1/4 lg:h-1/4'>
              <p> {currentQuestion.info ?  currentQuestion.info.map((item) => (<p> {item} </p>)  ) : 'hi'} </p>
            </div>

        </div>
     </main>
    </>
   )
}

export default MathTopic4