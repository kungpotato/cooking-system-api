const AuthenticatonController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CookingController = require('./controllers/CookingController')
const BookmarksController = require('./controllers/BookmarksController')

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
  app.get('/cooks/:cookId',
    CookingController.show
  )
  app.put('/cooks/:cookId',
    CookingController.put
  )
  app.post('/cooks',
    CookingController.post
  )

  app.get('/bookmarks', BookmarksController.index)
  app.post('/bookmarks', BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId', BookmarksController.delete)
}
