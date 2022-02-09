const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plantPosts');

// GET /api/plantPosts
router.get('/', plantsCtrl.getAll);

// POST /api/items/:id
router.post('/', plantsCtrl.create);

module.exports = router;