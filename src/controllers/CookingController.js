const {Cook} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const cooks = await Cook.findAll({
        limit: 10
      })
      res.send(cooks)
    } catch (err) {
      res.status(500).send({
        error: 'an error from trying to fetch the cook.'
      })
    }
  },
  async post (req, res) {
    try {
      const cook = await Cook.create(req.body)
      res.send(cook)
    } catch (err) {
      res.status(500).send({
        error: 'an error from trying to create the cook.'
      })
    }
  }
}
