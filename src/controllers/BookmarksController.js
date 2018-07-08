const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {cookId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          CookId: cookId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error from trying to fetch the cook.'
      })
    }
  },
  async post (req, res) {
    try {
      const bookmark = req.body
      await Bookmark.create(bookmark)
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error from trying to create the bookmark.'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error from trying to delete the bookmark.'
      })
    }
  }
}
