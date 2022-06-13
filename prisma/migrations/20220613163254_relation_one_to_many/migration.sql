/*
  Warnings:

  - You are about to drop the `_DirectorToMovie` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `directorID` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_DirectorToMovie" DROP CONSTRAINT "_DirectorToMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_DirectorToMovie" DROP CONSTRAINT "_DirectorToMovie_B_fkey";

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "directorID" UUID NOT NULL;

-- DropTable
DROP TABLE "_DirectorToMovie";

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_directorID_fkey" FOREIGN KEY ("directorID") REFERENCES "Director"("id") ON DELETE CASCADE ON UPDATE CASCADE;
