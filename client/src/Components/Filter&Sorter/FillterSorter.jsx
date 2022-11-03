import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortDogs } from '../../Store/Actions'

const FillterSorter = () => {
let razas = useSelector((state) => state.razas)
let razasSort = razas
let dispatch = useDispatch()
let ordenAlfabeticoAz = () => {
   
    
    
   
         
       
    function sort(array) { for (let i = 0; i <= razas.length-1; i++) {
        for(let j = 0; j < (razas.length - i -1); j++)
        {
         if(razas[j].Name>razas[j+1].Name){
            let temp = razas[j]
            razas[j] = razas[j +1]
            razas[j+1] = temp 
         }   
        }
        
        
     }
}

sort(razasSort)
dispatch(sortDogs(razasSort))
 



    
    

}
let ordenAlfabeticoZa = () => {
   
    let razasSort = razas
    
   
        
       
    function sort(array) { for (let i = 0; i <= razas.length-1; i++) {
        for(let j = 0; j < (razas.length - i -1); j++)
        {
         if(razas[j].Name<razas[j+1].Name){
            let temp = razas[j]
            razas[j] = razas[j +1]
            razas[j+1] = temp 
         }   
        }
        
        
     }
}

sort(razasSort)
dispatch(sortDogs(razasSort))
 


    
    
}

      React.useEffect(()=>{
dispatch(sortDogs())
      }, [dispatch])

  return (
    <div>

      <button onClick={ordenAlfabeticoAz}>Ordenar A-Z</button> 
      <button onClick={ordenAlfabeticoZa}>Ordenar Z-A</button> 
      <button>Ordenar por peso</button>  

    </div>
  )
}

export default FillterSorter