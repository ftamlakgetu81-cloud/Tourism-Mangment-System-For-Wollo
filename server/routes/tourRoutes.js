const express = require('express');
const router = express.Router();
const { getDestinations, getTourPackages } = require('../controllers/tourController');

router.get('/destinations', getDestinations);
router.get('/packages', getTourPackages);

module.exports = router;