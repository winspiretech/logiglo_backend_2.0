let cahedSection = null;
let cahedSubSection = null;
let updated_at = 0;
const NEXT_CALL_IN_MS = 15 * 60 * 1000;

const getCahedSectionAndSubsection = async (prisma) => {
  const now = Date.now();

  if (!cahedSection || !cahedSubSection || now - updated_at > NEXT_CALL_IN_MS) {
    const [section, subSection] = await Promise.all([
      prisma.section.findMany(),
      prisma.subSection.findMany(),
    ]);

    cahedSection = section;
    cahedSubSection = subSection;
    updated_at = now;
  }

  return [cahedSection, cahedSubSection];
};

const forcefullyClearCahedData = () => {
  cahedSection = null;
  cahedSubSection = null;
  updated_at = 0;
};

module.exports = { getCahedSectionAndSubsection, forcefullyClearCahedData };