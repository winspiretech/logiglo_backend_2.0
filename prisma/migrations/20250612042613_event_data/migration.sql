/*
  Warnings:

  - Added the required column `eventId` to the `EventIntrested` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventIntrested" ADD COLUMN     "eventId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "EventIntrested" ADD CONSTRAINT "EventIntrested_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
