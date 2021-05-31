const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const SwaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')
const YAML = require('yamljs');

const router = require('./routes')
const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/doc', SwaggerUI.serve, SwaggerUI.setup(swaggerFile))
app.use(router)

app.listen(port, () => console.log(`####### Server On in port ${port} #######`))