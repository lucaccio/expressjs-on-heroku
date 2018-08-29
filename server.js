const express = require('express');

const app = express();


app.use(express.static('public'));

app.post('/hello' , (req, res) => {
    console.log('GET for /hello');
    
   // res.write('sei su homes');
})

app.listen(process.env.port || 8080 , () => {
    console.log('server started!')
});



