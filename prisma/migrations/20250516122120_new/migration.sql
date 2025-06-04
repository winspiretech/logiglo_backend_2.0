-- CreateTable
CREATE TABLE "CountriesData" (
    "id" INTEGER NOT NULL,
    "shortname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phonecode" INTEGER NOT NULL,

    CONSTRAINT "CountriesData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "States" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "country_id" INTEGER NOT NULL,

    CONSTRAINT "States_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CitiesData" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "state_id" INTEGER NOT NULL,

    CONSTRAINT "CitiesData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "States" ADD CONSTRAINT "States_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "CountriesData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CitiesData" ADD CONSTRAINT "CitiesData_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "States"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
