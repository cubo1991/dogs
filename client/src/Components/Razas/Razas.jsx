import React from 'react'
import { useSelector } from 'react-redux'

export const Razas = () => {
    let razas = useSelector((state) => state)
    console.log(razas)
  return (
    <div>Razas</div>
  )
}
