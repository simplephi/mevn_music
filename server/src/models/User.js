module.exports = (sequelize, DataType) =>
  sequelize.define('users', {
    email: {
      type: DataType.STRING,
      unique: true
    },
    password: DataType.STRING
  })
