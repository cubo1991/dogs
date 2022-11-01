import React from 'react'
import { useSelector } from 'react-redux'


export const Razas = () => {
    let razas = useSelector((state) => state.razas)
    console.log(razas)
  return (
    <div>Razas Perros</div>
  )
}
