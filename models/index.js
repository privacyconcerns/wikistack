const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/wikistack')

//creating models for pages and users
const Page = db.define('pages', {
    title: Sequelize.STRING,
    slug: Sequelize.STRING, //need to specify no special characters
    content: Sequelize.STRING,
    status: Sequelize.BOOLEAN
  })
  
  const User = db.define('users', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
  })

module.exports = {
    db, Page, User
}

