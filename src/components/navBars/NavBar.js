import React from 'react';
import style from '../../styles/navBars.module.css';
 import { BsList } from "react-icons/bs";
const NavBar = () => {
  return (
    <nav className={style['nav-bar-container']}>
      <div className={style['nav-bar-fulid']}>
        <div className={style['container-fluid']}>
          <BsList className={style['app-sidebar-toggle']}/>
         
        </div>
      </div>
    </nav>
  )
}

export default NavBar