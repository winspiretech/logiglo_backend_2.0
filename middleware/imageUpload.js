const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Define the base upload path
const baseUploadPath = path.join('/root/backend/Uploads');

// Valid sections for folder organization
const validSections = ['education', 'blog', 'user', 'event'];

// Asynchronous directory creation with permissions
const ensureDirectory = async (dirPath) => {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    await fs.chmod(dirPath, 0o755);
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
};

// Initialize directories
(async () => {
  await ensureDirectory(baseUploadPath);
  for (const section of validSections) {
    await ensureDirectory(path.join(baseUploadPath, section));
  }
})();

// Multer Storage Config
const storage = multer.memoryStorage();

// File Filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and PDF allowed.'));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

// Middleware for uploading and processing files
const processFileUpload = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  if (req.file.mimetype.startsWith('image/')) {
    try {
      await sharp(req.file.buffer).metadata();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid image file' });
    }
  }

  const section = req.body.section || req.query.section;
  if (!section || !validSections.includes(section)) {
    return res.status(400).json({
      message: `Invalid or missing section. Must be one of: ${validSections.join(', ')}`,
    });
  }

  let userId = req.body.userId;
  if (!userId) {
    return res
      .status(400)
      .json({ message: 'User ID is required in request body' });
  }

  userId = userId.replace(/[^a-zA-Z0-9-_]/g, '_');

  const userFolderPath = path.join(baseUploadPath, section, userId);
  await ensureDirectory(userFolderPath);

  const ext = path.extname(req.file.originalname).toLowerCase();
  const uniqueId = uuidv4();
  const fileName = `${section}_${userId}_${uniqueId}${ext}`;
  const filePath = path.join(userFolderPath, fileName);

  try {
    if (req.file.mimetype.startsWith('image/')) {
      await sharp(req.file.buffer)
        .resize(800)
        .jpeg({ quality: 70 })
        .toFile(filePath);
      await fs.chmod(filePath, 0o644);
    } else if (req.file.mimetype === 'application/pdf') {
      await fs.writeFile(filePath, req.file.buffer);
      await fs.chmod(filePath, 0o644);
    }

    req.fileUrl = `/Uploads/${section}/${userId}/${fileName}`;
    req.fileMetadata = {
      section,
      userId,
      fileName,
      filePath: req.fileUrl,
      uploadedAt: new Date().toISOString(),
    };

    next();
  } catch (error) {
    if (await fs.access(filePath).catch(() => false)) {
      await fs.unlink(filePath).catch(console.error);
    }
    console.error(error);
    res.status(500).json({ message: 'Error processing file' });
  }
};

module.exports = { upload, processFileUpload, baseUploadPath };
