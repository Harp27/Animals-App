// IMPORT DEPENDENCIES & SETUP
require("dotenv").config() 
const express = require("express") 
const morgan = require("morgan") 
const PORT = process.env.PORT
const app = express() 
const methodOverride = require("method-override") 


// MIDDLEWARE (Functions that run between the request and response)
app.use(morgan("dev")) 
app.use(express.static("public")) // treat the public folder as a static file server
app.use(express.urlencoded({extended: true})) // middleware for parsing urlencoded
app.use(methodOverride("_method")) // method will overridden when it sees a query string like ?_method="put"

app.get("/", (req, res) => {
    res.send("server is running")
})
// Running our Port
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})