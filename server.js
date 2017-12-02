const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(process.env.PORT);

const redis = require('redis')
var client = redis.createClient(process.env.REDIS_URL);
