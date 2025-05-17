/*
  Warnings:

  - Made the column `title` on table `GeneralPost` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `GeneralPost` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `QuotePost` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `QuotePost` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('POST_LIKED', 'POST_REPLIED', 'REPLY_REPLIED', 'POST_STATUS_CHANGED', 'BLOG_STATUS_CHANGED', 'EVENT_CREATED', 'COURSE_ENQUIRY_SUBMITTED', 'EVENT_UPCOMING');

-- AlterTable
ALTER TABLE "GeneralPost" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "QuotePost" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "triggeredById" TEXT,
    "type" "NotificationType" NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quotePostId" TEXT,
    "generalPostId" TEXT,
    "quoteReplyId" TEXT,
    "generalReplyId" TEXT,
    "blogId" TEXT,
    "eventId" TEXT,
    "courseEnquiryId" TEXT,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_triggeredById_fkey" FOREIGN KEY ("triggeredById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_quotePostId_fkey" FOREIGN KEY ("quotePostId") REFERENCES "QuotePost"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_generalPostId_fkey" FOREIGN KEY ("generalPostId") REFERENCES "GeneralPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_quoteReplyId_fkey" FOREIGN KEY ("quoteReplyId") REFERENCES "QuoteReply"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_generalReplyId_fkey" FOREIGN KEY ("generalReplyId") REFERENCES "GeneralReply"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_courseEnquiryId_fkey" FOREIGN KEY ("courseEnquiryId") REFERENCES "CourseEnquiry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
