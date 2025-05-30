const path = require('path');
const fs = require('fs').promises;
const { baseUploadPath } = require('../middleware/imageUpload');

async function deleteFileByUrl(fileUrl) {
  try {
    const parsedUrl = new URL(fileUrl);
    const pathname = parsedUrl.pathname;

    if (!pathname.startsWith('/Uploads/')) {
      throw new Error('Invalid file path in URL');
    }

    const relativePath = pathname.replace('/Uploads/', '');
    const absolutePath = path.join(baseUploadPath, relativePath);

    if (!absolutePath.startsWith(baseUploadPath)) {
      throw new Error('Path traversal detected');
    }

    await fs.access(absolutePath);
    await fs.unlink(absolutePath); 

    return { success: true, deletedPath: pathname };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

module.exports = { deleteFileByUrl };
