/*
  Warnings:

  - The values [Other] on the enum `users_gender` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[role_name]` on the table `roles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."users_gender_new" AS ENUM ('Male', 'Female');
ALTER TABLE "public"."users" ALTER COLUMN "gender" TYPE "public"."users_gender_new" USING ("gender"::text::"public"."users_gender_new");
ALTER TYPE "public"."users_gender" RENAME TO "users_gender_old";
ALTER TYPE "public"."users_gender_new" RENAME TO "users_gender";
DROP TYPE "public"."users_gender_old";
COMMIT;

-- AlterTable
ALTER TABLE "public"."users" ALTER COLUMN "role_id" SET DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "roles_role_name_key" ON "public"."roles"("role_name");
