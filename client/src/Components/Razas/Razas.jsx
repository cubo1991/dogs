import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchRazas} from '../../Store/Actions'


export const Razas = () => {
    let razas = useSelector((state) => state.razas)
      
      let dispatch = useDispatch()
      React.useEffect(()=>{
dispatch(fetchRazas())
      }, [dispatch])
      console.log(razas)
  
  return ( <div>
    
    {razas}
    
    
    </div>
  )
}
