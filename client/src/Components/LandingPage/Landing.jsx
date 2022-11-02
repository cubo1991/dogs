import React, {useState} from 'react'
import { Razas } from '../Razas/Razas'


export const Landing = () => {
  let [enter, setEnter] = useState(false)
  let enterRazas = () => {
    setEnter(true)
  }


  return (
    <div>
    {
      enter === false
      ?
      <div>
      <h1>Landing</h1>
      <button onClick={enterRazas}>Ingresá al sitio</button>
      </div>
      :
      <Razas/>
    }



    </div>
  )
}
