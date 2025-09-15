const express = require("express");
const app = express();
const model = require("./userModel");

app.get("/", (req, res) => {
  res.send("index");
});

app.use(express.json());

app.post("/create", async (req, res) => {
  // try {
    const payload = await req.body;
    console.log("payload",payload);
    
    if (!payload.email || !payload.name || !payload.password) {
      return res.json(
        {
          message: "Fields are required",
          status: false,
        },
        402
      );
    }

    const existingUser = await model.findOne({ email: payload.email });
    if (existingUser) {
      return res.json({
        message: "User aleady exist with this email",
      });
    }

    const user = await model.create(payload);
    return res.json({
      message: "User Created Successfuly",
      success: true,
      user,
    });
  // } catch (error) {
  //   return res.json(
  //     {
  //       error,
  //       message: "Failed to create user",
  //       status: false,
  //     },
  //     500
  //   );
  // }
});

app.put("/update", async (req, res) => {
  const userUpadte = await Model.findOneAndUpdate(
    { username: "manish" },
    { name: "manish chaudhary" },
    { new: true }
  );
  res.send(userUpadte);
});

app.get("/users", async (req, res) => {
  let users = await model.find();
  res.json({
    users
  })
});

app.delete("/user/:email", async (req, res) => {
  const params = req.params

  if(!params.email.includes("@")){
    return res.send("Invaild email")
  }

  let users = await model.findOneAndDelete({ email: params.email });
  res.json({
    message: `user deleted of this email ${params.email}`
  })
});

app.listen(3000, () => {
  console.log("server is up");
});
