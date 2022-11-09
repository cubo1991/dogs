import React from 'react'

const Form = () => {
  return (
    <div>
        <div>
        <form>
            <label> Nombre </label>
            <input
            name="Nombre"
            type="text"            
            />
            <label> Altura Máxima</label>
            <input 
            name="Altura Máxima"
            type="text" />
          <label> Altura Mínima</label>
            <input 
            name="Altura Mínima"
            type="text" />
          <label> Peso Máxima</label>
            <input 
            name="Peso Máxima"
            type="text" />
          <label> Peso Mínimo</label>
            <input 
            name="Peso Mínimo"
            type="text" />
          <label> Años de vida</label>
            <input 
            name="Años de vida"
            type="text"  />
            <label>Temperamentos</label>
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