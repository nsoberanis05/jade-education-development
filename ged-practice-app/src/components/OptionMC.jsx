import React, { useState } from 'react'

function OptionMC({answer, correct_answer, answerStatus, selectAnswer, selectedAnswer}) {
  return (
    <div 
        onClick={answerStatus ? null : selectAnswer}
        className={`flex select-none py-2 px-24 rounded-md border-gray-300 border mb-3 cursor-pointer
                ${!answerStatus && answer == selectedAnswer ? "bg-slate-400" 
                  : answerStatus && answer === correct_answer ? "bg-emerald-400" 
                  : answerStatus &&  answer !== correct_answer ? "bg-red-400"
                  : "hover:shadow-lg hover:border-gray-500"} `}> {answer} </div>
  )
}

export default OptionMC