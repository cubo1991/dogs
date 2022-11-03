const axios = require('axios');
const { Router } = require('express');
const { Temperamento } = require('../db')
const {API_KEY} = process.env





const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let temperamentos = []

        let razaApis = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        razaApis.data.map((info) => {
            temperamentos += info.temperament + ","


        })
       
        let strTemperamentos = temperamentos.split(',')
        let setTemperamentos = new Set(strTemperamentos)
         let arrayTemperamentos = Array.from(setTemperamentos)
        let nuevoTemperamentos = [];
        let tempbd = await Temperamento.findAll()


        if (tempbd.length < 1) {

            for (let i = 0; i < arrayTemperamentos.length; i++) {

                if (arrayTemperamentos[i][0] === " ") {
                    
                    arrayTemperamentos[i] = arrayTemperamentos[i].slice(1)
                    
                    nuevoTemperamentos.push(arrayTemperamentos[i])
                    

                }
                else { nuevoTemperamentos.push(arrayTemperamentos[i]) 
                    }
            }
            
        }

     
        let setnuevoTemperamentos = new Set(nuevoTemperamentos)
        
        let temperaments = Array.from(setnuevoTemperamentos)
        
        for (let i = 0; i < temperaments.length; i++) {
            await Temperamento.create({


                NameT: temperaments[i]

            })
        }

        res.status(200).send(await Temperamento.findAll({
            attributes: ["NameT"]
        }))
    } catch (error) {
        next(error)
    }

})



module.exports = router;