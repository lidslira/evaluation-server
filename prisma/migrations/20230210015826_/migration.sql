-- CreateTable
CREATE TABLE "rating" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "stars" INTEGER NOT NULL,
    "tutor" TEXT NOT NULL DEFAULT 'Ana'
);
