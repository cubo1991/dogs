



export function RAZASAPI(razaApis) 
{

    razaApis.data.map((info) => {
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
}
