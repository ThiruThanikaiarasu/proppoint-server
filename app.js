const express = require('express')
const app = express()
const { PORT} = require('./configuration/config')

app.get('/', (request, response) => {
    response.status(200).json({message: "it's working ✌️"})
})

app.listen(PORT, console.log(`Server started running at http://localhost:${PORT}/`))