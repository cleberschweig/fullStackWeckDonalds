import { Heading1 } from "lucide-react"; // Externo primeiro
import { db } from "@/lib/prisma"; // Interno depois

export const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await db.restaurant.findUnique({
    where: { slug },
  });
  return restaurant;
};
