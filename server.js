// IMPORT DEPENDENCIES & SETUP
require("dotenv").config() 
const express = require("express") 
const morgan = require("morgan") 
const PORT = process.env.PORT
const app = express() 
const methodOverride = require("method-override") 
const AnimalRouter = require("./controllers/animal");

const Animal = require("./models/animals");

// MIDDLEWARE (Functions that run between the request and response)
app.use(morgan("dev")) 
app.use(express.static("public")) 
app.use(express.urlencoded({extended: true})) 
app.use(methodOverride("_method")) 
app.use("/animal", AnimalRouter);

app.get("/", async (req, res) => {
    const allAnimals = await Animal.find({});
    res.render("animals/index.ejs", { animals: allAnimals });
  });
// Running our Port
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})