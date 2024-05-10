import { cn } from "@/app/utils/cn"
import { InputHTMLAttributes } from "react"
import { Search } from "lucide-react"

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={cn(className, "")} {...props} />
}

const InputWithIcon = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div
      className={cn(
        className,
        "px-3 py-1.5 border-white/10 border rounded-lg text-sm flex items-center gap-3"
      )}
    >
      <Search width={16} height={16} className="text-emarald-300" />
      <input
        className={
          "bg-transparent outline-none flex-1 border-0 p-0 text-sm ring-0 focus:ring-0"
        }
        {...props}
      />
    </div>
  )
}

export { Input, InputWithIcon }
