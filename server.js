const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(process.env.PORT || 8080, () => console.log('all is ok'));

//const redis = require('redis')
//var client = redis.createClient(process.env.REDIS_URL);
