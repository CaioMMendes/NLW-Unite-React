"use client"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontalIcon,
} from "lucide-react"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { useDebounce } from "../hooks/use-debounce"
import IconButton from "./ui/icon-button"
import { Input, InputWithIcon } from "./ui/input"
import Table from "./ui/table/table"
import Td from "./ui/table/td"
import Th from "./ui/table/th"

dayjs.locale("pt-br")
dayjs.extend(relativeTime)

type AttendeeType = {
  id: number
  name: string
  email: string
  createdAt: string
  checkedInAt: string | null
}

const AttendeeList = () => {
  const [attendees, setAttendees] = useState<AttendeeType[]>([])
  const [numberOfItems, setNumberOfItems] = useState<number>(0)
  const firstRender = useRef(true)

  //URL state
  const [page, setPage] = useState<number>(1)
  const [search, setSearch] = useState("")
  const numberOfPages = Math.ceil(numberOfItems / 10)
  const debounceSearch = useDebounce(search, handleUpdateDebouncePage)
  const abortControllerRef = useRef(new AbortController())

  useEffect(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has("page")) {
      const pageNumber = Number(url.searchParams.get("page"))
      setPage(isNaN(pageNumber) || pageNumber < 1 ? 1 : pageNumber)
    } else {
      setPage(1)
    }
    if (url.searchParams.has("search")) {
      setSearch(url.searchParams.get("search") ?? "")
    } else {
      setSearch("")
    }
    firstRender.current = false
  }, [])

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const url = new URL(
      `${apiUrl}/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees`
    )
    url.searchParams.set("pageIndex", String(page - 1))
    if (debounceSearch.length > 0) {
      url.searchParams.set("query", debounceSearch)
    }
    //  `${apiUrl}/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees?pageIndex=${page - 1}`
    const abort = abortControllerRef.current
    async function getAttendees() {
      try {
        const response = await fetch(url, { signal: abort.signal })
        const data = await response.json()
        setNumberOfItems(data.total)
        setAttendees(data.attendees)
      } catch (error) {
        console.log(error)
      }
    }
    getAttendees()
    // abort.abort()
  }, [page, debounceSearch])

  //URL state
  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString())
    url.searchParams.set("page", String(page))
    window.history.pushState({}, "", url)
    setPage(page)
  }
  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString())
    url.searchParams.set("search", search)
    window.history.pushState({}, "", url)
    setSearch(search)
  }

  const goToNextPage = () => {
    if (page < numberOfPages) {
      setCurrentPage(page + 1)
    }
  }
  const goToPreviousPage = () => {
    if (page > 1) {
      setCurrentPage(page - 1)
    }
  }
  const goToLastPage = () => {
    setCurrentPage(numberOfPages)
  }
  const goToFirstPage = () => {
    setCurrentPage(1)
  }
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(e.target.value)
  }
  function handleUpdateDebouncePage() {
    if (!firstRender) {
      setCurrentPage(1)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="font-bold text-2xl">Participantes</h1>
        <InputWithIcon
          placeholder="Buscar participante..."
          type="text"
          className="w-72 outline-none focus:ring-none focus:outline-none"
          onChange={handleSearch}
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
          {attendees.map((attendee) => {
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
                <Td>
                  {" "}
                  {attendee.checkedInAt === null ? (
                    <span className="text-zinc-600">Não fez check-in</span>
                  ) : (
                    dayjs().to(attendee.checkedInAt)
                  )}
                </Td>

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
              Mostrando {attendees.length} de {numberOfItems}
            </Td>
            <Td colSpan={3} className=" text-right">
              <div className="inline-flex  items-center gap-8 ">
                <span>
                  Página {numberOfItems === 0 ? 0 : page} de {numberOfPages}
                </span>
                <div className="flex gap-1.5">
                  <IconButton
                    disabled={page === 1 || numberOfItems === 0}
                    onClick={goToFirstPage}
                    variant="pagination"
                    Icon={ChevronsLeft}
                  />
                  <IconButton
                    disabled={page === 1 || numberOfItems === 0}
                    onClick={goToPreviousPage}
                    variant="pagination"
                    Icon={ChevronLeft}
                  />
                  <IconButton
                    disabled={page === numberOfPages || numberOfItems === 0}
                    onClick={goToNextPage}
                    variant="pagination"
                    Icon={ChevronRight}
                  />
                  <IconButton
                    disabled={page === numberOfPages || numberOfItems === 0}
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
