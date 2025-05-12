-- AlterTable
ALTER TABLE "QuotePost" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "QuoteReply" ADD COLUMN     "status" TEXT DEFAULT 'pending',
ALTER COLUMN "parentReplyId" DROP NOT NULL;
