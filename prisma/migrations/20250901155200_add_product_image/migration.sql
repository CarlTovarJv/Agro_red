/*
  Warnings:

  - You are about to drop the column `description` on the `products` table. All the data in the column will be lost.
  - Added the required column `image_url` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "product_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "seller_id" INTEGER NOT NULL,
    CONSTRAINT "products_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("created_at", "price", "product_id", "product_name", "seller_id", "updated_at") SELECT "created_at", "price", "product_id", "product_name", "seller_id", "updated_at" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE INDEX "products_seller_id_idx" ON "products"("seller_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
