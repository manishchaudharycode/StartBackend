const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/myuserdatabase")

const userSchema = mongoose.Schema({
    name: "manish",
    email: "manish@gamil.com",
    url: ""
    
})

 module.exports =  mongoose.model("users", userSchema)