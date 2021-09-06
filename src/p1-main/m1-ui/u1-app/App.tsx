import React, {ChangeEvent} from 'react'
import s from './App.module.css'
import {useSelector} from 'react-redux';
import HW5 from "../../../p2-homeworks/h5/HW5";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";


function App() {
    const currentColorFont = useSelector<AppStoreType, string>(state => state.theme.currentColorFont)
    console.log(currentColorFont)
    const classForFont = () => {
        switch (currentColorFont) {
            case 'dark':
                return s.AppDark
            case 'light':
                return s.AppLight
            case 'custom':
                return s.AppCustom
        }
    }
    return (
        <div className={classForFont()}>
            <HW5/>
        </div>
    )
}

export default App
