import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import s from '../NavBar/NavBar.module.css'
import icono from '../../multimedia/icono.png'

export const NavBar = () => {
  return (
    <div className={s.container}>
      <div className={s.navBar}>
      <Link to='/home'>

       <img className={s.logo} src={icono} alt="Ícono"/>
        </Link>
      </div>
<div className={s.navBar}>
     <div className={s.search}>
      <SearchBar />
      </div>
      <Link to='/form'>
        <p className={s.link}>Create your own dog</p>
      </Link>
      </div>
    </div>
  )
}
