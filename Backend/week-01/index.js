const { time } = require('console');
const express = require('express');
const path = require('path');
let request_count=0;


const app = express();
function request_middleware(req,res,next){
  let timestramp=new Date().toISOString();
  res.send(`<h1> ${req.method}, ${req.url},${timestramp}`)
  request_count++;
    next();

};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

});
app.get('/request',request_middleware, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sum/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({ ans: a + b });
});

app.get('/mul/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({ ans: a * b });
});

app.get('/dev/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({ ans: a / b });
});

app.get('/sub/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({ ans: a - b });
});

app.listen(3000, () => {
    console.log('server is running');
});