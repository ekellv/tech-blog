const { User } = require('../models');

const userData =
[
  {
    "username": "CharlieKelly",
    "email": "charlie@paddys.com",
    "password": "charliepassword"
  },
  {
    "username": "RonaldMac",
    "email": "mac@paddys.com",
    "password": "macpassword"
  },
  {
    "username": "DennisReynolds",
    "email": "dennis@paddys.com",
    "password": "dennispassword"
  },
  {
    "username": "DeeReynolds",
    "email": "dee@paddys.com",
    "password": "deepassword"
  },
  {
    "username": "FrankReynolds",
    "email": "frank@paddys.com",
    "password": "frankpassword"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;