import React from 'react'
import './Message.css'
const Message = ({from, to, date, text, itsMe}) => {
  return (
    <div className={`msg-holder ${itsMe?'f-end':''}`}>
        <div className={`text-holder text-lg ${itsMe?'f-msg':''}`}>{text}</div>
        <p className='text-gray-400 text-sm'>{date}</p>
    </div>
  )
}

export default Message