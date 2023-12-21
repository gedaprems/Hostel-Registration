const mongoose = require('mongoose');


const isValidUser = async (newModel, username,password, fn)=>{
    
    newModel.find({ userid: {$eq : username}},function(err,data){
        if(data.length == 0){
            fn("User id not found!");
        }
        else if(err){
            fn("Getting error while fetching data from database!");
        }else{ 
            fn(data[0].password == password);
        }
    })

}



// userModel("gedamprems","Chocolfdfdfdfate@123", function(data){
//     console.log(data);
// })
module.exports = isValidUser;