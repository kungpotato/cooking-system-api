// console.log('poato')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./src/models')
const config = require('./src/config/config')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./src/routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 8000)
    console.log(`server start on port ${config.port}`)
  })
