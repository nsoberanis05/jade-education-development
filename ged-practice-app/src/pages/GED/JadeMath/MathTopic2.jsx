import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Cone from '../../../assets/Cone.svg'
import {
        findVolumeCone,

       } from './QuestionGenerator/JadeMQG'

function MathTopic2() {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [answerStatus, setAnswerStatus] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(findVolumeCone)

  function validateAnswer(answer, correct_answer){
    if(!answer) return
    if(answer !== correct_answer) return setAnswerStatus('Incorrect answer')
    return setAnswerStatus('Correct answer')
  }

  function nextQuestion(question){
    if(!question){
      question = findVolumeCone
/*       let questionNum = randomNumber(4)
      switch(questionNum){
        case 1: 
          question = BMQ_Generator
          break;
        case 2: 
          question = solveSlopeWithTwoPoints_Generator
          break;
        case 3:
          question = arithmeticSequence_Generator
          break;
        case 4:
          question = quadraticFunctionGivenVertexAndPoint_Generator
          break;
        default:
          question = BMQ_Generator
      } */
    }
    setSelectedAnswer('')
    setAnswerStatus('')
    setCurrentQuestion(question)
  }
  return (
    <> 
     <Navbar/>
     <main className='p-2 flex items-center flex-col'>
 
         <div className='flex items-center flex-col bg-slate-200 p-8 rounded-md w-full h-full lg:w-3/4 lg:h-3/4'>
            {/* Question */}
            <p className='font-semibold mb-2'>{currentQuestion.question}</p>

            {/* Image if any */}
            {currentQuestion.image ? <img src={currentQuestion.image} className='h-1/4' /> : null}

            {/* Tells if an option has been chosen and answered */}
            {answerStatus ? <p className='mb-2'> {answerStatus} </p> : <p className='mb-2'> Choose an option </p>}

            {/* Options */}
            <div className='w-3/4'>
              
                 <div 
                   onClick={answerStatus ? null : () => {setSelectedAnswer(currentQuestion.answer1)}} 
                   className={`
                     flex select-none py-2 px-24 rounded-md border-gray-300 border mb-3 cursor-pointer
                     ${!answerStatus && currentQuestion.answer1 == selectedAnswer ? "bg-slate-400" 
                         : answerStatus && currentQuestion.answer1 === currentQuestion.correct_answer ? "bg-emerald-400" 
                         : answerStatus &&  currentQuestion.answer1 !== currentQuestion.correct_answer ? "bg-red-400"
                         : "hover:shadow-lg hover:border-gray-500"} `}> {currentQuestion.answer1} </div>
                  
                   <div 
                   onClick={answerStatus ? null : () => {setSelectedAnswer(currentQuestion.answer2)}} 
                   className={`
                     flex select-none py-2 px-24 rounded-md border-gray-300 border mb-3 cursor-pointer
                     ${!answerStatus && currentQuestion.answer2 == selectedAnswer ? "bg-slate-400" 
                         : answerStatus && currentQuestion.answer2 === currentQuestion.correct_answer ? "bg-emerald-400" 
                         : answerStatus &&  currentQuestion.answer2 !== currentQuestion.correct_answer ? "bg-red-400"
                         : "hover:shadow-lg hover:border-gray-500"} `}> {currentQuestion.answer2} </div>
                  
                  <div 
                   onClick={answerStatus ? null : () => {setSelectedAnswer(currentQuestion.answer3)}} 
                   className={`
                     flex select-none py-2 px-24 rounded-md border-gray-300 border mb-3 cursor-pointer
                     ${!answerStatus && currentQuestion.answer3 == selectedAnswer ? "bg-slate-400" 
                         : answerStatus && currentQuestion.answer3 === currentQuestion.correct_answer ? "bg-emerald-400" 
                         : answerStatus &&  currentQuestion.answer3 !== currentQuestion.correct_answer ? "bg-red-400"
                         : "hover:shadow-lg hover:border-gray-500"} `}> {currentQuestion.answer3} </div>
                   
                   <div 
                   onClick={answerStatus ? null : () => {setSelectedAnswer(currentQuestion.answer4)}} 
                   className={`
                     flex select-none py-2 px-24 rounded-md border-gray-300 border mb-3 cursor-pointer
                     ${!answerStatus && currentQuestion.answer4 == selectedAnswer ? "bg-slate-400" 
                         : answerStatus && currentQuestion.answer4 === currentQuestion.correct_answer ? "bg-emerald-400" 
                         : answerStatus &&  currentQuestion.answer4 !== currentQuestion.correct_answer ? "bg-red-400"
                         : "hover:shadow-lg hover:border-gray-500"} `}> {currentQuestion.answer4} </div>
            </div>
 
           
           <button 
             className='ml-auto mt-4 rounded-md bg-emerald-600 py-2 px-3 text-white' 
             onClick={!answerStatus ? () => {validateAnswer(selectedAnswer, currentQuestion.correct_answer)} :() => {nextQuestion(findVolumeCone)} }> {!answerStatus ? 'Check' : 'Next Question'} 
          </button>
         </div>

         <div className='hidden flex items-center flex-col bg-slate-200 p-8 mt-2 rounded-md w-2/4 h-2/4 lg:w-1/4 lg:h-1/4'>
           <p> {currentQuestion.info ?  currentQuestion.info.map((item) => (<p> {item} </p>)  ) : 'hi'} </p>
         </div>
 
     </main> 
    </>
  )
}

export default MathTopic2