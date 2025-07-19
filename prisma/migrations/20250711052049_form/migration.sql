-- AlterTable
ALTER TABLE "GeneralPost" ADD COLUMN     "additionalData" JSONB;

-- AlterTable
ALTER TABLE "QuotePost" ADD COLUMN     "additionalData" JSONB;

-- CreateTable
CREATE TABLE "FormConfig" (
    "id" TEXT NOT NULL,
    "postType" TEXT NOT NULL,
    "fields" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FormConfig_pkey" PRIMARY KEY ("id")
);
