const mongoose = require('mongoose');


const insertNewUser = async (data, year, dbname) => {

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/" + dbname);

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
            city: String,
            state: String,
            zip: String
        });

        const userModel = mongoose.model(year, userData);
        const newUser = new userModel({
            prn: data.prn,
            phoneno: data.phoneno,
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            dob: data.dob,
            gender: data.gender,
            branch: data.branch,
            academicyear: data.academicyear,
            marks: data.marks,
            city: data.city,
            state: data.state,
            zip: data.zip
        });


        newUser.save();

        return "Suceess";


    }
    catch (e) {
        return "Failed";
    }



}


module.exports = insertNewUser;