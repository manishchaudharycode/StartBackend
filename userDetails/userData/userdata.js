const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/myuserdatabase")

const userSchema = mongoose.Schema({
    fistname: "manish",
    lastname: "chaudhary",
    email: "manish@gamil.com",
    address: "village-peepali kalan, post-nagala jagdev",
    username: "manish",
    password: "manish@123"

    
    
})

 module.exports =  mongoose.model("users", userSchema)