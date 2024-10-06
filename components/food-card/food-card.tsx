import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";

import { Card } from "../card";

const foodCardVariant = cva(
  "flex justify-between min-w-40 md:w-40 transition-colors",
  {
    variants: {
      isActive: {
        true: "bg-green text-white",
        false: "bg-white hover:bg-off-white/50 hover:text-black",
      },
    },
  },
);

export interface FoodCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof foodCardVariant> {
  title: string;
  imageSrc: string;
}

export function FoodCard({
  title,
  imageSrc,
  isActive,
  className,
  ...props
}: FoodCardProps) {
  return (
    <Card className={foodCardVariant({ isActive, className })} {...props}>
      <p className="text-xl pl-3 py-4">{title}</p>
      <Image
        src={imageSrc}
        width={80}
        height={80}
        alt={title}
        className="aspect-square"
      />
    </Card>
  );
}
