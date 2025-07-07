/*
  Warnings:

  - The `shipmentType` column on the `QuotePost` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('DOCS', 'NON_DOCS');

-- CreateEnum
CREATE TYPE "ShipmentType" AS ENUM ('SAMPLE', 'COMMERCIAL');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('DTD', 'SELF');

-- CreateEnum
CREATE TYPE "IncotermType" AS ENUM ('EXW', 'FCA', 'FAS', 'FOB', 'CFR', 'CIF', 'CPT', 'CIP', 'DPU', 'DAP', 'DDP');

-- AlterTable
ALTER TABLE "QuotePost" ADD COLUMN     "incoterm" "IncotermType",
ADD COLUMN     "incotermInfo" TEXT,
ADD COLUMN     "postType" "PostType",
ADD COLUMN     "serviceType" "ServiceType",
DROP COLUMN "shipmentType",
ADD COLUMN     "shipmentType" "ShipmentType";
