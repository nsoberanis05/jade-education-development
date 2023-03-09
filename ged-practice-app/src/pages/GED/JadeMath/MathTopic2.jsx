import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import OptionMC from '../../../components/OptionMC'
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

            {/* Options (Multiple Choice) */}
            <div className='w-3/4'>
                
                <OptionMC 
                  selectAnswer={() => {setSelectedAnswer(currentQuestion.answer1)}} 
                  answer={currentQuestion.answer1} 
                  correct_answer={currentQuestion.correct_answer} 
                  answerStatus={answerStatus} 
                  selectedAnswer={selectedAnswer}/>
                  

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