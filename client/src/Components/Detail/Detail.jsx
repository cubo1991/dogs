import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../Store/Actions'
import { DogCardDetail } from '../DogDetail/DogCardDetail'
import { Loading } from '../Loading/Loading'


export const Detail = (props) => {
        let dispatch = useDispatch()
        let razaDetalle = useSelector((state => state.dogDetail))
       

 
    React.useEffect(
        ()=>{
       
            dispatch(getDetails(props.match.params.id))        
         
              
    
    
          }, [dispatch,props.match.params.id])
    
  return (
    <div>
      {
       props.match.params.id === String(razaDetalle.ID)
       ?
<div>
{<DogCardDetail name={razaDetalle.Name} image={razaDetalle.Img} temperaments={razaDetalle.temperamentos} weightMax={razaDetalle.Weight_max} weightMin={razaDetalle.Weight_min} key={razaDetalle.ID} heightMin={razaDetalle.Height_min} heightMax={razaDetalle.Height_max} lifeSpan={razaDetalle.Life_span}
         /> }        
     
</div>
  :
  <Loading/>
}
    </div>
  )
}
