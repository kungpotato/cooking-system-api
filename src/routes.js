const AuthenticatonController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CookingController = require('./controllers/CookingController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticatonController.register
  )
  app.post('/login',
    AuthenticatonController.login
  )
  app.get('/cooks',
    CookingController.index
  )
  app.post('/cooks',
    CookingController.post
  )
}
