const { Router } = require('express');
const axios = require('axios')
const { Raza, Temperamento } = require('../db')
const { Op } = require('sequelize');
const { API_KEY } = process.env

const router = Router();



router.get('/', async (req, res, next) => {
    const { name } = req.query
    const { idRaza } = req.params

    try {
      
        let razaApis = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

        if (!name) {
            let razaDB = await Raza.findAll({
                include: {
                    model: Temperamento,
                    attributes: ["NameT"],
                    through: {
                        attributes: []
                    }
                }
            })

          
            let razaDBMap = razaDB.map((info) => {
                
                let temperamentos = info.temperamentos.map((t) => {
                    return t.NameT
                })
                 
              
                return {
                    ID: info.Id,
                    Name: info.Name,
                    Height_max: Number(info.Height_max),
                    Height_min: Number(info.Height_min),
                    Weight_max: Number(info.Weight_max),
                    Weight_min: Number(info.Weight_min),
                    Life_span: info.Life_span,
                    Img: info.Img,
                    temperamentos: temperamentos
                   



                }



            })

            let razasdeApi = razaApis.data.map((info) => {
                let temperamentoSplit = String(info.temperament).split(",")
                let nuevoTemperamentos =[]
                for(let i = 0; i < temperamentoSplit.length; i++){
                   
                if (temperamentoSplit[i][0] === " ") {
                    
                    temperamentoSplit[i] = temperamentoSplit[i].slice(1)
                    
                    nuevoTemperamentos = [...nuevoTemperamentos, temperamentoSplit[i]]
                    

                }
                else { nuevoTemperamentos = [...nuevoTemperamentos, temperamentoSplit[i]] 
                    }
                }
                
               

                return {
                    ID: info.id,
                    Name: info.name,
                    Height_max: Number(info.height.imperial.split(" - ")[1]),
                    Height_min: Number(info.height.imperial.split(" - ")[0]),
                    Weight_max: Number(info.weight.imperial.split(" - ")[1]),
                    Weight_min: Number(info.weight.imperial.split(" - ")[0]),
                    Life_span:  Number(info.life_span.split(" - ")[0]),
                    Img: info.image.url,
                    temperamentos: [nuevoTemperamentos]

                }
            })
            let razas = [ ...razasdeApi, ...razaDBMap]
            res.send(razas)
        }


        if (name) {

            let razaDB = await Raza.findAll({
                include: {
                    model: Temperamento,
                    attributes: ["NameT"],
                    through: {
                    attributes:[]
                }
                },
                where: { Name: { [Op.iLike]:"%"+ name + "%" } },
            })
            let razaDBMap = razaDB.map((info) => {

                let temperamentos = info.temperamentos.map((t) => {
                    return t.NameT
                })

              
                return {
                    ID: info.Id,
                    Name: info.Name,
                    Height_max: info.Height_max,
                    Height_min: info.Height_min,
                    Weight_max: info.Weight_max,
                    Weight_min: info.Weight_min,
                    Life_span: info.Life_span,
                    Img: info.Img,
                    temperamentos: temperamentos
                   



                }



            })
            let razasdeApi = razaApis.data.map((info) => {
                let temperamentoSplit = String(info.temperament).split(",") 
                let nuevoTemperamentos =[]
                for(let i = 0; i < temperamentoSplit.length; i++){
                   
                if (temperamentoSplit[i][0] === " ") {
                    
                    temperamentoSplit[i] = temperamentoSplit[i].slice(1)
                    
                    nuevoTemperamentos = [...nuevoTemperamentos, temperamentoSplit[i]]
                    

                }
                else { nuevoTemperamentos = [...nuevoTemperamentos, temperamentoSplit[i]] 
                    }
                }
                
                   return {
                    ID: info.id,
                    Name: info.name,
                    Height_max: Number(info.height.imperial.split(" - ")[1]),
                    Height_min: Number(info.height.imperial.split(" - ")[0]),
                    Weight_max: Number(info.weight.imperial.split(" - ")[1]),
                    Weight_min: Number(info.weight.imperial.split(" - ")[0]),
                    Life_span:  Number(info.life_span.split(" - ")[0]),
                    Img: info.image.url,
                    temperamentos: [nuevoTemperamentos]

                }
            })
            let apiFiltrado = razasdeApi.filter(n => n.Name.toUpperCase().includes(name.toUpperCase()) === true)
            
            
            let razas = [...apiFiltrado,...razaDBMap]
            if (razas.length === 0) { res.send("No se ha encontrado ninguna raza con ese nombre") } else {
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
        return /^\d+$/.test(str);
    }


    try {
        if (soloNumeros(idRaza)) {
            let numero = Number(idRaza)
            let razaApis = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
            let busqueda = razaApis.data.find(e => e.id === numero)

            if (busqueda) { 
                let dogsData= {
                    ID: busqueda.id,
                    Name: busqueda.name,
                    Height_max: Number(busqueda.height.imperial.split(" - ")[1]),
                    Height_min: Number(busqueda.height.imperial.split(" - ")[0]),
                    Weight_max: Number(busqueda.weight.imperial.split(" - ")[1]),
                    Weight_min: Number(busqueda.weight.imperial.split(" - ")[0]),
                    Life_span:  Number(busqueda.life_span.split(" - ")[0]),
                    Img: busqueda.image.url,
                    temperamentos: [busqueda.temperament.split(',')]
                    
                }
                console.log(dogsData)
                res.send(dogsData) } else {
                res.status(404).send("Esta página no existe")
            }


        } else {
            let razaDB = await Raza.findByPk(idRaza, { include: {
                model: Temperamento,
                attributes: ["NameT"],
                through: {
                    attributes:[]
                }
                
            } })
            if (razaDB) {
                let dogsData= {
                    ID: razaDB.Id,
                    Name: razaDB.Name,
                    Height_max: Number(razaDB.Height_max),
                    Height_min: Number(razaDB.Height_min),
                    Weight_max: Number(razaDB.Weight_max),
                    Weight_min: Number(razaDB.Weight_min),
                    Life_span:  razaDB.Life_span,
                    Img: razaDB.Img,
                  temperamentos: [razaDB.temperamentos.map(nombre => {return nombre.NameT  + " "})]
                    
                }
                console.log(dogsData)
                
                res.send(dogsData) } else {
                res.status(404).send("Esta página no existe")
            }

            

        }
    } catch (error) {
        error.message = "Esta página no existe"
        error.status = 404
        next(error)


    }


})

router.post('/', async (req, res, next) => {
    try {
        const { Name, Height_max, Height_min, Weight_max, Weight_min,
            Life_span, NameT, Img } = req.body;
        const newRaza = await Raza.create({
            Name,
            Height_max,
            Height_min,
            Weight_max,
            Weight_min,
            Life_span,
            Img


        })
        
        if (NameT) {
            let temperamento = await Temperamento.findAll({
                where: { NameT: NameT },
                attributes: ["NameT"]
            })
            newRaza.addTemperamento(temperamento)
        }
        res.send(newRaza)
    } catch (error) {
        next(error)
    }

})









module.exports = router;