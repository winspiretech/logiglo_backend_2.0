-- CreateTable
CREATE TABLE "ExporterType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ExporterType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exporter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fullAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "email" TEXT,
    "stateId" INTEGER NOT NULL,
    "exporterTypeId" TEXT NOT NULL,

    CONSTRAINT "Exporter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ExporterProducts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ExporterProducts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExporterType_name_key" ON "ExporterType"("name");

-- CreateIndex
CREATE INDEX "Exporter_stateId_idx" ON "Exporter"("stateId");

-- CreateIndex
CREATE INDEX "Exporter_exporterTypeId_idx" ON "Exporter"("exporterTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE INDEX "_ExporterProducts_B_index" ON "_ExporterProducts"("B");

-- AddForeignKey
ALTER TABLE "Exporter" ADD CONSTRAINT "Exporter_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "StatesData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exporter" ADD CONSTRAINT "Exporter_exporterTypeId_fkey" FOREIGN KEY ("exporterTypeId") REFERENCES "ExporterType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExporterProducts" ADD CONSTRAINT "_ExporterProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Exporter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExporterProducts" ADD CONSTRAINT "_ExporterProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
