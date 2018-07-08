const Sequelize = require('sequelize')
const Op = Sequelize.Op
const path = require('path')

module.exports = {
  port: process.env.PORT || 8000,
  db: {
    database: process.env.DB_NAME || 'cooking',
    user: process.env.DB_USER || 'cooking',
    password: process.env.DB_PASS || 'cooking',
    options: {
      dialect: process.env.DB_DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: path.resolve(__dirname, '../../cooking.sqlite'),
      operatorsAliases: Op
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
