const express = require('express');
const app = express();
const path = require ('path');

app.listen(3000,() => {
    console.log ("servir corriendo")
})
app.use(express.static('public'));

app.get('/', (req, res) => {
    const home1 = path.resolve (__dirname,'./vierws/home.html') ;
    res.sendFile(home1);
  });

  app.get('/login', (req, res) => {
    const login = path.resolve (__dirname,'./vierws/login.html') ;
    res.sendFile(login);
  });
  app.get('/register', (req, res) => {
    const register = path.resolve (__dirname,'./vierws/register.html') ;
    res.sendFile(register);
  });
  