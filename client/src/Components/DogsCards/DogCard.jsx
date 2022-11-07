import React from 'react'

export const DogCard = ({name, image, temperaments, weightMin, weightMax}) => {



  return (
    <div>

            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <h3>Weight Min: {weightMin}</h3>
            <h3>Weight Max: {weightMax}</h3>
            <h3>Temperamentos: {temperaments.toString().replaceAll(',', ' ') } </h3>
            
    </div>
  )
}
