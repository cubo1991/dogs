import React from 'react'
import { useDispatch } from 'react-redux'
import { SHOW_DOGS } from '../../constantes'
import { DogCard } from '../DogsCards/DogCard'
import {numberPage} from '../../Store/Actions'


export const Razas = ({ razas, cargando, paginaActual, nextHandler, prevHandler, lastHandler, firstHandler, totalDogs, onClickbtn,  paginas }) => {

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
                <button onClick={prevHandler}> Prev</button>  <h5>{paginas}</h5> <h3>Página: {paginaActual} </h3>  <button onClick={nextHandler}> Sig</button>
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
