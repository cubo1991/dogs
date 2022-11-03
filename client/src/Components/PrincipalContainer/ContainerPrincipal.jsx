import React from 'react'
import FillterSorter from '../Filter&Sorter/FillterSorter'
import { Razas } from '../Razas/Razas'
import { SearchBar } from '../SearchBar/SearchBar'

export const ContainerPrincipal = () => {
  return (
    <div>
        <SearchBar/>
        <FillterSorter/>
        <Razas/>

    </div>
  )
}
