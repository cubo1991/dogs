import React from 'react'
import { Filter } from '../Filter&Sorter/Filter'
import { Sorter } from '../Filter&Sorter/Sorter'
import { Razas } from '../Razas/Razas'
import { SearchBar } from '../SearchBar/SearchBar'

export const ContainerPrincipal = () => {
  return (
    <div>
        <SearchBar/>
        <Sorter/>
        <Filter/>
        <Razas/>

    </div>
  )
}
