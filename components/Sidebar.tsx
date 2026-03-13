'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', section: 'glavna', icon: '◉', label: 'Glavna' },
  { href: '/finance', section: 'finance', icon: '€', label: 'Finance' },
  { href: '/zdravstvo', section: 'zdravstvo', icon: '⚕', label: 'Zdravstvo' },
  { href: '/solstvo', section: 'solstvo', icon: '📚', label: 'Šolstvo' },
  { href: '/demografija', section: 'demografija', icon: '👥', label: 'Demografija' },
  { href: '/trg-dela', section: 'trg-dela', icon: '💼', label: 'Trg dela' },
  { href: '/stanovanja', section: 'stanovanja', icon: '🏠', label: 'Stanovanja' },
  { href: '/energija', section: 'energija', icon: '⚡', label: 'Energija' },
  { href: '/promet', section: 'promet', icon: '🚗', label: 'Promet' },
  { href: '/okolje', section: 'okolje', icon: '🌿', label: 'Okolje' },
  { href: '/digitalna', section: 'digitalna', icon: '📱', label: 'Digitalna država' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-text">država</span>
        <span className="logo-domain">.gov.si</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(({ href, section, icon, label }) => {
          const isActive =
            (href === '/' && pathname === '/') ||
            (href !== '/' && pathname.startsWith(href))
          return (
            <Link
              key={section}
              href={href}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <span className="nav-icon">{icon}</span>
              {label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
