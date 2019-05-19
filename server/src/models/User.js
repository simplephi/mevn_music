const Promise = require('bluebird')
const Bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8
  console.log('hashnya')

  if (!user.changed('password')) {
    return
  }
  return Bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => Bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
      // beforeSave: hashPassword
    }
  })

  users.prototype.comparePassword = function (password) {
    return Bcrypt.compareAsync(password, this.password)
  }

  users.associate = function (models) {
  }

  return users
}
