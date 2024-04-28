import { cn } from "@/app/utils/cn"
import { ThHTMLAttributes } from "react"

type ThProps = ThHTMLAttributes<HTMLTableCellElement>

const Th = ({ className, ...props }: ThProps) => {
  return (
    <th
      {...props}
      className={cn(className, "py-3 px-4 text-sm font-semibold text-left")}
    ></th>
  )
}

export default Th
