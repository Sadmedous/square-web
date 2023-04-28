import React from 'react'
import style from '../../styles/navBars.module.css'
import squarelogolight from  '../../assets/squarelogolight.png';
import { BsList ,BsSearch , BsBell} from "react-icons/bs";

const SideNavBar = () => {
  const data =  Array(10).fill("o")
  return (
    <aside className={style['side-bar-container']}>
      <div className={style['side-bar-fulid']}>
        <section className={style['side-bar-logo-container']}>
          <img className={style['side-bar-logo']} src={squarelogolight} />
        </section>
        <section className={style['side-bar-list-container']}>
          {data.map(()=>(
            <button className={style['side-bar-list-wraper']}>
              <BsList className={style['side-bar-list-icon']}/>
              <span className={style['side-bar-list-name']} >
                firas jedidi
              </span>
          </button>
          ))}
        </section>
      </div>
    </aside>
  )
}

export default SideNavBar