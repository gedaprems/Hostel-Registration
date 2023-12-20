const mongoose = require('mongoose');
const insertNewUser = require('../mongodbc.js');

const data = {
    name: "Rahul",
    middleName: "Laxman",
    lastName: "Gedam",
    prn: "123456789456123",
    phoneno: "4561234561",
    dob: "12-12-2222",
    gender: "Male",
    branch: "cse",
    academicyear: "First",
    marks: "128",
    city: "chandrapur",
    state: "Maharastra",
    zip: "332222"
}

insertNewUser(data,data.academicyear,data.branch).then((output)=>{
    console.log(output);
});

// console.log(result);