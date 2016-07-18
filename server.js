var express  = require('express');
var app = express();

var http = require('http').Server(app);
let Sql = require("./mysql.js")();
var io = require('socket.io')(http);
var passport = require('passport');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
require('./passport')(passport);

	app.use(bodyParser());
	app.use(urlencodedParser());
	// set up our express application
	//app.use(express.logger('dev')); // log every request to the console
	//app.use(express.cookieParser()); // read cookies (needed for auth)
	//app.use(express.bodyParser()); // get information from html forms

	// app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	//app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	//app.use(passport.session()); // persistent login sessions
	//app.use(flash()); // use connect-flash for flash messages stored in session


require("./routes.js")(app,io,passport);

http.listen(3001, function(){
  console.log('listening on *:3000');
});





