import React from 'react'
import { Filter } from '../Filter&Sorter/Filter'
import { Sorter } from '../Filter&Sorter/Sorter'
import { Razas } from '../Razas/Razas'
import { SearchBar } from '../SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import {fetchRazas,getTemperaments, filterDogs,filterDogsTemperaments,sortDogs} from '../../Store/Actions'

export const ContainerPrincipal = () => {
  let razas = useSelector((state) => state.dogsFiltered) 
  let cargando = useSelector((state) => state.cargando) 
  let temperaments = useSelector((state) => state.temperamentos)
  let [selectT, setSelectT] = React.useState("Selecciona una temperamento")
    let [selectD, setSelectD] = React.useState("Api")
    let [orden, setOrden] = React.useState("")
    let [selectDogsOptions, setSelectDogsOpions] = React.useState({
      opcion1:"Ver razas de perros",
      opcion2: "Ver tus perros"

    })
    let [activadorT, setActivadorT] = React.useState(false)
    let [activadorD, setActivadorD] = React.useState(false)
   


      let dispatch = useDispatch()
      
      React.useEffect(()=>{
        dispatch(getTemperaments())
dispatch(fetchRazas())


      }, [])
      React.useEffect(() => {
        dispatch(sortDogs(orden))
    },[orden] )
      

      const OnChangeDogs = (e) => {

        if (e.target.value === "DB") {         
            setSelectD("DB")
        }
        if (e.target.value === "Api") {           
            setSelectD("Api")
        }
        dispatch(filterDogs(selectD[0]))
        setActivadorD(true)

       

    }

    const filtrarT = () => {
        dispatch(filterDogsTemperaments(selectT[0]))
        setActivadorT(false)
    }
    const filtrarD =() => {
        dispatch(filterDogs(selectD))
        setActivadorD(false)
    }

    const OnChange = (e) => {
        setSelectT([e.target.value])
       
        setActivadorT(true)

     
        
       


    }
    if (activadorT) { filtrarT() }
    if(activadorD) { filtrarD()}
    const onClickRemoveFilters = () => {
       
         dispatch(filterDogs("removeFilters"))
        dispatch(filterDogsTemperaments("removeFiltersT"))
        setSelectT("Selecciona una temperamento")
       
      
    }

    const onSelectChange = (e) => {
      setOrden(e.target.value)
    }
  return (
    <div>
        <SearchBar/>
        <Sorter onSelectChange={onSelectChange}/>
        <Filter onClickRemoveFilters={onClickRemoveFilters} OnChange={OnChange} OnChangeDogs={OnChangeDogs} temperaments={temperaments} selectDogsOptions={selectDogsOptions} selectT={selectT}/>
        <Razas razas={razas} cargando={cargando}/>

    </div>
  )
}
