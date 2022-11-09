import React from 'react'

const Form = () => {
  return (
    <div>
        <div>
        <form>
            <label> Name </label>
            <input
            name="Name"
            type="text"            
            />
            <label> Height Max</label>
            <input 
            name="Height Max"
            type="text" />
          <label> Height Min</label>
            <input 
            name="Height Min"
            type="text" />
          <label> Weight Max</label>
            <input 
            name="Weight Max"
            type="text" />
          <label> Weight Min</label>
            <input 
            name="Weight Min"
            type="text" />
          <label> Life Span</label>
            <input 
            name="Life Span"
            type="text"  />
            <label>Temperaments</label>
         <select>
         <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
         </select>
    
        </form>
        <input type="submit" value="Enviar" />
        </div>  




    </div>
  )
}

export default Form