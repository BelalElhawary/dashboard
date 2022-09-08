import React from 'react'
import './Post.css'
const Post = ({user, date, reacts, text, photo}) => {
  return (
    <div className='holder'>
        <div className='holder-header'>
            <img src={`${user.photo}`} className='rounded-full'/>
            <p className='text-md text-gray-800 text-lg'>{user.name}</p>
            <p className='text-md text-gray-600 text-sm'>{date}</p>
        </div>
        <div className='holder-body text-md text-gray-800 text-2xl'>
            <p className='holder-body-text'>{text}</p>
            <img src={`${photo}`} />
        </div>
        <div className='holder-footer'>
            <p className='text-md text-gray-800 text-lg'>😂{reacts.funny} 💖{reacts.love} 👍{reacts.like} 😢{reacts.sad}</p>
        </div>
    </div>
  )
}

export default Post