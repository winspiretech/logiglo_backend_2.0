-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('pending', 'resolved', 'rejected');

-- AlterTable
ALTER TABLE "CourseEnquiry" ADD COLUMN     "status" "EnquiryStatus" NOT NULL DEFAULT 'pending';
