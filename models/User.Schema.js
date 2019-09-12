const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    customername: String,
    address: String,
    designation: String,
    dept: String,
    emailid: String,
    contactno: Number,
    firstname: String,
    lastname: String,
    gender: String,
    dob: Date
})
module.exports = mongoose.model('users', UserSchema);