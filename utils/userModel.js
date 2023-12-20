const mongoose = require('mongoose');


const userModel = async (userid, password)=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/login");

    const loginSchema = new mongoose.Schema({
        userid: String,
        password: String
    });

    return mongoose.model("user", loginSchema);

}

module.exports = userModel;