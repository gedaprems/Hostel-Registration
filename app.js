const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bodyTOObj = require('./scripts/jsobj.js');
const insertNewUser = require('./mongodbinsertdata.js');
const isValidUser = require('./utils/isValidUser.js');

const app = express();


app.set('view engine','ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));


// Model creation -----------------

mongoose.connect("mongodb://127.0.0.1:27017/login");

const loginSchema = new mongoose.Schema({
    userid: String,
    password: String
});

const loginModel = mongoose.model("user", loginSchema);


let msg = ""

// Routes ---------

app.get('/',function(req,res){
    res.render('index',{msg:msg,title:"Home | Hostel Registration"});
})

app.post('/login', (req,res)=>{
    const userid = req.body.userid;
    const password = req.body.password;

    isValidUser(loginModel, userid, password, function(output){
        
        if( output == true){
            msg = "";
            res.render('login',{msg:"Sucessully Logged In!",title:"Logged In"});
        }else if(output == false){
            msg = "Invalid Password !";
            res.redirect('/');
            
        }else{
            msg = output;
            res.redirect('/');
            
        }
    });
    
    
    
})

app.post('/success', (req,res)=>{
    
    let data = bodyTOObj(req.body);
    console.log(JSON.stringify(data));
    insertNewUser(data,data.academicyear,data.branch).then((output)=>{
        console.log(output);
        res.render('success',{msg:output,title:"Success"});
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




