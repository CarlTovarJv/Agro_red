import { prisma } from "@/lib/prismaClient";
import ProductsPageClient from "./ProductsPageClient";

export default async function ProductsPage() {

  const products = await prisma.products.findMany();

  const plainProducts = products.map((p: any) => ({
    ...p,
    price: Number(p.price),
  }));

  return <ProductsPageClient products={plainProducts} />;
}



