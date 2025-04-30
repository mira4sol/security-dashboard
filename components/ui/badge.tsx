import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-mono whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-primary/20 text-primary",
        secondary:
          "bg-secondary/20 text-secondary",
        destructive:
          "bg-destructive/20 text-destructive",
        outline:
          "border border-border text-foreground",
        signature:
          "bg-[#2563EB]/20 text-[#2563EB]",
        price:
          "bg-[#F59E0B]/20 text-[#F59E0B]",
        validation:
          "bg-[#EF4444]/20 text-[#EF4444]",
        reentrancy:
          "bg-[#8B5CF6]/20 text-[#8B5CF6]",
        other:
          "bg-[#10B981]/20 text-[#10B981]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
