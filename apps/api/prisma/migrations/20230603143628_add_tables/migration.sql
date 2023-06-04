-- CreateTable
CREATE TABLE "Personality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL,
    "downvotes" INTEGER NOT NULL,
    "creator" TEXT NOT NULL,

    CONSTRAINT "Personality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "vote" INTEGER NOT NULL,
    "voter" TEXT NOT NULL,
    "personalityId" INTEGER,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Personality_name_key" ON "Personality"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_name_key" ON "Vote"("name");

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_personalityId_fkey" FOREIGN KEY ("personalityId") REFERENCES "Personality"("id") ON DELETE SET NULL ON UPDATE CASCADE;
