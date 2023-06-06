-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "reporter" TEXT NOT NULL,
    "personalityId" INTEGER NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Report_reporter_personalityId_key" ON "Report"("reporter", "personalityId");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_personalityId_fkey" FOREIGN KEY ("personalityId") REFERENCES "Personality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
