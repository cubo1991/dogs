import React from 'react'
import s from './Filter&Sorter.module.css'


export const Filter = ({ onClickRemoveFilters, OnChangeTemperaments, OnChangeDogs, temperaments, selectT }) => {


    let defaultValue = "Select temperament"

    return (
        <div>

            <div className={s.containerFilter}>
                <div className={s.containerElement}>
                    
                    <label>Filter by dogs</label>
                    <button onClick={OnChangeDogs} value={"Api"}>{"Show breeds"}</button>
                    <button onClick={OnChangeDogs} value={"DB"}>{"Show your own dogs"}</button>
                </div>



                <div className={s.containerElement}>
                    
                    <label>Filter by temperaments</label>
                    <select name="select" id='selectT' value={selectT} onChange={OnChangeTemperaments}>
                    <option disabled defaultValue={defaultValue} hidden>{defaultValue}</option>

                    {temperaments.map(t =>
                    <option key={t.NameT} value={t.NameT}>{t.NameT}</option>
                        )};
                    </select>
                  
                </div>
                <div className={s.containerElement}>

                    <button className={s.remove} onClick={onClickRemoveFilters}> Remove filters </button>
                </div>


            </div>
        </div>
    )
}

