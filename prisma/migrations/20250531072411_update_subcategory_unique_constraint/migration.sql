/*
  Warnings:

  - A unique constraint covering the columns `[name,mainCategoryId]` on the table `ForumSubCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ForumSubCategory_name_mainCategoryId_key" ON "ForumSubCategory"("name", "mainCategoryId");
