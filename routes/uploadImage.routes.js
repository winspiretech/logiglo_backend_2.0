const express = require('express');
const router = express.Router();
const { upload, processFileUpload } = require('../middleware/imageUpload');

// Route for file upload
router.post(
  '/upload-file',
  upload.single('file'),
  processFileUpload,
  (req, res) => {
    try {
      // Send success response without database
      res.status(200).json({
        message: 'File uploaded successfully',
        fileUrl: `http://103.212.120.2${req.fileUrl}`,
        metadata: req.fileMetadata,
      });
    } catch (error) {
      console.error('Error processing request:', error);
      res
        .status(500)
        .json({ message: 'Error processing request', details: error.message });
    }
  },
);

module.exports = router;
