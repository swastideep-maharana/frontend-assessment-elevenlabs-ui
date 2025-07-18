import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95 hover:shadow-lg hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default:
          "bg-primary-blue text-white border border-border shadow-xs hover:bg-primary-blue/90",
        destructive:
          "bg-red-600 text-white border border-border shadow-xs hover:bg-red-700 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-red-700/80",
        outline:
          "border border-border bg-card-bg text-main shadow-xs hover:bg-neutral-bg hover:text-main",
        secondary:
          "bg-neutral-bg text-main border border-border shadow-xs hover:bg-card-bg",
        ghost:
          "bg-transparent text-main hover:bg-neutral-bg border border-transparent",
        link: "text-primary-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
