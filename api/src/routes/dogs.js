const { Router } = require('express');
const axios = require('axios')
const { Raza, Temperamento } = require('../db')
const { Op } = require('sequelize');
const db = require('../db');

const router = Router();



router.get('/', async (req, res, next) => {
    const { name } = req.query
    const { idRaza } = req.params
    try {
        let razaApis = await axios.get('https://api.thedogapi.com/v1/breeds')



        if (!name) {
            let razaDB = await Raza.findAll({ include: [Temperamento] })
            let razasdeApi = razaApis.data.map((info) => {
                return {
                    ID: info.id,
                    Name: info.name,
                    Height_max: Number(info.height.imperial.split(" - ")[1]),
                    Height_min: Number(info.height.imperial.split(" - ")[0]),
                    Weight_max: Number(info.weight.imperial.split(" - ")[1]),
                    Weight_min: Number(info.weight.imperial.split(" - ")[0]),
                    Life_span: Number(info.life_span.split(" - ")[0]),
                    img: info.image.url,
                }
            })
            let razas = [...razaDB, ...razasdeApi]

            res.send(razas)
        }


        if (name) {

            let razaDB = await Raza.findAll({
                include: [Temperamento],
                where: { Name: { [Op.substring]: `${name}` } },
            })
            let dbFiltrado = razaDB.map((info) => info.Name)
            let razasdeApi = razaApis.data.map((info) => info.name
            )
            let apiFiltrado = razasdeApi.filter(n => n.includes(name) === true)
            console.log(dbFiltrado)
            let razas = [...dbFiltrado, ...apiFiltrado]
            if (razas.length === 0) { res.send("No hay razas disponibles") } else {
                res.send(razas)
            }





        }


    } catch (error) {
        console.log(error)
    }

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