/*
  Warnings:

  - A unique constraint covering the columns `[name,voter]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Vote_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Vote_name_voter_key" ON "Vote"("name", "voter");
