import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("border border-stroke rounded-lg", {
  variants: {
    size: {
      small: "p-0",
      large: "p-4",
      xl: "p-0 md:p-6",
    },
    intent: {
      filled: "bg-white",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ size, intent, className, ...props }: CardProps) {
  return (
    <div className={cardVariants({ size, intent, className })} {...props} />
  );
}
