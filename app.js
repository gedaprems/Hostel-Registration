const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bodyTOObj = require('./scripts/jsobj.js');
const insertNewUser = require('./mongodbc.js');

const app = express();



app.set('view engine','ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render('index',{ejs1:"Hello Everyone",title:"Home | Hostel Registration"});
})

app.post('/success', (req,res)=>{
    
    let data = bodyTOObj(req.body);
    console.log(JSON.stringify(data));
    insertNewUser(data,data.academicyear,data.branch).then((output)=>{
        console.log(output);
        res.render('success',{ejs1:output,title:"Success"});
    });

    
})


app.get('/demo', (req,res)=>{
    res.render('demo',{title:"Demo"});
})

app.post('/demosuccess',(req,res)=>{
    let msg = req.body.data;
    res.send(msg);
})

app.listen(3000,function(){
    console.log("Server is running at 3000");
})




