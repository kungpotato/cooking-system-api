const {
  sequelize,
  Cook,
  User,
  Bookmark
} = require('../src/models')

const Promise = require('bluebird')
const cooks = require('./cooks.json')
const users = require('./user.json')
const bookmarks = require('./bookmarks.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
    await Promise.all(
      cooks.map(cook => {
        Cook.create(cook)
      })
    )
    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )
  })
