const express = require("express");
const Animal = require("../models/animals");

const router = express.Router()


router.get('/', async (req, res) => { 
    const allAnimals = await Animal.find({})
    res.render('animals/index.ejs', { animals: allAnimals }
    )
})

router.get("/new", (req, res) => {
    res.render('animals/new.ejs')
})

router.post("/", async (req, res) => {
    if (req.body.extinct === "on") {
      req.body.extinct = true;
    } else {
      req.body.extinct = false;
    }
  
    const newAnimal = new Animal({
      species: req.body.species,
      location: req.body.location,
      lifeExpectancy: req.body.lifeExpectancy, 
      extinct: req.body.extinct,
    });
  
    await newAnimal.save();
    res.redirect("/animal");
  });

router.get('/:id', async (req, res) => { 
    const id = req.params.id;
    const animal = await Animal.findById(id)
    res.render('animals/show.ejs', { animal }
    )
})

router.get("/:id/edit", async (req, res) => {
    const id = req.params.id;
    const animal = await Animal.findById(id);
    res.render("animals/edit.ejs", { animal });
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    if (req.body.extinct === "on") {
        req.body.extinct = true;
    } else {
        req.body.extinct = false
    }
    await Animal.findByIdAndUpdate(id, req.body);
    res.redirect("/animal")
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await Animal.findByIdAndDelete(id);
    res.redirect("/animal");
});

module.exports = router

