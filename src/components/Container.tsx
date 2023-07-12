import Image from "next/image";

import { cn } from "@/lib/utils";

const cards = [
  {
    id: 1,
    icon: "/3-column-preview-card-component/icon-sedans.svg",
    header: "Sedans",
    paragraph:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    bgColor: "bg-primary-bright-orange",
    textColor: "text-primary-bright-orange",
  },
  {
    id: 2,
    icon: "/3-column-preview-card-component/icon-suvs.svg",
    header: "SUVs",
    paragraph:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    bgColor: "bg-primary-dark-cyan",
    textColor: "text-primary-dark-cyan",
  },
  {
    id: 3,
    icon: "/3-column-preview-card-component/icon-luxury.svg",
    header: "Luxury",
    paragraph:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    bgColor: "bg-primary-very-dark-cyan",
    textColor: "text-primary-very-dark-cyan",
  },
];

export default function Container() {
  return (
    <div
      className={cn(
        "m-4 flex h-auto w-[327px] flex-col rounded-lg",
        "lg:w-[830px] lg:flex-row"
      )}
    >
      {cards.map((card) => (
        <section
          key={card.id}
          className={cn(
            `h-[442px] w-auto ${card.bgColor} flex flex-col p-11`,
            "first:rounded-t-lg last:rounded-b-lg",
            "lg:h-[500px] lg:first:rounded-s-lg lg:first:rounded-tr-none lg:last:rounded-e-lg lg:last:rounded-bl-none"
          )}
        >
          <Image
            src={card.icon}
            alt={`${card.header} Icon`}
            width={0}
            height={0}
            className={cn("my-1 h-10 w-16")}
          />
          <h1
            className={cn(
              "my-1 pb-6 pt-8 font-serif text-4xl font-semibold uppercase",
              "lg:text-[40px]"
            )}
          >
            {card.header}
          </h1>
          <p
            className={cn(
              "mb-auto text-[15px] leading-6 text-neutral-transparent-white",
              "lg:text-sm lg:leading-6"
            )}
          >
            {card.paragraph}
          </p>
          <button
            className={cn(
              `w-fit bg-neutral-very-light-grey ${card.textColor} rounded-full border-2 border-neutral-very-light-grey px-9 py-3 text-sm hover:bg-transparent hover:text-neutral-very-light-grey focus:outline-none focus:ring-4`,
              "lg:mb-1 lg:px-6 lg:py-3"
            )}
            onClick={() =>
              console.log(`Button from '${card.header}' card was clicked`)
            }
          >
            Learn More
          </button>
        </section>
      ))}
    </div>
  );
}
