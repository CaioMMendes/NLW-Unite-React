import { cn } from "@/app/utils/cn"
import { ButtonHTMLAttributes } from "react"

type ButtonTypes = {
  variant?: "table" | "pagination"
  Icon: React.ElementType
} & ButtonHTMLAttributes<HTMLButtonElement>

const IconButton = ({ className, variant, Icon, ...props }: ButtonTypes) => {
  return (
    <button
      className={cn(
        variant === "table" &&
          "bg-black/20 border border-white/10 rounded-md p-1.5",

        variant === "pagination" &&
          "bg-white/10  border border-white/10 rounded-md p-1.5",

        className
      )}
      {...props}
    >
      <Icon className="size-4" />
    </button>
  )
}

export default IconButton
