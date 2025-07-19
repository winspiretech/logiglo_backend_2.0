/*
  Warnings:

  - You are about to drop the column `additionalData` on the `GeneralPost` table. All the data in the column will be lost.
  - You are about to drop the column `additionalData` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the `FormConfig` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('TEXT', 'DROPDOWN', 'RADIO', 'CHECKBOX', 'DATE', 'NUMBER', 'TEXTAREA');

-- AlterTable
ALTER TABLE "GeneralPost" DROP COLUMN "additionalData",
ADD COLUMN     "formId" TEXT;

-- AlterTable
ALTER TABLE "QuotePost" DROP COLUMN "additionalData",
ADD COLUMN     "formId" TEXT;

-- DropTable
DROP TABLE "FormConfig";

-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormSection" (
    "id" TEXT NOT NULL,
    "formId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "FormSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Field" (
    "id" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "type" "FieldType" NOT NULL,
    "label" TEXT NOT NULL,
    "placeholder" TEXT,
    "position" INTEGER NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "options" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "optionSetId" TEXT,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptionSet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "options" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OptionSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostFieldValue" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "PostFieldValue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FormSection_formId_position_key" ON "FormSection"("formId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "Field_sectionId_position_key" ON "Field"("sectionId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "OptionSet_name_key" ON "OptionSet"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PostFieldValue_postId_fieldId_key" ON "PostFieldValue"("postId", "fieldId");

-- AddForeignKey
ALTER TABLE "FormSection" ADD CONSTRAINT "FormSection_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "FormSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_optionSetId_fkey" FOREIGN KEY ("optionSetId") REFERENCES "OptionSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostFieldValue" ADD CONSTRAINT "quotePost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "QuotePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostFieldValue" ADD CONSTRAINT "generalPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "GeneralPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostFieldValue" ADD CONSTRAINT "PostFieldValue_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuotePost" ADD CONSTRAINT "QuotePost_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralPost" ADD CONSTRAINT "GeneralPost_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE SET NULL ON UPDATE CASCADE;
