/*
  Warnings:

  - You are about to drop the `user_info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user_info";

-- CreateTable
CREATE TABLE "user_details" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email_id" TEXT NOT NULL,
    "phone_no" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_details_pkey" PRIMARY KEY ("id")
);
