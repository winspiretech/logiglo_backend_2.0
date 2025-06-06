-- DropForeignKey
ALTER TABLE "BlogComment" DROP CONSTRAINT "BlogComment_parentId_fkey";

-- AddForeignKey
ALTER TABLE "BlogComment" ADD CONSTRAINT "BlogComment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "BlogComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
