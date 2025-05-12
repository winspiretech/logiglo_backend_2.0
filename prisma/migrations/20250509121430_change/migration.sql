/*
  Warnings:

  - Added the required column `mainCategoryId` to the `ForumSubCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ForumSubCategory" ADD COLUMN     "mainCategoryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ForumSubCategory" ADD CONSTRAINT "ForumSubCategory_mainCategoryId_fkey" FOREIGN KEY ("mainCategoryId") REFERENCES "ForumMainCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
