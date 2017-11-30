const express = require('express');

var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var redis = require('redis');

const app = express()
app.use(express.static('public'))

var client = redis.createClient();

app.listen(process.env.PORT || 8080, () => console.log('all is ok'))
