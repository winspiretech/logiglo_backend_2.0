-- DropForeignKey
ALTER TABLE "PostFieldValue" DROP CONSTRAINT "PostFieldValue_fieldId_fkey";

-- AddForeignKey
ALTER TABLE "PostFieldValue" ADD CONSTRAINT "PostFieldValue_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;
