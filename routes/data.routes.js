const router = require('express').Router();
const {
  countriesData,
  citiesDataByStateId,
  countriesWithFlags,
  statesDataByCountryId,
} = require('../controllers/data.controller.js');

router.get('/countriesdata', countriesData);
router.get('/countrieswithflags', countriesWithFlags);
router.get('/statesdata/:countryId', statesDataByCountryId);
router.get('/citiesdata/:stateId', citiesDataByStateId);

module.exports = router;
