import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import dog404 from '../../multimedia/error404.jpg'
import s from './Error.module.css'

export const Error = () => {
  
  let dogsPag = useSelector((state) => state.dogsPag)
  
  return (
    <div className={s.container}>
        
       <img className={s.imagen} src={dog404} alt={"Error"} />

       <div>
        <h2>{dogsPag[0].message}</h2>
        <h3>{dogsPag[0].stack}</h3>
        </div>

    </div>

  )
}
