import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import s from './DogCardDetail.module.css'

export const DogCardDetail = ({ name, image, temperaments, weightMin, weightMax, heightMin, heightMax, lifeSpan }) => {



  return (
<div >
    <div>
      <div >
      <NavBar/>
      </div>



      <div className={s.container}>
        <h2 className={s.name}>{name}</h2>
        <div className={s.card}>
          <img src={image} alt={name} />
          <div className={s.info}>
            <h3>Weight Min: {weightMin} kg</h3>
            <h3>Weight Max: {weightMax} kg</h3>
            <h3>Height Min: {heightMin} cm </h3>
            <h3>Height Max: {heightMax} cm </h3>
            <h3>Life Span:  {lifeSpan} years</h3>
            <h3>Temperaments: {temperaments} </h3>
          </div>
        </div>
      </div>


    </div>
    </div>
  )
}
