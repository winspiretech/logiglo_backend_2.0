// const fs = require('fs');
// const path = require('path');
// const prisma = require('../models/prismaClient');

// async function main() {
//   // Read and parse JSON files with __dirname for correct path resolution
//   const countriesRaw = fs.readFileSync(path.join(__dirname, 'countries.json'), 'utf-8');
//   const statesRaw = fs.readFileSync(path.join(__dirname, 'states.json'), 'utf-8');
//   const citiesRaw = fs.readFileSync(path.join(__dirname, 'cities.json'), 'utf-8');

//   const countriesData = JSON.parse(countriesRaw);
//   const statesData = JSON.parse(statesRaw);
//   const citiesData = JSON.parse(citiesRaw);

//   // Seed countries with flags
//   for (const country of countriesData) {
//     const flagPath = `/flags/${country.shortname.toLowerCase()}.png`;

//     await prisma.countriesData.upsert({
//       where: { id: country.id },
//       update: {
//         shortname: country.shortname,
//         name: country.name,
//         phonecode: country.phonecode,
//         flag: flagPath,
//       },
//       create: {
//         id: country.id,
//         shortname: country.shortname,
//         name: country.name,
//         phonecode: country.phonecode,
//         flag: flagPath,
//       },
//     });
//   }
//   console.log(`✅ Seeded ${countriesData.length} countries`);

//   // Seed states
//   for (const state of statesData) {
//     await prisma.statesData.upsert({
//       where: { id: state.id },
//       update: {
//         name: state.name,
//         country_id: state.country_id,
//       },
//       create: {
//         id: state.id,
//         name: state.name,
//         country_id: state.country_id,
//       },
//     });
//   }
//   console.log(`✅ Seeded ${statesData.length} states`);

//   // Seed cities
//   for (const city of citiesData) {
//     await prisma.citiesData.upsert({
//       where: { id: city.id },
//       update: {
//         name: city.name,
//         state_id: city.state_id,
//       },
//       create: {
//         id: city.id,
//         name: city.name,
//         state_id: city.state_id,
//       },
//     });
//   }
//   console.log(`✅ Seeded ${citiesData.length} cities`);
// }

// main()
//   .catch((e) => {
//     console.error('❌ Error seeding:', e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

const fs = require('fs');
const path = require('path');
const prisma = require('../models/prismaClient'); // adjust path if needed

async function main() {
  const filePath = path.join(__dirname, 'countryWithFlag.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const countries = JSON.parse(raw);

  for (const country of countries) {
    const flagPath = `/flags/${country.ISO2.toLowerCase()}.png`;

    await prisma.countrysDataWithFlag.upsert({
      where: { id_country: country.id_country },
      update: {
        Country_Name: country.Country_Name,
        ISO2: country.ISO2,
        ISO3: country.ISO3,
        Top_Level_Domain: country.Top_Level_Domain,
        FIPS: country.FIPS,
        ISO_Numeric: country.ISO_Numeric,
        GeoNameID: country.GeoNameID,
        E164: country.E164,
        Phone_Code: country.Phone_Code,
        Continent: country.Continent,
        Capital: country.Capital,
        Time_Zone_in_Capital: country.Time_Zone_in_Capital,
        Currency: country.Currency,
        Language_Codes: country.Language_Codes,
        Languages: country.Languages,
        Area_KM2: country.Area_KM2,
        Internet_Hosts: country.Internet_Hosts,
        Internet_Users: country.Internet_Users,
        Phones_Mobile: country.Phones_Mobile,
        Phones_Landline: country.Phones_Landline,
        GDP: country.GDP,
      },
      create: {
        id_country: country.id_country,
        Country_Name: country.Country_Name,
        ISO2: country.ISO2,
        ISO3: country.ISO3,
        Top_Level_Domain: country.Top_Level_Domain,
        FIPS: country.FIPS,
        ISO_Numeric: country.ISO_Numeric,
        GeoNameID: country.GeoNameID,
        E164: country.E164,
        Phone_Code: country.Phone_Code,
        Continent: country.Continent,
        Capital: country.Capital,
        Time_Zone_in_Capital: country.Time_Zone_in_Capital,
        Currency: country.Currency,
        Language_Codes: country.Language_Codes,
        Languages: country.Languages,
        Area_KM2: country.Area_KM2,
        Internet_Hosts: country.Internet_Hosts,
        Internet_Users: country.Internet_Users,
        Phones_Mobile: country.Phones_Mobile,
        Phones_Landline: country.Phones_Landline,
        GDP: country.GDP,
      },
    });
  }

  console.log(`✅ Seeded ${countries.length} countriesflagdata`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });