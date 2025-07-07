/*
  Warnings:

  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Country";

-- CreateTable
CREATE TABLE "CountrysDataWithFlag" (
    "id_country" SERIAL NOT NULL,
    "Country_Name" TEXT NOT NULL,
    "ISO2" CHAR(2) NOT NULL,
    "ISO3" CHAR(3) NOT NULL,
    "Top_Level_Domain" TEXT NOT NULL,
    "FIPS" TEXT NOT NULL,
    "ISO_Numeric" INTEGER NOT NULL,
    "GeoNameID" TEXT NOT NULL,
    "E164" INTEGER NOT NULL,
    "Phone_Code" TEXT NOT NULL,
    "Continent" TEXT NOT NULL,
    "Capital" TEXT NOT NULL,
    "Time_Zone_in_Capital" TEXT NOT NULL,
    "Currency" TEXT NOT NULL,
    "Language_Codes" TEXT NOT NULL,
    "Languages" TEXT NOT NULL,
    "Area_KM2" INTEGER NOT NULL,
    "Internet_Hosts" TEXT NOT NULL,
    "Internet_Users" TEXT NOT NULL,
    "Phones_Mobile" TEXT NOT NULL,
    "Phones_Landline" TEXT NOT NULL,
    "GDP" TEXT NOT NULL,

    CONSTRAINT "CountrysDataWithFlag_pkey" PRIMARY KEY ("id_country")
);
