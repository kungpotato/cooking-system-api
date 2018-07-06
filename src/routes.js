const AuthenticatonController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticatonController.register
  )
  app.post('/login',
    AuthenticatonController.login
  )
}
