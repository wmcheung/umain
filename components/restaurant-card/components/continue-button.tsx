import { cx } from "class-variance-authority";

export function ContinueButton({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cx(
        "rounded-full bg-green w-8 h-8 flex justify-center items-center text-white hover:bg-green/95 transition-colors",
        className,
      )}
      {...props}
    >
      <svg
        width="12"
        height="10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.856 5a.623.623 0 0 1-.219.469L7.606 9.492a.648.648 0 0 1-.461.195.61.61 0 0 1-.437-.171.593.593 0 0 1-.172-.438.76.76 0 0 1 .039-.242.52.52 0 0 1 .133-.195l1.078-1.118 2.64-2.375.14.336-2.077.149H1.114a.598.598 0 0 1-.453-.18A.63.63 0 0 1 .489 5a.63.63 0 0 1 .172-.453.598.598 0 0 1 .453-.18h7.375l2.078.149-.14.343-2.641-2.382-1.078-1.118a.52.52 0 0 1-.133-.195.76.76 0 0 1-.04-.242c0-.177.058-.323.173-.438a.61.61 0 0 1 .437-.171c.172 0 .326.065.461.195l4.031 4.023a.623.623 0 0 1 .219.469Z"
          fill="currentColor"
        />
      </svg>
      <span className="sr-only">Continue</span>
    </button>
  );
}
