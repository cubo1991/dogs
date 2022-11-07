import React from 'react'
import { DogCard } from '../DogsCards/DogCard'



export const Razas = ({razas, cargando}) => {
    
     
      
   
 
  return (<div>

{ typeof razas !== 'string'
?
     <div>
  { 
   cargando 
   ?
   <h2>Por favor espere</h2>
   :
   <div>
   <div> <button> Prev</button>   <button> Sig</button>   </div> 
{ razas.map((dog) =>{ return <DogCard name={dog.Name} image={dog.Img} temperaments={dog.temperamentos} weightMax={dog.Weight_max} weightMin={dog.Weight_min} />})}
  
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
