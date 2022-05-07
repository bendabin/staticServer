const express = require('express');
const app = express(); 

//Serving static assets
// app.use('/static', express.static('assets'));
app.use('/static', express.static('public'));

app.get('/', function (req, res){
    console.log(__dirname );
});

app.listen(3000, ()=> 
    console.log("Server running on port 3000"));