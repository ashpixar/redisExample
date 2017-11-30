const express = require('express');

//var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var redis = require('redis');

//var app = express()
//var client = redis.createClient();


const app = express()

app.use(express.static('public'))

app.listen(process.env.PORT || 8080, () => console.log('all is ok'))
