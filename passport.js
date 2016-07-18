var LocalStrategy   = require('passport-local').Strategy;
var sql=require("./sql.js");
var Sql=new sql();

module.exports = function(passport) {
 passport.serializeUser(function(user, done) {
        //console.log();
        done(null, user.id);
    });
 passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'usn',
        passwordField : 'psw',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, usn, psw, done) { // callback with email and password from our form

    	console.log(usn);
         Sql.Login(usn,psw, function(err,response) {

         	if (err)
                 return done(err);
             if(response){
                return done(null, response);
            }else{
                 return done(null, false); 
            }
         //   console.log('resp:::',response);
        });

        User.findOne({ 'local.email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            console.log(user);
            return done(null, user);
        });

    }));


}