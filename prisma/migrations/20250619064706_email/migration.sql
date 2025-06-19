-- AlterTable
ALTER TABLE "UserNotificationPreference" ALTER COLUMN "quotePostCreation" SET DEFAULT true,
ALTER COLUMN "quotePostModeration" SET DEFAULT true,
ALTER COLUMN "quotePostRejected" SET DEFAULT true,
ALTER COLUMN "quoteReplyCreation" SET DEFAULT true,
ALTER COLUMN "quoteReplyModeration" SET DEFAULT true,
ALTER COLUMN "quoteReplyRejected" SET DEFAULT true,
ALTER COLUMN "generalPostCreation" SET DEFAULT true,
ALTER COLUMN "generalPostModeration" SET DEFAULT true,
ALTER COLUMN "generalPostRejected" SET DEFAULT true,
ALTER COLUMN "generalReplyCreation" SET DEFAULT true,
ALTER COLUMN "generalReplyModeration" SET DEFAULT true,
ALTER COLUMN "generalReplyRejected" SET DEFAULT true;
