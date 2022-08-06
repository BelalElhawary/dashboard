import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Sidebar, Footer, Settings } from './components';
import { Home } from './pages';
import { useStateContext} from './context/ContextProvider'

import './App.css';

const App = () => {
  const { activeMenu } = useStateContext()
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
            <TooltipComponent content='settings' position='Top'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'blue', borderRadius: '50%'}}>
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
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu?'md:ml-0':'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/home' element={<Home />}/>
              {/* Pages */}
              <Route path='/orders' element='Orders'/>
              <Route path='/admins' element='Admins'/>
              <Route path='/students' element='Students'/>
              {/* Others */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App