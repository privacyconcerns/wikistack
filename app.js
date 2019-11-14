const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layout = require('./views/layout.js');
const app = express();
const { db, Page, User } = require('./models')

app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));


const wiki = require('./routes/wiki')
app.use('/wiki', wiki)

const user = require('./routes/user')
app.use('/user', user)

//testing database connection
db.authenticate().
then(() => {
  console.log('connected to db')
})

app.get('/', (req, res) => {
  console.log('on page');
  res.send(layout('smile'));
})

const init = async () => {
  await User.sync();
  await Page.sync();
  const PORT = 2021;

  app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
  });
}

init();

