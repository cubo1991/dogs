const { Router } = require('express');
const axios = require('axios')
const { Raza, Temperamento } = require('../db')
const { Op } = require('sequelize');
const {API_KEY} = process.env

const router = Router();



router.get('/', async (req, res, next) => {
    const { name } = req.query
    
    try {
        let razaApis = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)



        if (!name) {
            let razaDB = await Raza.findAll({ include:{
                model: Temperamento,
                through: {
                    attributes: []
                }
                }
            })
            let razasdeApi = razaApis.data.map((info) => {       
                


                return {
                    ID: info.id,
                    Name: info.name,
                    Height_max: Number(info.height.imperial.split(" - ")[1]),
                    Height_min: Number(info.height.imperial.split(" - ")[0]),
                    Weight_max: Number(info.weight.imperial.split(" - ")[1]),
                    Weight_min: Number(info.weight.imperial.split(" - ")[0]),
                    Life_span: Number(info.life_span.split(" - ")[0]),
                    Img: [{url:info.image.url}, {id: info.image.id}],
                    temperamentos: [{Name: info.temperament}]
                    
                }
            })
            let razas = [...razaDB, ...razasdeApi]

            res.send(razas)
        }


        if (name) {

            let razaDB = await Raza.findAll({
                include: [Temperamento],
                where: { Name: { [Op.substring]: name } },
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
        next(error)
    }

})

router.get('/:idRaza', async (req, res, next) => {
    const { idRaza } = req.params
    function soloNumeros(str) {
        return /^\d+$/.test(str);  }
      
        
        try {
            if (soloNumeros(idRaza)) {
                let numero = Number(idRaza)
            let razaApis = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
            let busqueda = razaApis.data.find(e => e.id === numero)
            if(busqueda){res.send(busqueda)}else {
                res.status(404).send("Esta página no existe")
            }

           
        } else {
            let razaDB = await Raza.findByPk(idRaza, {include: [Temperamento]})
            if(razaDB){res.send(razaDB)}else {
                res.status(404).send("Esta página no existe")
            }
            

        }
        } catch (error) {         
               error.message= "Esta página no existe"
               error.status = 404
           next(error)
            
            
        }
    

})

router.post('/', async (req, res, next) => {
    try {
        const { Name, Height_max, Height_min, Weight_max, Weight_min,
            Life_span, ID } = req.body;
        const newRaza = await Raza.create({
            Name,
            Height_max,
            Height_min,
            Weight_max,
            Weight_min,
            Life_span,
            Image: "https://images.dog.ceo/breeds/hound-plott/hhh_plott002.JPG"
            

        })
       if(ID){
        let temperamento = await Temperamento.findAll({
            where: {ID: ID}
        })
        newRaza.addTemperamento(temperamento)}
        res.send(newRaza)
    } catch (error) {
        next(error)
    }

})


    
     
  
  



module.exports = router;