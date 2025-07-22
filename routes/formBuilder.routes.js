const router = require('express').Router();
const formBuilderController = require('../controllers/formBuilder.controllers.js');

// --- Form Routes ---
router.post('/createform', formBuilderController.createForm);
router.patch(
  '/updateform/:formId',
  formBuilderController.updateFormWithStructure,
);
router.delete('/deleteform/:formId', formBuilderController.deleteForm);

// --- Section Routes ---
router.post('/createsection', formBuilderController.createSection);
router.patch(
  '/updatesectionposition',
  formBuilderController.updateSectionPosition,
);
router.patch('/togglesection/:sectionId', formBuilderController.toggleSection); // Add this line

// --- Field Routes ---
router.post('/createfield', formBuilderController.createField);
router.patch('/updatefieldposition', formBuilderController.updateFieldPosition);
router.patch('/togglefield/:fieldId', formBuilderController.toggleField); // Add this line

// --- Option Set Routes ---
router.post('/createoptionset', formBuilderController.createOptionSet);

// --- Fetching Routes ---
router.get('/getformbyid/:formId', formBuilderController.getFormById);
router.get('/getallforms', formBuilderController.getAllForms);

module.exports = router;
