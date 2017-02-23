
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var logOff = require('./routes/logOff');
var createAccount = require('./routes/createAccount');
var editProfile = require('./routes/editProfile');
var groups = require('./routes/groups');
var login = require('./routes/login');
var myProfile = require('./routes/myProfile');
var searchResult = require('./routes/searchResult');
var settings = require('./routes/settings');
var welcome = require('./routes/welcome');
var addNewAccount = require('./routes/addNewAccount');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/log-off', logOff.view);
app.get('/create-account', createAccount.view);
app.get('/edit-profile', editProfile.view);
app.get('/groups', groups.view);
app.get('/login', login.view);
app.get('/my-profile', myProfile.view);
app.get('/search-result', searchResult.view);
app.get('/settings', settings.view);
app.get('/welcome', welcome.view);
app.get('/add-new-account', addNewAccount.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
