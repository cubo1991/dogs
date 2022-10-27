const axios  = require("axios");
const link = "https://api.thedogapi.com/v1/breeds";
const apiInfo = async () => {
    const respuesta = await axios.get(link)
    return await respuesta.data.map((b) =>{
        infoApi ={
            id: b.id,
            heightMin: b.height.imperial.split(" - ")[0],
            heightMax: b.height.imperial.split(" - ")[1],
            weightMin: b.weight.imperial.split(" - ")[0],
            weightMax: b.weight.imperial.split(" - ")[1],
            life_span: b.life_span,
            img: b.image.url,
            temperament: b.temperament? b.temperament.split(", ") : ""
        };
        return infoApi
    })
}

let hola = apiInfo()
console.log(hola)
exports.module = apiInfo