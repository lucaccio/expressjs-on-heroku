const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/hello' , (req, res) => {
    console.log('GET for /hello');
    // res.write('sei su homes');
})

app.listen(app.get('port'), () => {
    console.log('Node running on port ' , app.get('port'));
});



