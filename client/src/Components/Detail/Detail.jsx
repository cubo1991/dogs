import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../Store/Actions'
import { DogCardDetail } from '../DogDetail/DogCardDetail'


export const Detail = (props) => {
        let dispatch = useDispatch()
        let razaDetalle = useSelector((state => state.dogDetail))
        // const dogsRaza = razaDetalle.map((dog) => { return <DogCardDetail name={dog.Name} image={dog.Img} temperaments={dog.temperamentos} weightMax={dog.Weight_max} weightMin={dog.Weight_min} key={dog.ID} heightMin={dog.Height_min} heightMax={dog.Height_max} lifeSpan={dog.Life_span}
        //  /> })
 
    React.useEffect(
        ()=>{
       
            dispatch(getDetails(props.match.params.id))        
         
          
        
    
    
          }, [dispatch,props.match.params.id])
    console.log(razaDetalle)
  return (
    <div>


    </div>
  )
}
