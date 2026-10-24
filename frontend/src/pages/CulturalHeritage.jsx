import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import heritageHeroImage from '../assets/imag 13.jpg';
import culturalFestivalImage from '../assets/image 14.jpg';
import {
  FaMapMarkerAlt, FaSearch, FaStar, FaClock, FaLandmark,
  FaList, FaMap, FaChevronRight, FaChevronLeft,
  FaRobot, FaGooglePlay, FaApple, FaTimes, FaCheck,
  FaBookmark, FaCalendarAlt, FaTachometerAlt, FaPlay, FaPause,
  FaVolumeUp, FaVolumeMute
} from 'react-icons/fa';

// --- MOCK DATA ---

const mockHeritageSites = [
  {
    id: 1,
    title: "Mekdela Hedef Men Church",
    category: "Historic Churches",
    location: "Tege, South Wollo",
    rating: 4.8,
    reviews: 124,
    desc: "A 16th-century rock-hewn church known for its unique architecture and spiritual significance.",
    tags: ["Church", "Historical", "Sacred Site"],
    distance: "1.2 km",
    duration: "1-2 hrs",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Wogelo Fortress",
    category: "Monuments & Memorials",
    location: "Dessie, South Wollo",
    rating: 4.6,
    reviews: 98,
    desc: "A historic fortress built in the 16th century, showcasing the region's defensive architecture.",
    tags: ["Fortress", "Historical", "Viewpoint"],
    distance: "18 km",
    duration: "2-3 hrs",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Giyorgis Rock Church",
    category: "Historic Churches",
    location: "Worebabu, South Wollo",
    rating: 4.9,
    reviews: 156,
    desc: "A remarkable rock-hewn church with stunning carvings and ancient spiritual heritage.",
    tags: ["Church", "UNESCO", "Historical"],
    distance: "45 km",
    duration: "1-2 hrs",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "Debre Maryam Monastery",
    category: "Historic Churches",
    location: "Qara, South Wollo",
    rating: 4.7,
    reviews: 112,
    desc: "An ancient monastery with beautiful stone structures and a rich religious tradition.",
    tags: ["Monastery", "Religious", "Historical"],
    distance: "28 km",
    duration: "1-2 hrs",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "Wogogelo Timkat Festival",
    category: "Traditional Culture",
    location: "Worebabu, South Wollo",
    rating: 4.5,
    reviews: 87,
    desc: "Colorful religious festival with unique traditions and ceremonies.",
    tags: ["Festival", "Culture", "Tradition"],
    distance: "16 km",
    duration: "1-2 hrs",
    image: culturalFestivalImage
  },
  {
    id: 6,
    title: "South Wollo Cultural Museum",
    category: "Museums",
    location: "Mekdela, South Wollo",
    rating: 4.4,
    reviews: 76,
    desc: "Explore artifacts, historical documents and traditional instruments.",
    tags: ["Museum", "History", "Culture"],
    distance: "2 km",
    duration: "1 hr",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 7,
    title: "Ras Damtu Church",
    category: "Historic Churches",
    location: "Tege, South Wollo",
    rating: 4.7,
    reviews: 103,
    desc: "A historic church with beautiful stone architecture and deep spiritual roots.",
    tags: ["Church", "Historical", "Sacred Site"],
    distance: "36 km",
    duration: "1-2 hrs",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 8,
    title: "Ras Desta Damtew Memorial",
    category: "Monuments & Memorials",
    location: "Dessie, South Wollo",
    rating: 4.6,
    reviews: 91,
    desc: "Monument honoring the legendary Ethiopian hero.",
    tags: ["Monument", "History", "Heritage"],
    distance: "3 km",
    duration: "1 hr",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600"
  }
];

const categories = [
  { name: 'Historic Churches', icon: '⛪', detail: 'Ancient churches & monasteries', count: 12, active: true },
  { name: 'Archaeological Sites', icon: '🏛️', detail: 'Ruins, ancient cities & artifacts', count: 8, active: false },
  { name: 'Traditional Culture', icon: '🎭', detail: 'Festivals, arts & local traditions', count: 15, active: false },
  { name: 'Monuments & Memorials', icon: '🗿', detail: 'Landmarks & historical figures', count: 9, active: false },
  { name: 'Museums', icon: '🏛️', detail: 'Collections & heritage centers', count: 5, active: false },
];

const filterGroups = [
  {
    title: 'Heritage Type',
    options: [
      { label: 'Historic Churches', count: 18, checked: true },
      { label: 'Archaeological Sites', count: 12, checked: true },
      { label: 'Traditional Culture', count: 10, checked: true },
      { label: 'Monuments & Memorials', count: 8, checked: true },
      { label: 'Museums', count: 5 },
    ]
  },
  {
    title: 'Region',
    options: [
      { label: 'All Regions', count: 53, checked: true },
      { label: 'Worebabu', count: 11 },
      { label: 'Qara', count: 9 },
      { label: 'Tege', count: 8 },
      { label: 'Dessie', count: 7 },
      { label: 'Other Regions', count: 18 },
    ]
  },
  {
    title: 'Difficulty',
    options: [
      { label: 'All Levels', count: 53, checked: true },
      { label: 'Easy', count: 22 },
      { label: 'Moderate', count: 20 },
      { label: 'Challenging', count: 11 },
    ]
  },
  {
    title: 'Accessibility',
    options: [
      { label: 'All Access', count: 53, checked: true },
      { label: 'Wheelchair Accessible', count: 16 },
      { label: 'Limited Access', count: 21 },
      { label: 'Not Accessible', count: 16 },
    ]
  },
  {
    title: 'Best Season',
    options: [
      { label: 'All Seasons', count: 53, checked: true },
      { label: 'Dry Season (Oct - May)', count: 36 },
      { label: 'Rainy Season (Jun - Sep)', count: 17 },
    ]
  }
];

const popularSites = [
  { title: 'Mekdela Hedef Men Church', rating: 4.8, reviews: 124, tag: 'Church', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=150' },
  { title: 'Giyorgis Rock Church', rating: 4.9, reviews: 156, tag: 'Church', img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=150' },
  { title: 'Wogogelo Timkat Festival', rating: 4.5, reviews: 87, tag: 'Festival', img: culturalFestivalImage },
  { title: 'Debre Maryam Monastery', rating: 4.7, reviews: 112, tag: 'Monastery', img: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=150' },
  { title: 'Ras Damtu Church', rating: 4.7, reviews: 103, tag: 'Church', img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=150' },
];

// --- COMPONENTS ---

export default function CulturalHeritage() {
  const [mapStyle, setMapStyle] = useState('map');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveHeroSlide((slide) => (slide + 1) % 3);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const sendVideoCommand = (func, args = []) => {
    videoRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      'https://www.youtube-nocookie.com'
    );
  };

  const toggleHeroVideo = () => {
    const command = videoPlaying ? 'pauseVideo' : 'playVideo';
    sendVideoCommand(command);
    setVideoPlaying((playing) => !playing);
  };

  const toggleHeroVideoSound = () => {
    setVideoMuted((muted) => !muted);
    setVideoPlaying(true);
  };

  return (
    <div className="min-h-screen bg-[#effbfe] font-sans text-gray-800">
      <Navbar />
      {/* ================= HERO SECTION ================= */}
      <div className="relative flex min-h-[calc(100vh-100px)] min-h-[calc(100svh-100px)] w-full items-center overflow-hidden bg-gray-900">
        <img
          src={heritageHeroImage}
          alt=""
          aria-hidden="true"
          className={`cultural-heritage-slide cultural-heritage-hero-image absolute inset-0 h-full w-full object-cover object-center ${activeHeroSlide === 0 ? 'cultural-heritage-slide-active' : ''}`}
        />
        <img
          src={culturalFestivalImage}
          alt=""
          aria-hidden="true"
          className={`cultural-heritage-slide cultural-heritage-hero-image absolute inset-0 h-full w-full object-cover object-center ${activeHeroSlide === 1 ? 'cultural-heritage-slide-active' : ''}`}
        />
        <iframe
          ref={videoRef}
          className={`cultural-heritage-slide cultural-heritage-video ${activeHeroSlide === 2 ? 'cultural-heritage-slide-active' : ''}`}
          src={`https://www.youtube-nocookie.com/embed/_X8IhXNNI20?autoplay=1&mute=${videoMuted ? 1 : 0}&controls=0&loop=1&playlist=_X8IhXNNI20&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
          title="South Wollo cultural heritage video"
          allow="autoplay"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003b77]/65 via-[#003b77]/25 to-transparent"></div>
        <div className="absolute bottom-4 left-4 z-20 flex gap-2 sm:left-8" role="group" aria-label="Choose heritage hero slide">
          {['Image 13', 'Image 14', 'Video'].map((label, index) => (
            <button
              key={label}
              type="button"
              aria-label={`Show ${label}`}
              aria-pressed={activeHeroSlide === index}
              onClick={() => setActiveHeroSlide(index)}
              className={`h-2.5 rounded-full transition-all ${activeHeroSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/60 hover:bg-white'}`}
            />
          ))}
        </div>

        {activeHeroSlide === 2 && (
          <div className="absolute bottom-4 right-4 z-20 flex gap-2">
            <button
              type="button"
              onClick={toggleHeroVideoSound}
              aria-label={videoMuted ? 'Enable video sound' : 'Mute video sound'}
              aria-pressed={!videoMuted}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/50 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {videoMuted ? <FaVolumeMute aria-hidden="true" /> : <FaVolumeUp aria-hidden="true" />}
              {videoMuted ? 'Enable sound' : 'Mute'}
            </button>
            <button
              type="button"
              onClick={toggleHeroVideo}
              aria-label={videoPlaying ? 'Pause background video' : 'Play background video'}
              aria-pressed={videoPlaying}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/50 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {videoPlaying ? <FaPause aria-hidden="true" /> : <FaPlay aria-hidden="true" />}
              {videoPlaying ? 'Pause video' : 'Play video'}
            </button>
          </div>
        )}
        
        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 text-white sm:px-8">
          <div className="mb-1 flex items-center gap-1.5 text-[9px] text-sky-100">
            <span>Explore</span><span>·</span><span>Discover</span><span>·</span><span>Preserve</span>
          </div>
          <h1 className="mb-1 text-3xl font-extrabold leading-[0.95] tracking-tight sm:text-4xl">
            Discover<br /><span className="text-sky-400">Cultural Heritage</span>
          </h1>
          <p className="max-w-[380px] text-[11px] leading-tight text-gray-100 sm:text-xs">
            Explore ancient churches, historical sites, traditional cultures and rich heritage of South Wollo.
          </p>
        </div>
        
        {/* Right Side Graphic Text */}
        <div className="absolute right-8 top-7 z-10 hidden rotate-[-5deg] text-right text-white md:block lg:right-20">
          <h2 className="text-2xl font-serif italic text-blue-100 drop-shadow-md">South Wollo</h2>
          <p className="mt-1 text-[10px] font-medium leading-tight">Our Heritage<br />Our Pride</p>
        </div>
      </div>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="mx-auto max-w-[1400px] px-3 pb-1 pt-0 sm:px-6 lg:px-10">
        
        {/* Search Bar */}
        <div className="relative z-20 -mt-1 flex flex-col gap-1.5 rounded-lg border border-sky-100 bg-white p-1.5 shadow-md md:flex-row">
          <div className="flex min-w-0 flex-1 items-center rounded-md border border-sky-200 bg-slate-50 px-2.5 py-1">
            <FaSearch className="text-gray-400 mr-2 shrink-0" />
            <input type="text" placeholder="Search heritage sites, regions, or keywords..." className="w-full bg-transparent text-[10px] text-gray-700 outline-none" />
          </div>
          <div className="flex flex-1 items-center rounded-md border border-sky-200 bg-slate-50 px-2.5 py-1 md:w-32 md:flex-none">
            <FaMapMarkerAlt className="mr-2 shrink-0 text-sky-600" />
            <select aria-label="Region" className="w-full cursor-pointer bg-transparent text-[10px] text-gray-700 outline-none">
              <option>All Regions</option>
              <option>Worebabu</option>
              <option>Qara</option>
              <option>Tege</option>
              <option>Dessie</option>
            </select>
          </div>
          <div className="flex flex-1 items-center rounded-md border border-sky-200 bg-slate-50 px-2.5 py-1 md:w-36 md:flex-none">
            <FaLandmark className="mr-2 shrink-0 text-[#003b77]" />
            <select aria-label="Heritage type" className="w-full cursor-pointer bg-transparent text-[10px] text-gray-700 outline-none">
              <option>All Heritage Types</option>
              <option>Historic Churches</option>
              <option>Traditional Culture</option>
              <option>Monuments</option>
              <option>Museums</option>
            </select>
          </div>
          <div className="flex flex-1 items-center rounded-md border border-sky-200 bg-slate-50 px-2.5 py-1 md:w-36 md:flex-none">
            <FaTachometerAlt className="mr-2 shrink-0 text-sky-700" />
            <select aria-label="Difficulty" className="w-full cursor-pointer bg-transparent text-[10px] text-gray-700 outline-none">
              <option>Select Difficulty</option>
              <option>Easy</option>
              <option>Moderate</option>
              <option>Challenging</option>
            </select>
          </div>
          <div className="flex flex-1 items-center rounded-md border border-sky-200 bg-slate-50 px-2.5 py-1 md:w-36 md:flex-none">
            <FaCalendarAlt className="mr-2 shrink-0 text-sky-700" />
            <select aria-label="Best season" className="w-full cursor-pointer bg-transparent text-[10px] text-gray-700 outline-none">
              <option>Select Season</option>
              <option>Dry Season (Oct - May)</option>
              <option>Rainy Season (Jun - Sep)</option>
            </select>
          </div>
          <button className="flex items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-1 text-[10px] font-semibold text-white transition hover:bg-sky-600">
            <FaSearch /> Search
          </button>
        </div>

        {/* Main Grid: Sidebar + Content */}
        <div className="mt-2 grid grid-cols-1 items-start gap-x-3 gap-y-2 lg:grid-cols-[180px_minmax(0,1fr)_250px] lg:grid-rows-[40px_auto]">
          {/* Category Tabs */}
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:col-span-2 lg:h-10 lg:grid-cols-5">
            {categories.map((cat, i) => (
            <button 
              key={i} 
            className={`flex h-full min-w-0 items-center gap-1.5 rounded-md border px-1.5 text-left transition ${cat.active ? 'bg-sky-50 border-sky-200 text-sky-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-100 text-[10px]">{cat.icon}</span>
              <span className="min-w-0 flex-1">
              <span className="block truncate text-[9px] font-semibold">{cat.name}</span>
              <span className="block truncate text-[7px] text-slate-400">{cat.detail}</span>
              </span>
              <span className="hidden xl:inline text-[9px] text-slate-400">{cat.count}</span>
            </button>
            ))}
          </div>

          {/* LEFT SIDEBAR - Filters */}
          <div className="w-full min-w-0 lg:pt-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2.5 sticky top-12">
              <div className="flex justify-between items-center mb-2 border-b border-gray-100 pb-2">
                <h3 className="font-bold text-[11px] text-gray-800">Filter Heritage Sites</h3>
              </div>
              
              {filterGroups.map((group, idx) => (
                <div key={idx} className="mb-1.5 last:mb-0">
                  <h4 className="font-semibold text-[10px] leading-none text-gray-800 mb-0.5">{group.title}</h4>
                  <div className="space-y-0.5">
                    {group.options.map((opt, i) => (
                      <label key={i} className="flex items-center justify-between cursor-pointer group leading-none">
                        <div className="flex min-w-0 items-center gap-1">
                          <input
                            type={['Region', 'Difficulty', 'Best Season'].includes(group.title) ? 'radio' : 'checkbox'}
                            name={group.title}
                            defaultChecked={opt.checked}
                            className={`h-2.5 w-2.5 shrink-0 border-gray-300 text-sky-600 focus:ring-sky-500 ${
                              ['Region', 'Difficulty', 'Best Season'].includes(group.title) ? 'rounded-full' : 'rounded'
                            }`}
                          />
                          <span className="truncate text-[8px] leading-none text-gray-600 group-hover:text-gray-900">{opt.label}</span>
                        </div>
                        <span className="text-[7px] leading-none text-gray-400">{opt.count}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              
              <button className="mt-2 text-[10px] text-blue-600 font-medium hover:underline flex items-center gap-1">
                <FaTimes size={10} /> Clear Filters
              </button>
            </div>
          </div>

          {/* CENTER CONTENT - Cards */}
          <div className="w-full min-w-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
              <div>
                <h2 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                  <span className="text-blue-600 text-lg">🏛️</span> Cultural Heritage Sites
                </h2>
                <p className="text-[10px] text-gray-500 mt-0.5">30 Heritage sites found in South Wollo Zone</p>
              </div>
              
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <div className="flex bg-gray-100 rounded p-0.5">
                  <button className="px-2 py-1 bg-white shadow-sm rounded text-[9px] font-medium text-gray-800 flex items-center gap-1"><FaList /> Grid</button>
                  <button className="px-2 py-1 text-[9px] font-medium text-gray-500 hover:text-gray-800 flex items-center gap-1"><FaMap /> Map</button>
                </div>
                <select className="min-w-0 border border-gray-200 rounded text-[9px] px-1.5 py-1 text-gray-600 bg-white outline-none">
                  <option>Sort by: Popularity</option>
                  <option>Sort by: Rating</option>
                </select>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-4 gap-2">
              {mockHeritageSites.map((site) => (
                <div key={site.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group flex flex-col min-[1200px]:h-[176px]">
                  <div className="relative h-16 shrink-0 overflow-hidden">
                    <img src={site.image} alt={site.title} className={`w-full h-full object-cover group-hover:scale-105 transition duration-500 ${site.id === 5 ? 'cultural-festival-image' : ''}`} />
                    <div className="absolute top-1 left-1 flex gap-1 flex-wrap">
                      <span className="bg-white/90 backdrop-blur text-blue-700 text-[7px] font-bold px-1 py-0.5 rounded uppercase tracking-wide">{site.category}</span>
                    </div>
                    <button type="button" aria-label={`Save ${site.title}`} className="absolute right-1 top-1 rounded bg-[#003b77]/90 p-1 text-white hover:bg-sky-600">
                      <FaBookmark size={8} />
                    </button>
                  </div>
                  
                  <div className="p-1 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 text-[9px] mb-0.5 leading-tight truncate">{site.title}</h3>
                    <p className="text-[8px] text-gray-500 flex items-center gap-1 mb-0.5 truncate leading-tight">
                      <FaMapMarkerAlt className="text-blue-500" /> {site.location}
                    </p>
                    
                    <div className="flex items-center gap-1 text-[8px] font-medium text-yellow-600 mb-0.5 leading-tight">
                      <FaStar /> {site.rating} <span className="text-gray-400 font-normal">({site.reviews} reviews)</span>
                    </div>
                    
                    <p className="text-[8px] text-gray-600 line-clamp-2 mb-0.5 flex-1 leading-[9px]">{site.desc}</p>
                    
                    <div className="mb-0.5 flex flex-wrap gap-1">
                      {site.tags.map((tag, i) => (
                        <span key={i} className="rounded-full bg-blue-50 px-1 text-[6px] font-medium leading-[8px] text-blue-600">{tag}</span>
                      ))}
                    </div>
                    
                    <div className="mb-0.5 flex items-center justify-between border-t border-gray-100 pt-0 text-[7px] leading-none text-gray-500">
                      <span className="flex items-center gap-1"><FaMapMarkerAlt /> {site.distance}</span>
                      <span className="flex items-center gap-1"><FaClock /> {site.duration}</span>
                    </div>
                    
                    <button className="flex w-full items-center justify-center gap-1 rounded bg-sky-500 py-0 text-[8px] font-medium leading-[10px] text-white transition hover:bg-sky-600">
                      View Details <FaChevronRight size={8} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-1 mt-2">
              <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50"><FaChevronLeft size={9} /></button>
              <button className="w-6 h-6 flex items-center justify-center rounded bg-blue-500 text-white font-medium text-[9px]">1</button>
              <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 text-[9px]">2</button>
              <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 text-[9px]">3</button>
              <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 text-[9px]">4</button>
              <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50"><FaChevronRight size={9} /></button>
            </div>
          </div>

          {/* RIGHT SIDEBAR - Map & Extras */}
          <div className="w-full min-w-0 flex flex-col gap-2 lg:col-start-3 lg:row-start-1 lg:row-span-2">
            
            {/* Map Widget */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2">
              <div className="flex justify-between items-center mb-1.5">
                <h3 className="font-bold text-[10px] text-gray-800 flex items-center gap-1"><FaMapMarkerAlt className="text-blue-600"/> Explore on Map</h3>
                <div className="flex bg-gray-100 rounded p-0.5">
                  <button
                    type="button"
                    aria-pressed={mapStyle === 'map'}
                    onClick={() => setMapStyle('map')}
                    className={`px-1.5 py-0.5 text-[8px] rounded ${mapStyle === 'map' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
                  >
                    Map
                  </button>
                  <button
                    type="button"
                    aria-pressed={mapStyle === 'satellite'}
                    onClick={() => setMapStyle('satellite')}
                    className={`px-1.5 py-0.5 text-[8px] rounded ${mapStyle === 'satellite' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
                  >
                    Satellite
                  </button>
                </div>
              </div>
              <div className="relative h-[136px] bg-blue-50 rounded-md overflow-hidden border border-gray-100">
                <iframe
                  title="Google Map of South Wollo, Ethiopia"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent('Mekdela, Ethiopia')}&z=9&t=${mapStyle === 'satellite' ? 'k' : 'm'}&output=embed`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex justify-center gap-2 mt-2 text-[8px] text-gray-500">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Churches</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Monuments</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Museums</span>
              </div>
            </div>

            {/* AI Assistant Widget */}
            <div className="bg-sky-50 rounded-lg p-2 border border-sky-100 flex items-center gap-2">
              <div className="bg-white p-1 rounded-full shadow-sm text-blue-600">
                <FaRobot size={16} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[10px] text-gray-800">Need help planning?</h4>
                <p className="text-[8px] text-gray-500">Ask our AI travel assistant</p>
              </div>
              <button className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center shadow hover:bg-sky-600">
                <FaChevronRight size={9} />
              </button>
            </div>

            {/* Popular Sites Widget */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-[10px] text-gray-800 flex items-center gap-1">🏆 Popular Heritage Sites</h3>
                <a href="#" className="text-[8px] text-blue-600 hover:underline">View all →</a>
              </div>
              <div className="space-y-1">
                {popularSites.map((site, i) => (
                  <div key={i} className="flex h-8 items-center gap-2 group cursor-pointer">
                    <img src={site.img} alt={site.title} className={`h-7 w-7 rounded-md object-cover ${site.tag === 'Festival' ? 'cultural-festival-image' : ''}`} />
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-[8px] font-bold text-gray-800 group-hover:text-blue-600 transition leading-tight">{site.title}</h4>
                      <div className="flex items-center gap-1 text-[7px] text-gray-500 mt-0.5">
                        <span className="flex items-center text-yellow-500 gap-0.5"><FaStar size={8}/> {site.rating}</span>
                        <span>({site.reviews} reviews)</span>
                      </div>
                    </div>
                    <FaChevronRight className="text-gray-300 group-hover:text-blue-500 transition" size={9} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= APP DOWNLOAD BANNER ================= */}
      <div className="w-full bg-[#073763] px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-1">
            <h3 className="text-sm font-bold text-white">Take South Wollo with you!</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[9px] text-sky-100">
              <span className="flex items-center gap-1"><FaCheck className="text-sky-300"/> Save heritage sites</span>
              <span className="flex items-center gap-1"><FaCheck className="text-sky-300"/> Offline maps</span>
              <span className="flex items-center gap-1"><FaCheck className="text-sky-300"/> GPS directions</span>
              <span className="flex items-center gap-1"><FaCheck className="text-sky-300"/> Trip planner</span>
              </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-black text-white px-2.5 py-1.5 rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
              <FaGooglePlay size={15} />
              <div className="text-left">
                <div className="text-[7px] leading-tight">GET IT ON</div>
                <div className="font-bold text-[10px] leading-tight">Google Play</div>
              </div>
            </button>
            <button className="bg-black text-white px-2.5 py-1.5 rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
              <FaApple size={17} />
              <div className="text-left">
                <div className="text-[7px] leading-tight">Download on the</div>
                <div className="font-bold text-[10px] leading-tight">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}