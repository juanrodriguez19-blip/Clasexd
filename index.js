const express = require('express')
const comicsRouter = require('./routes/comics')
const app= express()

const PORT = 3000
app.use(express.json())
app.use('/comics', comicsRouter)

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT)
})