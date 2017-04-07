var express = require('express');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({ secret: "asdfasdfasdf" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));
// require ("./test/app.js")(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var assignment=require ("./dbs/app.js");
assignment(app);

app.listen(port, ipaddress);

