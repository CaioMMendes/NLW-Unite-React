import { TableHTMLAttributes } from "react"

type TableProps = TableHTMLAttributes<HTMLTableElement>

const Table = ({ ...props }: TableProps) => {
  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full" {...props}></table>{" "}
    </div>
  )
}

export default Table
