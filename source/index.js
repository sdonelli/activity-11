const express = require("express");
const app = express();

app.use(express.urlencoded());
app.use(express.json());

var users = [
  /* Data for testing */
  { email: "test@gmail.com", fullName: "Test App", password: "12345678" },
];

app.get("/", function (req, res) {
  res.send("Server is up");
});

app.post("/users/register", function (req, res) {
  handleRegister(req);
  res.json({ code: 200, message: "User has been created." });
});

function handleRegister(registerReq) {
  var user = {
    email: registerReq.body.email,
    fullName: registerReq.body.fullName,
    password: registerReq.body.password,
  };

  users.push(user);
}

app.listen(4000);
