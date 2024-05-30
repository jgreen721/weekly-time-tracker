import React from 'react'
import { useAppContext } from '../../../appcontext'
import "./ThemePicker.css"

const ThemePicker = () => {
        const {toggleTheme} = useAppContext();


    const handleChangeTheme=()=>{
        console.log('handleChangeTheme fired')
        toggleTheme();
    }
  return (
    <div className="theme-picker-parent">
        <input onClick={handleChangeTheme} className="theme-picker" type="checkbox" />
    </div>
  )
}

export default ThemePicker