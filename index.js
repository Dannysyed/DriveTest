const express = require("express");
const path = require("path");
const app = express();
const session = require('express-session');
const ejs = require("ejs");
const User = require("./models/User");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const RegisterVehicleController = require("./controllers/RegisterVehicle");
const HomeControler = require("./controllers/Home");
const G2pageController = require("./controllers/G2page");
const GetLicenceController = require("./controllers/getLicence");
const GpageController = require("./controllers/Gpage");
const LoginController = require("./controllers/login");
const UpdateCarController = require("./controllers/updateCarDetails");
const SignupUserController = require("./controllers/Signup");
const SignupController = require("./controllers/Signups");
const ensureDriverAuth = require("./middleware/ensureDriverAuth");
const LoginUserController = require("./controllers/loginUser");
const LogoutController = require("./controllers/logout");

app.set("view engine", "ejs");


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  // Other configuration options
}));

mongoose.connect(
  "mongodb+srv://dannysyed20:dannysyed20@cluster0.pnyxo20.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
).then(() => console.log('Connected!')).catch(() => console.log('Network error')
);
app.get("/", HomeControler);
app.post('/signup/CreateUser', SignupUserController)

app.get("/g2", G2pageController);

app.get("/g", GpageController);

app.post("/g", GetLicenceController);
app.get("/login", LoginController);
app.post('/login/user', LoginUserController)
app.get('/signup', SignupController)
app.post("/g/updateCarDetails", UpdateCarController);
app.get("/logout", LogoutController)
app.post("/g2/user", RegisterVehicleController)
