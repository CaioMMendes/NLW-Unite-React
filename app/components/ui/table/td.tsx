import { cn } from "@/app/utils/cn"
import { TdHTMLAttributes } from "react"

type TdProps = TdHTMLAttributes<HTMLTableCellElement>

const Td = ({ className, ...props }: TdProps) => {
  return (
    <td
      {...props}
      className={cn(className, "py-3 px-4 text-sm text-zinc-300 ")}
    ></td>
  )
}

export default Td
