const express = require('express')
const router = express.Router();
const {autocomplete,forwardGeocode,reverseGeocode,matchUser} = require('../controllers/geocodeController')
// Autocomplete Endpoint
const {protect} = require('../middleware/auth')
router.get('/autocomplete',autocomplete);

// Forward Geocoding Endpoint
router.get('/forward-geocode', forwardGeocode);

// Reverse Geocoding Endpoint
router.get('/reverse-geocode',reverseGeocode);

// Match Users Endpoint
router.post('/match',protect, matchUser);

module.exports = router;