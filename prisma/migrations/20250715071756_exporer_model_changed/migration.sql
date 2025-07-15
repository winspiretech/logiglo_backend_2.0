-- CreateEnum
CREATE TYPE "ExporterCategory" AS ENUM ('EXPORTER', 'ORGANIC');

-- AlterTable
ALTER TABLE "Exporter" ADD COLUMN     "category" "ExporterCategory" NOT NULL DEFAULT 'EXPORTER';

-- CreateIndex
CREATE INDEX "Exporter_category_idx" ON "Exporter"("category");
