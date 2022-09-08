import React, { useEffect, useState } from 'react'
import { Exam, Header } from '../components'


const ExamMaker = () => {
  const examsTemp = []
  const [exams, setExams] = useState([])
  const [name, setName] = useState('')

  const createExam = () => {
    examsTemp.push({
      title: name,
      quest: []
    })
    setExams(examsTemp)
  }
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Exam Maker' />
      <div className='w-full pl-3 pr-3'>
        <input type='text' onChange={e => setName(e.target.value)} className='w-4/5 h-12 text-lg' placeholder='Exam Name'/>
        <button type='button' onClick={createExam} className='w-1/5 h-12 text-lg bg-blue-600'>Create</button>
      </div>
      <hr className='mt-4 mb-4'></hr>
      {
        exams.map((item) => (
          <Exam title={item.title} quest={item.quest} />
        ))
      }
    </div>
  )
}

export default ExamMaker