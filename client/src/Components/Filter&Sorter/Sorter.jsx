import React from 'react'


export const Sorter = ({onSelectChange, orden}) => {
  let defaultValue;
  if(orden === "") { defaultValue = "Select a criteria"}

  
    
  return (
    <div>
        <div>
    <label htmlFor="Sort">Order by </label>   
    <select name="select" id="Sort" value={defaultValue} onChange={onSelectChange}> 
    <option  disabled defaultValue={defaultValue} hidden>{defaultValue}</option>
    <option value="ascendente"> Alphabetical order </option>
     <option value="descendente">Descending alphabetical order </option>
     <option value="ascendenteMax"> Lower maximum weight </option>
    <option value="descendenteMax"> Higher maximum weight </option>
    <option value="ascendenteMin"> Lower minimum weight </option>
    <option value="descendenteMin"> Higher minimum weight </option>
  
  
</select>
</div>
    </div>
  )
}
