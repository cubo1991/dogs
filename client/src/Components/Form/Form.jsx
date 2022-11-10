import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperaments } from '../../Store/Actions'

const Form = () => {
  let dispatch = useDispatch()
  React.useEffect(()=>{
       
    dispatch(getTemperaments()) 
  }, []
    )
 
  let temperamentos = useSelector(state => state.temperamentos)

  let [formRes, setFormRes] = React.useState   ({
    name: '',
    Height_Max: '',
    Height_Min: '',
    Weight_Max: '',
    Weight_Min: '',
    Life_Span: '',
    Temperaments: []
}
)
const handleInputChange = (e) => {
  console.log(e.target.name)
  console.log(e.target.value)
  if(e.target.name === "Temperaments") {
    setFormRes({
      ...formRes,    
      [e.target.name] : [...formRes.Temperaments, e.target.value]}) 
  }else {
  setFormRes({
    ...formRes,    
    [e.target.name] : e.target.value}) 

}}

console.log(formRes)
  return (
    <div>
        <div>
        <form>
            <label> Name </label>
            <input
            name="name"
            type="text"
            value={formRes.name}
            onChange={handleInputChange}           
            />
            <label> Height Max</label>
            <input 
            name="Height_Max"
            type="text" 
            onChange={handleInputChange}/>
                  
          <label> Height Min</label>
            <input 
            name="Height_Min"
            type="text" 
            onChange={handleInputChange}/>
                  
          <label> Weight Max</label>
            <input 
            name="Weight_Max"
            type="text" 
            onChange={handleInputChange}/>
                  
          <label> Weight Min</label>
            <input 
            name="weight_Min"
            type="text" 
            onChange={handleInputChange}/>
                  
          <label> Life Span</label>
            <input 
            name="Life_Span"
            type="text"  
            onChange={handleInputChange} />
                 
            <label>Temperaments</label>
         <select onChange={handleInputChange} name="Temperaments">
        
        {temperamentos.map((t) =>{
          return(
            <option value={t.NameT}>{t.NameT}</option>
          )
        })}
         </select>
    
        </form>
        <input type="submit"  value="Enviar" />
        </div>  




    </div>
  )
}

export default Form