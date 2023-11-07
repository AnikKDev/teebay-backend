-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_userEmail_fkey";

-- DropForeignKey
ALTER TABLE "rents" DROP CONSTRAINT "rents_userEmail_fkey";

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rents" ADD CONSTRAINT "rents_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
