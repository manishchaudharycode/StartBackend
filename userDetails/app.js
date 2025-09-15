const express = require('express')

const app = express()

const path = require("path")

app.set("view engine", "ejs")
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render('index')
})

app.post("/create", async (res, req)=> {
    
    const payload = await req.body
    console.log("playload",payload);
    
})
app.post("/login database connection")


app.listen(3000, (err)=> {
    console.log("server run up");
    
})