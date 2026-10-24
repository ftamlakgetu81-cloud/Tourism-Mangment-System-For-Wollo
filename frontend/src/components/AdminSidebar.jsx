import { 
  FaThLarge, FaUsers, FaMapMarkerAlt, FaTags, FaCalendarAlt, 
  FaBriefcase, FaBoxOpen, FaBookmark, FaStar, FaChartBar, 
  FaBell, FaUserCircle
} from 'react-icons/fa';

export default function AdminSidebar({ activeMenu, setActiveMenu, mobileOpen = false, onNavigate = () => {} }) {
  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: <FaThLarge /> },
    { name: 'Users', href: '/admin/users', icon: <FaUsers /> },
    { name: 'Destinations', icon: <FaMapMarkerAlt /> },
    { name: 'Categories', icon: <FaTags /> },
    { name: 'Events', icon: <FaCalendarAlt /> },
    { name: 'Service Providers', icon: <FaBriefcase /> },
    { name: 'Tour Packages', icon: <FaBoxOpen /> },
    { name: 'Bookings', icon: <FaBookmark /> },
    { name: 'Reviews', icon: <FaStar /> },
    { name: 'Reports', icon: <FaChartBar /> },
  ];

  return (
    <aside className={`${mobileOpen ? 'fixed inset-y-0 left-0 z-30 flex' : 'hidden'} w-[300px] shrink-0 flex-col justify-between bg-[#061a2e] text-slate-200 shadow-xl lg:sticky lg:top-0 lg:flex lg:h-screen`}>
      <div>
        {/* Logo Header */}
        <div className="flex items-center gap-3 border-b border-white/10 p-3">
          <div className="rounded-xl bg-gradient-to-tr from-emerald-600 to-lime-400 p-2 text-white">
            <svg viewBox="0 0 56 48" className="h-5 w-6 fill-current">
              <path d="M2 42 20 14l9 14 8-11 17 25H2Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-sm font-extrabold leading-none text-white">South Wollo</h1>
            <p className="mt-1 text-[8px] text-slate-300">Tourism Management System</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1 p-2 text-[11px] font-semibold">
          {menuItems.map((item) => {
            const className = `w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${
                activeMenu === item.name 
                  ? 'bg-teal-600 text-white font-bold shadow-md' 
                    : 'hover:bg-white/10 hover:text-white'
              }`;

            return item.href ? (
              <a key={item.name} href={item.href} onClick={onNavigate} aria-current={activeMenu === item.name ? 'page' : undefined} className={className}>
                <span className="text-sm">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ) : (
              <button key={item.name} onClick={() => { setActiveMenu(item.name); onNavigate() }} className={className}>
                <span className="text-sm">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            );
          })}

          <div className="mt-5 border-t border-white/10 pt-3">
            <button onClick={() => { setActiveMenu('Notifications'); onNavigate() }} className="w-full flex items-center gap-3 rounded-lg px-3.5 py-2.5 transition hover:bg-white/10 hover:text-white">
              <FaBell className="text-sm" />
              <span className="flex-1 text-left">Notifications</span>
              <span className="grid h-4 w-4 place-items-center rounded-full bg-rose-500 text-[9px] text-white">3</span>
            </button>
            <button onClick={() => { setActiveMenu('My Profile'); onNavigate() }} className="w-full flex items-center gap-3 rounded-lg px-3.5 py-2.5 transition hover:bg-white/10 hover:text-white">
              <FaUserCircle className="text-sm" />
              <span>My Profile</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Footer Tag */}
      <div className="border-t border-white/10 p-4">
        <p className="text-[10px] font-bold text-white">South Wollo</p>
        <p className="text-[9px] text-slate-400">Explore · Discover · Experience</p>
      </div>
    </aside>
  );
}