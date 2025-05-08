-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "verified" BOOLEAN DEFAULT false,
    "role" TEXT DEFAULT 'user',
    "mobileNo" TEXT,
    "country" TEXT,
    "city" TEXT,
    "address" TEXT,
    "postalCode" TEXT,
    "profilePic" TEXT,
    "bio" TEXT,
    "online" BOOLEAN DEFAULT false,
    "lastSeen" TIMESTAMP(3),
    "rating" DOUBLE PRECISION DEFAULT 0,
    "accountType" TEXT DEFAULT 'personal',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForumMainCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "enabled" BOOLEAN DEFAULT false,

    CONSTRAINT "ForumMainCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForumSubCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "enabled" BOOLEAN DEFAULT false,

    CONSTRAINT "ForumSubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuotePost" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "userId" TEXT,
    "categoryId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "totalNetWeight" DOUBLE PRECISION DEFAULT 0,
    "totalGrossWeight" DOUBLE PRECISION DEFAULT 0,
    "volumetricWeight" DOUBLE PRECISION DEFAULT 0,
    "transitInsurance" BOOLEAN DEFAULT false,
    "width" DOUBLE PRECISION DEFAULT 0,
    "height" DOUBLE PRECISION DEFAULT 0,
    "length" DOUBLE PRECISION DEFAULT 0,
    "viewCount" INTEGER DEFAULT 0,
    "likesCount" INTEGER DEFAULT 0,
    "commentsCount" INTEGER DEFAULT 0,
    "dangerousGoods" BOOLEAN DEFAULT false,
    "status" TEXT DEFAULT 'pending',
    "fromPostalCode" TEXT,
    "toPostalCode" TEXT,
    "fromCity" TEXT,
    "toCity" TEXT,
    "fromCountry" TEXT,
    "toCountry" TEXT,
    "fromAddress" TEXT,
    "toAddress" TEXT,
    "fromState" TEXT,
    "toState" TEXT,
    "postCategory" TEXT,
    "shipmentType" TEXT DEFAULT 'domestic',
    "shipmentMode" TEXT,

    CONSTRAINT "QuotePost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuoteReply" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "parentReplyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuoteReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuoteLike" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "QuoteLike_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobileNo_key" ON "User"("mobileNo");

-- AddForeignKey
ALTER TABLE "QuotePost" ADD CONSTRAINT "QuotePost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteReply" ADD CONSTRAINT "QuoteReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteReply" ADD CONSTRAINT "QuoteReply_postId_fkey" FOREIGN KEY ("postId") REFERENCES "QuotePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteLike" ADD CONSTRAINT "QuoteLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteLike" ADD CONSTRAINT "QuoteLike_postId_fkey" FOREIGN KEY ("postId") REFERENCES "QuotePost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
