/*
  Warnings:

  - You are about to drop the column `categoryId` on the `QuotePost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "QuotePost" DROP COLUMN "categoryId";

-- AddForeignKey
ALTER TABLE "QuotePost" ADD CONSTRAINT "QuotePost_postSubCategory_fkey" FOREIGN KEY ("postSubCategory") REFERENCES "ForumSubCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuotePost" ADD CONSTRAINT "QuotePost_postMainCategory_fkey" FOREIGN KEY ("postMainCategory") REFERENCES "ForumMainCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralPost" ADD CONSTRAINT "GeneralPost_generalPostMainCategory_fkey" FOREIGN KEY ("generalPostMainCategory") REFERENCES "ForumMainCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralPost" ADD CONSTRAINT "GeneralPost_generalPostSubCategory_fkey" FOREIGN KEY ("generalPostSubCategory") REFERENCES "ForumSubCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
