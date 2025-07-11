-- CreateTable
CREATE TABLE "user_info" (
    "id" SERIAL NOT NULL,
    "email_id" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "phone_no" TEXT,
    "course_name" TEXT,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_info_pkey" PRIMARY KEY ("id")
);
