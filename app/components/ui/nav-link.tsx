import Link, { LinkProps } from "next/link"

type NavLinkProps = {
  children: React.ReactElement | string
} & LinkProps

const NavLink = ({ children, ...rest }: NavLinkProps) => {
  return (
    <>
      <Link {...rest} className="font-medium text-sm text-zinc-300">
        {children}
      </Link>
    </>
  )
}

export default NavLink
