import React from 'react'

const Dialog = ({title, onClick, visible, children, width, error}) => {
  return (
    <div className='w-4/5 md:w-2/5 rounded-3xl' style={{ width, height: 'fit-content', position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', padding: '20px', backgroundColor: 'white', border: '2px solid blue', visibility: `${visible?'visible':'hidden'}`}}>
        {error?(<div className='rounded-lg bg-red-50' style={{border: '2px solid rgb(239, 68, 68)', visibility: `${error&&visible?'visible':'hidden'}`}}><p className='font-bold w-full p-2 text-red-500'>{error.title}</p><p className='w-full text-red-500 pl-2 pr-2 pb-2'>{error.message}</p></div>):(<></>)}
        <p className='p-5 text-lg w-full text-gray-700 font-bold dark:text-white'>{title}</p>
        {children}
    </div>
  )
}

export default Dialog