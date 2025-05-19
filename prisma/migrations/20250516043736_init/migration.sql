-- CreateTable
CREATE TABLE "CountryWithFlag" (
    "id_country" INTEGER NOT NULL,
    "Country_Name" VARCHAR(32),
    "ISO2" VARCHAR(2),
    "ISO3" VARCHAR(3),
    "Top_Level_Domain" VARCHAR(2),
    "Phone_Code" VARCHAR(19),
    "Flag_Path" VARCHAR(255),

    CONSTRAINT "CountryWithFlag_pkey" PRIMARY KEY ("id_country")
);
