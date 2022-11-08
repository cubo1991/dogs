import React from 'react'


export const Filter = ({onClickRemoveFilters,  OnChangeTemperaments,  OnChangeDogs,  temperaments, selectDogsOptions, selectT }) => {

let defaultValue = "Selecciona un temperamento"

    return (
        <div>
           
        <div>
            <div>
         <h5>Filtrar por perros</h5>
          <button onClick={OnChangeDogs} value={"Api"}>{selectDogsOptions.opcion1}</button>
          <button onClick={OnChangeDogs} value={"DB"}>{selectDogsOptions.opcion2}</button>
          </div>         
            
                

<div>
<h5>Filtrar por temperamentos</h5>
            <select name="select" id='selectT' value={selectT} onChange={OnChangeTemperaments}>
                <option  disabled defaultValue={defaultValue} hidden>{defaultValue}</option>
                
                {temperaments.map(t =>
                    <option key={t.NameT} value={t.NameT}>{t.NameT}</option>
                )};
            </select>
            </div>
            <div>                
                    
                <button onClick={onClickRemoveFilters}> Quitar filtros </button>
            </div>


        </div>
        </div>
    )
}

