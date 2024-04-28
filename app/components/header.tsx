import Image from "next/image"
import Link from "next/link"
import Button from "./ui/button"
import NavLink from "./ui/nav-link"

const Header = () => {
  return (
    <header className="flex gap-5 items-center">
      <Image src={"/logo.svg"} alt="Logo image" width={30} height={30} />
      <div className="flex items-center gap-5">
        <NavLink href={"/eventos"}>Eventos</NavLink>
        <NavLink href={"/participantes"}>Participantes</NavLink>
      </div>
    </header>
  )
}

export default Header
