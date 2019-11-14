const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
})

//creating models for pages and users
const Page = db.define('pages', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING, //need to specify no special characters
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed'),
      defaultValue: 'closed'
    }
  })
  
  const User = db.define('users', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  })

module.exports = {
    db, Page, User
}

