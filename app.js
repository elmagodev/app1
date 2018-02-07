const express = require('express');
const bodyparser = require('body-parser');

const app= express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',function(request,response){
    response.send('Hello FiveP <3');
});

app.get('/contact',(req,res)=>{
    res.send('contact us?');
});

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('i got some data!');
});

console.log('listen on port 3000');
app.listen(3000);