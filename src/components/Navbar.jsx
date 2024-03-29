import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import {BsChatLeft} from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Chat, Notification, UserProfile} from '.'
import { useStateContext } from '../context/ContextProvider'
import { GetCurrentUser } from '../data/DataLoader'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { useState } from 'react'

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={color} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={dotColor} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, setThemeSettings, handleClick, screenSize, setScreenSize, currentColor} = useStateContext()
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  useEffect(() => {
    if(screenSize <= 900)
    {
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={() => {setActiveMenu((prevActiveMenu) => !prevActiveMenu)}} color={{color: currentColor}} icon={<AiOutlineMenu />}>
      </NavButton>
      <div className='flex'>
        {false && <NavButton title="Chat" dotColor={{background: '#03C9D7'}} customFunc={() => handleClick('chat')} color={{color: currentColor}} icon={<BsChatLeft />}>
        </NavButton>}
        {false && <NavButton title="Notification" dotColor={{background: '#03C9D7'}} customFunc={() => handleClick('notification')} color={{color: currentColor}} icon={<RiNotification3Line />}>
        </NavButton>}
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => setThemeSettings(true)}>
            <IoPersonCircleOutline style={{color: currentColor}} className='rounded-full w-8 h-8'/>
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold  ml-1 text-14'>{GetCurrentUser()?GetCurrentUser().name:''}</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}

      </div>
    </div>
  )
}

export default Navbar