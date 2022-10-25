const { Router } = require('express');
const axios = require('axios')
const {Raza} = require('../db')





const router = Router();



router.get('/', async (req,res, next) =>{ 
const {name} = req.query
const {idRaza} = req.params

return Raza.findAll()
.then((raza => {
    res.send(raza)
}))


// if(!name && !idRaza){
    
//         try {        
//       let razaApis = await axios.get('https://api.thedogapi.com/v1/breeds');
//       console.log(razaApis.data)
//       let filtrado = razaApis.data.map((info) =>{
//         return {
//             // ID: info.id,
//             Name: info.name,
//             // Height: info.height,
//             // Weight: info.weight,
//             // Life_span: info.life_span,
//         }
//       })  
//         res.send(filtrado)
//         } catch (error) {
//             console.log(error)
//         }
// }

// ESTO ME VA A SERVIR PARA EL GET /dogs/{idRaza}
// if(name){
//     try{
//         let razaApis = await axios.get('https://api.thedogapi.com/v1/breeds')
//         let busqueda = razaApis.data.filter(e =>  e.name === name)
//         if(busqueda){
//             console.log(busqueda)
//             res.send(busqueda)
//         }else {
//             res.send("No está")
//         }
        
//     } catch (error){
//         console.log(error)
//     }
// }


  
})

router.get('/:idRaza', async (req, res, next) => {
    const {idRaza} = req.params
    
    if(idRaza){
       let numero= Number(idRaza)
        console.log(numero)
        try {
            let razaApis = await axios.get(`https://api.thedogapi.com/v1/breeds`)
            let busqueda = razaApis.data.find(e => e.id === numero)
            
            res.send(busqueda)
           
        } catch (error) {
            next(error)
        }
    }

})


router.put('/', (req,res, next) =>{
    res.send('put')
})
//POST  minuto 50 primera lecture sequelize 
router.post('/', async (req,res, next) =>{
    try {
        const {Name, Height,  Weight,
            Life_span} = req.body;
        const newRaza = await Raza.create({
            Name,
            Height,
            Weight,
            Life_span
    
        })
        res.send(newRaza)
    } catch (error) {
        next(error)
    }
  
})
router.delete('/', (req,res, next) =>{
    res.send('delete')
})


module.exports = router;