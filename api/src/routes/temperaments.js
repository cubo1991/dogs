const axios = require('axios');
const { Router } = require('express');
const { Temperamento } = require('../db')





const router = Router();

router.get('/', async (req,res, next) =>{
    try {        
            let temperamentos = []
         
              let razaApis =await axios.get('https://api.thedogapi.com/v1/breeds');
             razaApis.data.map((info) =>{
                temperamentos += info.temperament+","            
               
              
              })  
              let strTemperamentos = temperamentos.split(',')
              let setTemperamentos = new Set(strTemperamentos)
              let arrayTemperamentos = Array.from(setTemperamentos)
              let nuevoTemperamentos = []; 
              let tempbd = await Temperamento.findAll()
           
              if(tempbd.length < 1)
              {

                  for (let i = 0; i < arrayTemperamentos.length; i++) {
                      
                      if(arrayTemperamentos[i][0] === " "){
                                  arrayTemperamentos[i][0].shift                            
                                  nuevoTemperamentos.push(arrayTemperamentos[i])
                              }
                              else {nuevoTemperamentos.push(arrayTemperamentos[i])}
                    }                  
                    for (let i = 0; i < nuevoTemperamentos.length; i++) { 
                     await Temperamento.create({Name: nuevoTemperamentos[i] 
      
                    })}
              }
          
          
           
            
             
              res.send(nuevoTemperamentos)
                } catch (error) {
                    console.log(error)
                }
    
})
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