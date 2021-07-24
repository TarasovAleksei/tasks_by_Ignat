import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from "./Header.module.css";

function Header() {
    return (
        <div className={s.toggleContainer}>
            <NavLink activeClassName={s.activeLink} to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
            <NavLink activeClassName={s.activeLink} to={PATH.JUNIOR}>JUNIOR</NavLink>
            <NavLink activeClassName={s.activeLink} to={PATH.JUNIOR_PLUS}>JUNIOR+</NavLink>
            <div className={s.toggle}/>
        </div>
    )
}

export default Header
