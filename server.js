 
require('dotenv').config();

const debug = require('debug')('my-debug');
 
const express = require('express');

const app = express();

const db = require(__dirname + '/config/dbconnection');

app.set('port', (process.env.PORT || 9000));

app.use(express.static(__dirname + '/public'));

app.get('/offices' , (req, res) => {
    console.log(new Date());
    console.log('GET for /offices');
    
    /*
    db.conn.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
          console.log('User: ', results[0].username);
          res.send(results); 
      });
*/
db.query('SELECT * FROM offices', function (error, results, fields) {
    if (error) throw error;
      console.log('Data: ', results[0]);
      res.send(results); 
  });
 

    //db.conn.end();

})

app.listen(app.get('port'), () => {

    console.log('Node running on port ' , app.get('port'), ' mode: ' , process.env.NODE_ENV);
});



