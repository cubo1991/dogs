const { Router } = require('express');
const axios = require('axios')





const router = Router();



router.get('/', async (req,res, next) =>{ 
const {name} = req.query
const {idRaza} = req.params

if(!name && !ID){
    
        try {        
      let razaApis = await axios.get('https://api.thedogapi.com/v1/breeds');
      console.log(razaApis.data)
      let filtrado = razaApis.data.map((info) =>{
        return {
            // ID: info.id,
            Nombre: info.name,
            // Altura: info.height,
            // Peso: info.weight,
            // AñosDeVida: info.life_span,
        }
      })  
        res.send(filtrado)
        } catch (error) {
            console.log(error)
        }
}
if(name){
    try{
        let razaApis = await axios.get('https://api.thedogapi.com/v1/breeds')
        let busqueda = razaApis.data.filter(e =>  e.name === name)
        if(busqueda){
            console.log(busqueda)
            res.send(busqueda)
        }else {
            res.send("No está")
        }
        
    } catch (error){
        console.log(error)
    }
}

if(idRaza){
    try {
        let razaApis = await axios.get('https://api.thedogapi.com/v1/breeds')
        let busqueda = razaApis.data.find(e =>  e.name === name)
        console.log(busqueda)
    } catch (error) {
        
    }
}
  
})

router.get('/')


router.put('/', (req,res, next) =>{
    res.send('put')
})
router.post('/', (req,res, next) =>{
    res.send('post')
})
router.delete('/', (req,res, next) =>{
    res.send('delete')
})


module.exports = router;