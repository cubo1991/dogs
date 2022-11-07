import React from 'react'


export const Sorter = ({onSelectChange, orden}) => {
    

  
    
  return (
    <div>
        <div>
    <label htmlFor="Sort">Ordenar por </label>   
    <select name="select" id="Sort" value={orden} onChange={onSelectChange}> 
   
    <option value="ascendente">Orden alfabético </option>
     <option value="descendente">Orden alfabético descendente </option>
     <option value="ascendenteMax"> Menor peso máximo </option>
    <option value="descendenteMax"> Mayor peso máximo </option>
    <option value="ascendenteMin"> Menor peso mínimo </option>
    <option value="descendenteMin"> Mayor peso mínimo </option>
  
  
</select>
</div>
    </div>
  )
}
