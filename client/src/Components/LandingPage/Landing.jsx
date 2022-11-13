import React from 'react'

import { Link } from 'react-router-dom'
import s from '../LandingPage/Landing.module.css'
  

export const Landing = () => {
 


  return (
    <div className={s.container}>

      
<h1 className={s.titulo}> Welcome to Dogs!</h1>
        <p  className={s.subTitulo}> Touch the nose to enter</p>
      <Link to="/home">       
      <button className={s.btn}></button>
      </Link>
      
    



    </div>
  )
}



