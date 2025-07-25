-- CreateTable
CREATE TABLE "user_details" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "email_id" TEXT NOT NULL,
    "phone_no" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "your_company" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_details_pkey" PRIMARY KEY ("id")
);
