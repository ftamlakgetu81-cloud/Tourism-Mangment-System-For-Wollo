import { useState, useEffect, useRef } from 'react';
import { 
  FaMapMarkerAlt, FaStar, FaClock, FaFilter, FaSearch, 
  FaChevronRight, FaFire, FaArrowRight
} from 'react-icons/fa';
import { MdOutlineExplore } from 'react-icons/md';
import { BsGrid, BsMap } from 'react-icons/bs';
const fallbackData = [
  { _id: '1', title: "Trekking & Hiking", category: "Nature & Adventure", description: "Explore breathtaking mountain trails, panoramic views and unique highland landscapes.", rating: 4.9, reviews: 124, location: "Mekdela / Gheralta", duration: "1-2 Days", difficulty: "Moderate", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800" },
  { _id: '2', title: "Cultural Tours", category: "Culture & Festivals", description: "Experience the rich traditions, music, dance and historic sites of the South Wollo.", rating: 4.8, reviews: 95, location: "Mekdela", duration: "Half day", difficulty: "Easy", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" },
  { _id: '3', title: "Local Cuisine", category: "Local Cuisine", description: "Taste authentic Ethiopian dishes and enjoy the traditional coffee ceremony with locals.", rating: 4.8, reviews: 85, location: "Wogagelo", duration: "1-3 Hours", difficulty: "Easy", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800" },
  { _id: '4', title: "Nature & Waterfalls", category: "Nature & Adventure", description: "Visit stunning waterfalls and enjoy the fresh air, green scenery and natural beauty.", rating: 4.7, reviews: 76, location: "Gheralta", duration: "Half day", difficulty: "Easy", image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&q=80&w=800" },
  { _id: '5', title: "Community & Crafts", category: "Community Tourism", description: "Meet local artisans, learn traditional crafts and support community-based tourism.", rating: 4.9, reviews: 68, location: "Dilbato", duration: "Half day", difficulty: "Easy", image: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&q=80&w=800" },
  { _id: '6', title: "Birdwatching & Photography", category: "Photography", description: "Discover rare bird species and capture stunning moments in the highlands.", rating: 4.6, reviews: 54, location: "Hay Lake", duration: "1 Day", difficulty: "Easy", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=800" }
];

// --- SUB-COMPONENTS ---

const ExperienceCard = ({ exp }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
      {/* Image Container */}
      <div className="relative h-40 shrink-0 overflow-hidden">
        <img 
          src={exp.image} 
          alt={exp.title} 
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105" 
        />
        <span className="absolute left-2.5 top-2.5 rounded bg-white/95 px-2 py-1 text-[10px] font-bold text-sky-800 shadow-sm">
          {exp.category}
        </span>
        <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm ${
          exp.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' : 
          exp.difficulty === 'Challenging' ? 'bg-red-100 text-red-800' :
          'bg-green-100 text-green-800'
        }`}>
          {exp.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-3">
        <h3 className="mb-1.5 text-sm font-extrabold leading-tight text-slate-800">{exp.title}</h3>
        
        <div className="mb-2 flex items-center gap-1.5 text-xs">
          <FaStar className="text-yellow-500" />
          <span className="font-bold text-slate-700">{exp.rating}</span>
          <span className="text-slate-400">({exp.reviews} reviews)</span>
        </div>
        
        <p className="mb-3 flex-grow text-xs leading-relaxed text-slate-500 line-clamp-2">{exp.description}</p>
        
        <div className="mb-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[10px] text-slate-500">
          <span className="flex items-center gap-1.5 truncate pr-2">
            <FaMapMarkerAlt className="shrink-0 text-sky-600"/> 
            <span className="truncate">{exp.location}</span>
          </span>
          <span className="flex items-center gap-1.5 shrink-0">
            <FaClock className="text-sky-600"/> 
            {exp.duration}
          </span>
        </div>
        
        <button className="mt-auto flex w-full items-center justify-center gap-1.5 rounded-md bg-sky-500 py-2 text-xs font-bold text-white transition hover:bg-sky-600">
          View Experience <FaArrowRight aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

const FilterSidebar = ({ category, setCategory, duration, setDuration, difficulty, setDifficulty, onClear }) => {
  return (
    <div className="sticky top-24 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3 text-sm font-extrabold text-slate-800">
        <FaFilter className="text-sky-600"/> Filter Experiences
      </div>
      
      <div className="mb-4">
        <h3 className="mb-2.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Categories</h3>
        <div className="space-y-2 text-xs text-slate-600">
          {['Nature & Adventure', 'Culture & Festivals', 'Local Cuisine', 'Community Tourism', 'Photography', 'Family Friendly'].map(cat => (
            <label key={cat} className="flex cursor-pointer items-center gap-2 hover:text-sky-700">
              <input type="checkbox" checked={category === cat} onChange={() => setCategory(category === cat ? '' : cat)} className="h-3.5 w-3.5 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
              <span className="flex-1">{cat}</span>
              <span className="rounded bg-slate-50 px-1.5 py-0.5 text-[10px] text-slate-400">{cat === 'Nature & Adventure' ? 6 : 4}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4 border-t border-slate-100 pt-3">
        <h3 className="mb-2.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Duration</h3>
        <div className="space-y-2 text-xs text-slate-600">
          {['Any duration', 'Half day', '1-2 days', 'Full day'].map(dur => (
            <label key={dur} className="flex cursor-pointer items-center gap-2 hover:text-sky-700">
              <input type="radio" name="duration" checked={duration === dur} onChange={() => setDuration(dur)} className="h-3.5 w-3.5 text-sky-600 focus:ring-sky-500" />
              <span>{dur}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="border-t border-slate-100 pt-3">
        <h3 className="mb-2.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Difficulty</h3>
        <div className="space-y-2 text-xs text-slate-600">
          {['Any level', 'Easy', 'Moderate', 'Challenging'].map(diff => (
            <label key={diff} className="flex cursor-pointer items-center gap-2 hover:text-sky-700">
              <input type="radio" name="difficulty" checked={difficulty === diff} onChange={() => setDifficulty(diff)} className="h-3.5 w-3.5 text-sky-600 focus:ring-sky-500" />
              <span>{diff}</span>
            </label>
          ))}
        </div>
      </div>

      <button onClick={onClear} className="mt-4 w-full border-t border-slate-100 pt-3 text-left text-xs font-bold text-sky-700 hover:text-sky-900">
        ↻ Clear Filters
      </button>
    </div>
  );
};

const MapWidget = () => {
  return (
    <div className="space-y-6">
      <div className="flex h-[320px] flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-extrabold text-slate-800">
          <FaMapMarkerAlt className="text-sky-600"/> Explore on Map
        </h3>
        <div className="relative flex-1 overflow-hidden rounded-md border border-slate-200 bg-sky-50">
          <iframe
            title="Map of South Wollo"
            src="https://www.openstreetmap.org/export/embed.html?bbox=38.65%2C10.75%2C40.15%2C11.95&layer=mapnik&marker=11.25%2C39.65"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-semibold text-slate-500">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Experiences</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-sky-500"/> Attractions</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500"/> Restaurants</span>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg bg-[#087e91] p-4 text-white shadow-sm">
        <MdOutlineExplore className="absolute -right-2 -top-2 text-white/10" size={72} />
        <h4 className="relative mb-1 text-sm font-extrabold">Plan your next adventure</h4>
        <p className="relative mb-3 text-xs leading-relaxed text-white/80">Build a personal itinerary for your time in South Wollo.</p>
        <button className="relative flex w-full items-center justify-center gap-2 rounded-md bg-white py-2 text-xs font-bold text-[#087e91] transition hover:bg-sky-50">
          Get Started <FaArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};


// --- MAIN COMPONENT ---

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('Any duration');
  const [difficulty, setDifficulty] = useState('Any level');
  const [sortBy, setSortBy] = useState('Popularity');
  const [pagination, setPagination] = useState({ filterKey: '', page: 1 });
  const mapSectionRef = useRef(null);

  useEffect(() => {
    // Fetch data from the MERN backend
    const fetchExperiences = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/experiences');
        if (!response.ok) {
          throw new Error('Failed to fetch experiences');
        }
        const data = await response.json();
        if (data && data.length > 0) {
          setExperiences(data);
        } else {
          setExperiences(fallbackData); // Use fallback if DB is empty
        }
      } catch {
        console.warn("Backend not running, using fallback data.");
        setExperiences(fallbackData);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  const filteredExperiences = experiences
    .filter((experience) => {
      const query = searchTerm.trim().toLowerCase();
      const matchesSearch = !query || [experience.title, experience.location, experience.description]
        .some((value) => value?.toLowerCase().includes(query));
      const matchesCategory = !category || experience.category === category;
      const matchesDifficulty = difficulty === 'Any level' || experience.difficulty === difficulty;
      const durationText = experience.duration?.toLowerCase() || '';
      const matchesDuration = duration === 'Any duration'
        || (duration === 'Half day' && /half|hour/.test(durationText))
        || (duration === '1-2 days' && /1-2/.test(durationText))
        || (duration === 'Full day' && /1 day|full day/.test(durationText));
      return matchesSearch && matchesCategory && matchesDifficulty && matchesDuration;
    })
    .sort((first, second) => sortBy === 'Rating'
      ? second.rating - first.rating
      : sortBy === 'Name'
        ? first.title.localeCompare(second.title)
        : second.reviews - first.reviews);
  const filterKey = JSON.stringify([searchTerm, category, duration, difficulty, sortBy]);
  const currentPage = pagination.filterKey === filterKey ? pagination.page : 1;
  const goToPage = (page) => setPagination({ filterKey, page });
  const pageCount = Math.ceil(filteredExperiences.length / 6);
  const paginatedExperiences = filteredExperiences.slice((currentPage - 1) * 6, currentPage * 6);

  return (
    <main className="min-h-screen bg-[#f2f7f9] pb-8">
      <section
        className="relative flex min-h-screen min-h-[100svh] items-center bg-cover bg-center text-white"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(4, 34, 45, 0.82), rgba(4, 34, 45, 0.2)), url('https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=85&w=2000')" }}
      >
        <div className="mx-auto w-full max-w-[1500px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-white/80">
            <a href="/" className="hover:text-white">Home</a><span>/</span><span className="text-white">Experiences</span>
          </div>
          <h1 className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
            Unforgettable Experiences <span className="block text-sky-300">in South Wollo</span>
          </h1>
          <p className="mt-1 max-w-xl text-sm text-white/85">Discover adventures, traditions, flavors and authentic local life.</p>
          <div className="mt-5 grid gap-2 rounded-lg bg-white p-2 shadow-xl lg:grid-cols-[minmax(220px,1.4fr)_minmax(150px,1fr)_minmax(150px,1fr)_auto_auto]">
            <label className="flex min-w-0 items-center gap-2 rounded-md border border-slate-200 px-3 text-sky-700">
              <FaSearch aria-hidden="true" />
              <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search experiences, activities or places..." className="w-full min-w-0 py-2.5 text-xs text-slate-700 outline-none placeholder:text-slate-400" />
            </label>
            <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category" className="rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-600 outline-none focus:border-sky-500">
              <option value="">All Categories</option>
              {['Nature & Adventure', 'Culture & Festivals', 'Local Cuisine', 'Community Tourism', 'Photography'].map((item) => <option key={item}>{item}</option>)}
            </select>
            <select value={difficulty === 'Any level' ? '' : difficulty} onChange={(event) => setDifficulty(event.target.value || 'Any level')} aria-label="Filter by difficulty" className="rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-600 outline-none focus:border-sky-500">
              <option value="">All Difficulty Levels</option>
              {['Easy', 'Moderate', 'Challenging'].map((item) => <option key={item}>{item}</option>)}
            </select>
            <button onClick={() => setSearchTerm(searchTerm.trim())} className="flex items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-2.5 text-xs font-extrabold text-white transition hover:bg-sky-600">
              <FaSearch aria-hidden="true" /> Search
            </button>
            <button
              onClick={() => {
                setViewMode('map');
                mapSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="flex items-center justify-center gap-2 rounded-md border border-sky-200 bg-white px-4 py-2.5 text-xs font-extrabold text-sky-700 transition hover:bg-sky-50"
            >
              <FaMapMarkerAlt aria-hidden="true" /> Explore on Map
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1500px] px-4 pt-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 xl:grid xl:grid-cols-[210px_minmax(0,1fr)]">
          <aside className="w-full shrink-0">
            <FilterSidebar
              category={category}
              setCategory={setCategory}
              duration={duration}
              setDuration={setDuration}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              onClear={() => {
                setSearchTerm('');
                setCategory('');
                setDuration('Any duration');
                setDifficulty('Any level');
              }}
            />
          </aside>

          <section className="min-w-0">
            
            {/* Top Bar Controls */}
            <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h2 className="flex items-center gap-2 text-xl font-extrabold text-slate-800">
                  <MdOutlineExplore className="text-sky-600"/> Explore Experiences
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  {loading ? 'Loading...' : `${filteredExperiences.length} experiences to discover`}
                </p>
              </div>
              
              <div className="flex w-full items-center gap-2 sm:w-auto">
                <div className="flex rounded-md border border-slate-200 bg-white p-1 shadow-sm">
                  <button 
                    onClick={() => setViewMode('grid')} 
                    className={`flex items-center gap-1.5 rounded px-2.5 py-1.5 text-xs font-bold transition-colors ${viewMode === 'grid' ? 'bg-sky-100 text-sky-700' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                    <BsGrid /> Grid
                  </button>
                  <button 
                    onClick={() => setViewMode('map')} 
                    className={`flex items-center gap-1.5 rounded px-2.5 py-1.5 text-xs font-bold transition-colors ${viewMode === 'map' ? 'bg-sky-100 text-sky-700' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                    <BsMap /> Map
                  </button>
                </div>
                
                <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort experiences" className="min-w-0 flex-1 cursor-pointer rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 shadow-sm outline-none hover:border-slate-300 sm:flex-none">
                  <option value="Popularity">Sort by: Popularity</option>
                  <option value="Rating">Sort by: Rating</option>
                  <option value="Name">Sort by: Name</option>
                </select>
              </div>
            </div>

            {/* Main Grid Layout */}
            <div className={`flex flex-col gap-5 ${viewMode === 'grid' ? 'xl:grid xl:grid-cols-[minmax(0,1fr)_290px]' : ''}`}>
              
              {/* Cards Container */}
              <div className={viewMode === 'grid' ? 'min-w-0' : 'hidden'}>
                {loading ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {[1,2,3,4].map(n => (
                      <div key={n} className="h-72 animate-pulse rounded-lg border border-slate-200 bg-white"></div>
                    ))}
                  </div>
                ) : filteredExperiences.length === 0 ? (
                  <div className="rounded-lg border border-slate-200 bg-white px-5 py-12 text-center">
                    <p className="font-bold text-slate-700">No experiences match those filters.</p>
                    <button onClick={() => {
                      setSearchTerm('');
                      setCategory('');
                      setDuration('Any duration');
                      setDifficulty('Any level');
                    }} className="mt-2 text-xs font-bold text-sky-700 hover:text-sky-900">Clear filters</button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {paginatedExperiences.map(exp => (
                      <ExperienceCard key={exp._id} exp={exp} />
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {pageCount > 1 && (
                  <div className="mt-6 flex items-center justify-center gap-1.5">
                    <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)} aria-label="Previous page" className="grid h-8 w-8 place-items-center rounded-md border border-slate-200 bg-white text-slate-500 disabled:opacity-40">‹</button>
                    {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                      <button key={page} onClick={() => goToPage(page)} aria-current={currentPage === page ? 'page' : undefined} className={`h-8 min-w-8 rounded-md px-2 text-xs font-bold ${currentPage === page ? 'bg-sky-500 text-white' : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}>{page}</button>
                    ))}
                    <button disabled={currentPage === pageCount} onClick={() => goToPage(currentPage + 1)} aria-label="Next page" className="grid h-8 w-8 place-items-center rounded-md border border-slate-200 bg-white text-slate-500 disabled:opacity-40">›</button>
                  </div>
                )}
              </div>

              {/* Right Map Sidebar */}
              <div ref={mapSectionRef} className="w-full min-w-0 scroll-mt-6">
                <MapWidget />
                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="mb-2.5 flex items-center justify-between">
                    <h3 className="flex items-center gap-2 text-sm font-extrabold text-slate-800"><FaFire className="text-orange-500" /> Popular this season</h3>
                    <span className="text-[10px] font-bold text-sky-700">Top rated</span>
                  </div>
                  <div className="space-y-2">
                    {[...experiences].sort((first, second) => second.rating - first.rating).slice(0, 3).map((experience) => (
                      <button key={experience._id} onClick={() => setSearchTerm(experience.title)} className="flex w-full items-center gap-2.5 rounded-md p-1 text-left transition hover:bg-slate-50">
                        <img src={experience.image} alt="" className="h-10 w-11 shrink-0 rounded object-cover" />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-xs font-bold text-slate-700">{experience.title}</span>
                          <span className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-500"><FaStar className="text-amber-400" /> {experience.rating} <span>·</span> {experience.category}</span>
                        </span>
                        <FaChevronRight className="shrink-0 text-[10px] text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </main>
  );
}