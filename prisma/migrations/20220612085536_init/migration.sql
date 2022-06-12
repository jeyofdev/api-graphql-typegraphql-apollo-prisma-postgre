-- CreateTable
CREATE TABLE "Movie" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "synopsys" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_id_key" ON "Movie"("id");
