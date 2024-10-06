import { cva, type VariantProps } from "class-variance-authority";

export const chipVariants = cva(
  "border border-[0.6px] border-stroke rounded-full py-2 px-3 text-base text-black flex items-center justify-center gap-1 w-fit transition-colors",
  {
    variants: {
      size: {
        round: "rounded-full",
        small: "rounded-[4px]",
        large: "rounded-lg",
      },
      isActive: {
        true: "bg-green text-white",
        false: "bg-white hover:bg-off-white/50 hover:text-black",
      },
    },
    defaultVariants: {
      size: "round",
    },
  },
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {}

export function Chip({ className, isActive, size, ...props }: ChipProps) {
  return (
    <div className={chipVariants({ isActive, size, className })} {...props} />
  );
}
