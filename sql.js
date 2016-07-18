let mySql = require("./mysql.js")();
module.exports = class sql {
    
    constructor() {

    }
    
    Login(usn, psw, callback) {
        var uid;
        mySql.query('SELECT * FROM Users where username=? and psw=?', [usn, psw], function(err, rows) {
            if (err) throw err;
            if(rows.length>0){
	            console.log('Data received from Db:\n');
	            uid = rows[0].user_id.toString();
	            console.log('uid ::', uid);
	        }
        	 callback(uid);
        });
       
    }
}