import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperaments, postDog } from '../../Store/Actions'
import { NavBar } from '../NavBar/NavBar'
import s from '../Form/Form.module.css'
import { useHistory } from 'react-router-dom'
import { Error } from '../Eror/Error'


const Form = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  React.useEffect(() => {
    dispatch(getTemperaments())
  }, [dispatch]
  )

  let temperamentos = useSelector(state => state.temperamentos)
  let error = useSelector((state) => state.errorGlobalState)

  let [finalizado, setFinalizado] = React.useState(false)

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
    return /^[1-9]\d*(\.\d+)?$/.test(str);
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
    setFinalizado(true)
    setTimeout(()=>{
      history.push('/home')
    }, 2000)
   
    

  }

  if(!error)
 { return (
   
    <div>
       <NavBar/>
{
        !finalizado
        ?
      <div className={s.form}>
        <form  >
          <div >
            <label> Name </label>
            <input
            className={formRes.Name.length < 1 ? s.inpuMandatory : s.inpuAllowed}
              name="Name"
              type="text"
              onChange={handleInputChange}
            />
  
          </div>

          <div>
            <label>Minimum height</label>
            <input
            className={String(formRes.Height_min).length  < 1  || formRes.Height_min > formRes.Height_max  ? s.inpuMandatory : s.inpuAllowed}
              name="Height_min"
              type="text"
              onChange={handleInputChange} />
            
                       {String(formRes.Height_min).search( /^[1-9]\d*(\.\d+)?$/) === -1 && String(formRes.Height_min).length !== 0? <p>Only numbers and a dot are allowed</p>: "" }
          </div>

          <div>
            <label> Maximum height</label>
            <input
             className={String(formRes.Height_max).length  < 1 || formRes.Height_min > formRes.Height_max? s.inpuMandatory : s.inpuAllowed}
              name="Height_max"
              type="text"
              onChange={handleInputChange} />
           
            { String(formRes.Height_max).search( /^[1-9]\d*(\.\d+)?$/) === -1 && String(formRes.Height_max).length !== 0? <p>Only numbers and a dot are allowed</p>: "" }
            { formRes.Height_max !== "" && formRes.Height_max < formRes.Height_min ? <p>The maximum height cannot be less than the minimum height</p> : ""}
          </div>
          <div>
            <label> Minimum weigth</label>
            <input
           className={String(formRes.Weight_min).length  < 1  || formRes.Weight_min > formRes.Weight_max? s.inpuMandatory : s.inpuAllowed}
              name="Weight_min"
              type="text"
              onChange={handleInputChange} />
             {String(formRes.Weight_min).search( /^[1-9]\d*(\.\d+)?$/) === -1 && String(formRes.Weight_min).length > 0? <p>Only numbers and a dot are allowed</p>: "" }
          </div>
          <div>
            <label> Maximum weight</label>
            <input
           className={String(formRes.Weight_max).length  < 1 || formRes.Weight_min > formRes.Weight_max ? s.inpuMandatory : s.inpuAllowed}
              name="Weight_max"
              type="text"
              onChange={handleInputChange} />
             
            {String(formRes.Weight_max).search( /^[1-9]\d*(\.\d+)?$/) === -1 && String(formRes.Weight_max).length !== 0? <p>Only numbers and a dot are allowed</p>: "" }
            { formRes.Weight_max !== "" && formRes.Weight_max < formRes.Weight_min ?<p>The maximum weight cannot be less than the minimum weight</p> : ""}
          </div>
          <div>

            <label>Life span</label>
            <input 
            className={s.inpuAllowed}
              name="Life_span"
              type="text"
              onChange={handleInputChange} />
                     </div>
          <div>
            <label> Image Url</label>
            <input
            className={s.inpuAllowed}
              name="Img"
              type="text"
              onChange={handleInputChange} />
          </div>
          <div>
            <label>Temperaments</label>
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
            
            <button onClick={removetemperamentos}> Borrar todos</button>
          </div>
          {
       formRes.Name.length > 0 && soloNumeros((formRes.Height_max)) && String(formRes.Height_max).length > 0 && soloNumeros((formRes.Height_min)) && String(formRes.Height_min).length > 0 &&  soloNumeros(formRes.Weight_max) && String(formRes.Weight_max).length > 0  && soloNumeros(formRes.Weight_min) && String(formRes.Weight_min).length > 0 && formRes.Height_max >= formRes.Height_min && formRes.Weight_max >= formRes.Weight_min
        ?
        
       <button className={s.sendBtn} type={"button"} onClick={sendForm}  >Enviar</button>
       :
       <div>
       <button className={s.sendBtn} disabled type={"button"} onClick={sendForm}>Enviar</button>
       <p>Please complete all fields in red</p>
       </div>
      }
        </form>
      
      </div>
      :

      <h2 className={s.dogFinish}>Dog successfully created! Redirecting now</h2>

}


    </div>
  )} else {
    <Error/>
  }
}

export default Form