var sql = require("./sql.js");
var Sql = new sql();
var user;

module.exports = function(app, io, passport) {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });
    app.get('/login',function(req, res) {
        res.sendFile(__dirname + '/Login.html');
    });
    app.post('/login', function(req, res) {
    	console.log(req.body.user.usn);
    	
        // io.on('connection', function(socket) {
        //     socket.on('validate', function(data) {
        //         console.log('data:::', data)
        //         usn = data.uname;
        //         psw = data.pass;
        //         console.log(usn + "," + psw);
                Sql.Login(req.body.user.usn, req.body.user.psw, function(response) {
                    console.log('resp:::', response);
                    if (response) {
                    	user=response;
                        res.redirect('/home');
                    } else {
                        res.redirect('/');
                    }
                    //socket.emit('Success', response);
                });
        //         //console.log('Sql::::',require("./sql.js")(usn,psw).toString());
        //     });
        // });
        //res.redirect('/home');
    });
    app.get('/home', function(req, res) {
        res.render(__dirname + '/home.ejs',{message: user[0].UserName.toString()});
    });
}