import { cn } from "@/app/utils/cn"
import { ButtonHTMLAttributes } from "react"

type ButtonTypes = {
  variant?: "table"
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ className, variant, ...props }: ButtonTypes) => {
  return (
    <button
      className={cn(
        variant === "table" &&
          "bg-black/20 border border-white/10 rounded-md p-1.5",
        !variant && "bg-orange-400 h-10 px-3 rounded font-medium",
        className
      )}
      {...props}
    />
  )
}

export default Button
