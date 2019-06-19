
const express = require('express');	
const app = express();	
var path = require('path');	

app.use(express.static(__dirname + '/w3images/'));

 app.get('/', (req, res) => {   
    res.sendFile(path.join(__dirname + '/main.htm')); 
});

 app.get('/art', (req, res) => {   
    res.sendFile(path.join(__dirname + '/art.htm')); 
});

 app.get('/band', (req, res) => {   
    res.sendFile(path.join(__dirname + '/band.htm')); 
});

 app.get('/catering', (req, res) => {   
    res.sendFile(path.join(__dirname + '/catering.htm')); 
});

 app.get('/florist', (req, res) => {   
    res.sendFile(path.join(__dirname + '/florist.htm')); 
});

 app.get('/konditorei', (req, res) => {   
    res.sendFile(path.join(__dirname + '/konditorei.htm')); 
});

 app.get('/location', (req, res) => {   
    res.sendFile(path.join(__dirname + '/location.htm')); 
});

 app.get('/photo', (req, res) => {   
    res.sendFile(path.join(__dirname + '/photo.htm')); 
});

 app.get('/webshop', (req, res) => {   
    res.sendFile(path.join(__dirname + '/webshop.htm')); 
});

 app.listen(80, () => console.log('home listening on port 80!'));
