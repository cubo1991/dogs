import React from 'react'
import s from './DogsCards.module.css'
import { Link } from 'react-router-dom'

export const DogCard = ({name, image, temperaments, weightMin, weightMax, id}) => {
console.log(temperaments)


const temperamentos = () =>{
temperaments[0].map(t => {
  
  if(temperaments[0]) {
    return ( <li>{t}</li>)
  } else{
    return ( <li>{temperaments}</li>)
  }
 }) 
}



  return (
    <div className={s.container}>
 <Link to={'/home/' + id}>
            <h2>{name}</h2> 
            </Link>
            <Link to={'/home/' + id}>
            <img src={image} alt={name}/>
            </Link>
           <div className={s.seccionPeso}>
            <h3>Weight Min: {weightMin} kg</h3>
            <h3>Weight Max: {weightMax} kg</h3>
            </div>
            <h3 className={s.temperaments}>Temperaments: <ul>{temperaments[0].map(t => { return ( <li>{t}</li>) }) } </ul></h3>
            
            
            
    </div>
  )
}
 