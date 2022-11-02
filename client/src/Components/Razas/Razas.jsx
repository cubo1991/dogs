import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchRazas} from '../../Store/Actions'
import { DogCard } from '../DogsCards/DogCard'


export const Razas = () => {
    let razas = useSelector((state) => state.razas)
      
      let dispatch = useDispatch()
      React.useEffect(()=>{
dispatch(fetchRazas())
      }, [dispatch])
     
     

  
    
  return ( <div>
    
   {razas.map((dog) =>{
console.log(dog)
    return <DogCard name={dog.Name} imagen={dog.Img} temperamentos={dog.temperamentos}/>
   })}
    
    
    </div>
  )
}
