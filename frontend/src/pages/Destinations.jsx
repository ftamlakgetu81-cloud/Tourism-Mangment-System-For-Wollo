import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import lalibelaImage from '../assets/image15.jpg';
import dessieTownImage from '../assets/dessie-town.png';
import haikEstifanosImage from '../assets/image19.jpg';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaHeart, 
  FaChevronDown, 
  FaCompass, 
  FaMountain, 
  FaLandmark, 
  FaCity, 
  FaStore, 
  FaUniversity, 
  FaTree 
} from 'react-icons/fa';

const mekdelaAmbaImage = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop";

export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState('All Zones');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Destinations Data based on the image
  const destinationsList = [
    {
      id: 1,
      title: "Lalibela",
      location: "Lalibela | Wollo Zone | Lalibela Woreda",
      category: "Cultural & Historical",
      categoryType: "Historical Site",
      subTag: "Historical Site",
      tagBg: "bg-[#1a5d38]",
      desc: "Famous for its rock-hewn churches, Lalibela is a UNESCO World Heritage Site and a spiritual center of Ethiopia.",
      img: lalibelaImage
    },
    {
      id: 2,
      title: "Mekdela Amba",
      location: "Mekdela | Wollo Zone | Mekdela Woreda",
      category: "Mountain",
      categoryType: "Adventure",
      subTag: "Mountain",
      tagBg: "bg-emerald-600",
      desc: "A stunning mountain with historical significance, known for its natural beauty and panoramic views of the surrounding highlands.",
      img: mekdelaAmbaImage
    },
    {
      id: 3,
      title: "Gishen Mariam",
      location: "Gishen Mariam | Wag Hemra Zone | Gishen Woreda",
      category: "Religious",
      categoryType: "Religious Site",
      subTag: "Religious Site",
      tagBg: "bg-sky-700",
      desc: "An ancient church with deep spiritual value and a rich history, attracting pilgrims from across Ethiopia.",
      img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Lake Hayq",
      location: "Lake Hayq | Wollo Zone | Dessie Woreda",
      category: "Natural Attraction",
      categoryType: "Natural",
      subTag: "Lake",
      tagBg: "bg-emerald-600",
      desc: "A beautiful highland lake known for its calm water, scenic views and unique ecosystem.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Mount Tossa",
      location: "Dessie | Wollo Zone | Kalu Woreda",
      category: "Adventure",
      categoryType: "Adventure",
      subTag: "Mountain",
      tagBg: "bg-sky-800",
      desc: "The highest peak in Wollo, offering a great adventure for nature lovers and hikers.",
      img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Dessie Museum",
      location: "Dessie | Wollo Zone | Dessie Woreda",
      category: "Cultural",
      categoryType: "Museum",
      subTag: "Museum",
      tagBg: "bg-[#1a5d38]",
      desc: "Showcases the rich history, culture and heritage of the Wollo region.",
      img: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Kombolcha",
      location: "Kombolcha | Wollo Zone | Kombolcha Woreda",
      category: "City & Market",
      categoryType: "Towns & Cities",
      subTag: "City",
      tagBg: "bg-teal-700",
      desc: "A growing city with vibrant markets, modern facilities and friendly people.",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Dessie Town",
      location: "Dessie | South Wollo Zone | Amhara Region",
      category: "City & Culture",
      categoryType: "Towns & Cities",
      subTag: "Town",
      tagBg: "bg-teal-700",
      desc: "የSouth Wollo ዋና ከተማ፤ የአካባቢ ባህልን፣ ገበያዎችንና የደጋ መልክዓ ምድርን ለመቃኘት ጥሩ መነሻ ናት።",
      img: dessieTownImage
    },
    {
      id: 9,
      title: "ሐይቅ እስጢፋኖስ ገዳም",
      location: "ሐይቅ | ደቡብ ወሎ ዞን | አማራ ክልል",
      category: "Religious",
      categoryType: "Religious Site",
      subTag: "Monastery",
      tagBg: "bg-sky-700",
      desc: "ሐይቅ እስጢፋኖስ ገዳም በአማራ ክልል፣ በደቡብ ወሎ ዞን፣ በሐይቅ ሐይቅ ዳርቻ የሚገኝ ጥንታዊና በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ታሪክ ውስጥ ትልቅ ሚና ያለው መንፈሳዊ ቅርስ ነው። ገዳሙ ከአባ ኢየሱስ ሞዓ ሕይወት፣ ከጥንታዊ የቤተ ክርስቲያን ትምህርትና ከኢትዮጵያ መካከለኛው ዘመን ታሪክ ጋር በጥልቅ የተያያዘ ነው።",
      img: haikEstifanosImage
    }
  ];

  // Category counts for sidebar
  const categoriesList = [
    { name: "Natural Attractions", count: 7, icon: <FaTree /> },
    { name: "Historical Sites", count: 5, icon: <FaLandmark /> },
    { name: "Religious Sites", count: 3, icon: <FaUniversity /> },
    { name: "Cultural Sites", count: 4, icon: <FaLandmark /> },
    { name: "Adventure", count: 3, icon: <FaMountain /> },
    { name: "Towns & Cities", count: 5, icon: <FaCity /> },
    { name: "Markets", count: 2, icon: <FaStore /> },
    { name: "Museums", count: 1, icon: <FaLandmark /> },
  ];

  // Filter Logic
  const filteredDestinations = destinationsList.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesZone = selectedZone === 'All Zones' || item.location.includes(selectedZone);
    const matchesCategory = selectedCategory === 'All Categories' || 
                            item.categoryType === selectedCategory || 
                            item.category.includes(selectedCategory);

    return matchesSearch && matchesZone && matchesCategory;
  });

  const destinationId = Number(window.location.pathname.split('/').at(-1));
  const selectedDestination = destinationsList.find((item) => item.id === destinationId);

  if (selectedDestination) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="relative isolate flex min-h-[calc(100svh-100px)] items-end overflow-hidden bg-[#064b49] px-5 py-10 text-white sm:px-8">
            <img
              src={selectedDestination.img}
              alt={selectedDestination.title}
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            <div className="mx-auto w-full max-w-7xl">
              <a href="/destinations" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-200">
                <FaArrowRight className="rotate-180" aria-hidden="true" /> Back to destinations
              </a>
              <p className="mb-2 text-sm font-semibold text-emerald-100">{selectedDestination.category}</p>
              <h1 className="text-4xl font-extrabold sm:text-6xl">{selectedDestination.title}</h1>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/90">
                <FaMapMarkerAlt aria-hidden="true" /> {selectedDestination.location}
              </p>
            </div>
          </section>
          <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">About {selectedDestination.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{selectedDestination.desc}</p>
            </div>
            <aside className="h-fit border-t-4 border-[#1a5d38] bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Destination information</h2>
              <p className="mt-4 text-sm font-semibold text-slate-500">Category</p>
              <p className="mt-1 text-sm text-slate-800">{selectedDestination.categoryType}</p>
              <p className="mt-4 text-sm font-semibold text-slate-500">Location</p>
              <p className="mt-1 text-sm leading-6 text-slate-800">{selectedDestination.location}</p>
            </aside>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative isolate flex min-h-[calc(100svh-100px)] items-center overflow-hidden bg-[#064b49] px-5 py-6 text-white sm:px-8">
          <img
            src={mekdelaAmbaImage}
            alt="Mountain landscape at Mekdela Amba"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062f2d]/95 via-[#063c3b]/75 to-[#073a36]/40" />
          <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="mb-2 text-[11px] font-semibold text-emerald-100 sm:text-xs">
                <span>Home</span>
                <span className="mx-2">›</span>
                <span>Destinations</span>
              </p>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl mb-2">
                Destinations
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-xl">
                Discover the breathtaking places, rich culture, and natural beauty of South Wollo.
              </p>
            </div>
            
            <div className="hidden shrink-0 -rotate-6 text-right lg:block">
              <span className="block font-serif text-3xl italic text-white">Explore</span>
              <span className="block text-5xl font-black italic leading-none text-amber-400">South Wollo</span>
            </div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="sticky top-[56px] z-40 border-b border-slate-200 bg-white/95 py-3 shadow-sm backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#1a5d38]" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs outline-none transition focus:border-[#1a5d38] focus:bg-white focus:ring-1 focus:ring-[#1a5d38]"
              />
            </div>

            {/* Dropdown Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Zone Filter */}
              <div className="relative">
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 pr-8 text-xs font-semibold text-slate-700 outline-none focus:border-[#1a5d38]"
                >
                  <option>All Zones</option>
                  <option>Wollo Zone</option>
                  <option>Wag Hemra Zone</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 pointer-events-none" />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 pr-8 text-xs font-semibold text-slate-700 outline-none focus:border-[#1a5d38]"
                >
                  <option>All Categories</option>
                  <option value="Historical Site">Historical Sites</option>
                  <option value="Natural">Natural Attractions</option>
                  <option value="Religious Site">Religious Sites</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Towns & Cities">Towns & Cities</option>
                  <option value="Markets">Markets</option>
                  <option value="Museum">Museums</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 pointer-events-none" />
              </div>

              {/* Sort By */}
              <div className="relative">
                <select className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 pr-8 text-xs font-semibold text-slate-700 outline-none focus:border-[#1a5d38]">
                  <option>Sort by</option>
                  <option>Name (A - Z)</option>
                  <option>Most Popular</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 pointer-events-none" />
              </div>
            </div>

          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            
            {/* Left: Cards Grid (8 Cols) */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredDestinations.map((item) => (
                  <article key={item.id} className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                    
                    {/* Card Image */}
                    <div className="relative h-20 overflow-hidden bg-slate-200">
                      <a href={`/destinations/${item.id}`} aria-label={`View ${item.title} details`}>
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          loading="lazy" 
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105" 
                        />
                      </a>
                      <span className={`absolute left-3 top-3 rounded-full ${item.tagBg} px-2.5 py-1 text-[9px] font-bold text-white shadow-sm flex items-center gap-1`}>
                        {item.category}
                      </span>
                      <button 
                        type="button" 
                        aria-label={`Save ${item.title}`} 
                        className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-slate-900/30 text-white backdrop-blur-sm transition hover:bg-white hover:text-rose-600"
                      >
                        <FaHeart className="text-[11px]" />
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col p-2">
                      <div>
                        <h2 className="mb-0.5 text-[11px] font-extrabold text-slate-900">
                          <a href={`/destinations/${item.id}`} className="hover:text-[#1a5d38]">
                            {item.title}
                          </a>
                        </h2>
                        
                        <p className="mb-0.5 flex items-center gap-1 text-[9px] font-semibold text-[#1a5d38]">
                          <FaMapMarkerAlt className="text-[9px]" /> {item.location}
                        </p>
                        
                        <p className="mb-1 flex items-center gap-1 text-[9px] font-semibold text-emerald-800">
                          ⛰️ {item.subTag}
                        </p>

                        <p className="mb-2 line-clamp-2 text-[9px] leading-snug text-slate-600">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-auto border-t border-slate-100 pt-1">
                        <a 
                          href={`/destinations/${item.id}`}
                          className="inline-flex w-full items-center justify-center gap-1 rounded-md bg-[#1a5d38] px-2 py-1 text-[9px] font-bold text-white transition hover:bg-[#0f3b23]"
                        >
                          View Details <FaArrowRight aria-hidden="true" className="text-[9px]" />
                        </a>
                      </div>
                    </div>

                  </article>
                ))}
              </div>

              {filteredDestinations.length === 0 && (
                <div className="py-16 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
                  <p className="text-sm font-semibold">No destinations found matching your criteria.</p>
                  <button 
                    type="button" 
                    onClick={() => { setSearchQuery(''); setSelectedZone('All Zones'); setSelectedCategory('All Categories'); }} 
                    className="mt-3 rounded-lg bg-[#1a5d38] px-4 py-2 text-xs font-medium text-white"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* Right: Sidebar (4 Cols) */}
            <div className="space-y-3 lg:col-span-3">
              
              {/* Destination Categories */}
              <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <h3 className="mb-2 flex items-center gap-2 border-b border-slate-100 pb-2 text-xs font-bold text-slate-900">
                  <FaCompass className="text-[#1a5d38]" /> Destination Categories
                </h3>
                <div className="space-y-0.5">
                  {categoriesList.map((cat, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setSelectedCategory(cat.name)}
                      className="flex w-full items-center justify-between rounded-md p-1.5 text-[10px] font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-[#1a5d38]"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-[#1a5d38] text-xs">{cat.icon}</span>
                        {cat.name}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-600">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Discover Hidden Gems Box */}
              <div className="group relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop" 
                  alt="Discover Hidden Gems" 
                  className="h-32 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 text-white">
                  <h4 className="font-serif italic text-xl text-amber-300">Discover</h4>
                  <h3 className="font-extrabold text-2xl mb-1">Hidden Gems</h3>
                  <p className="text-[11px] text-slate-200 mb-3 leading-relaxed">
                    From majestic mountains to ancient churches, Wollo has it all.
                  </p>
                  <button className="bg-white/90 hover:bg-white text-slate-900 font-bold py-2 px-3.5 rounded-xl text-xs flex items-center gap-1.5 w-fit transition shadow backdrop-blur-sm">
                    Explore All Destinations <FaArrowRight className="text-[10px]" />
                  </button>
                </div>
              </div>

              {/* Plan Your Next Adventure */}
              <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-3 text-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#1a5d38] text-white p-2.5 rounded-xl">
                    <FaMountain className="text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">Plan Your Next Adventure</h4>
                    <p className="text-[10px] text-slate-500">Experience the natural beauty, rich culture and warm hospitality of South Wollo.</p>
                  </div>
                </div>
                <button className="w-full mt-2 bg-[#1a5d38] hover:bg-[#0f3b23] text-white font-bold py-2 rounded-xl text-xs transition shadow">
                  Get Started →
                </button>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}