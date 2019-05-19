const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Email Harus diisi'
          })
          break
        case 'password':
          res.status(400).send({
            error: `

            Password gagal, harus terdiri dari:
              <br>
              1. Ada huruf kapital dan huruf kecil
              <br/>
              2. Minimal 8 karakter dan tidak lebih dari 32 karakter
              
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Data yang diberikan gagal'
          })
      }
    } else {
      next()
    }
  }
}
