const express=require('express')
const path = require('path');
const app=express();

// routes of the server
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/signUp.html',(req, res) => {
    res.sendFile(path.join(__dirname, 'signUp.html'));

});
app.get('/signIn.html',(req, res) => {
    res.sendFile(path.join(__dirname, 'signIn.html'));

});
//set the port of the server
app.listen(3000,()=>{
    console.log("server is running")
})