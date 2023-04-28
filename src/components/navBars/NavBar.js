import React from 'react';
import style from '../../styles/navBars.module.css';
 import { BsList ,BsSearch , BsBell} from "react-icons/bs";
const NavBar = () => {
  return (
    <nav className={style['nav-bar-container']}>
      <div className={style['nav-bar-fulid']}>
        <section className={style['nav-bar-fulid']}>
          <BsList className={style['nav-bar-toggle-icon']}/>
          <section className={style['nav-bar-search-container']}>
            <BsSearch className={style['nav-bar-search-icon']}/>
            <input type='search' placeholder='Search pathology results'  className={style['nav-bar-search-input']} />
          </section>
        </section>
        <section className={style['nav-bar-side-container']}>
          <BsBell className={style['nav-bar-notification-icon']}/>
          <section  className={style['nav-bar-profile-container']}>
            <img className={style['nav-bar-profile-img']} />
            <span className={style['nav-bar-profile-name']} >
              firas jedidi
            </span>
          </section>
        </section>
      </div>
    </nav>
  )
}

export default NavBar