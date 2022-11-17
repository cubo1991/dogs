import React from 'react'
import { Filter } from '../Filter&Sorter/Filter'
import { Sorter } from '../Filter&Sorter/Sorter'
import { Razas } from '../Razas/Razas'
import { Loading } from '../Loading/Loading'

import { useDispatch, useSelector } from 'react-redux'
import { numberPage, fetchRazas, getTemperaments, filterDogs, filterDogsTemperaments, sortDogs, paginationDogs } from '../../Store/Actions'
import { SHOW_DOGS } from '../../constantes'
import { NavBar } from '../NavBar/NavBar'
import s from './ContainerPrincipal.module.css'


import { Link, useHistory } from 'react-router-dom'
import { Error } from '../Eror/Error'


export const ContainerPrincipal = () => {

  let dogFiltered = useSelector((state) => state.dogsFiltered)
  let paginaActual = useSelector((state) => state.currentPage)
  let cargando = useSelector((state) => state.cargando)
  let temperaments = useSelector((state) => state.temperamentos)
  let dogsPag = useSelector((state) => state.dogsPag)
  let error = useSelector((state) => state.errorGlobalState)
  let [selectT, setSelectT] = React.useState("Selecciona un temperamento")
  let [selectD, setSelectD] = React.useState("Api")
  let [orden, setOrden] = React.useState("")
  let [activadorT, setActivadorT] = React.useState(false)
  let [activadorD, setActivadorD] = React.useState(false)




  let dispatch = useDispatch()

  let history = useHistory()
  React.useEffect(() => {
    if (orden === "") return;
    dispatch(sortDogs(orden))

  }, [orden])
  React.useEffect(() => {
    dispatch(paginationDogs(paginaActual))

  }, [paginaActual])

  React.useEffect(() => {

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
  const filtrarD = () => {
    dispatch(filterDogs(selectD))
    setActivadorD(false)

  }

  const OnChangeTemperaments = (e) => {

    setSelectT([e.target.value])

    setActivadorT(true)
    setOrden("")







  }
  if (activadorT) { filtrarT() }
  if (activadorD) { filtrarD() }
  const onClickRemoveFilters = () => {

    dispatch(filterDogs("removeFilters"))
    setSelectT("Selecciona un temperamento")
    setOrden("")


  }

  const onSelectChange = (e) => {
    console.log(e.target.value)
    setOrden(e.target.value)
    setSelectT("Selecciona un temperamento")

  }

  const prevHandler = () => {
    if (paginaActual === 1) return;
    let prevPage = paginaActual - 1
    dispatch(paginationDogs(prevPage))
    window.location = '#hojaActual'


  }
  const nextHandler = () => {

    if (paginaActual === Math.ceil(dogFiltered.length / 8)) return;

    let nextPage = paginaActual + 1

    dispatch(paginationDogs(nextPage))
    window.location = '#hojaActual'
  }
  const firstHandler = () => {
    if (paginaActual === 1) return;


    dispatch(paginationDogs(1))
    window.location = '#hojaActual'
  }
  const lastHandler = () => {
    if (paginaActual === Math.ceil(dogFiltered.length / 8)) return;

    dispatch(paginationDogs(Math.ceil(dogFiltered.length / 8)))
    window.location = '#hojaActual'
  }

  let paginasTotales = Math.ceil(dogFiltered.length / SHOW_DOGS)


  let pagIndex = []

  for (let i = 1; i <= paginasTotales; i++) {
    let btn = <button value={i} onClick={onClickbtn}>{i}</button>
    pagIndex.push(btn)



  }
  function onClickbtn(e) {
    let pagina = e.target.value
    dispatch(numberPage(Number(pagina)))
    window.location = '#hojaActual'
  }

  const goError = () => {
    history.push('/error')

  }

  if(!error)
  {return (
    <div className={s.container}>

      {
        !cargando
          ?
          <div>

            {
              <div>
                {
                  typeof dogsPag[0] !== "string"
                    ?


                    <div>


                      {
                        dogFiltered.length === 0
                          ?
                          <div className={s.noCreateDogs}>

                           <div> <NavBar /></div>

                                                   <div>

                            <h2>No dogs to show</h2>
                            <h3>If you want to create one, please click <Link to='/form'>here</Link> </h3>
                          <button onClick={onClickRemoveFilters}>See all other dogs</button>
                            </div>
                          </div>
                          :
                          <div>
                            <NavBar />

                            <div className={s.btns}>
                              <Filter onClickRemoveFilters={onClickRemoveFilters} OnChangeTemperaments={OnChangeTemperaments} OnChangeDogs={OnChangeDogs} temperaments={temperaments} selectT={selectT} />
                              <Sorter onSelectChange={onSelectChange} orden={orden} />

                            </div>

                            <Razas lastHandler={lastHandler} firstHandler={firstHandler} razas={dogsPag} cargando={cargando} paginaActual={paginaActual} prevHandler={prevHandler} nextHandler={nextHandler} totalDogs={dogFiltered} onClickbtn={onClickbtn} paginas={pagIndex} />

                          </div>


                      }

                    </div>
                    :
                    <div className={s.noRace}>
                      <div> <NavBar />   </div>
                      <h2>{dogsPag[0]}</h2>
                      <h3>If you want to create it, please click <Link to='/form'>here</Link> </h3>
                      <button onClick={onClickRemoveFilters}>See all other dogs</button>
                    </div>

                }

              </div>




            }
          </div>
          :
          <Loading />
      }


    </div>
  )} else {

return(
 goError()
)
  }
}
