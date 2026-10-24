import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEllipsisH,
  FaLandmark,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaMusic,
  FaPaperPlane,
  FaSearch,
  FaTimes,
  FaTrophy,
} from 'react-icons/fa';

export default function Events() {
  const [activeTab, setActiveTab] = useState('All');
  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const standardCategories = ['Cultural', 'Religious', 'Music', 'Sports'];
  const categoryLabels = {
    Cultural: 'Cultural Festival',
    Religious: 'Religious Event',
    Music: 'Music & Arts',
    Sports: 'Sports',
  };

  // Events Data based on the image
  const eventsList = [
    {
      id: 1,
      title: "Genna (Christmas) Festival",
      category: "Cultural",
      tagBg: "bg-purple-600",
      date: "Jan 19 – 21, 2026",
      location: "Lalibela",
      desc: "Join the colorful Genna celebration in Lalibela, featuring traditional music, dance, and religious ceremonies.",
      img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 2,
      title: "Timket (Epiphany) Celebration",
      category: "Religious",
      tagBg: "bg-emerald-600",
      date: "Mar 15 – 17, 2026",
      location: "Gishen Mariam",
      desc: "Experience the spiritual and cultural beauty of Timket with colorful processions and traditional rituals.",
      img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 3,
      title: "Wollo Cultural Festival",
      category: "Cultural",
      tagBg: "bg-purple-600",
      date: "Apr 22 – 24, 2026",
      location: "Mekdela Amba",
      desc: "Enjoy traditional dances, local food, handicrafts, and cultural exhibitions from the Wollo communities.",
      img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 4,
      title: "Traditional Music & Dance Festival",
      category: "Music",
      tagBg: "bg-sky-600",
      date: "May 10 – 12, 2026",
      location: "Dessie",
      desc: "Celebrate the rich musical heritage of Wollo with local artists and cultural groups.",
      img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 5,
      title: "Wollo Adventure Challenge",
      category: "Sports",
      tagBg: "bg-amber-600",
      date: "Jun 5 – 7, 2026",
      location: "Mount Tossa",
      desc: "A hiking and outdoor sports event for adventure lovers and nature enthusiasts.",
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 6,
      title: "Meskel Festival",
      category: "Religious",
      tagBg: "bg-emerald-600",
      date: "Jul 28 – 30, 2026",
      location: "Lalibela",
      desc: "Witness the burning of the Meskel and enjoy traditional music, dance, and food.",
      img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=700&q=80"
    }
  ];

  // Upcoming Events Sidebar List
  const upcomingEvents = [
    { date: "19 Jan 2026", title: "Genna Festival", location: "Lalibela", cat: "Cultural", img: eventsList[0].img },
    { date: "15 Mar 2026", title: "Timket Celebration", location: "Gishen Mariam", cat: "Religious", img: eventsList[1].img },
    { date: "22 Apr 2026", title: "Wollo Cultural Festival", location: "Mekdela Amba", cat: "Cultural", img: eventsList[2].img },
    { date: "10 May 2026", title: "Traditional Music & Dance", location: "Dessie", cat: "Music", img: eventsList[3].img },
  ];

  const searchQuery = searchTerm.trim().toLowerCase();
  const filteredEvents = eventsList.filter((event) => {
    const matchesCategory = activeTab === 'All'
      || event.category === activeTab
      || (activeTab === 'Others' && !standardCategories.includes(event.category));
    const matchesSearch = !searchQuery || [
      event.title,
      event.category,
      event.location,
      event.date,
      event.desc,
    ].some((value) => value.toLowerCase().includes(searchQuery));

    return matchesCategory && matchesSearch;
  });

  const filterTabs = [
    { label: 'All', text: 'All Events', icon: <FaLayerGroup /> },
    { label: 'Cultural', text: 'Cultural Festivals', icon: <FaLandmark /> },
    { label: 'Religious', text: 'Religious Events', icon: <FaLandmark /> },
    { label: 'Music', text: 'Music & Arts', icon: <FaMusic /> },
    { label: 'Sports', text: 'Sports', icon: <FaTrophy /> },
    { label: 'Others', text: 'Others', icon: <FaEllipsisH /> },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscriptionMessage(`Thanks for your interest, ${email}. Newsletter sign-up is not connected yet.`);
    setEmail('');
  };

  useEffect(() => {
    if (!selectedEvent) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedEvent(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative isolate flex min-h-[135px] items-center overflow-hidden bg-[#064b49] px-5 py-3 text-white sm:px-8">
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=2200&q=85"
            alt="Wollo Events Background"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062f2d]/95 via-[#063c3b]/75 to-[#073a36]/40" />
          <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-6">
            <div className="max-w-xl">
              <p className="mb-2 text-[10px] font-semibold text-emerald-100 sm:text-xs">
                <span>Home</span>
                <span className="mx-2">›</span>
                <span>Events</span>
              </p>
              <h1 className="mb-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Events
              </h1>
              <p className="max-w-md text-[11px] leading-tight text-emerald-100 sm:text-xs">
                Experience the vibrant culture, colorful festivals, and unique events of South Wollo. Celebrate traditions, meet local communities, and be part of unforgettable moments.
              </p>
            </div>
            
            <div className="hidden shrink-0 -rotate-6 text-right lg:block">
              <span className="block font-serif text-xl italic text-white">Culture</span>
              <span className="block text-3xl font-black italic leading-none text-amber-400">Brings Us</span>
              <span className="block text-3xl font-black italic leading-none text-amber-400">Together</span>
            </div>
          </div>
        </section>

        {/* Main Content Layout (Grid + Sidebar) */}
        <section id="all" className="mx-auto w-full max-w-7xl px-5 py-2 sm:px-8 sm:py-2">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2.4fr)_minmax(250px,0.8fr)] lg:gap-5">
            
            {/* Left: Events Cards Grid (8 cols) */}
            <div>
              <section aria-label="Filter events" className="mb-1 flex items-center justify-between gap-3">
                <div className="flex min-w-0 gap-2 overflow-x-auto pb-1">
                  {filterTabs.map((tab) => (
                    <button
                      key={tab.label}
                      type="button"
                      onClick={() => setActiveTab(tab.label)}
                      aria-pressed={activeTab === tab.label}
                      className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-2 text-[9px] font-bold transition sm:text-[10px] ${
                        activeTab === tab.label
                          ? 'border-[#1a5d38] bg-[#1a5d38] text-white shadow-sm'
                          : 'border-emerald-100 bg-white text-[#1a5d38] hover:border-emerald-300 hover:bg-emerald-50'
                      }`}
                    >
                      {tab.icon} {tab.text}
                    </button>
                  ))}
                </div>
                <label className="hidden shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-2 focus-within:border-emerald-600 sm:flex lg:px-3">
                  <FaSearch aria-hidden="true" className="text-xs text-emerald-700" />
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search..."
                    aria-label="Search events by name, category, location, date, or description"
                    className="w-12 bg-transparent text-[10px] outline-none placeholder:text-slate-400 lg:w-14"
                  />
                </label>
              </section>

              <div className="mb-3 flex items-center justify-between gap-3 sm:hidden">
                <p className="text-xs font-semibold text-slate-500" aria-live="polite">
                  {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
                </p>
                <label className="flex max-w-[65%] items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
                  <FaSearch aria-hidden="true" className="shrink-0 text-emerald-700" />
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search events, places, dates..."
                    aria-label="Search events by name, category, location, date, or description"
                    className="min-w-0 flex-1 bg-transparent text-xs text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </label>
              </div>

              <p className="sr-only" aria-live="polite">
                Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event) => (
                  <article key={event.id} className="group flex flex-col overflow-hidden rounded-xl border border-sky-100 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="relative h-24 overflow-hidden bg-slate-200 sm:h-20">
                      <img src={event.img} alt={event.title} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                      <span className={`absolute left-3 top-3 rounded-full ${event.tagBg} px-3 py-1 text-[10px] font-bold text-white shadow-sm`}>
                        {categoryLabels[event.category] ?? 'Other Event'}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-2">
                      <div>
                        <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[8px] font-semibold text-slate-500">
                          <span className="flex items-center gap-1 text-[#1a5d38]">
                            <FaCalendarAlt className="text-[10px]" /> {event.date}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500">
                            <FaMapMarkerAlt className="text-[10px] text-emerald-700" /> {event.location}
                          </span>
                        </div>
                        <h2 className="mb-1 text-[11px] font-extrabold leading-snug text-slate-900">{event.title}</h2>
                        <p className="mb-1 line-clamp-2 text-[9px] leading-snug text-slate-600">{event.desc}</p>
                      </div>
                      <div className="mt-auto border-t border-slate-100 pt-1">
                        <button
                          type="button"
                          onClick={() => setSelectedEvent(event)}
                          className="inline-flex items-center gap-1 rounded-full bg-[#08764f] px-3 py-0.5 text-[9px] font-bold text-white transition hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                        >
                          View Details <FaArrowRight aria-hidden="true" className="text-[10px]" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredEvents.length === 0 && (
                <div className="py-16 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
                  <p className="text-sm font-semibold">No events found in this category.</p>
                  <button type="button" onClick={() => setActiveTab('All')} className="mt-3 rounded-lg bg-[#1a5d38] px-4 py-2 text-xs font-medium text-white">
                    Show All Events
                  </button>
                </div>
              )}
            </div>

            {/* Right: Upcoming Events & Newsletter Sidebar (4 cols) */}
            <div className="space-y-4">
              
              {/* Upcoming Events Box */}
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="mb-1 flex items-center justify-between border-b border-slate-100 pb-1">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#1a5d38]" />
                    <h3 className="font-bold text-slate-900 text-sm">Upcoming Events</h3>
                  </div>
                  <a href="#all" className="text-xs font-semibold text-[#1a5d38] hover:underline">View All →</a>
                </div>

                <div className="space-y-1">
                  {upcomingEvents.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 border-b border-slate-50 pb-1 last:border-0 last:pb-0">
                      <img src={item.img} alt="" loading="lazy" className="h-10 w-12 shrink-0 rounded-md object-cover" />
                      <div className="w-8 shrink-0 rounded-lg bg-emerald-50 py-1 text-center text-[#1a5d38]">
                        <span className="block text-[8px] font-bold uppercase">{item.date.split(' ')[0]}</span>
                        <span className="block text-[10px] font-extrabold">{item.date.split(' ')[1]}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-[10px] font-bold text-slate-900">{item.title}</h4>
                        <p className="mt-0.5 flex items-center gap-1 text-[9px] text-slate-500">
                          <FaMapMarkerAlt className="text-[9px] text-emerald-700" /> {item.location}
                        </p>
                        <span className="mt-1 inline-block rounded bg-slate-100 px-2 py-0.5 text-[8px] font-semibold text-slate-600">
                          {item.cat}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stay Updated / Newsletter Box */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#063c3b] to-[#0a2e1a] p-3 text-white shadow-md">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <FaPaperPlane className="text-amber-400 text-sm" />
                    <h3 className="font-bold text-sm">Stay Updated</h3>
                  </div>
                  <p className="mb-1 text-[9px] leading-tight text-emerald-100">
                    Get the latest events, news, and special offers from Wollo Tourism.
                  </p>
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="min-w-0 flex-1 rounded-xl bg-white px-3 py-2 text-[10px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    />
                    <button type="submit" aria-label="Subscribe to event updates" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber-400 text-sm font-bold text-slate-900 shadow transition hover:bg-amber-500">
                      <FaArrowRight aria-hidden="true" />
                    </button>
                  </form>
                  {subscriptionMessage && (
                    <p role="status" className="mt-3 text-xs leading-relaxed text-emerald-100">
                      {subscriptionMessage}
                    </p>
                  )}
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      {selectedEvent && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-dialog-title"
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event details"
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-slate-700 shadow transition hover:bg-white hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              <FaTimes aria-hidden="true" />
            </button>
            <img src={selectedEvent.img} alt="" className="h-56 w-full object-cover sm:h-72" />
            <div className="p-5 sm:p-7">
              <span className={`inline-flex rounded-full ${selectedEvent.tagBg} px-3 py-1 text-xs font-bold text-white`}>
                {selectedEvent.category}
              </span>
              <h2 id="event-dialog-title" className="mt-3 text-2xl font-extrabold text-slate-900">
                {selectedEvent.title}
              </h2>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <FaCalendarAlt aria-hidden="true" className="text-emerald-700" />
                  {selectedEvent.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaMapMarkerAlt aria-hidden="true" className="text-emerald-700" />
                  {selectedEvent.location}
                </span>
              </div>
              <p className="mt-5 leading-relaxed text-slate-600">{selectedEvent.desc}</p>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="mt-6 rounded-lg bg-[#1a5d38] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                Close details
              </button>
            </div>
          </section>
        </div>
      )}

      <Footer compact />
    </div>
  );
}