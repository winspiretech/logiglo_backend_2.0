-- CreateEnum
CREATE TYPE "EducationLevel" AS ENUM ('HIGH_SCHOOL', 'UNDERGRADUATE', 'POSTGRADUATE', 'DOCTORATE', 'OTHER');

-- CreateEnum
CREATE TYPE "CourseDifficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "CourseMode" AS ENUM ('ONLINE', 'OFFLINE', 'HYBRID');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('INR', 'USD', 'EUR', 'GBP', 'OTHER');

-- CreateEnum
CREATE TYPE "InstitutionType" AS ENUM ('SCHOOL', 'COLLEGE', 'UNIVERSITY', 'INSTITUTE', 'OTHER');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('POST_LIKED', 'POST_REPLIED', 'REPLY_REPLIED', 'POST_STATUS_CHANGED', 'BLOG_STATUS_CHANGED', 'EVENT_CREATED', 'COURSE_ENQUIRY_SUBMITTED', 'EVENT_UPCOMING');

-- CreateEnum
CREATE TYPE "EventMode" AS ENUM ('offline', 'online', 'hybrid');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
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
    "mainCategoryId" TEXT NOT NULL,

    CONSTRAINT "ForumSubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuotePost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "totalNetWeight" DOUBLE PRECISION,
    "totalGrossWeight" DOUBLE PRECISION,
    "volumetricWeight" DOUBLE PRECISION,
    "transitInsurance" BOOLEAN,
    "width" DOUBLE PRECISION,
    "height" DOUBLE PRECISION,
    "length" DOUBLE PRECISION,
    "viewCount" INTEGER,
    "likesCount" INTEGER,
    "commentsCount" INTEGER,
    "dangerousGoods" BOOLEAN,
    "status" TEXT DEFAULT 'pending',
    "rejectionReason" TEXT[],
    "acceptReason" TEXT,
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
    "postMainCategory" TEXT,
    "postSubCategory" TEXT,
    "MainCategoryName" TEXT,
    "SubCategoryName" TEXT,
    "shipmentType" TEXT,

    CONSTRAINT "QuotePost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuoteReply" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "parentReplyId" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT DEFAULT 'pending',
    "rejectionReason" TEXT,

    CONSTRAINT "QuoteReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuoteLike" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "QuoteLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralPost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "viewCount" INTEGER,
    "likesCount" INTEGER DEFAULT 0,
    "commentsCount" INTEGER DEFAULT 0,
    "status" TEXT DEFAULT 'pending',
    "rejectionReason" TEXT[],
    "acceptReason" TEXT,
    "generalPostMainCategory" TEXT,
    "generalPostSubCategory" TEXT,
    "MainCategoryName" TEXT,
    "SubCategoryName" TEXT,

    CONSTRAINT "GeneralPost_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image_url" TEXT[],
    "categoryId" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "unArchiveReasons" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "coverImages" TEXT[],
    "eventTitle" TEXT NOT NULL,
    "organizer" TEXT NOT NULL,
    "countryCode" TEXT,
    "contactNumber" TEXT,
    "emailAddress" TEXT,
    "description" TEXT NOT NULL,
    "mode" "EventMode" NOT NULL,
    "location" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "unArchiveReasons" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BlogCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "institutionName" TEXT NOT NULL,
    "logo" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "instructorName" TEXT NOT NULL,
    "thumbnail" TEXT,
    "brochure" TEXT,
    "previewVideoUrl" TEXT,
    "educationLevel" "EducationLevel" NOT NULL,
    "difficulty" "CourseDifficulty" NOT NULL,
    "mode" "CourseMode" NOT NULL,
    "currency" "Currency" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "duration" TEXT NOT NULL,
    "validUntil" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseModule" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "sectionTitle" TEXT NOT NULL,
    "videoTitle" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseEnquiry" (
    "id" TEXT NOT NULL,
    "institutionName" TEXT NOT NULL,
    "institutionType" TEXT NOT NULL,
    "contactPersonName" TEXT NOT NULL,
    "contactPersonPosition" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseEnquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountriesData" (
    "id" INTEGER NOT NULL,
    "shortname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phonecode" INTEGER NOT NULL,
    "flag" TEXT,

    CONSTRAINT "CountriesData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatesData" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "country_id" INTEGER NOT NULL,

    CONSTRAINT "StatesData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CitiesData" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "state_id" INTEGER NOT NULL,

    CONSTRAINT "CitiesData_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "LandingMenuItems" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "LandingMenuItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountriesDataWithFlag" (
    "id_country" SERIAL NOT NULL,
    "Country_Name" TEXT NOT NULL,
    "ISO2" CHAR(2) NOT NULL,
    "ISO3" CHAR(3) NOT NULL,
    "Top_Level_Domain" TEXT NOT NULL,
    "FIPS" TEXT NOT NULL,
    "ISO_Numeric" INTEGER NOT NULL,
    "GeoNameID" TEXT NOT NULL,
    "E164" INTEGER NOT NULL,
    "Phone_Code" TEXT NOT NULL,
    "Continent" TEXT NOT NULL,
    "Capital" TEXT NOT NULL,
    "Time_Zone_in_Capital" TEXT NOT NULL,
    "Currency" TEXT NOT NULL,
    "Language_Codes" TEXT NOT NULL,
    "Languages" TEXT NOT NULL,
    "Area_KM2" INTEGER NOT NULL,
    "Internet_Hosts" TEXT NOT NULL,
    "Internet_Users" TEXT NOT NULL,
    "Phones_Mobile" TEXT NOT NULL,
    "Phones_Landline" TEXT NOT NULL,
    "GDP" TEXT NOT NULL,

    CONSTRAINT "CountriesDataWithFlag_pkey" PRIMARY KEY ("id_country")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobileNo_key" ON "User"("mobileNo");

-- CreateIndex
CREATE UNIQUE INDEX "ForumMainCategory_name_key" ON "ForumMainCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ForumSubCategory_name_mainCategoryId_key" ON "ForumSubCategory"("name", "mainCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "BlogCategory_name_key" ON "BlogCategory"("name");

-- CreateIndex
CREATE INDEX "LandingMenuItems_name_enabled" ON "LandingMenuItems"("name", "enabled");

-- AddForeignKey
ALTER TABLE "ForumSubCategory" ADD CONSTRAINT "ForumSubCategory_mainCategoryId_fkey" FOREIGN KEY ("mainCategoryId") REFERENCES "ForumMainCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuotePost" ADD CONSTRAINT "QuotePost_postSubCategory_fkey" FOREIGN KEY ("postSubCategory") REFERENCES "ForumSubCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuotePost" ADD CONSTRAINT "QuotePost_postMainCategory_fkey" FOREIGN KEY ("postMainCategory") REFERENCES "ForumMainCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuotePost" ADD CONSTRAINT "QuotePost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteReply" ADD CONSTRAINT "QuoteReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteReply" ADD CONSTRAINT "QuoteReply_postId_fkey" FOREIGN KEY ("postId") REFERENCES "QuotePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteReply" ADD CONSTRAINT "QuoteReply_parentReplyId_fkey" FOREIGN KEY ("parentReplyId") REFERENCES "QuoteReply"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteLike" ADD CONSTRAINT "QuoteLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteLike" ADD CONSTRAINT "QuoteLike_postId_fkey" FOREIGN KEY ("postId") REFERENCES "QuotePost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralPost" ADD CONSTRAINT "GeneralPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralPost" ADD CONSTRAINT "GeneralPost_generalPostMainCategory_fkey" FOREIGN KEY ("generalPostMainCategory") REFERENCES "ForumMainCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralPost" ADD CONSTRAINT "GeneralPost_generalPostSubCategory_fkey" FOREIGN KEY ("generalPostSubCategory") REFERENCES "ForumSubCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "BlogCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseModule" ADD CONSTRAINT "CourseModule_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatesData" ADD CONSTRAINT "StatesData_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "CountriesData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CitiesData" ADD CONSTRAINT "CitiesData_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "StatesData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
