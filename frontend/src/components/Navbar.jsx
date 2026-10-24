import { useState } from 'react'
import {
  FaBars,
  FaSearch,
  FaTimes,
  FaUser,
  FaUserPlus,
} from 'react-icons/fa'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Tour Packages', href: '/packages' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Cultural Heritage', href: '/cultural-heritage' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

function NavigationLinks({ mobile = false, onNavigate }) {
  const currentPath =
    window.location.pathname.replace(/\/+$/, '') || '/'

  const currentPage =
    currentPath === '/about'
      ? 'About Us'
      : currentPath === '/packages' ||
          currentPath === '/tour-packages'
        ? 'Tour Packages'
        : currentPath === '/experiences'
          ? 'Experiences'
          : currentPath === '/cultural-heritage'
            ? 'Cultural Heritage'
            : currentPath === '/events'
              ? 'Events'
              : currentPath === '/destinations' ||
                  currentPath.startsWith('/destinations/')
                ? 'Destinations'
                : currentPath === '/contact'
                  ? 'Contact'
                  : 'Home'

  return (
    <nav
      aria-label="Main navigation"
      className={
        mobile
          ? 'grid gap-1 px-4 pb-4 2xl:hidden'
          : 'hidden items-center gap-3 2xl:flex'
      }
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onNavigate}
          aria-current={
            link.label === currentPage ? 'page' : undefined
          }
          className={`flex transition hover:text-white ${
            link.label === currentPage
              ? 'text-white'
              : 'text-white/80'
          } ${
            mobile
              ? 'rounded-lg px-3 py-2.5 text-sm font-bold hover:bg-white/10'
              : 'flex-col items-center gap-1 whitespace-nowrap px-1 text-sm font-bold'
          } ${
            !mobile && link.label === currentPage
              ? 'border-b-2 border-amber-300 pb-1'
              : ''
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#00796f] shadow-sm">
      <div className="mx-auto flex h-[100px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-8">
        <a
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Wollo Tourism home"
        >
          <svg
            viewBox="0 0 56 48"
            role="img"
            aria-label="Wollo mountains and sunrise"
            className="h-9 w-10"
          >
            <circle cx="39" cy="9" r="7" fill="#fbbf24" />
            <path
              d="M2 42 20 14l9 14 8-11 17 25H2Z"
              fill="#ffffff"
            />
            <path
              d="m11 42 15-17 14 17H11Z"
              fill="#134e4a"
            />
            <path
              d="m20 14 6 10-5-2-5 8-5 1 9-17Zm17 3 4 9-5-3-5 5-3-1 9-10Z"
              fill="#fff"
            />
            <path
              d="M5 45h46"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight text-white">
              Wollo
            </span>
            <span className="block text-[10px] font-semibold text-white/90">
              Tourism Management System
            </span>
            <span className="block text-[9px] italic text-white/75">
              Explore · Discover · Experience
            </span>
          </span>
        </a>

        <NavigationLinks />

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#destinations"
            aria-label="Search destinations"
            className="grid h-9 w-9 place-items-center rounded-lg text-lg text-white transition hover:bg-white/10 hover:text-white"
          >
            <FaSearch />
          </a>

          <a
            href="/login"
            aria-current={
              window.location.pathname === '/login'
                ? 'page'
                : undefined
            }
            className="hidden items-center gap-1.5 rounded-md border border-white/80 px-3 py-2 text-xs font-bold text-white transition hover:bg-white/10 sm:inline-flex"
          >
            <FaUser aria-hidden="true" />
            Login
          </a>

          <a
            href="/register"
            className="hidden items-center gap-1.5 rounded-md bg-white px-3 py-2 text-xs font-bold text-[#00796f] transition hover:bg-emerald-50 sm:inline-flex"
          >
            <FaUserPlus aria-hidden="true" />
            Register
          </a>

          <button
            type="button"
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-lg text-lg text-white hover:bg-white/10 2xl:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <NavigationLinks
            mobile
            onNavigate={() => setMenuOpen(false)}
          />

          <div className="px-4 pb-4 sm:hidden">
            <a
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/80 px-3 py-2.5 text-sm font-bold text-white hover:bg-white/10"
            >
              <FaUser aria-hidden="true" />
              Login
            </a>

            <a
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2.5 text-sm font-bold text-[#00796f] hover:bg-emerald-50"
            >
              <FaUserPlus aria-hidden="true" />
              Register
            </a>
          </div>
        </>
      )}
    </header>
  )
}