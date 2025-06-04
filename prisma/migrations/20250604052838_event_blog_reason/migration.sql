-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "unArchiveReasons" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "unArchiveReasons" TEXT[] DEFAULT ARRAY[]::TEXT[];
