const { users } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await users.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Sdh ada emailnya nah.'
      })
      // email sudah ada
    }
  }
}
