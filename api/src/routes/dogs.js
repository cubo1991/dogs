const { Router } = require('express');
const axios = require('axios')
const { Raza } = require('../db')

const router = Router();



router.get('/', async (req, res, next) => {
  
   
    let razaApis = axios.get('https://api.thedogapi.com/v1/breeds')
    let razaDB = Raza.findAll()

    Promise.all([
        razaApis,
        razaDB
    ])
    .then((respuesta) => {
        const [razaApis, razaDB] = respuesta   
        console.log(razaApis)   
        let razasdeApi  = razaApis.data.map((info) => {
            return {
                ID: info.id,
                Name: info.name,
                Height_max: Number(info.height.imperial.split(" - ")[1]),
                Height_min: Number(info.height.imperial.split(" - ")[0]),
                Weight_max: Number(info.weight.imperial.split(" - ")[1]),
                Weight_min: Number(info.weight.imperial.split(" - ")[0]),                
                Life_span:  Number(info.life_span.split(" - ")[0]),
                img: info.image.url,                
            }
        })
        let razas = [...razaDB, ...razasdeApi]
    
        res.send(razas)
    })
     


})

router.get('/:idRaza', async (req, res, next) => {
    const { idRaza } = req.params

    if (idRaza) {
        let numero = Number(idRaza)
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


router.put('/', (req, res, next) => {
    res.send('put')
})
//POST  minuto 50 primera lecture sequelize 
router.post('/', async (req, res, next) => {
    try {
        const { Name, Height_max, Height_min, Weight_max, Weight_min,
            Life_span } = req.body;
        const newRaza = await Raza.create({
            Name,
            Height_max,
            Height_min,
            Weight_max,
            Weight_min,
            Life_span

        })
        res.send(newRaza)
    } catch (error) {
        next(error)
    }

})
router.delete('/', (req, res, next) => {
    res.send('delete')
})


module.exports = router;