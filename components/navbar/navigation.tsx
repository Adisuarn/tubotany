'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Trees',
    href: '/trees',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
  {
    label: 'Team',
    href: '#footer',
  },
]

export const Navigation = () => {
  const pathname = usePathname()
  return (
    <nav className="flex items-center justify-center">
      <ul className="flex items-center justify-center">
        {navItems.map((item, index) => (
          <li key={index} className="mx-4">
            <Link
              className={`${
                pathname === item.href
                  ? 'font-extrabold text-[#E3CAA5]'
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
