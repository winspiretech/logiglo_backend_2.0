-- AlterTable
ALTER TABLE "GeneralPost" ADD COLUMN     "MainCategoryName" TEXT,
ADD COLUMN     "SubCategoryName" TEXT;

-- AlterTable
ALTER TABLE "QuotePost" ADD COLUMN     "MainCategoryName" TEXT,
ADD COLUMN     "SubCategoryName" TEXT;
