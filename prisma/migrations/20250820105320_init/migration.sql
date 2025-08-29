-- CreateEnum
CREATE TYPE "public"."users_gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "public"."order_status" AS ENUM ('Pending', 'Paid', 'Shipped', 'Delivered', 'Cancelled');

-- CreateTable
CREATE TABLE "public"."roles" (
    "role_id" SERIAL NOT NULL,
    "role_name" VARCHAR(50) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "user_id" SERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "dui" VARCHAR(20) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "gender" "public"."users_gender" NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "accept_terms" BOOLEAN NOT NULL DEFAULT false,
    "accept_privacy" BOOLEAN NOT NULL DEFAULT false,
    "role_id" INTEGER NOT NULL DEFAULT 2,
    "registration_date" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "public"."products" (
    "product_id" SERIAL NOT NULL,
    "product_name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "seller_id" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "public"."orders" (
    "order_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "order_date" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    "total" DECIMAL(10,2) NOT NULL,
    "status" "public"."order_status" DEFAULT 'Pending',

    CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "public"."order_details" (
    "order_detail_id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "order_details_pkey" PRIMARY KEY ("order_detail_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dui" ON "public"."users"("dui");

-- CreateIndex
CREATE UNIQUE INDEX "email" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "role_id" ON "public"."users"("role_id");

-- CreateIndex
CREATE INDEX "seller_id" ON "public"."products"("seller_id");

-- CreateIndex
CREATE INDEX "user_id" ON "public"."orders"("user_id");

-- CreateIndex
CREATE INDEX "order_id" ON "public"."order_details"("order_id");

-- CreateIndex
CREATE INDEX "product_id" ON "public"."order_details"("product_id");

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_ibfk_1" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "public"."users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_ibfk_1" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."order_details" ADD CONSTRAINT "order_details_ibfk_1" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."order_details" ADD CONSTRAINT "order_details_ibfk_2" FOREIGN KEY ("product_id") REFERENCES "public"."products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
