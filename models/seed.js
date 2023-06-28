const mongoose  = require("./connection");
const Animal = require("./animals");


mongoose.connection.on("open", async () => {
    await Animal.deleteMany();

    const startAnimals = [
        {species: "Lion", extinct: false, location: "Africa", lifeExpectancy: 12},
        {species: "Komodo Dragon", extinct: false, location: "Indonesia", lifeExpectancy: 30},
        {species: "Killer Whale", extinct: false, location: "Pacific Ocean", lifeExpectancy: 60}
    ]

await Animal.create(startAnimals);

mongoose.connection.close();

});