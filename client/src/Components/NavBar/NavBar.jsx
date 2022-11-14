import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import s from '../NavBar/NavBar.module.css'

export const NavBar = () => {
  return (
    <div className={s.container}>
      <div className={s.navBar}>
      <Link to='/home'>

        LOGO
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
