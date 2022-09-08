import React from 'react'
import './Question.css'
const Question = ({index, title, choices, right, count, image}) => {
  return (
    <div className='question-holder'>
        <h1 className='text-xl text-gray-600 m-3'>Question {index} from {count}</h1>
        <p className='text-2xl text-gray-800 m-2'>{title}</p>
        {image && <img src={image}/>}
        <div className='choices-holder'>
            {
                choices.map((item, index) => (
                    <div className={`text-lg ${right&&item===right?'right-choices':''}`}>
                        {item}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Question