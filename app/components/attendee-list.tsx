"use client"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontalIcon,
} from "lucide-react"
import { v4 as uuid } from "uuid"
import IconButton from "./ui/icon-button"
import { Input, InputWithIcon } from "./ui/input"
import Table from "./ui/table/table"
import Th from "./ui/table/th"
import Td from "./ui/table/td"
import { attendees } from "../data/attendees"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/pt-br"
import { useState } from "react"

dayjs.locale("pt-br")
dayjs.extend(relativeTime)

const AttendeeList = () => {
  const [page, setPage] = useState(1)
  const numberOfItems = attendees.length
  const itensPerPage = 10
  const numberOfPages = Math.ceil(numberOfItems / 10)

  const goToNextPage = () => {
    if (page < numberOfPages) {
      setPage((page) => page + 1)
    }
  }
  const goToPreviousPage = () => {
    if (page > 1) {
      setPage((page) => page - 1)
    }
  }
  const goToLastPage = () => {
    setPage(numberOfPages)
  }
  const goToFirstPage = () => {
    setPage(1)
  }

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
      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <Th style={{ width: 48 }}>
              <Input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10 "
              />
            </Th>
            <Th>Código</Th>
            <Th>Participantes</Th>
            <Th>Data de inscrição</Th>
            <Th>Data do check-in</Th>
            <Th style={{ width: 64 }}></Th>
          </tr>
        </thead>
        <tbody>
          {attendees
            .slice((page - 1) * itensPerPage, page * itensPerPage)
            .map((attendee) => {
              return (
                <tr
                  key={attendee.id}
                  className="border-b border-white/10 hover:bg-white/10"
                >
                  <Td>
                    <Input
                      type="checkbox"
                      className="size-4 bg-black/20 rounded border border-white/10 "
                    />
                  </Td>
                  <Td>{attendee.id}</Td>
                  <Td>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        {attendee.name}
                      </span>
                      <span>{attendee.email}</span>
                    </div>
                  </Td>
                  <Td>{dayjs().to(attendee.createdAt)}</Td>
                  <Td>{dayjs().to(attendee.checkedInAt)}</Td>

                  <Td>
                    <IconButton variant="table" Icon={MoreHorizontalIcon} />
                  </Td>
                </tr>
              )
            })}
        </tbody>
        <tfoot>
          <tr>
            <Td colSpan={3}>
              Mostrando {itensPerPage} de {numberOfItems}
            </Td>
            <Td colSpan={3} className=" text-right">
              <div className="inline-flex  items-center gap-8 ">
                <span>
                  Página {page} de {numberOfPages}
                </span>
                <div className="flex gap-1.5">
                  <IconButton
                    disabled={page === 1}
                    onClick={goToFirstPage}
                    variant="pagination"
                    Icon={ChevronsLeft}
                  />
                  <IconButton
                    disabled={page === 1}
                    onClick={goToPreviousPage}
                    variant="pagination"
                    Icon={ChevronLeft}
                  />
                  <IconButton
                    disabled={page === numberOfPages}
                    onClick={goToNextPage}
                    variant="pagination"
                    Icon={ChevronRight}
                  />
                  <IconButton
                    disabled={page === numberOfPages}
                    onClick={goToLastPage}
                    variant="pagination"
                    Icon={ChevronsRight}
                  />
                </div>
              </div>
            </Td>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}

export default AttendeeList
