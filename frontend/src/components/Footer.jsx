import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegramPlane,
  FaEnvelope,
  FaGoogle,
  FaYoutube,
} from 'react-icons/fa'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: <FaFacebookF /> },
  { label: 'Telegram', href: 'https://t.me/', icon: <FaTelegramPlane /> },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: <FaInstagram /> },
  { label: 'Google', href: 'https://www.google.com/', icon: <FaGoogle /> },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: <FaYoutube /> },
]

const footerGroups = [
  { title: 'Quick Links', links: [['Home', '#home'], ['About Us', '#about'], ['Tour Packages', '#packages'], ['Privacy Policy', '/privacy-policy']] },
  { title: 'Destinations', links: [['Lake Hayq', '#destinations'], ['Gishen Mariam', '#destinations'], ['More destinations', '#destinations']] },
  { title: 'Events', links: [['Cultural festivals', '/events'], ['Local celebrations', '/events'], ['Community events', '/events'], ['More events', '/events']] },
]

export default function Footer({ compact = false }) {
  return (
    <footer id="contact" className={`scroll-mt-20 bg-[#004b49] text-white ${compact ? 'events-footer' : ''}`}>
      <div className={`mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr_1fr_1.25fr] md:gap-3 ${compact ? 'py-3 md:py-3' : 'py-8 sm:py-10'}`}>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 56 48" role="img" aria-label="Wollo mountains and sunrise" className="mt-0.5 h-11 w-12 shrink-0">
              <circle cx="39" cy="9" r="7" fill="#fbbf24" />
              <path d="M2 42 20 14l9 14 8-11 17 25H2Z" fill="#14b8a6" />
              <path d="m11 42 15-17 14 17H11Z" fill="#155e75" />
              <path d="m20 14 6 10-5-2-5 8-5 1 9-17Zm17 3 4 9-5-3-5 5-3-1 9-10Z" fill="#fff" />
            </svg>
            <div>
              <p className={`font-black leading-none ${compact ? 'text-base' : 'text-lg'}`}>Wollo</p>
              <p className={`mt-1 font-semibold text-emerald-100 ${compact ? 'text-[8px]' : 'text-[10px]'}`}>Tourism Management System</p>
              <p className={`italic text-emerald-200 ${compact ? 'mt-1 text-[8px]' : 'mt-2 text-[9px]'}`}>Explore · Discover · Experience</p>
            </div>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <details className="group border-b border-white/15 py-3 md:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold marker:hidden">
                {group.title}
                <span aria-hidden="true" className="text-lg leading-none text-emerald-200 transition group-open:rotate-45">+</span>
              </summary>
              <ul className="grid gap-3 pb-1 pt-3">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-xs text-emerald-100 transition hover:text-white">{label}</a>
                  </li>
                ))}
              </ul>
            </details>
            <nav aria-label={group.title} className="hidden border-l border-white/20 pl-4 md:block">
              <h2 className={`font-extrabold ${compact ? 'text-[10px]' : 'text-xs'}`}>{group.title}</h2>
              <ul className={`mt-1 ${compact ? 'space-y-0' : 'space-y-2'}`}>
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className={`text-emerald-100 transition hover:text-white hover:underline ${compact ? 'text-[8px] leading-tight' : 'text-[10px]'}`}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}

        <div className="pt-1 md:border-l md:border-white/20 md:pl-4 md:pt-0">
          <h2 className={`font-extrabold ${compact ? 'text-[10px]' : 'text-xs'}`}>Contact us</h2>
          <ul className={`grid text-emerald-100 ${compact ? 'mt-1 gap-1 text-[9px]' : 'mt-3 gap-3 text-xs'}`}>
            <li className="flex min-w-0 items-center gap-2"><FaPhoneAlt aria-hidden="true" className="shrink-0" /> <a href="tel:+251912345678" className="break-all hover:text-white">+251 912 345 678</a></li>
            <li className="flex min-w-0 items-center gap-2"><FaEnvelope aria-hidden="true" className="shrink-0" /> <a href="mailto:info@wollotourism.gov.et" className="break-all hover:text-white">info@wollotourism.gov.et</a></li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt aria-hidden="true" /> Wollo, Ethiopia</li>
          </ul>
        </div>
      </div>

      <div className={`mx-auto flex max-w-7xl justify-end px-5 sm:px-8 ${compact ? 'pb-2' : 'pb-4'}`}>
        <nav aria-label="Social media" className="flex flex-wrap justify-end gap-2">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className={`grid place-items-center rounded-full border border-white/40 text-sm text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-amber-300 ${compact ? 'h-6 w-6' : 'h-9 w-9'}`}
            >
              {icon}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/15">
        <div className={`mx-auto flex max-w-7xl flex-col gap-2 px-5 text-[10px] leading-relaxed text-emerald-100 sm:px-8 md:flex-row md:items-center md:justify-between ${compact ? 'py-2' : 'py-3'}`}>
          <p>© {new Date().getFullYear()} Wollo Tourism Management System. All rights reserved.</p>
          <p className="italic">Discover Wollo · Support local · Preserve our heritage</p>
        </div>
      </div>
    </footer>
  )
}
