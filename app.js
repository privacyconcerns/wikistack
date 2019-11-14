const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  console.log('on page');
  res.send('<h1>homepage</h1>');
});

const PORT = 2021;

app.listen(PORT, () => {
    console.log(`app is listening on port 2021`);
});
