const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'))

app.get('/',function(req,res){
    res.render('index',{ejs1:"Hello Everyone"});
})

app.listen(3000,function(){
    console.log("Server is running at 3000");
})




