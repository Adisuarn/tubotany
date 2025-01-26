"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

const navItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Trees',
    href: '/trees'
  },
  {
    label: 'Contact',
    href: '/#contact'
  },
  {
    label: 'Team',
    href: '#footer'
  }
]

export const Navigation = () => {
  const pathname = usePathname()
  return (
    <nav className="flex justify-center items-center">
      <ul className="flex justify-center items-center">
        {navItems.map((item, index) => (
          <li key={index} className="mx-4">
            <Link
              className={`${pathname === item.href
                  ? 'text-[#E3CAA5] font-extrabold'
                  : 'text-[#E3CAA5] hover:font-semibold hover:text-[#E3CAA5]'
                } transition-all duration-300`}
              href={item.href}
              onClick={(e) => pathname === item.href && e.preventDefault()}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
