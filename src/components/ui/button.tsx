import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-primary text-primary-fg shadow-sm hover:bg-primary-hover",
  secondary: "bg-muted text-fg hover:bg-muted-hover",
  outline: "border border-border bg-card text-fg hover:bg-muted",
  ghost: "text-fg hover:bg-muted",
  danger: "text-danger hover:bg-danger/10",
  accent: "bg-accent text-white shadow-sm hover:brightness-105",
} as const;

const sizes = {
  sm: "h-8 gap-1.5 rounded-lg px-2.5 text-sm",
  md: "h-10 gap-2 rounded-xl px-4 text-sm",
  lg: "h-12 gap-2 rounded-2xl px-6 text-base",
  icon: "h-9 w-9 rounded-lg",
  iconSm: "h-7 w-7 rounded-md",
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "outline", size = "md", type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap transition-colors select-none",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        "disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
});

export function buttonClass(variant: keyof typeof variants = "outline", size: keyof typeof sizes = "md", className?: string) {
  return cn(
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&_svg]:size-4",
    variants[variant],
    sizes[size],
    className,
  );
}
