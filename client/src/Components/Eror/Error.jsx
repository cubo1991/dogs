import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import dog404 from '../../multimedia/error404.jpg'
import s from './Error.module.css'

export const Error = () => {
  
  let dogsPag = useSelector((state) => state.dogsPag)
  console.log(typeof dogsPag[0])
  return (
    <div className={s.container}>
        
       <img className={s.imagen} src={dog404} alt={"Error"} />

       <div>
       <Link to={'/home'}>
        <h2>Back to home</h2>
        </Link>
        </div>

    </div>

  )
}
