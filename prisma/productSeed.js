const { PrismaClient } = require('../generated/prisma'); // or '@prisma/client' if using directly
const prisma = new PrismaClient();

const products = [
  'All',
  'All Products',
  'Floriculture',
  'Fruits and Vegetable Seeds',
  'Herbal & Medicinal',
  'Fresh Onions',
  'Other Fresh Vegetables',
  'Dried Nuts (Walnuts)',
  'Fresh Mangoes',
  'Fresh Grapes',
  'Other Fresh Fruits',
  'Dried & Preserved Vegetables',
  'Mango Pulp',
  'Pickle & Chutney',
  'Other Processed Fruits Vegetables',
  'Buffalo Meat',
  'Sheep/Goat Meat',
  'Poultry Products',
  'Dairy Products',
  'Animal Casings',
  'Processed Meat',
  'Natural Honey',
  'Meat of Other Aminal',
  'HPS Groundnuts',
  'Gaurgum',
  'Jaggery & Confectionery',
  'Cocoa Products',
  'Cereal Preparations',
  'Alcoholic & Non Alcoholic Beverages',
  'Miscellaneous Preparations',
  'Non Basmati Rice',
  'Basmati Rice',
  'Wheat',
  'Other Coarse Grains',
  'Cashew Kernels',
  'Cashewnut Shell Liquid',
  'Kardanol',
  'De-Oiled Rice Bran',
];

async function seedProducts() {
  try {
    for (const name of products) {
      await prisma.product.upsert({
        where: { name },
        update: {},
        create: { name },
      });
      console.log(`✅ Seeded: ${name}`);
    }

    console.log('🎉 All products have been seeded.');
  } catch (error) {
    console.error('❌ Error seeding products:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
