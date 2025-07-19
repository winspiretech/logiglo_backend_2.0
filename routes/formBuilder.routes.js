const router = require('express').Router();
const formBuilderController = require('../controllers/formBuilder.controllers.js');

// --- Form Routes ---

// Create a new form
router.post('/createform', formBuilderController.createForm);

// Update an existing form
router.patch(
  '/updateform/:formId',
  formBuilderController.updateFormWithStructure,
);

// Delete a form
router.delete('/deleteform/:formId', formBuilderController.deleteForm);

// --- Section Routes ---
// Delete Section
router.delete('/deletesection/:sectionId', formBuilderController.deleteSection);

// Delete Field
router.delete('/deletefield/:fieldId', formBuilderController.deleteField);

// Create a new section
router.post('/createsection', formBuilderController.createSection);

// Update section positions (for drag-and-drop)
router.patch(
  '/updatesectionposition',
  formBuilderController.updateSectionPosition,
);

// --- Field Routes ---

// Create a new field
router.post('/createfield', formBuilderController.createField);

// Update field positions (for drag-and-drop)
router.patch('/updatefieldposition', formBuilderController.updateFieldPosition);

// --- Option Set Routes ---

// Create a new option set
router.post('/createoptionset', formBuilderController.createOptionSet);

// --- Fetching Routes ---

// Fetch a form by ID with sections and fields
router.get('/getformbyid/:formId', formBuilderController.getFormById);

// Fetch all forms
router.get('/getallforms', formBuilderController.getAllForms);

module.exports = router;
