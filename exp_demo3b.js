var express = require('express');
var app = express();
var routerdemo = require('./exp_demo3a.js');
app.use('/routerdemo',routerdemo);
app.listen(3000);

