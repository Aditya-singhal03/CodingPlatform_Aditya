const express  = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/auth");
const solutionRoute = require("./routes/solution")
const questionRoute = require("./routes/question");
const cors = require("cors");

//Connecting to the dataBase.
mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(()=>console.log("DBConnection Successfull"))
    .catch((err)=>{
        console.log(err);
    });

app.use(cors());
app.use(express.json());
// Defing different routes
app.use("/auth",authRoute);
app.use("/question",questionRoute);
app.use("/solution",solutionRoute)

app.listen(5000, ()=>{
    console.log("Backened server is running");
})