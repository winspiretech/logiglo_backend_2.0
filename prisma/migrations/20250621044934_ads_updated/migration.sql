-- CreateTable
CREATE TABLE "SubSection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,

    CONSTRAINT "SubSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AdSubSections" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdSubSections_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubSection_name_sectionId_key" ON "SubSection"("name", "sectionId");

-- CreateIndex
CREATE INDEX "_AdSubSections_B_index" ON "_AdSubSections"("B");

-- AddForeignKey
ALTER TABLE "SubSection" ADD CONSTRAINT "SubSection_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdSubSections" ADD CONSTRAINT "_AdSubSections_A_fkey" FOREIGN KEY ("A") REFERENCES "Ad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdSubSections" ADD CONSTRAINT "_AdSubSections_B_fkey" FOREIGN KEY ("B") REFERENCES "SubSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
