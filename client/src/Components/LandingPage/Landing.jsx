import React, {useState} from 'react'
import {ContainerPrincipal}  from '../PrincipalContainer/ContainerPrincipal'
import { Link } from 'react-router-dom'
  

export const Landing = () => {
  let [enter, setEnter] = useState(false)
  let enterContainer = () => {
    setEnter(true)
  }


  return (
    <div>

      
      <h1>Landing</h1>
      <Link to="/home">
      <button>Ingresá al sitio</button>
      </Link>
      
    



    </div>
  )
}



