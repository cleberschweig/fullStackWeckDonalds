import { db } from "@/lib/prisma";
import { consumptionMethod } from "@prisma/client";
import { promises } from "dns";
import { ChevronDown, ChevronsLeftIcon, ScrollTextIcon } from "lucide-react";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { notFound } from "next/navigation";
import RestaurantHeader from "./components/header";

interface RestaurantMenuPage {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consuptionMethod: string }>;
}

const isConsuptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  if (!isConsuptionMethodValid(consumptionMethod)) {
    return notFound();
  }
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
    </div>
  );
};

export default RestaurantMenuPage;
