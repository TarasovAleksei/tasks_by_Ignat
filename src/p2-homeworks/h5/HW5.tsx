import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Routes from './Routes'
import s from "./Header.module.css";

function HW5() {
    return (
        <div className={s.container}>
            <div>react homeworks:</div>
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </div>
    )
}

export default HW5
