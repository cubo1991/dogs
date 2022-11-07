import React from 'react'


export const Filter = ({onClickRemoveFilters,  OnChangeTemperaments,  OnChangeDogs,  temperaments, selectDogsOptions, selectT }) => {



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
                <option  disabled selected hidden>Selecciona un temperamento</option>
                
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

