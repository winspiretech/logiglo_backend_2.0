/*
  Warnings:

  - You are about to drop the column `blogId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `courseEnquiryId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `read` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `triggeredById` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Notification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_blogId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_courseEnquiryId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_generalPostId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_generalReplyId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_quotePostId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_quoteReplyId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_recipientId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_triggeredById_fkey";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "blogId",
DROP COLUMN "courseEnquiryId",
DROP COLUMN "eventId",
DROP COLUMN "read",
DROP COLUMN "triggeredById",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserNotificationPreference" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "quotePostCreation" BOOLEAN NOT NULL DEFAULT false,
    "quotePostModeration" BOOLEAN NOT NULL DEFAULT false,
    "quotePostRejected" BOOLEAN NOT NULL DEFAULT false,
    "quoteReplyCreation" BOOLEAN NOT NULL DEFAULT false,
    "quoteReplyModeration" BOOLEAN NOT NULL DEFAULT false,
    "quoteReplyRejected" BOOLEAN NOT NULL DEFAULT false,
    "generalPostCreation" BOOLEAN NOT NULL DEFAULT false,
    "generalPostModeration" BOOLEAN NOT NULL DEFAULT false,
    "generalPostRejected" BOOLEAN NOT NULL DEFAULT false,
    "generalReplyCreation" BOOLEAN NOT NULL DEFAULT false,
    "generalReplyModeration" BOOLEAN NOT NULL DEFAULT false,
    "generalReplyRejected" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserNotificationPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailServerConfig" (
    "id" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "secure" BOOLEAN NOT NULL,
    "authUser" TEXT NOT NULL,
    "authPass" TEXT NOT NULL,
    "fromEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmailServerConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserNotificationPreference_userId_key" ON "UserNotificationPreference"("userId");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNotificationPreference" ADD CONSTRAINT "UserNotificationPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
