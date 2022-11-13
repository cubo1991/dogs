import React from 'react'
import {SearchBar} from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import s from '../NavBar/NavBar.module.css'

export const NavBar = () => {
  return (
    <div className={s.prueba}>
        <SearchBar/>
        <Link to='/form'>
            <p>Create your own dog</p>
        </Link>
    </div>
  )
}
