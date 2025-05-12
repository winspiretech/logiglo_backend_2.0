/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Event";

-- CreateTable
CREATE TABLE "GeneralPost" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "viewCount" INTEGER,
    "likesCount" INTEGER,
    "commentsCount" INTEGER,
    "status" TEXT DEFAULT 'pending',
    "rejectionReason" TEXT,
    "generalPostMainCategory" TEXT,
    "generalPostSubCategory" TEXT,

    CONSTRAINT "GeneralPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GeneralPost" ADD CONSTRAINT "GeneralPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
