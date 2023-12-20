const mongoose = require('mongoose');
const userModel = require('./utils/userModel.js');


const isValidUser = async (username, password)=>{
    

    const loginModel = await userModel();
    const loginDetails = await loginModel.find({ userid: {$eq : username}});

    if(loginDetails.length == 0){
        console.log("Userid not found");
        return "Userid not found";
    }else if(loginDetails[0]['password'] != password){
        console.log("Password is wrong");
        return "Password is wrong";
    }else{
        console.log("True");
        return true;
    }

}
module.exports = isValidUser;


