-- AlterTable
ALTER TABLE "products" ADD COLUMN     "userEmail" TEXT;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "users"("email") ON DELETE SET NULL ON UPDATE CASCADE;
