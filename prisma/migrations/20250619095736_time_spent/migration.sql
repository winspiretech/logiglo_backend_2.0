-- CreateTable
CREATE TABLE "UserSectionTime" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "timeSpentMs" INTEGER NOT NULL DEFAULT 0,
    "blogId" TEXT,
    "courseId" TEXT,
    "eventId" TEXT,
    "quoteId" TEXT,
    "forumId" TEXT,

    CONSTRAINT "UserSectionTime_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSectionTime_userId_sectionId_date_blogId_courseId_event_key" ON "UserSectionTime"("userId", "sectionId", "date", "blogId", "courseId", "eventId", "quoteId", "forumId");

-- AddForeignKey
ALTER TABLE "UserSectionTime" ADD CONSTRAINT "UserSectionTime_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSectionTime" ADD CONSTRAINT "UserSectionTime_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSectionTime" ADD CONSTRAINT "UserSectionTime_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSectionTime" ADD CONSTRAINT "UserSectionTime_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSectionTime" ADD CONSTRAINT "UserSectionTime_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "QuotePost"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSectionTime" ADD CONSTRAINT "UserSectionTime_forumId_fkey" FOREIGN KEY ("forumId") REFERENCES "GeneralPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;
