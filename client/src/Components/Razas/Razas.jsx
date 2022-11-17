import React from 'react'
import { DogCard } from '../DogsCards/DogCard'
import s from '../Razas/Razas.module.css'



export const Razas = ({ razas, paginaActual, nextHandler, prevHandler, lastHandler, firstHandler, paginas }) => {

  const dogsRazas = razas.map((dog) => { 
 
    return <DogCard name={dog.Name} image={dog.Img} temperaments={dog.temperamentos} weightMax={dog.Weight_max} weightMin={dog.Weight_min} key={dog.ID} id={dog.ID} /> })





  return (<div className={s.container}>

    {typeof razas !== 'string'
      ?
      <div >
        {
          <div id='hojaActual' >
            
            <h3 className={s.pageNumber}>Page: {paginaActual} </h3>
          
            <div className={s.columnasDogs}>
              {dogsRazas}
            </div>
            <h3 className={s.pageNumber}>Page:  {paginaActual}   </h3>
            <div className={paginas.length > 3 ? s.btnIndex : s.btnIndexLess}>
             <button className={s.btnHandler} onClick={firstHandler}> First page</button>
              <button className={s.btnHandler} onClick={prevHandler}> Prev</button>  <h5 className={s.index}>{paginas}</h5>   <button className={s.btnHandler} onClick={nextHandler}> Next</button>
              <button className={s.btnHandler} onClick={lastHandler}>Last page</button>

            </div>
            

          </div>



        }




      </div>
      :
      <div>
        <p>{razas}</p>
      </div>
    }
  </div>
  )
}
