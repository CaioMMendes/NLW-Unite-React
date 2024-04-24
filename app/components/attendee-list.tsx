import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontalIcon,
} from "lucide-react"
import Button from "./ui/button"
import { Input, InputWithIcon } from "./ui/input"
import { v4 as uuid } from "uuid"

const AttendeeList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="font-bold text-2xl">Participantes</h1>
        <InputWithIcon
          placeholder="Buscar participante..."
          type="text"
          className="w-72"
        />
      </div>

      {/* Não da para colocar arredondamento em tabelas do html  */}
      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              >
                <Input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10 "
                />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participantes
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data do check-in
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map(() => {
              return (
                <tr
                  key={uuid()}
                  className="border-b border-white/10 hover:bg-white/10"
                >
                  <td className="py-3 px-4 text-sm text-zinc-300 ">
                    <Input
                      type="checkbox"
                      className="size-4 bg-black/20 rounded border border-white/10 "
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300 ">123123</td>
                  <td className="py-3 px-4 text-sm text-zinc-300 ">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Caio Martins
                      </span>
                      <span>caio@gmail.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300 ">
                    7 dias atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300 ">
                    3 dias atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300 ">
                    <Button variant="table">
                      <MoreHorizontalIcon className="size-4" />
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300 ">
                Mostrando 10 de 228
              </td>
              <td
                colSpan={3}
                className="py-3 px-4 text-sm text-zinc-300 text-right"
              >
                <div className="inline-flex  items-center gap-8 ">
                  <span>Página 1 de 23</span>
                  <div className="flex gap-1.5">
                    <Button variant="table" className="bg-white/10">
                      <ChevronsLeft className="size-4" />
                    </Button>
                    <Button variant="table" className="bg-white/10">
                      <ChevronLeft className="size-4" />
                    </Button>
                    <Button variant="table" className="bg-white/10">
                      <ChevronsRight className="size-4" />
                    </Button>
                    <Button variant="table" className="bg-white/10">
                      <ChevronRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default AttendeeList
