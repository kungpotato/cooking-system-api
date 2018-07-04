const AuthenticatonController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  app.post('/register', AuthenticatonController.register)
}
