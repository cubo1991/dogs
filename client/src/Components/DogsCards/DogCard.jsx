import React from 'react'

export const DogCard = ({name, imagen, temperamentos}) => {
   console.log(imagen)
    
  return (
    <div>

            <h2>{name}</h2>
            <img src={imagen} alt={name}/>
            <h3>{temperamentos}</h3>
    </div>
  )
}
