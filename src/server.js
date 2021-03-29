const express = require('express')
const morgan = require('morgan')

require('dotenv').config()

const router = require('./routes')
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(router)

app.listen(port, () => console.log(`####### Server On in port ${port} #######`))