const path = require('path');
const XLSX = require('xlsx');
const prisma = require('../../models/prismaClient');

// Enum
const ExporterCategory = {
  EXPORTER: 'EXPORTER',
  ORGANIC: 'ORGANIC',
};

// 👇 Change these before each import
const CATEGORY = ExporterCategory.EXPORTER; // or ORGANIC
const filePath = path.join(
  __dirname,
  '../../import-data/Exporter_Directory Chattisgarh.xls',
);

async function importExporters() {
  try {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    for (const row of data) {
      // 🔄 Normalize keys (case-insensitive, trimmed)
      const normalizedRow = {};
      for (const key in row) {
        if (Object.hasOwn(row, key)) {
          const cleanKey = key.trim().toLowerCase();
          normalizedRow[cleanKey] = row[key];
        }
      }

      const name = normalizedRow['exporter name'];
      const fullAddress = normalizedRow['address'];
      const stateName = normalizedRow['state'];
      const exporterTypeName = normalizedRow['exporter type'];
      const certificationBody =
        normalizedRow['certification body name'] || null;

      // ✅ Use only the two known email column headers
      const email =
        normalizedRow['e-mail id'] || normalizedRow['e-mail'] || null;

      if (!name || !fullAddress || !stateName || !exporterTypeName) {
        console.warn(`⚠️ Skipping row — missing required fields.`);
        continue;
      }

      // Extract city and pincode from address
      let city = '';
      let pincode = '';
      const pinMatch = fullAddress.match(/\b\d{6}\b/);
      if (pinMatch) {
        pincode = pinMatch[0];
      }
      const parts = fullAddress.split(',');
      if (parts.length >= 2) {
        city = parts[parts.length - 2].trim();
      }

      // 🔍 Find state
      const state = await prisma.statesData.findFirst({
        where: {
          name: {
            equals: stateName.trim(),
            mode: 'insensitive',
          },
        },
      });

      if (!state) {
        console.warn(`❗ State not found: ${stateName} — Skipping ${name}`);
        continue;
      }

      // 🏷️ Upsert Exporter Type
      const exporterType = await prisma.exporterType.upsert({
        where: { name: exporterTypeName.trim() },
        update: {},
        create: { name: exporterTypeName.trim() },
      });

      // 📦 Prepare exporter data
      const exporterData = {
        name,
        fullAddress,
        city,
        pincode,
        email,
        category: CATEGORY,
        certificationBodyName:
          CATEGORY === ExporterCategory.ORGANIC ? certificationBody : null,
        stateId: state.id,
        exporterTypeId: exporterType.id,
      };

      // 💾 Save to DB
      await prisma.exporter.create({ data: exporterData });

      console.log(`✅ Imported: ${name}`);
    }

    console.log(`🎉 Import completed for category: ${CATEGORY}`);
  } catch (err) {
    console.error('❌ Import error:', err);
  } finally {
    await prisma.$disconnect();
  }
}

importExporters();
