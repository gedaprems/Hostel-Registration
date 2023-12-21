const mongoose = require('mongoose');
const userModel = require('../utils/isValidUser.js');


userModel("gedamprems","Chocolate@123",function(data){
    console.log(data);
})




// const isValidUser = async (loginModel, username, password)=>{
    

//     // const loginModel = await userModel();
//     // const loginDetails = await loginModel.find({ userid: {$eq : username}});

//     console.log(loginModel);
//     return "Hello";

//     // loginModel.findOne({userid: {$eq : username}}, (err,data)=>{
//     //     console.log(data);
//     // })

//     // if(loginDetails.length == 0){
//     //     console.log("Userid not found");
//     //     return "Userid not found";
//     // }else if(loginDetails[0]['password'] != password){
//     //     console.log("Password is wrong");
//     //     return "Password is wrong";
//     // }else{
//     //     console.log("True");
//     //     return true;
//     // }

// }
// module.exports = isValidUser;


