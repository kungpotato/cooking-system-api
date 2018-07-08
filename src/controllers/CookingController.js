const {Cook} = require('../models')
const Sequelize = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      let cooks = null
      const search = req.query.search
      if (search) {
        cooks = await Cook.findAll({
          where: {
            [Sequelize.Op.or]: [
              {title: {[Sequelize.Op.like]: '%' + search + '%'}} // ,
              // {อื่นๆ: {[Sequelize.Op.like]: '%' + search + '%'}} // ,
            ]
          }
        })
      } else {
        cooks = await Cook.findAll({
          limit: 10
        })
      }
      res.send(cooks)
    } catch (err) {
      res.status(500).send({
        error: 'an error from trying to fetch the cook.'
      })
    }
  },
  async show (req, res) {
    try {
      const cook = await Cook.findById(req.params.cookId)
      res.send(cook)
    } catch (err) {
      res.status(500).send({
        error: 'an error from trying to show the cook.'
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
  },
  async put (req, res) {
    try {
      await Cook.update(req.body, {
        where: {
          id: req.params.cookId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error from trying to update the cooking.'
      })
    }
  }
}
