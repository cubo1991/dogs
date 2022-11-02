import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchRazas} from '../../Store/Actions'
import { DogCard } from '../DogsCards/DogCard'



export const Razas = () => {
    let razas = useSelector((state) => state.razas)
    let [show, setShow] = React.useState(false)
    const showRazas = () =>{
      setShow(!show)
    }
      let dispatch = useDispatch()
      React.useEffect(()=>{
dispatch(fetchRazas())
      }, [dispatch])
     
     

  
    console.log(typeof razas)
  return (<div>
 <button onClick={showRazas}> Mostrar razas</button>
{ typeof razas !== 'string'
?
     <div>
   
   { 
   show === true
   ?
  
   razas.map((dog) =>{ return <DogCard name={dog.Name} image={dog.Img} temperaments={dog.temperamentos} weightMax={dog.Weight_max} weightMin={dog.Weight_min} />})
   
   :
   ""
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
