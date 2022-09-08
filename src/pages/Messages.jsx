import React from 'react'
import { Header, Message } from '../components'
import { RiSendPlaneFill } from 'react-icons/ri'
import { useStateContext } from '../context/ContextProvider'

const Messages = () => {
  const { currentColor } = useStateContext();
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl messages-holder'>
      <Header category='App' title='Messages' />
      <div style={{height: '55vh', borderRadius: '25px', display: 'flex'}} >
        <div style={{width: '80%'}} className='overflow-auto p-3'>
          <Message itsMe={false} text='السلام عليكم' date='20/5/2008'/>
          <Message itsMe={true} text='وعليكم السلام' date='20/5/2008'/>
          <Message itsMe={false} text='في درس يوم الاحد القادم' date='20/5/2008'/>
          <Message itsMe={true} text='اه في ان شاء الله' date='20/5/2008'/>
        </div>
      <div style={{width: '20%'}}>
        <p>Student 1</p>
        <p>Student 2</p>
        <p>Student 3</p>
        <p>Student 4</p>
        <p>Student 5</p>
      </div>
      </div>
      <div className='flex mt-5'>
        <input className='w-4/5 h-20 pl-5' type='text' placeholder='Message' style={{border: `1px solid ${currentColor}`, color: currentColor}}/>
        <button className='w-1/5 h-20 text-white' style={{backgroundColor: currentColor}} type='button'><RiSendPlaneFill className='w-full h-full p-5'/></button>
      </div>
    </div>
  )
}

export default Messages