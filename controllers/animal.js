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

router.get('/:id', async (req, res) => { 
    const id = req.params.id;
    const animal = await Animal.findById(id)
    res.render('animals/show.ejs', { animal }
    )
})


module.exports = router

