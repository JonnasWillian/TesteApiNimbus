const cors = require('cors')
const express = require("express")
const app = express()

app.use(cors())

app.get("/", (req, res) => {
    return res.json ([
        {
            data: "08/12",
            hora: "8h",
            name: "Chuva Forte",
            id: 1
        },

        {
            data: "08/12",
            hora: "14h",
            name: "Chuva Moderada"
        },
        
        {
            data: "08/12",
            hora: "15",
            name: "Chuva Moderada"
        },

        {
            data: "08/12",
            hora: "16h",
            name: "Chuva Forte"
        },

        {
            data: "08/12",
            hora: "17h",
            name: "Chuva Fraca"
        },

        {
            data: "08/12",
            hora: "18h",
            name: "Sem Chuva"
        },

        {
            data: "08/12",
            hora: "19h",
            name: "Sem Chuva"
        },
    ])
})

//Porta de acesso
//Acesso rápido: npm start
app.listen("3000")
console.log("Link para acesso ao teste http://localhost:3000/")