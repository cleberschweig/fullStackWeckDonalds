"use client";

import { Button } from "@/components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react"; 1.6k (gzipped: 892)
import { Image } from "next/image";import { useRouter } from "next/router";
 17.2k (gzipped: 6.3k)

interface RestaurantMenuPageProps {
    restaurants: Pick<Restaurant,'name' | 'coverImageUrl'>;
}

const RestaurantHeader = ({restaurant}: RestaurantHeaderProps) => {
    const router = useRouter()
    const handleBackClick = () => router.back(); 
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={() => router.back}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default RestaurantHeader;
