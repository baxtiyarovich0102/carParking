const {getData, writeData} = require("../service/car.service")

let getCars = (req, res) => {
    let datas = getData("data")
    res.status(200).json(datas)
} 

let getCarById = (req,res) => {
    let datas = getData("data")
    let data = datas.find(el => el.id === +req.params.id)
    res.send(data)
}

let addCar = (req, res) => {
    if(!req.body.owner) throw new Error("Owner yo'q");
    if(!req.body.number) throw new Error("Number yo'q");
    if(!req.body.model) throw new Error("Model yo'q");
    let body = req.body
    let datas = getData("data")
    body.parkedAt = new Date()
    body.id = datas ? datas[datas.length-1].id+1 : 1
    datas.push(body)
    writeData("data", datas)
    res.status(201).send(body)
    
}

let updateCar = (req, res) => {
    let datas = getData("data")
    let data = datas.find(el => el.id === +req.params.id)
    if(req.body.owner) data.owner = req.body.owner
    if(req.body.model) data.model = req.body.model
    if(req.body.number) data.number = req.body.number

    writeData("data" , datas)
    res.status(202).send({message: "Success",data})
}

module.exports = {
    getCars,
    getCarById,
    addCar,
    updateCar
}