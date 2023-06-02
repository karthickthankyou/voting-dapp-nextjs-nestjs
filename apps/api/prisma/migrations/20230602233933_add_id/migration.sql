/*
  Warnings:

  - The primary key for the `Personality` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[name]` on the table `Personality` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Personality" DROP CONSTRAINT "Personality_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Personality_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Personality_name_key" ON "Personality"("name");
