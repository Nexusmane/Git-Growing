const Plant = require('../../models/plant');

module.exports = {
    getAll,
    create,
    removePlant,
};

async function getAll(req, res) {
    const plants = await Plant.find({
        user: req.user._id
    });
    res.json(plants);
}

async function create(req, res) {
    try {
        req.body.user = req.user._id; 
        const plant = await Plant.create(req.body) 
        res.json(plant);
    } catch {
        res.status(400).json('No Plant Created');
    }
}


async function removePlant(req, res) {
    const plant = await Plant.findById(req.params.id);
    removePlant.remove();
    res.json(removePlant);
}
