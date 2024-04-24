import Image from "next/image"
import Link from "next/link"
import Button from "./ui/button"

const Header = () => {
  return (
    <header className="flex gap-5 items-center">
      <Image src={"/logo.svg"} alt="Logo image" width={30} height={30} />
      <div className="flex items-center gap-5">
        <Link href={"/eventos"} className="font-medium text-sm text-zinc-300">
          Eventos
        </Link>
        <Link
          href={"/participantes"}
          className="font-medium text-sm text-zinc-300"
        >
          Participantes
        </Link>
      </div>
    </header>
  )
}

export default Header
