import React from 'react'


export const Filter = ({onClickRemoveFilters,  OnChangeTemperaments,  OnChangeDogs,  temperaments, selectT }) => {


    let defaultValue = "Select temperament"

    return (
        <div>
           
        <div>
            <div>
         <h5>Filter by dogs</h5>
          <button onClick={OnChangeDogs} value={"Api"}>{"Show breeds"}</button>
          <button onClick={OnChangeDogs} value={"DB"}>{"Show your own dogs"}</button>
          </div>         
            
                

<div>
<h5>Filter by temperaments</h5>
            <select name="select" id='selectT' value={selectT} onChange={OnChangeTemperaments}>
                <option  disabled defaultValue={defaultValue} hidden>{defaultValue}</option>
                
                {temperaments.map(t =>
                    <option key={t.NameT} value={t.NameT}>{t.NameT}</option>
                )};
            </select>
            </div>
            <div>                
                    
                <button onClick={onClickRemoveFilters}> Remove filters </button>
            </div>


        </div>
        </div>
    )
}

