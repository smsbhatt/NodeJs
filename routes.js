var sql = require("./sql.js");
var Sql = new sql();

module.exports = function(app, io, passport) {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });
    app.get('/login', urlencodedParser, function(req, res) {
        res.sendFile(__dirname + '/Login.html');
    });
    app.post('/login', function(req, res) {
    	console.log(req.body.f1.usn);
        // io.on('connection', function(socket) {
        //     socket.on('validate', function(data) {
        //         console.log('data:::', data)
        //         usn = data.uname;
        //         psw = data.pass;
        //         console.log(usn + "," + psw);
        //         Sql.Login(usn, psw, function(response) {
        //             console.log('resp:::', response);
        //             if (response) {
        //                 res.redirect('/home');
        //             } else {
        //                 res.redirect('/');
        //             }
        //             //socket.emit('Success', response);
        //         });
        //         //console.log('Sql::::',require("./sql.js")(usn,psw).toString());
        //     });
        // });
        res.redirect('/home');
    });
    app.get('/home', function(req, res) {
        res.sendFile(__dirname + '/home.html');
    });
}