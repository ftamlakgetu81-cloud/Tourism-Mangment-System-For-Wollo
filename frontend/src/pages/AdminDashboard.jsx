import { useState } from 'react'
import {
  FaArrowRight,
  FaBars,
  FaBell,
  FaCalendarAlt,
  FaCalendarCheck,
  FaChartLine,
  FaChevronDown,
  FaGlobe,
  FaMapMarkerAlt,
  FaSearch,
  FaSignOutAlt,
  FaStar,
  FaTimes,
  FaUsers,
} from 'react-icons/fa'
import AdminSidebar from '../components/AdminSidebar.jsx'
import Users from './Users.jsx'

const stats = [
  { label: 'Total Destinations', value: '12', growth: '20%', icon: <FaMapMarkerAlt />, color: 'bg-emerald-500' },
  { label: 'Upcoming Events', value: '5', growth: '100%', icon: <FaCalendarAlt />, color: 'bg-blue-500' },
  { label: 'Service Providers', value: '8', growth: '33%', icon: <FaUsers />, color: 'bg-violet-500' },
  { label: 'Total Bookings', value: '6', growth: '50%', icon: <FaCalendarCheck />, color: 'bg-amber-500' },
  { label: 'Total Reviews', value: '24', growth: '71%', icon: <FaStar />, color: 'bg-rose-500' },
]

const destinations = [
  { name: 'Dessie Museum', location: 'Dessie, South Wollo', category: 'Culture', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=160&auto=format&fit=crop&q=80' },
  { name: 'Lake Hayq', location: 'Wuchale, South Wollo', category: 'Nature', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=160&auto=format&fit=crop&q=80' },
  { name: 'Ankober Monastery', location: 'Ankober, South Wollo', category: 'History', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=160&auto=format&fit=crop&q=80' },
  { name: 'Gerset Mountain', location: 'Kobo, South Wollo', category: 'Adventure', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=160&auto=format&fit=crop&q=80' },
]

const events = [
  { day: '15', month: 'Jun', title: 'Dessie Cultural Festival', place: 'Dessie', type: 'Culture', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=120&auto=format&fit=crop&q=80' },
  { day: '22', month: 'Jun', title: 'Lake Hayq Eco Tour', place: 'Wuchale', type: 'Nature', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=120&auto=format&fit=crop&q=80' },
  { day: '05', month: 'Jul', title: 'Traditional Music & Dance', place: 'Dessie', type: 'Culture', image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=120&auto=format&fit=crop&q=80' },
  { day: '12', month: 'Jul', title: 'Hiking to Ankober', place: 'Ankober', type: 'Adventure', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=120&auto=format&fit=crop&q=80' },
]

const bookings = [
  { name: 'Abebe Kebede', package: 'Lake Hayq Tour', date: '2026-06-18', status: 'Confirmed' },
  { name: 'Mekdes Alemu', package: 'Dessie Cultural Tour', date: '2026-06-20', status: 'Pending' },
  { name: 'Tadesse Getachew', package: 'Ankober Hiking', date: '2026-06-22', status: 'Confirmed' },
  { name: 'Selamawit Ayalew', package: 'Historical Tour', date: '2026-06-25', status: 'Confirmed' },
  { name: 'Daniel Smith', package: 'Adventure Package', date: '2026-06-28', status: 'Pending' },
]

const categories = [
  { name: 'Nature', count: 5, color: 'bg-emerald-500' },
  { name: 'Culture', count: 3, color: 'bg-amber-500' },
  { name: 'History', count: 2, color: 'bg-blue-500' },
  { name: 'Adventure', count: 1, color: 'bg-violet-500' },
  { name: 'Religious', count: 1, color: 'bg-rose-500' },
]

function Panel({ title, icon, action, children }) {
  return (
    <section className="min-w-0 overflow-hidden rounded-md border border-slate-200 bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
        <h2 className="flex items-center gap-2 text-xs font-extrabold text-slate-800"><span className="text-blue-600">{icon}</span>{title}</h2>
        {action}
      </div>
      {children}
    </section>
  )
}

function GrowthChart() {
  return (
    <div className="px-4 pb-3 pt-2">
      <p className="text-[10px] text-slate-500">Total visitors (last 6 months)</p>
      <div className="mt-2 flex gap-2">
        <div className="flex h-28 flex-col justify-between pb-1 text-[9px] text-slate-400"><span>250</span><span>200</span><span>150</span><span>100</span><span>50</span><span>0</span></div>
        <div className="min-w-0 flex-1">
          <svg viewBox="0 0 360 150" role="img" aria-label="Tourism visitor growth chart" className="h-28 w-full overflow-visible">
            <defs><linearGradient id="visitors-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#2583eb" stopOpacity=".22" /><stop offset="100%" stopColor="#2583eb" stopOpacity=".02" /></linearGradient></defs>
            {[10, 36, 62, 88, 114, 140].map((y) => <line key={y} x1="0" x2="360" y1={y} y2={y} stroke="#e7edf4" />)}
            <path d="M8 112 L76 94 L144 78 L212 57 L280 41 L352 18 L352 140 L8 140Z" fill="url(#visitors-fill)" />
            <polyline points="8,112 76,94 144,78 212,57 280,41 352,18" fill="none" stroke="#2583eb" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            {[[8, 112], [76, 94], [144, 78], [212, 57], [280, 41], [352, 18]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#2583eb" stroke="white" strokeWidth="2" />)}
          </svg>
          <div className="flex justify-between text-[9px] text-slate-500"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div>
        </div>
      </div>
    </div>
  )
}

function CategoryChart() {
  return (
    <div className="flex min-h-40 items-center justify-around gap-3 px-4 py-4">
      <div className="relative grid h-28 w-28 shrink-0 place-items-center rounded-full" style={{ background: 'conic-gradient(#23ad7b 0 42%, #ffad16 42% 67%, #2583eb 67% 84%, #8b4be8 84% 92%, #ef5260 92% 100%)' }}>
        <div className="grid h-[4.4rem] w-[4.4rem] place-content-center rounded-full bg-white text-center"><span className="text-xl font-extrabold text-slate-800">12</span><span className="text-[9px] text-slate-500">Total</span></div>
      </div>
      <ul className="space-y-2 text-[10px]">
        {categories.map((category) => <li key={category.name} className="flex w-28 items-center justify-between gap-2 text-slate-600"><span className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${category.color}`} />{category.name}</span><span>{category.count} ({Math.round(category.count / 12 * 100)}%)</span></li>)}
      </ul>
    </div>
  )
}

export default function AdminDashboard({ initialMenu = 'Dashboard' }) {
  const [activeMenu, setActiveMenu] = useState(initialMenu)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('wollo-admin-session')
    window.location.href = '/login'
  }

  return (
    <div className="flex min-h-screen bg-[#f2f6fb] text-slate-800">
      <AdminSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} mobileOpen={mobileMenuOpen} onNavigate={() => setMobileMenuOpen(false)} />
      {mobileMenuOpen && <button type="button" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 z-20 bg-slate-950/40 lg:hidden" />}

      <main className="min-w-0 flex-1">
        <header className="sticky top-0 z-10 flex h-[200px] items-center gap-3 border-b border-teal-800 bg-teal-700 px-4 text-white shadow-sm sm:px-6">
          <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="Toggle navigation" className="grid h-9 w-9 shrink-0 place-items-center rounded text-lg hover:bg-white/10 lg:hidden">{mobileMenuOpen ? <FaTimes /> : <FaBars />}</button>
          <div className="hidden h-8 w-8 place-items-center text-lg text-white/90 lg:grid">☰</div>
          <label className="flex h-9 min-w-0 max-w-lg flex-1 items-center gap-2 rounded-full bg-white px-3 text-xs text-slate-500"><FaSearch aria-hidden="true" /><input type="search" placeholder="Search destinations, events, users..." className="min-w-0 flex-1 bg-transparent text-slate-800 outline-none placeholder:text-slate-400" /></label>
          <button type="button" className="hidden items-center gap-2 rounded-full px-3 py-2 text-[10px] font-semibold hover:bg-white/10 sm:flex"><FaGlobe /> English <FaChevronDown className="text-[8px]" /></button>
          <button type="button" aria-label="Notifications" className="relative grid h-9 w-9 shrink-0 place-items-center rounded hover:bg-white/10"><FaBell /><span className="absolute right-1 top-0 grid h-4 w-4 place-items-center rounded-full bg-rose-500 text-[9px] font-bold text-white">3</span></button>
          <div className="hidden items-center gap-2 sm:flex"><div className="grid h-8 w-8 place-items-center rounded-full border-2 border-white/70 bg-emerald-700 text-xs font-extrabold text-white">A</div><div className="leading-tight"><p className="text-[10px] font-extrabold">Admin</p><p className="text-[9px] text-white/75">System Administrator</p></div></div>
          <button type="button" onClick={handleLogout} className="ml-auto inline-flex w-[200px] shrink-0 items-center justify-center gap-1.5 rounded bg-blue-600 px-2.5 py-2 text-[10px] font-bold text-white hover:bg-blue-700 active:bg-sky-500"><FaSignOutAlt /> Logout</button>
        </header>

        <div className="mx-auto max-w-[1600px] space-y-3 p-3 sm:p-4">
          {activeMenu === 'Dashboard' ? (
            <>
              <section className="relative isolate flex min-h-36 items-center overflow-hidden rounded-md bg-slate-800 px-5 py-5 text-white sm:min-h-[138px] sm:px-6">
                <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=85" alt="Mountain lake in the South Wollo highlands" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062b49]/90 via-[#0b4260]/55 to-[#05243c]/20" />
                <div><h1 className="text-2xl font-extrabold sm:text-3xl">Welcome, Admin!</h1><p className="mt-1 text-sm font-semibold">South Wollo Tourism Management System</p><p className="mt-4 text-[10px] font-medium text-white/90">Explore <span className="mx-2">·</span> Manage <span className="mx-2">·</span> Grow Tourism</p></div>
                <div className="ml-auto hidden max-w-56 rounded-md border border-white/20 bg-slate-950/55 p-3 backdrop-blur-sm md:block"><p className="flex items-center gap-2 text-xs font-bold"><FaMapMarkerAlt /> Dessie</p><p className="mt-1 text-[9px] text-white/80">South Wollo Zone, Amhara Region</p><p className="mt-3 text-[9px] leading-relaxed text-white/85">A land of natural beauty, rich culture and historical heritage.</p></div>
              </section>

              <section aria-label="Tourism statistics" className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
                {stats.map((stat) => <article key={stat.label} className="flex min-h-[82px] items-center gap-3 rounded-md border border-slate-200 bg-white p-3 shadow-sm"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg text-lg text-white ${stat.color}`}>{stat.icon}</span><div className="min-w-0"><p className="text-xl font-extrabold leading-none">{stat.value}</p><p className="mt-1 truncate text-[9px] text-slate-500">{stat.label}</p><p className="mt-1 text-[9px] font-bold text-emerald-600">↑ {stat.growth} <span className="font-normal text-slate-400">from last month</span></p></div></article>)}
              </section>

              <section className="grid gap-3 xl:grid-cols-[1.1fr_1.05fr_0.9fr]">
                <Panel title="Tourism Growth" icon={<FaChartLine />} action={<button type="button" className="rounded border border-slate-200 px-2 py-1 text-[9px] font-semibold text-blue-700">This Year⌄</button>}><GrowthChart /></Panel>
                <Panel title="Destinations by Category" icon={<FaChartLine />} action={<button type="button" className="rounded border border-slate-200 px-2 py-1 text-[9px] font-semibold text-blue-700">This Year⌄</button>}><CategoryChart /></Panel>
                <article className="overflow-hidden rounded-md border border-slate-200 bg-white"><div className="relative h-24 sm:h-28"><img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80" alt="Featured mountain lake destination" className="h-full w-full object-cover" /><button type="button" aria-label="Previous destination" className="absolute bottom-2 left-2 grid h-5 w-5 place-items-center rounded-full bg-white/90 text-[10px]">‹</button><button type="button" aria-label="Next destination" className="absolute bottom-2 right-2 grid h-5 w-5 place-items-center rounded-full bg-white/90 text-[10px]">›</button></div><div className="p-3"><p className="text-[9px] font-bold uppercase text-blue-700">Featured Destination</p><h2 className="mt-1 text-xs font-extrabold">Lake Hayq</h2><p className="mt-1 flex items-center gap-1 text-[9px] text-slate-500"><FaMapMarkerAlt className="text-blue-600" /> Dessie, South Wollo</p><p className="mt-2 text-[9px] leading-relaxed text-slate-600">A beautiful volcanic lake surrounded by mountains and rich biodiversity.</p><button type="button" onClick={() => setActiveMenu('Destinations')} className="mt-2 inline-flex items-center gap-2 rounded bg-blue-600 px-3 py-1.5 text-[9px] font-bold text-white hover:bg-blue-700">View Details <FaArrowRight /></button></div></article>
              </section>

              <section className="grid gap-3 xl:grid-cols-3">
                <Panel title="Recent Destinations" icon={<FaMapMarkerAlt />} action={<button type="button" onClick={() => setActiveMenu('Destinations')} className="text-[9px] font-semibold text-blue-700">View All →</button>}><ul className="divide-y divide-slate-100 px-3">{destinations.map((place) => <li key={place.name} className="flex items-center gap-2 py-2"><img src={place.image} alt="" className="h-9 w-11 rounded object-cover" /><div className="min-w-0 flex-1"><p className="truncate text-[9px] font-bold">{place.name}</p><p className="truncate text-[8px] text-slate-500">{place.location}</p></div><span className="rounded-full bg-amber-50 px-2 py-1 text-[8px] font-semibold text-amber-700">{place.category}</span></li>)}</ul></Panel>
                <Panel title="Upcoming Events" icon={<FaCalendarAlt />} action={<button type="button" onClick={() => setActiveMenu('Events')} className="text-[9px] font-semibold text-blue-700">View All →</button>}><ul className="divide-y divide-slate-100 px-3">{events.map((event) => <li key={event.title} className="flex items-center gap-2 py-2"><div className="grid h-9 w-8 shrink-0 content-center rounded bg-slate-50 text-center"><span className="text-xs font-extrabold">{event.day}</span><span className="text-[8px] text-slate-500">{event.month}</span></div><img src={event.image} alt="" className="h-9 w-11 rounded object-cover" /><div className="min-w-0 flex-1"><p className="truncate text-[9px] font-bold">{event.title}</p><p className="text-[8px] text-slate-500">{event.place}</p><span className="text-[8px] font-semibold text-emerald-700">● {event.type}</span></div></li>)}</ul></Panel>
                <Panel title="Latest Bookings" icon={<FaCalendarCheck />} action={<button type="button" onClick={() => setActiveMenu('Bookings')} className="text-[9px] font-semibold text-blue-700">View All →</button>}><div className="overflow-x-auto"><table className="w-full min-w-[350px] text-left text-[8px]"><thead className="bg-slate-50 text-slate-500"><tr><th className="px-2 py-2 font-semibold">Customer</th><th className="px-2 py-2 font-semibold">Package</th><th className="px-2 py-2 font-semibold">Date</th><th className="px-2 py-2 font-semibold">Status</th></tr></thead><tbody className="divide-y divide-slate-100">{bookings.map((booking) => <tr key={booking.name}><td className="whitespace-nowrap px-2 py-2 font-semibold">{booking.name}</td><td className="max-w-20 truncate px-2 py-2 text-slate-500">{booking.package}</td><td className="whitespace-nowrap px-2 py-2 text-slate-500">{booking.date.slice(5)}</td><td className="px-2 py-2"><span className={`rounded-full px-1.5 py-1 font-bold ${booking.status === 'Pending' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>{booking.status}</span></td></tr>)}</tbody></table></div></Panel>
              </section>
            </>
          ) : activeMenu === 'Users' ? <Users /> : <section className="rounded-md border border-slate-200 bg-white p-6"><h1 className="text-xl font-bold">{activeMenu}</h1><p className="mt-2 text-sm text-slate-600">This management section is ready to connect to the tourism data service.</p></section>}
        </div>
      </main>
    </div>
  )
}