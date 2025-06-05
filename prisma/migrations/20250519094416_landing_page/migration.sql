-- CreateTable
CREATE TABLE "LandingMenuItems" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "LandingMenuItems_pkey" PRIMARY KEY ("id")
);
