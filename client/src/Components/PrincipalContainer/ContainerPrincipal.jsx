import React from 'react'
import { Filter } from '../Filter&Sorter/Filter'
import { Sorter } from '../Filter&Sorter/Sorter'
import { Razas } from '../Razas/Razas'
import { SearchBar } from '../SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import {numberPage, fetchRazas,getTemperaments, filterDogs,filterDogsTemperaments,sortDogs, paginationDogs} from '../../Store/Actions'
import { SHOW_DOGS } from '../../constantes'

export const ContainerPrincipal = () => {
  
  let dogFiltered = useSelector((state) => state.dogsFiltered) 
  let paginaActual = useSelector((state) => state.currentPage) 
  let cargando = useSelector((state) => state.cargando) 
  let temperaments = useSelector((state) => state.temperamentos)
  let dogsPag = useSelector((state) => state.dogsPag)
  let [selectT, setSelectT] = React.useState("Selecciona un temperamento")
  let [selectD, setSelectD] = React.useState("Api")
  let [orden, setOrden] = React.useState("")
  let [activadorT, setActivadorT] = React.useState(false)
  let [activadorD, setActivadorD] = React.useState(false)
  
   


      let dispatch = useDispatch()

      React.useEffect(() => {
        if(orden === "") return;
        dispatch(sortDogs(orden))
       
    },[orden] )
    React.useEffect(() => {
      dispatch(paginationDogs(paginaActual))
     
  },[paginaActual] )
      
      React.useEffect(()=>{
        
        dispatch(getTemperaments())
      dispatch(fetchRazas())
     
      
    


      }, [])
    
  

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
        setOrden("")
       


       

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
        setOrden("")
     

     
        
       


    }
    if (activadorT) { filtrarT() }
    if(activadorD) { filtrarD()}
    const onClickRemoveFilters = () => {
       
         dispatch(filterDogs("removeFilters"))
        dispatch(filterDogsTemperaments("removeFiltersT"))
        setSelectT("Selecciona un temperamento")
        setOrden("Selecciona un criterio")
       
      
    }

    const onSelectChange = (e) => {
      console.log(e.target.value)
      setOrden(e.target.value)
      setSelectT("Selecciona un temperamento")
       
    }

    const prevHandler = () =>  {
      if(paginaActual === 1 ) return;
      let prevPage = paginaActual - 1
      dispatch(paginationDogs(prevPage))

      
    }
    const nextHandler = () => {
     
      if(paginaActual === Math.ceil(dogFiltered.length/8)) return;
      
      let nextPage = paginaActual + 1
     
      dispatch(paginationDogs(nextPage))
    }
    const firstHandler = () => {
     
 
     
      dispatch(paginationDogs(1))
    }
    const lastHandler = () => {
     
     
      dispatch(paginationDogs(Math.ceil(dogFiltered.length/8)))
    }

    let paginasTotales= Math.ceil(dogFiltered.length/SHOW_DOGS)


    let pagIndex = []

for(let i = 1; i <= paginasTotales; i++){
  let btn = <button value={i} onClick={onClickbtn}>{i}</button>
  pagIndex.push(btn)



  }
  function onClickbtn(e) {
    let pagina = e.target.value
    dispatch(numberPage(Number(pagina)))
  }


  return (
    <div>
      
        <SearchBar/>
        <Sorter onSelectChange={onSelectChange} orden={orden}/>
        <Filter  onClickRemoveFilters={onClickRemoveFilters} OnChangeTemperaments={OnChangeTemperaments} OnChangeDogs={OnChangeDogs} temperaments={temperaments} selectT={selectT}/>
        <Razas lastHandler={lastHandler} firstHandler={firstHandler} razas={dogsPag} cargando={cargando} paginaActual={paginaActual} prevHandler={prevHandler} nextHandler={nextHandler} totalDogs={dogFiltered} onClickbtn={onClickbtn} paginas={pagIndex}/>

    </div>
  )
}
