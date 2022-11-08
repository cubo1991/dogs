import React from 'react'
import { Filter } from '../Filter&Sorter/Filter'
import { Sorter } from '../Filter&Sorter/Sorter'
import { Razas } from '../Razas/Razas'
import { SearchBar } from '../SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import {fetchRazas,getTemperaments, filterDogs,filterDogsTemperaments,sortDogs, paginationDogs} from '../../Store/Actions'
export const ContainerPrincipal = () => {
  let razas = useSelector((state) => state.razas) 
  let paginaActual = useSelector((state) => state.currentPage) 
  let cargando = useSelector((state) => state.cargando) 
  let temperaments = useSelector((state) => state.temperamentos)
  let dogsPag = useSelector((state) => state.dogsPag)
  let [selectT, setSelectT] = React.useState("Selecciona un temperamento")
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
    React.useEffect(()=>{
      dispatch(paginationDogs(paginaActual))
    },[paginaActual])

      const OnChangeDogs = (e) => {

        if (e.target.value === "DB") {         
            setSelectD("DB")
        }
        if (e.target.value === "Api") {           
            setSelectD("Api")
        }
        dispatch(filterDogs(selectD[0]))
        setActivadorD(true)
        setSelectT("Selecciona un temperamento")
        setOrden("ascendente")


       

    }

    const filtrarT = () => {
        dispatch(filterDogsTemperaments(selectT[0]))
        setActivadorT(false)
    }
    const filtrarD =() => {
        dispatch(filterDogs(selectD))
        setActivadorD(false)
    }

    const OnChangeTemperaments = (e) => {
        setSelectT([e.target.value])
       
        setActivadorT(true)

     
        
       


    }
    if (activadorT) { filtrarT() }
    if(activadorD) { filtrarD()}
    const onClickRemoveFilters = () => {
       
         dispatch(filterDogs("removeFilters"))
        dispatch(filterDogsTemperaments("removeFiltersT"))
        setSelectT("Selecciona un temperamento")
        setOrden("ascendente")
       
      
    }

    const onSelectChange = (e) => {
      
      setOrden(e.target.value)
    }

    const prevHandler = () =>  {
      if(paginaActual === 1 ) return;
      let prevPage = paginaActual - 1
      dispatch(paginationDogs(prevPage))

      
    }
    const nextHandler = () => {
     
      if(paginaActual === Math.ceil(razas.length/8)) return;
      
      let nextPage = paginaActual + 1
     
      dispatch(paginationDogs(nextPage))
    }

    const firstHandler = () => {
     
 
     
      dispatch(paginationDogs(1))
    }
    const lastHandler = () => {
     
     
      dispatch(paginationDogs(Math.ceil(razas.length/8)))
    }

  return (
    <div>
        <SearchBar/>
        <Sorter onSelectChange={onSelectChange} orden={orden}/>
        <Filter  onClickRemoveFilters={onClickRemoveFilters} OnChangeTemperaments={OnChangeTemperaments} OnChangeDogs={OnChangeDogs} temperaments={temperaments} selectDogsOptions={selectDogsOptions} selectT={selectT}/>
        <Razas lastHandler={lastHandler} firstHandler={firstHandler} razas={dogsPag} cargando={cargando} paginaActual={paginaActual} prevHandler={prevHandler} nextHandler={nextHandler} />

    </div>
  )
}
