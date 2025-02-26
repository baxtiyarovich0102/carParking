const fs = require("fs")
const { get } = require("http")

let getData = (fileName)=>{
    let data = fs.readFileSync("./config/"+fileName+".json", "utf-8")
    return data ? JSON.parse(data) : []
}

let writeData = (fileName, data) => {
    fs.writeFileSync("./config/"+fileName+".json", JSON.stringify(data, null, 4), "utf-8")
    return true
}


module.exports = {getData, writeData}