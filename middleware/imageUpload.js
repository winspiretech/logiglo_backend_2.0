const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Define the base upload path
const baseUploadPath = path.join(__dirname, '../Uploads');

// Valid sections for folder organization
const validSections = ['education', 'blog', 'user'];

// Create base uploads directory if it doesn't exist
if (!fs.existsSync(baseUploadPath)) {
  fs.mkdirSync(baseUploadPath);
}

// Create section-specific directories
validSections.forEach((section) => {
  const sectionPath = path.join(baseUploadPath, section);
  if (!fs.existsSync(sectionPath)) {
    fs.mkdirSync(sectionPath);
  }
});

// Multer Storage Config
const storage = multer.memoryStorage(); // Use in-memory buffer

// File Filter (allow images and PDFs)
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
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// Middleware for uploading and processing files
const processFileUpload = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Get section from request body or query
  const section = req.body.section || req.query.section;
  if (!section || !validSections.includes(section)) {
    return res.status(400).json({
      message: `Invalid or missing section. Must be one of: ${validSections.join(', ')}`,
    });
  }

  // Get userId from request body
  let userId = req.body.userId;
  if (!userId) {
    return res
      .status(400)
      .json({ message: 'User ID is required in request body' });
  }

  // Sanitize userId to avoid invalid characters in folder names
  userId = userId.replace(/[^a-zA-Z0-9-_]/g, '_');

  // Create or reuse user-specific folder within section
  const userFolderPath = path.join(baseUploadPath, section, userId);
  if (!fs.existsSync(userFolderPath)) {
    fs.mkdirSync(userFolderPath, { recursive: true });
  }

  // Generate unique file name with UUID
  const ext = path.extname(req.file.originalname).toLowerCase();
  const uniqueId = uuidv4();
  const fileName = `${section}_${userId}_${uniqueId}${ext}`;
  const filePath = path.join(userFolderPath, fileName);

  try {
    if (req.file.mimetype.startsWith('image/')) {
      // Compress image and save
      await sharp(req.file.buffer)
        .resize(800) // Resize to width 800px (preserve aspect ratio)
        .jpeg({ quality: 70 })
        .toFile(filePath);
    } else if (req.file.mimetype === 'application/pdf') {
      // Save PDF directly
      fs.writeFileSync(filePath, req.file.buffer);
    }

    // Attach file URL and metadata to response
    req.fileUrl = `/Uploads/${section}/${userId}/${fileName}`;
    req.fileMetadata = {
      section,
      userId,
      fileName,
      filePath: `/Uploads/${section}/${userId}/${fileName}`,
      uploadedAt: new Date().toISOString(),
    };

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing file' });
  }
};

module.exports = { upload, processFileUpload };
