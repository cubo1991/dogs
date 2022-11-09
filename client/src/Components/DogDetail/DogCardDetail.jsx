import React from 'react'

export const DogCardDetail = ({name, image, temperaments, weightMin, weightMax, heightMin, heightMax, lifeSpan}) => {



  return (
    
    <div>

            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <h3>Weight Min: {weightMin}</h3>
            <h3>Weight Max: {weightMax}</h3>
            <h3>Height Min: {heightMin} </h3>
            <h3>Height Max: {heightMax} </h3>
            <h3>Life Span:  {lifeSpan}</h3>
            <h3>Temperaments: {temperaments} </h3>
            
    </div>
  )
}
