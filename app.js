const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render('index',{ejs1:"Hello Everyone"});
})

app.post('/success', (req,res)=>{
    // let data = {};
    // data.
    let jsonObj = JSON.stringify(req.body);
    res.render('success',{ejs1:jsonObj});
})







app.listen(3000,function(){
    console.log("Server is running at 3000");
})




