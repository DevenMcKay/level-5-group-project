const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

//Middleware
app.use(express.json())
app.use(morgan("dev"))

//Connect to Database
mongoose.connect("mongodb://localhost:27017/menudb", () => console.log("connected to database"))


    //ROUTES
        //1.Endpoint 2.Callback function
app.use("/menu", require("./routes/menuRoute"))


    //Middleware and Next
app.use("/home", (req, res, next) => {
    console.log("Home Route")
    next()
})

app.get("/home", (req, res, next) => {
    console.log("get req received")
    res.send("Home Page")
})

    //Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

    //Server
//1.Port 2.Callback function
app.listen(9000, () => {
console.log("server running on port 9000")
})
       









