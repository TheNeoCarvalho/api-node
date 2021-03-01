const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
    res.json({msg: 'API'})
})

app.listen(port, () => console.log(`Server On in port ${port}`))