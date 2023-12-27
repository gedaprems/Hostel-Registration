const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const uuid = require('uuid');
const mongoose = require('mongoose');
const fs = require('fs');
const bodyTOObj = require('./scripts/jsobj.js');
const insertNewUser = require('./mongodbinsertdata.js');
const isValidUser = require('./utils/isValidUser.js');
const exp = require('constants');

const app = express();


app.set('view engine','ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(cookieParser());

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

app.get('/login', (req,res)=>{

    const sessionToken = req.cookies['session_token'];
    if(!sessionToken){
        msg="Please Login First!";
        res.redirect('/');
    }

    // need to add user is still present in the data base  or not! 

    fs.readFile('./session/session.json','utf8',(err,data)=>{
        console.log(data);
        const obj = JSON.parse(data);

        if(obj[sessionToken]){
            if(obj.expiresAt < new Date()){
                msg="Session got Expired!";
                res.redirect('/');
            }
            res.render('login',{msg:"Sucessully Logged In and Session is stored!",title:"Logged In"});
        }else{
            msg="Session got Expired!";
            res.redirect('/');
        }
    })

    
    
    
})

app.post('/login', (req,res)=>{
    const userid = req.body.userid;
    const password = req.body.password;

    isValidUser(loginModel, userid, password, function(output){
        
        if( output == true){
            msg = "";

            // Checking session is already present 

            const sessionTokenOld = req.cookies['session_token'];

            if(sessionTokenOld){
                // need to add user still present in data base or not / they updated the password and username or etc or the session is with same user or not
                res.render('login',{msg:"Sucessully Logged In and Session is stored!",title:"Logged In"});
            }
            // Session Creation
            const sessionToken = uuid.v4();
            const expiresAt =  new Date().setMonth(new Date().getMonth()+1);

            const currUserSession = {
                expiresAt,
                userId : userid,
            }

            fs.readFile('./session/session.json','utf8',(err,data)=>{
                console.log(data);
                let obj = JSON.parse(data);
                obj[sessionToken] = currUserSession;
                let objJson = JSON.stringify(obj);
                console.log(objJson);
                fs.writeFile('./session/session.json',objJson,(err)=>{
                    if(err){
                        msg = "Error while login to store session";
                        res.redirect("/");
                    }
                    res.cookie("session_token", sessionToken, {maxAge: expiresAt});
                    res.render('login',{msg:"Sucessully Logged In ans Session is stored!",title:"Logged In"});
                })
            })


            
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
    
    res.render('list',{msg:"list",title:"list"});
})

app.get('/list',(req,res)=>{

    const conn = mongoose.createConnection("mongodb://127.0.0.1:27017/cse");
    const userData = new mongoose.Schema({
        prn: String,
        phoneno: String,
        firstName: String,
        middleName: String,
        lastName: String,
        dob: String,
        gender: String,
        branch: String,
        academicyear: String,
        marks: String,
        totalMarks: String,
        city: String,
        state: String,
        zip: String
    });

    const userModel = conn.model("first", userData);
    userModel.find({}, function(err,data){
        if(err) res.send(err);
        res.send(data);
    })

    
})

app.listen(3000,function(){
    console.log("Server is running at 3000");
})




