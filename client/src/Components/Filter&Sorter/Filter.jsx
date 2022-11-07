import React from 'react'


export const Filter = ({onClickRemoveFilters,  OnChange,  OnChangeDogs,  temperaments, selectDogsOptions, selectT }) => {
let prueba= "Selecciona una temperamento"


    return (
        <div>
           
        <div>
         
          <button onClick={OnChangeDogs} value={"Api"}>{selectDogsOptions.opcion1}</button>
          <button onClick={OnChangeDogs} value={"DB"}>{selectDogsOptions.opcion2}</button>
{/*           
           <select name="select" id='selectD' onChange={OnChangeDogs}>
        
            <option value= 'Api'>{selectDogsOptions.opcion1}</option>
            <option value='DB' >{selectDogsOptions.opcion2}</option>
               
                </select>
             */}
                       
            
                


            <select name="select" id='selectT' value={prueba} onChange={OnChange}>
                <option  disabled selected hidden>Selecciona una temperamento</option>
                
                {temperaments.map(t =>
                    <option key={t.NameT} value={t.NameT}>{t.NameT}</option>
                )};
            </select>
            <div>                
                <button onClick={onClickRemoveFilters}> Quitar filtros </button>
            </div>


        </div>
        </div>
    )
}

