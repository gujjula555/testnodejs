const express = require("express");
const app = express();
const PORT = process.env.PORT || 4050;

app.get("/", (req, res) => {
  res.send(`Hey it's working !!`);
});
app.listen(PORT, () => console.log(`server up and running at  ${PORT}`));


const uri = "mongodb+srv://ramesh:raja5599@cluster0.fc1vsgt.mongodb.net/?retryWrites=true&w=majority";


const mongoose = require("mongoose");
const cors = require("cors");

//IMPORT ROUTES
const authRoute = require("./routes/auth/auth");
const authDashboard = require("./routes/auth/authDashboard");

//ACCESSING THE ENVIRONMENT VARIABLES
//dotenv.config();//

//CONNECTION TO DATABASE
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db  ")
);

//MIDDLEWARE -> DISALBING CORS AND USED FOR JSON OUTPUT
app.use(express.json(), cors());

//ROUTE MIDDLEWARE
app.use("/api/users", authRoute);
app.use("/api/dashboard", authDashboard);
