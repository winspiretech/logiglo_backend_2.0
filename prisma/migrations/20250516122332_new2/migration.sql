/*
  Warnings:

  - You are about to drop the `States` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CitiesData" DROP CONSTRAINT "CitiesData_state_id_fkey";

-- DropForeignKey
ALTER TABLE "States" DROP CONSTRAINT "States_country_id_fkey";

-- DropTable
DROP TABLE "States";

-- CreateTable
CREATE TABLE "StatesData" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "country_id" INTEGER NOT NULL,

    CONSTRAINT "StatesData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StatesData" ADD CONSTRAINT "StatesData_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "CountriesData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CitiesData" ADD CONSTRAINT "CitiesData_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "StatesData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
