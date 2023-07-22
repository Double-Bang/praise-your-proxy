/*
  Warnings:

  - You are about to drop the column `body` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `cardImageURL` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `Post` table. All the data in the column will be lost.
  - Added the required column `cardImage` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardSet` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `review` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardName" TEXT NOT NULL,
    "cardImage" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "authorId" TEXT NOT NULL,
    "cardSet" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("authorId", "cardName", "createdAt", "id", "seller", "updatedAt") SELECT "authorId", "cardName", "createdAt", "id", "seller", "updatedAt" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
