import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true)

    const [isClicked, setIsClicked] = useState(initialState)

    const [screenSize, setScreenSize] = useState(undefined)

    const [auth, setAuth] = useState({ success: false, auth: '' })

    const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : '#03C9D7')

    const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode') ? localStorage.getItem('themeMode') : 'Light')

    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)
    }

    const setColor = (color) => {
        setCurrentColor(color)

        localStorage.setItem('colorMode', color)

        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            screenSize,
            setScreenSize,
            handleClick,
            auth,
            setAuth,
            currentColor,
            currentMode,
            themeSettings,
            setThemeSettings,
            setColor,
            setMode
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)