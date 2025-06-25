const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;
const {
  upload,
  processFileUpload,
  baseUploadPath,
} = require('../middleware/imageUpload');

// Upload file route
router.post(
  '/upload-file',
  upload.single('file'),
  processFileUpload,
  (req, res) => {
    try {
      res.status(200).json({
        message: 'File uploaded successfully',
        fileUrl: `${req.protocol}://${req.get('host')}${req.fileUrl}`,
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

// Delete file route (full URL accepted)
router.delete('/delete-file', async (req, res) => {
  try {
    const { fileUrl } = req.body;

    if (!fileUrl) {
      return res.status(400).json({ message: 'fileUrl is required' });
    }

    let pathname;

    // console.log(fileUrl)

    try {
      const parsedUrl = new URL(fileUrl);
      pathname = parsedUrl.pathname;
    } catch (err) {
      console.log(err)
      return res.status(400).json({ message: 'Invalid fileUrl format' });
    }

    if (!pathname.startsWith('/Uploads/')) {
      return res.status(400).json({ message: 'Invalid file path in URL' });
    }

    const relativePath = pathname.replace('/Uploads/', '');
    const absolutePath = path.join(baseUploadPath, relativePath);

    if (!absolutePath.startsWith(baseUploadPath)) { return res.status(400).json({ message: 'Invalid file path' }); }

    try {
      await fs.access(absolutePath);
    } catch (err) {
      return res.status(404).json({ message: 'File not found' });
    }

    await fs.unlink(absolutePath);

    res.status(200).json({
      message: 'File deleted successfully',
      deletedPath: pathname,
    });
  } catch (error) {
    console.error('Error deleting file:', error);
    res
      .status(500)
      .json({ message: 'Error deleting file', details: error.message });
  }
});

module.exports = router;
