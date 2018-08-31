const mysql = require('mysql');
    
var connection = connect();

 
 function connect() { 

    var connection  = mysql.createConnection({
        host : 'localhost',
        database : 'sandbox',
        user : 'root',
        password:'prisma2013'
    });
     
    connection.connect();

    connection.on('error',  (err) => {
        if(err) {
            console.log(err.code); // 'ECONNREFUSED'
            console.log(err.fatal); // true
            console.log(err.message);
        } else {
            console.log("connesso");
        }
    })

    return connection;
}
    
function query(sql,params,callback) {

 
    connection.query(sql, params, (err, data) => {
        console.log('ok query')
        if(err) {
            console.log(err)
        }
        callback(err, data);
    }); 

    
}


exports.query = query;

//exports.conn = connection;
    

 
 
 
 