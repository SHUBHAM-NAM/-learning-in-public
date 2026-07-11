const express=require('express');
const app=express();
const path=require('path');
app.use(express.json());
const notes=[];
//frontend endpoint
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
//get endpoints

app.get('/notes',(req,res)=>{
    res.json(
notes
    
    )
})
//post endpoints
app.post('/notes',(req,res)=>{
    const note=req.body;

notes.push(note);
res.json({
    msg:`notes the created and total are ${notes.length} `
})
})



app.listen(3000,()=>{
    console.log("server is running on Port:3000");
})