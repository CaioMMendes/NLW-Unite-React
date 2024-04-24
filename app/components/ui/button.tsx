import { cn } from "@/app/utils/cn"
import { ButtonHTMLAttributes } from "react"

const Button = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn("bg-orange-400 h-10 px-3 rounded font-medium", className)}
      {...props}
    />
  )
}

export default Button
