const express = require('express');
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://gedamprems2:<password>@cluster0.hieyltz.mongodb.net/?retryWrites=true&w=majority");

const userlogin = new mongoose.Schema({
    name : String,
    rating: Number
});

const user  = mongoose.model("user",userlogin);
const newUser = new user({
    name: "Premagar Gedam",
    rating: 12
});

newUser.save();