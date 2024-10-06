import { cva, cx } from "class-variance-authority";
import Image from "next/image";

import { Card } from "@/components/card";
import { Chip } from "@/components/chip";

import { ContinueButton } from "./components/continue-button";

const statusVariants = cva("w-2 h-2 rounded-full relative", {
  variants: {
    status: {
      open: "bg-green",
      closed: "bg-black",
    },
  },
  defaultVariants: {
    status: "open",
  },
});

export interface RestaurantCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  status: "open" | "closed";
  deliveryTime?: string;
  imageSrc: string;
}

export function RestaurantCard({
  title,
  status,
  deliveryTime,
  imageSrc,
  className,
  ...props
}: RestaurantCardProps) {
  const statusText = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <Card
      size="large"
      intent="filled"
      className={cx(
        "relative flex overflow-hidden h-[12.625rem] min-w-[20.4375rem]",
        className,
      )}
      {...props}
    >
      {status === "closed" && (
        <>
          <div className="absolute inset-0 bg-white opacity-70 z-10" />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <Chip size="small">Opens tomorrow at 12 pm</Chip>
          </div>
        </>
      )}
      <div className="flex grow flex-col justify-between">
        <div className="z-10 inline-flex gap-2">
          <Chip className="pl-2.5">
            <span className={statusVariants({ status })} />
            <span>{statusText}</span>
          </Chip>
          {status === "open" && deliveryTime && <Chip>{deliveryTime}</Chip>}
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl pl-3">{title}</h3>
          <ContinueButton />
        </div>
      </div>
      <Image
        src={imageSrc}
        width={140}
        height={140}
        alt={title}
        className="absolute -top-7 -right-8 aspect-square"
      />
    </Card>
  );
}
