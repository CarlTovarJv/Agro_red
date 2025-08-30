/*
  Warnings:

  - You are about to drop the column `registration_date` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `role_id` on the `users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "dui" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "date_of_birth" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accept_terms" BOOLEAN NOT NULL,
    "accept_privacy" BOOLEAN NOT NULL
);
INSERT INTO "new_users" ("accept_privacy", "accept_terms", "address", "date_of_birth", "dui", "email", "first_name", "gender", "last_name", "password", "user_id") SELECT "accept_privacy", "accept_terms", "address", "date_of_birth", "dui", "email", "first_name", "gender", "last_name", "password", "user_id" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_dui_key" ON "users"("dui");
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
