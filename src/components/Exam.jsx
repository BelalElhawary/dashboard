import React, { useState } from 'react'
import {IoMdAddCircleOutline, IoMdRemoveCircleOutline} from 'react-icons/io'
import {BiSkipNextCircle,BiSkipPreviousCircle} from 'react-icons/bi'
import {FiEdit} from 'react-icons/fi'
import './Exam.css'
import Question from './Question'
import { useStateContext } from '../context/ContextProvider'
const quest = [
  {
    title: '100 + 500 / 200 - 30 + 85 * 6',
    choices: ['100', '582.5', '235', '623'],
    right: '582.5'
  },
  {
    title: '200 - 30 + 85 * 6',
    choices: ['100', '200', '680', '623'],
    right: '680'
  },
  {
    title: '15²',
    choices: ['100', '200', '235', '225'],
    right: '225'
  },
  {
    title: 'Sin(30)',
    choices: ['1', '0.5', '0.3331', '0.6661'],
    right: '0.5'
  },
  {
    title: 'Cos(90) + Tan(45)',
    choices: ['1', '0.5', '0.3331', '0.6661'],
    right: '1'
  }
]

const Exam = ({title, quests}) => {
  quests = quest
  const {currentColor} = useStateContext();
  const [idx, setIdx] = useState(0);
  return (
    <div className='exam-holder'>
      <p className='m-2 text-lg text-gray-700'>{title}</p>
      <button className='p-2 text-2xl text-green-600'><IoMdAddCircleOutline /></button><button className='p-2 text-2xl text-red-600'><IoMdRemoveCircleOutline /></button><button className='p-2 text-2xl text-blue-600'><FiEdit /></button>
      {quests &&
        <Question index={idx + 1} title={quests[idx].title} choices={quests[idx].choices} right={quests[idx].right} count={quests.length}/>
      }
      <button className='p-3 text-2xl' style={{color: currentColor}} onClick={() => {if(idx > 0){setIdx(idx - 1)}}}><BiSkipPreviousCircle/></button>
      <button className='p-3 text-2xl' style={{color: currentColor}} onClick={() => {if(idx < quests.length-1){setIdx(idx + 1)}}}><BiSkipNextCircle /></button>
    </div>
  )
}

export default Exam