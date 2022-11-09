import React, {useState} from 'react'
import {ContainerPrincipal}  from '../PrincipalContainer/ContainerPrincipal'
  

export const Landing = () => {
  let [enter, setEnter] = useState(false)
  let enterContainer = () => {
    setEnter(true)
  }


  return (
    <div>
    {
      enter === false
      ?
      <div>
      <h1>Landing</h1>
      <button onClick={enterContainer}>Ingresá al sitio</button>
      </div>
      :
      <ContainerPrincipal/>
    }



    </div>
  )
}



