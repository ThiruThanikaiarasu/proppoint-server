const express = require('express')
const app = express()
const { PORT, DB} = require('./configuration/config')

const connect = require('./database/connection')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (request, response) => {
    response.status(200).json({message: "it's working ✌️"})
})

connect()
    .then( () => {
        try{
            app.listen(PORT, () => {
                console.log(`Server started running at http://localhost:${PORT}/`)
            })
        }
        catch(error)
        {
            console.log(`Can't connect to the server : ${error}`)
        }
    })
    .catch(error => {
        console.log(`Error while connecting to database : ${error}`)
    })