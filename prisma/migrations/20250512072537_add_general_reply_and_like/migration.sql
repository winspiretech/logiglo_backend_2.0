-- AlterTable
ALTER TABLE "GeneralPost" ADD COLUMN     "createdBy" TEXT,
ALTER COLUMN "likesCount" SET DEFAULT 0,
ALTER COLUMN "commentsCount" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "GeneralReply" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "parentReplyId" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT DEFAULT 'pending',
    "rejectionReason" TEXT,

    CONSTRAINT "GeneralReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralLike" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "GeneralLike_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QuoteReply" ADD CONSTRAINT "QuoteReply_parentReplyId_fkey" FOREIGN KEY ("parentReplyId") REFERENCES "QuoteReply"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralReply" ADD CONSTRAINT "GeneralReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralReply" ADD CONSTRAINT "GeneralReply_postId_fkey" FOREIGN KEY ("postId") REFERENCES "GeneralPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralReply" ADD CONSTRAINT "GeneralReply_parentReplyId_fkey" FOREIGN KEY ("parentReplyId") REFERENCES "GeneralReply"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralLike" ADD CONSTRAINT "GeneralLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralLike" ADD CONSTRAINT "GeneralLike_postId_fkey" FOREIGN KEY ("postId") REFERENCES "GeneralPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
