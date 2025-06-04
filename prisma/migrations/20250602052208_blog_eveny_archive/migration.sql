-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "isArchived" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "isArchived" BOOLEAN NOT NULL DEFAULT false;
