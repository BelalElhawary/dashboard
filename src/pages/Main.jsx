import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Sidebar, Footer, Settings, Exam } from '../components';
import { Home, Calendar } from './';
import { useStateContext} from '../context/ContextProvider'

import '../App.css';
import {Lessons, Admins, Students, Community, Messages, ExamMaker} from './';

const Editor = () => {
  const { currentColor, activeMenu, themeSettings, setThemeSettings, currentMode } = useStateContext()
  return (
    <div className={currentMode === 'Dark'? 'dark': ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
            <TooltipComponent content='settings' position='Top'>
              <button type='button' onClick={() => setThemeSettings(true)} className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: currentColor, borderRadius: '50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu?(
            <div className='w-72 fidex sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ):(
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu?'md:ml-0':'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          <div className='overflow-auto' style={{height: '93vh'}}>
            {themeSettings && <Settings />}
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/home' element={<Home />}/>
              {/* Pages */}
              <Route path='/lessons' element={<Lessons />}/>
              <Route path='/admins' element={<Admins />}/>
              <Route path='/students' element={<Students />}/>
              <Route path='/calendar' element={<Calendar />}/>
              <Route path='/community' element={<Community/>}/>
              <Route path='/messages' element={<Messages />}/>
              <Route path='/exmaker' element={<ExamMaker />}/>
              {/* Others */}
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Editor