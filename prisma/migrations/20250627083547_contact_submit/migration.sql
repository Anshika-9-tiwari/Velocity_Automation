/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `user_info` table. All the data in the column will be lost.
  - Made the column `first_name` on table `user_info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name` on table `user_info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone_no` on table `user_info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `course_name` on table `user_info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `message` on table `user_info` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user_info" DROP COLUMN "updatedAt",
ALTER COLUMN "first_name" SET NOT NULL,
ALTER COLUMN "last_name" SET NOT NULL,
ALTER COLUMN "phone_no" SET NOT NULL,
ALTER COLUMN "course_name" SET NOT NULL,
ALTER COLUMN "message" SET NOT NULL;
