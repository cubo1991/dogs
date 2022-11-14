import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperaments, postDog } from '../../Store/Actions'
import { NavBar } from '../NavBar/NavBar'

const Form = () => {
  let dispatch = useDispatch()
  React.useEffect(() => {

    dispatch(getTemperaments())
  }, [dispatch]
  )

  let temperamentos = useSelector(state => state.temperamentos)
  let [errores, setErrores] = React.useState({
    ErrorName: false,
    ErrorHeight_max: false,
    ErrorHeight_min: false,
    ErrorWeight_max: false,
    ErrorWeight_min: false,
    ErrorLife_span: false,
    Errortemperamentos: false,


  })


  let [formRes, setFormRes] = React.useState({
    Name: '',
    Height_max: '',
    Height_min: '',
    Weight_max: '',
    Weight_min: '',
    Life_span: '',
    temperamentos: [],
    Img: ''
  }
  )
  function soloNumeros(str) {
    return /^\d+$/.test(str);
}
  const handleInputChange = (e) => {
    e.preventDefault()
    if (e.target.name === "temperamentos") {
      setFormRes({
        ...formRes,
        [e.target.name]: [...formRes.temperamentos, e.target.value]
      })
    }else if (e.target.name === 'Name' || e.target.name === "Life_span" || e.target.name === "Img") {
      setFormRes({
        ...formRes,
        [e.target.name]: e.target.value
      })
    }    
    
    else {
      let converted = Number(e.target.value)
      setFormRes({
        ...formRes,
        [e.target.name]: converted
      })

    }
  }
  const removetemperamentos = (e) => {
    e.preventDefault()
    setFormRes({
      ...formRes,
      temperamentos: []
    })
  }
  const sendForm = () => {
    dispatch(postDog(formRes))


  }




  return (
   
    <div>
       <NavBar/>
      <div>
        <form>
          <div>
            <label> Nombre </label>
            <input

              name="Name"
              type="text"
              onChange={handleInputChange}
            />
             {errores.ErrorName === true ? <p>Por favor ingrese el nombre de su perro</p> : ""}
          </div>

          <div>
            <label> Altura Mínima</label>
            <input
              name="Height_min"
              type="text"
              onChange={handleInputChange} />
            
            {errores.ErrorHeight_min === true? <p>Por favor ingrese la altura mínima</p> : ""}
            {String(formRes.Height_min).search( /^\d+$/) === -1 && formRes.Height_min.length !== 0? <p>Solo se permiten números</p>: "" }
          </div>

          <div>
            <label> Altura Máxima</label>
            <input
              name="Height_max"
              type="text"
              onChange={handleInputChange} />
             {errores.ErrorHeight_max === true? <p>Por favor ingrese la altura máxima</p> : ""}
            { formRes.Height_max.length > 0 && String(formRes.Height_max).search( /^\d+$/) === -1 && formRes.Height_max.length !== 0? <p>Solo se permiten números</p>: "" }
            { formRes.Height_max !== "" && formRes.Height_max < formRes.Height_min ? <p>La altura máxima no puede ser menor a la altura mínima</p> : ""}
          </div>
          <div>
            <label> Peso Mínimo</label>
            <input
              name="Weight_min"
              type="text"
              onChange={handleInputChange} />
          {/* {errores.ErrorWeight_min === true? <p>Por favor ingrese el peso mínimo</p> : ""} */}
            {String(formRes.Weight_min).search( /^\d+$/) === -1 && formRes.Weight_min.length !== 0? <p>Solo se permiten números</p>: "" }
          </div>
          <div>
            <label> Peso Máximo</label>
            <input
              name="Weight_max"
              type="text"
              onChange={handleInputChange} />
              {errores.ErrorWeight_max === true? <p>Por favor ingrese el peso máximo</p> : ""}
            { formRes.Weight_max.length > 0 && formRes.Weight_max.search( /^\d+$/) === -1 && formRes.Weight_max.length !== 0? <p>Solo se permiten números</p>: "" }
            { formRes.Weight_max !== "" && formRes.Weight_max < formRes.Weight_min ?<p>El peso máximo no puede ser menor al peso mínimo</p> : ""}
          </div>
          <div>

            <label>Esperanza de vida</label>
            <input
              name="Life_span"
              type="text"
              onChange={handleInputChange} />
                     </div>
          <div>
            <label> Url de la imagen</label>
            <input
              name="Img"
              type="text"
              onChange={handleInputChange} />
          </div>
          <div>
            <label>Temperamentos</label>
            <select onChange={handleInputChange} name="temperamentos">
             
              {temperamentos.map((t) => {
                if (formRes.temperamentos.includes(t.NameT)) {

                  return (

                    <option disabled value={t.NameT}>{t.NameT}</option>
                  )
                }
                return (

                  <option value={t.NameT}>{t.NameT}</option>
                )

              })}
   
            </select>
            
            <button onClick={removetemperamentos}> X</button>
          </div>
        </form>
       {
       formRes.Name.length > 0 && soloNumeros(formRes.Height_max) && soloNumeros(formRes.Height_min) &&  soloNumeros(formRes.Weight_max) && soloNumeros( formRes.Weight_min) && formRes.Height_max >= formRes.Height_min &&formRes.Weight_max >= formRes.Weight_min
        ?
       <input type={"button"} onClick={sendForm} value="Enviar" />
       :
       <div>
       <input disabled type={"button"} onClick={sendForm} value="Enviar" />
       <p>Por favor, complete todos los campos obligatorios antes de seguir</p>
       </div>
      }
      </div>




    </div>
  )
}

export default Form