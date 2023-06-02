-- CreateTable
CREATE TABLE "Personality" (
    "name" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL,
    "downvotes" INTEGER NOT NULL,

    CONSTRAINT "Personality_pkey" PRIMARY KEY ("name")
);
