const express = require ('express');
const app = express();
const path = require ('path');
app.use(express.static('public'))

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030'); //Levantamos un servidor que responda al puerto 3030
})

//RUTAS
app.get('/' , function(req, res){
        res.sendFile(path.resolve(__dirname , './views/index.html'))  //devuelve el archivo index.html
})

app.get('/babbage' , function(req, res){
    res.sendFile(path.resolve(__dirname , './views/babbage.html')) //devuelve al archivo babbage.html
})

app.get('/berners-lee' , function(req, res){
    res.sendFile(path.resolve(__dirname + '/views/berners-lee.html')) //devuelve al archivo berners-lee.html
})

app.get('/clarke' , function(req, res){
    res.sendFile(path.resolve(__dirname , './views/clarke.html')) //devuelve al archivo clarke.html
})

app.get('/hamilton' , function(req, res){
    res.sendFile(path.resolve(__dirname , './views/hamilton.html')) //devuelve al archivo hamilton.html
})

app.get('/hopper' , function(req, res){
    res.sendFile(path.resolve(__dirname , './views/hopper.html')) //devuelve al archivo hopper.html
})

app.get('/lovelace' , function(req, res){
    res.sendFile(path.resolve(__dirname , './views/lovelace.html')) //devuelve al archivo lovelace.html
})

app.get('/turing' , function(req, res){
    res.sendFile(path.resolve(__dirname , './views/turing.html')) //devuelve al archivo turing.html
})
