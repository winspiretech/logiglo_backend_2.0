const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const prisma = require('../../models/prismaClient');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const ExporterCategory = {
  EXPORTER: 'EXPORTER',
  ORGANIC: 'ORGANIC',
};

// Aliases for known state name inconsistencies
const stateAliasMap = {
  // Delhi
  'delhi': 'delhi',
  'new delhi': 'delhi',
  'delhi (nct)': 'delhi',
  'delhi nct': 'delhi',
  'nct delhi': 'delhi',

  // Telangana
  'telengana': 'telangana',
  'telangana': 'telangana',
  'telangana state': 'telangana',

  // Andaman & Nicobar
  'andaman and nicobar': 'andaman & nicobar',
  'andaman and nicobar islands': 'andaman & nicobar',
  'andaman & nicobar islands': 'andaman & nicobar',
  'andaman & nicobar': 'andaman & nicobar',

  // Daman & Diu
  'daman and diu': 'Daman and Diu',
  'daman & diu': 'Daman and Diu',
  'dadra and nagar haveli and daman and diu': 'Daman and Diu',
  'dadra & nagar haveli and daman & diu': 'Daman and Diu',

  // Pondicherry
  'pondicherry': 'pondicherry',
  'puducherry': 'pondicherry',
  'puduchery': 'pondicherry',

  // Jammu & Kashmir
  'jammu & kashmir': 'jammu and kashmir',
  'jammu and kashmir': 'jammu and kashmir',
  'j&k': 'jammu and kashmir',

  // Odisha
  'orissa': 'odisha',
  'odisha': 'odisha',

  // Uttarakhand
  'uttaranchal': 'uttarakhand',
  'uttarakhand': 'uttarakhand',

  // Chhattisgarh
  'chattisgarh': 'chhattisgarh',
  'chhattisgarh': 'chhattisgarh',

  // Maharashtra
  'maharastra': 'maharashtra',
  'maharashtra': 'maharashtra',

  // Tamil Nadu
  'tamilnadu': 'tamil nadu',
  'tamil nadu': 'tamil nadu',

  // UP
  'up': 'uttar pradesh',
  'uttar pradesh': 'uttar pradesh',

  // MP
  'mp': 'madhya pradesh',
  'madhya pradesh': 'madhya pradesh',

  // Andhra
  'ap': 'andhra pradesh',
  'andhra pradesh': 'andhra pradesh',

  // WB
  'wb': 'west bengal',
  'west bengal': 'west bengal',

  // HP
  'hp': 'himachal pradesh',
  'himachal pradesh': 'himachal pradesh',

  // NE (ambiguous)
  'ne': 'nagaland',
  'ne states': 'nagaland',

  // All other lowercase names
  'assam': 'assam',
  'bihar': 'bihar',
  'goa': 'goa',
  'gujarat': 'gujarat',
  'haryana': 'haryana',
  'jharkhand': 'jharkhand',
  'karnataka': 'karnataka',
  'kerala': 'kerala',
  'manipur': 'manipur',
  'meghalaya': 'meghalaya',
  'mizoram': 'mizoram',
  'nagaland': 'nagaland',
  'punjab': 'punjab',
  'rajasthan': 'rajasthan',
  'sikkim': 'sikkim',
  'tripura': 'tripura',
  'ladakh': 'ladakh',
  'lakshadweep': 'lakshadweep',
};

router.post('/', upload.single('file'), async (req, res) => {
  const file = req.file;
  const category = req.body.category || ExporterCategory.EXPORTER;
  const DRY_RUN = req.body.dryRun === 'true';

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    let successCount = 0;
    let skippedCount = 0;
    let firstRow = true;

    for (const row of data) {
      const normalizedRow = {};
      for (const key in row) {
        const cleanKey = key.trim().toLowerCase();
        normalizedRow[cleanKey] = row[key];
      }

      if (firstRow) {
        const allowedKeys = [
          'exporter name',
          'address',
          'state',
          'exporter type',
          'e-mail id',
          'e-mail',
          'certification body name',
        ];
        const ignoredKeys = ['s.no.'];

        const unknownKeys = Object.keys(normalizedRow).filter(
          (key) => !allowedKeys.includes(key) && !ignoredKeys.includes(key)
        );

        if (unknownKeys.length) {
          console.warn(`⚠️ Unknown columns: ${unknownKeys.join(', ')}`);
        }

        firstRow = false;
      }

      const name = normalizedRow['exporter name'];
      const fullAddress = normalizedRow['address'];
      const rawStateName = normalizedRow['state'];
      const exporterTypeName = normalizedRow['exporter type'];
      const certificationBody = normalizedRow['certification body name'] || null;
      let email = normalizedRow['e-mail id'] || normalizedRow['e-mail'] || null;

      if (!name || !fullAddress || !rawStateName || !exporterTypeName) {
        console.warn(`⚠️ Skipping row — missing required fields.`);
        skippedCount++;
        continue;
      }

      // Extract valid email
      if (email) {
        const possibleEmails = email.split(/[,/&\\]/).map((e) => e.trim());
        email = possibleEmails.find((e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) || null;
        if (!email) {
          console.warn(`📧 Invalid email for ${name}: ${normalizedRow['e-mail id'] || normalizedRow['e-mail']} — Ignoring`);
        }
      }

      // City & Pincode from address
      let city = '';
      let pincode = '';
      const pinMatch = fullAddress.match(/\b\d{6}\b/);
      if (pinMatch) {
        pincode = pinMatch[0];
      }
      const parts = fullAddress.split(',');
      if (parts.length >= 2) {
        city = parts.slice(-2, -1)[0]?.trim() || '';
      }

      // Normalize state name
      const rawLower = rawStateName.trim().toLowerCase();
      const normalizedStateName = stateAliasMap[rawLower] || rawStateName.trim();

      const state = await prisma.statesData.findFirst({
        where: {
          name: { equals: normalizedStateName, mode: 'insensitive' },
        },
      });

      if (!state) {
        console.warn(`❗ State not found: ${rawStateName} — Skipping ${name}`);
        skippedCount++;
        continue;
      }

      const exporterType = await prisma.exporterType.upsert({
        where: { name: exporterTypeName.trim() },
        update: {},
        create: { name: exporterTypeName.trim() },
      });

      const existingExporter = await prisma.exporter.findFirst({
        where: {
          name: { equals: name.trim(), mode: 'insensitive' },
          fullAddress: { equals: fullAddress.trim(), mode: 'insensitive' },
        },
      });

      if (existingExporter) {
        console.warn(`⏭️ Already exists: ${name} — Skipping`);
        skippedCount++;
        continue;
      }

      const exporterData = {
        name,
        fullAddress,
        city,
        pincode,
        email,
        category,
        certificationBodyName:
          category === ExporterCategory.ORGANIC ? certificationBody : null,
        stateId: state.id,
        exporterTypeId: exporterType.id,
      };

      if (!DRY_RUN) {
        await prisma.exporter.create({ data: exporterData });
      }

      successCount++;
    }

    res.json({
      message: `Import completed for category: ${category}`,
      imported: successCount,
      skipped: skippedCount,
      dryRun: DRY_RUN,
    });
  } catch (err) {
    console.error('❌ Import error:', err);
    res.status(500).json({ error: 'Failed to process Excel file' });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
