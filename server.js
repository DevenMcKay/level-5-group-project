const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config()

// ... other imports
const path = require("path")

//Middleware
app.use(express.json())
app.use(morgan("dev"))

//ROUTES
//1.Endpoint 2.Callback function
app.use("/menu", require("./routes/menuRoute"))

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")))

//Connect to Database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to database"))

//Error handler
app.use((err, req, res, next) => {
    res.send(err.message )
})

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Server
//1.Port 2.Callback function
app.listen(3080, () => {
    console.log("server running on port 3080")
})










