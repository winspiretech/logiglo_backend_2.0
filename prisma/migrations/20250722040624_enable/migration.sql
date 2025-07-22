-- AlterTable
ALTER TABLE "Field" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "FormSection" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;
