-- CreateTable
CREATE TABLE "users" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "dui" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "date_of_birth" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accept_terms" BOOLEAN NOT NULL DEFAULT false,
    "accept_privacy" BOOLEAN NOT NULL DEFAULT false,
    "role_id" INTEGER NOT NULL DEFAULT 1,
    "registration_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "users_dui_key" ON "users"("dui");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
