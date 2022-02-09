const Plant = require('../../models/plant');

module.exports = {
    getAll,
    create,
};

async function getAll(req, res) {
    const plants = await Plant.find({
        user: req.user._id
    });
    res.json(plants);
}

async function create(req, res) {
    console.log(req.body);
    req.body.user = req.user._id; 
    const plant = await Plant.create(req.body);
    res.json(plant);
}
