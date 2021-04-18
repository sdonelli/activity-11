const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

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

app.put("/login", function (req, res) {
  var isLoginSuccess = handleLogin(req);
  if (isLoginSuccess) {
    res.json({ code: 200, message: "Login success." });
  } else {
    res.json({ code: 401, message: "Invalid credentials." });
  }
});

function handleRegister(registerReq) {
  var user = {
    email: registerReq.body.email,
    fullName: registerReq.body.fullName,
    password: registerReq.body.password,
  };

  users.push(user);
}

function handleLogin(loginReq) {
  var email = loginReq.body.email;
  var password = loginReq.body.password;

  for (var index = 0; index < users.length; index++) {
    if (users[index].email === email && users[index].password === password) {
      return true;
    }
  }

  return false;
}

app.listen(4000);
