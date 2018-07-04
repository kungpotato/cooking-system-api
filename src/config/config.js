const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  port: process.env.PORT || 8000,
  db: {
    database: process.env.DB_NAME || 'cooking',
    user: process.env.DB_USER || 'cooking',
    password: process.env.DB_PASS || 'cooking',
    options: {
      dialect: process.env.DB_DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: './cooking.sqlite',
      operatorsAliases: Op
    }
  }
}
