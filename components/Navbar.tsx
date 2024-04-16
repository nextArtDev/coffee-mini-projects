'use client'
import Link from 'next/link'
import logo from '/assets/images/logo.svg'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="header">
      {/* <Link href="/">
        <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
      </Link> */}
      <nav className="flex text-lg gap-7 font-medium">
        <Link
          href="/about"
          className={pathname === '/about' ? 'text-blue-600' : 'text-black'}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={pathname === '/projects' ? 'text-blue-600' : 'text-black'}
        >
          Projects
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
