// server.js

const express = require('express');
const app = express();
const port = 3000;
const CoinRouter = require('./routes/CoinRouter');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/coins', CoinRouter);

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.listen(port, function(){
  console.log('http://localhost:3000');
});
