/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ForumMainCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `ForumSubCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ForumMainCategory_name_key" ON "ForumMainCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ForumSubCategory_name_key" ON "ForumSubCategory"("name");
