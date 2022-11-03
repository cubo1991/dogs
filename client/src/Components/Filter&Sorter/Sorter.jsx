import React from 'react'
import { useDispatch } from 'react-redux'
import { sortDogs } from '../../Store/Actions'


export const Sorter = () => {
    const dispatch = useDispatch()
    const [orden, setOrden] = React.useState("")
   
    React.useEffect(() => {
        dispatch(sortDogs(orden))
    }, )
    const onSelectChange = (e) => {
      setOrden(e.target.value)
    }
    
  return (
    <div>
        <div>
    <label htmlFor="Sort">Ordenar por nombre</label>   
    <select name="select" id="Sort" onChange={onSelectChange}> 
    <option value="ascendente">A-Z </option>
     <option value="descendente">Z-A </option>
     <option value="ascendenteMax"> Menor peso máximo </option>
    <option value="descendenteMax"> Mayor peso máximo </option>
    <option value="ascendenteMin"> Menor peso mínimo </option>
    <option value="descendenteMin"> Mayor peso mínimo </option>
  
  
</select>
</div>
    </div>
  )
}
