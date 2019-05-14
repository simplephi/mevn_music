const AuthenticationController = require('./controllers/AuthenticationController')

// Ini di kirim ke app.js
module.exports = (app) => {
  app.post('/register', AuthenticationController.register)
}
