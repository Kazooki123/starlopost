/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      title: "Safe Space",
      description: "3D Game space survival game",
      imageUrl: "/safe-space.jpg?height=200&width=300",
      route: "/games/safespace",
    },
    {
      id: 2,
      title: "Space Block Invaders",
      description: "Has similarity with Minecraft XD",
      imageUrl: "/space-block-invaders.jpg?height=200&width=300",
      route: "/games/spaceblockinvaders",
    },
    {
      id: 3,
      title: "Whack-a-Mole",
      description: "Whack the Mole!!",
      imageUrl: "/whack-a-mole.png?height=200&width=300",
      route: "/games/whack-a-mole",
    },
    {
      id: 4,
      title: "Space Huggers",
      description: "Defeat enemies and level up!",
      imageUrl: "/spacehuggers.png?height=200&width=300",
      route: "/games/spacehuggers",
    },
  ];

  const handleCardClick = (route: string) => {
    console.log(`Navigating to ${route}`);
    router.push(route);
  };

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Card
          key={card.id}
          className="cursor-pointer transition-shadow hover:shadow-lg"
          onClick={() => handleCardClick(card.route)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleCardClick(card.route);
            }
          }}
          role="button"
          aria-label={`View details for ${card.title}`}
        >
          <CardContent className="p-0">
            <Image
              src={card.imageUrl}
              alt={card.title}
              width={300}
              height={200}
              className="h-48 w-full object-cover"
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <h3 className="text-lg mt-2 font-semibold">{card.title}</h3>
            <p className="text-sm text-muted-foreground">{card.description}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}