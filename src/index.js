import 'babel-polyfill';
const express = require('express');
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
const mongoose = require('mongoose');
var bodyParser = require("body-parser");

const app = express();

app.use(express.static('public'));
app.get('*', (req,res) => {

  const store = createStore();

  res.send(renderer(req, store));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
  console.log('Server listening')
})
