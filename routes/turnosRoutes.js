const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/turnosController');

// Endpoints
router.get('/', turnosController.obtenerTurnos);
router.get('/:id', turnosController.obtenerTurnoPorId);
router.post('/', turnosController.crearTurno);

module.exports = router;