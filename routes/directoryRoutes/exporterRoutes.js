const express = require('express');
const router = express.Router();

const {
  getExporters,
  getExporterById,
  getStates,
  getExporterTypes,
  getProducts,
} = require('../../controllers/directory/exporterController.js');

// Exporter list and detail
router.get('/', getExporters); // /api/exporters
router.get('/:id', getExporterById); // /api/exporters/:id

// Supporting data
router.get('/meta/states', getStates); // /api/exporters/meta/states
router.get('/meta/exporter-types', getExporterTypes); // /api/exporters/meta/exporter-types
router.get('/meta/products', getProducts); // /api/exporters/meta/products

module.exports = router;
