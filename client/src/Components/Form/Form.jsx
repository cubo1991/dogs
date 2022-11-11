import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperaments, postDog  } from '../../Store/Actions'

const Form = () => {
  let dispatch = useDispatch()
  React.useEffect(()=>{
       
    dispatch(getTemperaments()) 
  }, []
    )

  let temperamentos = useSelector(state => state.temperamentos)
  let [errores, setErrores] = React.useState({
    ErrorName: false,
    ErrorHeight_max: false,
    ErrorHeight_min: false,
    ErrorWeight_max: false,
    Weight_min: false,
    ErrorLife_span: false,
    Errortemperamentos: true,
 

  })

   
  let [formRes, setFormRes] = React.useState   ({
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

const handleInputChange = (e) => {
  e.preventDefault()
  if(e.target.name === "temperamentos") {
    setFormRes({
      ...formRes,    
      [e.target.name] : [...formRes.temperamentos, e.target.value]}) 
  }else {
  setFormRes({
    ...formRes,    
    [e.target.name] : e.target.value}) 

}}
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
// if(formRes.Name) {
//   setErrores({
    
//     ErrorName: true
//   })
// } 
console.log(formRes.temperamentos.length)
console.log(errores.ErrorName)
  return (
    <div>
        <div>
        <form>
            <label> Name </label>
            <input
            name="Name"
            type="text"
            
            onChange={handleInputChange}           
            />
            <label> Height Max</label>
            <input 
            name="Height_max"
            type="text" 
            onChange={handleInputChange}/>
                  
          <label> Height Min</label>
            <input 
            name="Height_min"
            type="text" 
            onChange={handleInputChange}/>
                  
          <label> Weight Max</label>
            <input 
            name="Weight_max"
            type="text" 
            onChange={handleInputChange}/>
                  
          <label> Weight Min</label>
            <input 
            name="Weight_min"
            type="text" 
            onChange={handleInputChange}/>
                  
          <label> Life Span</label>
            <input 
            name="Life_span"
            type="url" 
            onChange={handleInputChange} />

      <label> Image Url</label>
            <input 
            name="Img"
            type="text"  
            onChange={handleInputChange} />
                 
            <label>temperamentos</label>
         <select onChange={handleInputChange} name="temperamentos">
        
        {temperamentos.map((t) =>{
if(formRes.temperamentos.includes(t.NameT)) {

  return(
   
    <option disabled  value={t.NameT}>{t.NameT}</option>
  )
}
return(
   
  <option value={t.NameT}>{t.NameT}</option>
)

        })}
         </select>
         <button onClick={removetemperamentos}> X</button>
    
        </form>
        <input type={"button"} onClick={sendForm} value="Enviar" />
        </div>  




    </div>
  )
}

export default Form