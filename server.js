
const debug = require('debug')('my-debug');
 
const express = require('express');

const app = express();

const mysql = require('mysql')

const conn = mysql.createConnection({
    host : 'localhost',
    database : 'sandbox',
    user : 'root',
    password:''
});


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/testdb' , (req, res) => {
    console.log('GET for /testdb');
    
    conn.connect(function(err){
        if(err) {
            console.log(err.code); // 'ECONNREFUSED'
            console.log(err.fatal); // true
            console.log(err.message);
        } else {
            conn.query('SELECT * FROM users', function (error, results, fields) {
                if (error) throw error;
                  console.log('User: ', results[0].username);
              });
              conn.end();
        }
        
    });
   
    
    
    





 
})

app.listen(app.get('port'), () => {
    console.log('Node running on port ' , app.get('port'));
});



