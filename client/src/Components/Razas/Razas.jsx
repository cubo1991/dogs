import React from 'react'
import { DogCard } from '../DogsCards/DogCard'



export const Razas = ({ razas, cargando, paginaActual, nextHandler, prevHandler, lastHandler, firstHandler }) => {

  const dogsRazas = razas.map((dog) => { return <DogCard name={dog.Name} image={dog.Img} temperaments={dog.temperamentos} weightMax={dog.Weight_max} weightMin={dog.Weight_min} key={dog.ID} /> })



  return (<div>

    {typeof razas !== 'string'
      ?
      <div>
        {
          cargando
            ?
            <h2>Por favor espere</h2>
            :
            <div>
              <div> 
                <button onClick={firstHandler}> Primera página</button>
                <button onClick={prevHandler}> Prev</button> <h3>Página: {paginaActual} </h3>  <button onClick={nextHandler}> Sig</button>
                <button onClick={lastHandler}>Última página</button>
              </div>
              {dogsRazas}

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
