const express = require("express");

const app = express();

const Model = require("./userModel");
const { model } = require("mongoose");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/create", async (req, res) => {
  let createduser = await Model.create(
    {
      name: "sunny",
      email: "sunny@gamil.com",
      username: "sunny",
    },
    {
      name: "kush",
      email: "kush@gmail.com",
      username: "kush",
    },
    {
        name: "hanu",
        email: "hanu@gmail.com",
        username: "hanu"
    },
    {
        name: "manish",
        email: "manish@gamil.com",
        username: "manish"
    }
  );
  res.send(createduser);
});

app.get("/update", async (req, res) => {
  const userUpadte = await Model.findOneAndUpdate(
    { username: "manish" },
    { name: "manish chaudhary" },
    { new: true }
  );
  res.send(userUpadte);
});

app.get("/read", async (req, res) => {
  let users = await Model.find();
  res.send(users);
});

app.get("/delete",  async (req, res)=> {
       let users  = await Model.findOneAndDelete({username: "ha"})
       res.send(users)
}) 

app.listen(3000);
