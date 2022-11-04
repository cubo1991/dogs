import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperaments } from '../../Store/Actions'
export const Filter = () => {
    let dispatch = useDispatch()
    const [selectT, setSelectT] = React.useState([])
    let temperaments = useSelector((state) => state.temperamentos)
    let razas = useSelector((state) => state.dogsFiltered)
    React.useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])
const filter = () => {
   let aux = []
   console.log(aux)
   
    for (let i  = 0; i < selectT.length; i++) {
       if(selectT[i] === selectT[selectT.length-1]){
        aux = [...aux, `'${selectT[i]}'`]} else {
            aux = [...aux, `'${selectT[i]}' ||`]
        }
       
        let temperaments = 
        console.log(String(aux).split(","))
    }
  
  
    // razas.forEach(e=> { 
    //     if (e.temperamentos[0].includes('Affectionate' || 'Energetic'|| 'Loyal' || 'Gentle'|| 'Independent' ))
    // {console.log(e)} 
    // })
  
} 
const OnClickButton = (e) =>{
    console.log(selectT)
    setSelectT([...selectT, e.target.value])
}
// razas.forEach(e=> { 
//     if (e.temperamentos[0].includes('Affectionate' || 'Energetic'|| 'Loyal' || 'Gentle'|| 'Independent' ))
//     {console.log(e)}
//     if(e.temperamentos[0].includes(['Loyal', 'Independent'])){
//         console.log("ok")
//     }
//     console.log(e.temperamentos.includes(["Bossy"]))
  
// }
// )

;

filter()

    return (
        temperaments.map((t) =>{ return <button onClick={OnClickButton} value={t.NameT}>{t.NameT}</button> })
    )
}

