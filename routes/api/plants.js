const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plantPosts');

// GET /api/plantPosts
router.get('/', plantsCtrl.getAll);

// POST /api/plantPost/list
router.post('/', plantsCtrl.create);

// DELETE /api//plantPost/list/delete
router.delete('/', plantsCtrl.removePlant);

module.exports = router;