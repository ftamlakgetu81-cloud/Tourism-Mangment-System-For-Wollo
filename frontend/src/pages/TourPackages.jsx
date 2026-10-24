import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import sebastopolImage from '../assets/image26.jpg';
import gofMountainImage from '../assets/image 23.jpg';
import batiMarketImage from '../assets/image28.jpg';
import { 
  FaSearch, FaMapMarkerAlt, FaClock, FaStar, 
  FaHeart, FaArrowRight, FaLayerGroup, FaTree, FaLandmark, FaCalendarAlt, FaTimes
} from 'react-icons/fa';

const savedPackagesStorageKey = 'wollo-saved-tour-packages';

function readSavedPackageIds() {
  let storedIds;
  try {
    storedIds = window.localStorage.getItem(savedPackagesStorageKey);
  } catch (error) {
    console.error('Could not read saved tour packages from local storage.', error);
    return [];
  }

  if (!storedIds) {
    return [];
  }

  try {
    const parsedIds = JSON.parse(storedIds);
    if (Array.isArray(parsedIds) && parsedIds.every(Number.isInteger)) {
      return parsedIds;
    }
  } catch (error) {
    console.error('Saved tour packages contain invalid data.', error);
    return [];
  }

  console.error('Saved tour packages contain invalid data.');
  return [];
}

export default function TourPackages() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedPackageIds, setSavedPackageIds] = useState(readSavedPackageIds);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Tour Packages Data based on the image
  const packages = [
    {
      id: 1,
      title: "ሰባስቶፖል (Sebastopol) መድፍ",
      location: "መቅደላ አምባ | South Wollo",
      category: "Historical",
      tagBg: "bg-amber-600",
      desc: "በቴዎድሮስ ዘመን ከተሠሩ ወይም ከተጠቀሙ የጦር መሣሪያዎች ታሪክ ጋር የተያያዘ ታዋቂ ስም። መቅደላ አምባ ከኢትዮጵያ ታሪክ ጋር ጥልቅ ግንኙነት ያለው ታሪካዊ ስፍራ ነው። በተለይም ከንጉሥ ቴዎድሮስ ዳግማዊ ዘመንና ከ1868 የብሪታንያ ወታደራዊ ዘመቻ ጋር ይያያዛል። ለታሪክ ጥናት፣ ለባህል ቱሪዝምና ለተፈጥሮ ጉብኝት አስፈላጊ መዳረሻ ነው።",
      duration: "2 Days / 1 Night",
      rating: 4.9,
      reviews: 128,
      price: "ETB 3,500",
      img: sebastopolImage
    },
    {
      id: 2,
      title: "Mekdela Amba Hiking Tour",
      location: "Mekdela, South Wollo",
      category: "Nature",
      tagBg: "bg-emerald-600",
      desc: "Hike to the top of Mekdela Amba and enjoy breathtaking views and fresh mountain air.",
      duration: "1 Day",
      rating: 4.7,
      reviews: 96,
      price: "ETB 1,800",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Gishen Mariam Monastery Tour",
      location: "Gishen, South Wollo",
      category: "Cultural",
      tagBg: "bg-purple-600",
      desc: "Visit the historic Gishen Mariam monastery and experience its spiritual and cultural value.",
      duration: "1 Day",
      rating: 4.6,
      reviews: 74,
      price: "ETB 1,500",
      img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Lake Hayq Adventure Tour",
      location: "Lake Hayq, South Wollo",
      category: "Nature",
      tagBg: "bg-emerald-600",
      desc: "Enjoy the serene beauty of Lake Hayq, surrounded by mountains and nature.",
      duration: "1 Day",
      rating: 4.5,
      reviews: 62,
      price: "ETB 1,200",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Tosa Sucha Expedition",
      location: "Arba Minch, South Ethiopia",
      category: "Nature",
      tagBg: "bg-emerald-600",
      desc: "Explore the volcanic landscape between Lakes Chamo and Abaya near Nechisar National Park.",
      duration: "1 Day",
      rating: 4.4,
      reviews: 58,
      price: "ETB 1,700",
      img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=500&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Bati Market & Local Culture Tour",
      location: "Bati, South Wollo",
      category: "Cultural",
      tagBg: "bg-purple-600",
      desc: "Experience the vibrant local market, traditional crafts, and the rich culture of the people.",
      duration: "1 Day",
      rating: 4.3,
      reviews: 47,
      price: "ETB 1,000",
      img: batiMarketImage
    },
    {
      id: 7,
      title: "Wuchale Nature Tour",
      location: "Wuchale, South Wollo",
      category: "Nature",
      tagBg: "bg-emerald-600",
      desc: "Enjoy the cool climate, forest views, and natural beauty of Wuchale.",
      duration: "1 Day",
      rating: 4.4,
      reviews: 51,
      price: "ETB 1,300",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "የጎፍ ተራራና ደን",
      location: "ኮምቦልቻ | ደቡብ ወሎ ዞን | አማራ ክልል",
      searchTerms: "Gof mountain forest Kombolcha",
      category: "Nature",
      tagBg: "bg-emerald-600",
      desc: "በአማራ ክልል፣ በደቡብ ወሎ ዞን፣ በኮምቦልቻ ከተማ አቅራቢያ የሚገኝ ጠቃሚ የተፈጥሮ ሀብት ነው። ተራራው ከባህር ጠለል በላይ እስከ 3,000 ሜትር የሚጠጋ ከፍታ ያለው ሲሆን፣ የተፈጥሮ ደን፣ የተከሉ ዛፎችና የዱር እንስሳት መኖሪያ የሆነ አካባቢ ነው።",
      duration: "1 Day",
      rating: 4.8,
      reviews: 86,
      price: "ETB 1,600",
      img: gofMountainImage
    }
  ];

  // Filtering logic
  const filteredPackages = packages.filter((pkg) => {
    const matchesTab = activeTab === 'All'
      || pkg.category.toLowerCase() === activeTab.toLowerCase()
      || (activeTab === 'Weekend' && Number.parseInt(pkg.duration, 10) <= 2);
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const matchesSearch = pkg.title.toLowerCase().includes(normalizedQuery)
      || pkg.location.toLowerCase().includes(normalizedQuery)
      || pkg.category.toLowerCase().includes(normalizedQuery)
      || (pkg.searchTerms ?? '').toLowerCase().includes(normalizedQuery)
      || pkg.desc.toLowerCase().includes(normalizedQuery);
    return matchesTab && matchesSearch;
  });

  useEffect(() => {
    if (!selectedPackage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedPackage(null);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPackage]);

  const toggleSavedPackage = (packageId) => {
    setSavedPackageIds((savedIds) => (
      savedIds.includes(packageId)
        ? savedIds.filter((savedId) => savedId !== packageId)
        : [...savedIds, packageId]
    ));
  };

  useEffect(() => {
    try {
      window.localStorage.setItem(savedPackagesStorageKey, JSON.stringify(savedPackageIds));
    } catch (error) {
      console.error('Could not save tour packages to local storage.', error);
    }
  }, [savedPackageIds]);

  const filterTabs = [
    { label: 'All', text: 'All Packages', icon: <FaLayerGroup /> },
    { label: 'Cultural', text: 'Cultural Tours', icon: <FaLandmark /> },
    { label: 'Nature', text: 'Nature & Adventure', icon: <FaTree /> },
    { label: 'Historical', text: 'Historical Tours', icon: <FaLandmark /> },
    { label: 'Weekend', text: 'Weekend Tours', icon: <FaCalendarAlt /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative isolate flex min-h-[calc(100vh-100px)] min-h-[calc(100svh-100px)] items-center overflow-hidden bg-[#064b49] px-5 py-10 text-white sm:px-8 sm:py-14">
          <img
            src={gofMountainImage}
            alt="Gof Mountain near Kombolcha"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062f2d]/90 via-[#063c3b]/60 to-[#073a36]/25" />
          <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-6">
            <div className="max-w-3xl">
              
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Tourism Management <span className="font-serif italic text-amber-400">System For Wollo</span>
              </h1>
            </div>
            
            <div className="hidden shrink-0 -rotate-6 text-right lg:block">
              <span className="block font-serif text-2xl italic text-white">Explore</span>
              <span className="block text-6xl font-black italic leading-none text-amber-400">Wollo</span>
              <span className="mt-1 block text-xs font-semibold italic text-white">More than a destination</span>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="sticky top-[56px] z-40 border-b border-slate-200 bg-white/95 py-3 shadow-sm backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:pb-0">
              {filterTabs.map((tab) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(tab.label)}
                  aria-pressed={activeTab === tab.label}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-bold transition sm:text-xs ${
                    activeTab === tab.label
                      ? 'border-[#1a5d38] bg-[#1a5d38] text-white shadow-sm'
                      : 'border-emerald-100 bg-white text-[#1a5d38] hover:border-emerald-300 hover:bg-emerald-50'
                  }`}
                >
                  {tab.icon} {tab.text}
                </button>
              ))}
            </div>
            <label className="relative block w-full shrink-0 lg:w-72">
              <span className="sr-only">Search tour packages</span>
              <FaSearch aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#1a5d38]" />
              <input
                type="search"
                placeholder="Search tour packages..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full rounded-lg border border-sky-200 bg-white py-2.5 pl-9 pr-3 text-xs outline-none transition placeholder:text-slate-500 focus:border-[#1a5d38] focus:ring-2 focus:ring-emerald-100"
              />
            </label>
          </div>
        </section>

        {/* Packages Grid */}
        <section id="packages" className="mx-auto max-w-7xl px-5 py-5 sm:px-8 sm:py-6">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-slate-500">
              Showing <span className="text-[#1a5d38]">{filteredPackages.length}</span> tour {filteredPackages.length === 1 ? 'package' : 'packages'}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPackages.map((pkg) => (
              <article key={pkg.id} className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-sky-100 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative h-40 overflow-hidden bg-slate-200 sm:h-36">
                  <img src={pkg.img} alt={pkg.title} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                  <span className={`absolute left-2 top-2 rounded-full ${pkg.tagBg} px-2.5 py-1 text-[9px] font-bold text-white shadow-sm`}>
                    {pkg.category} Tour
                  </span>
                  <button
                    type="button"
                    aria-label={`${savedPackageIds.includes(pkg.id) ? 'Remove' : 'Save'} ${pkg.title} ${savedPackageIds.includes(pkg.id) ? 'from saved packages' : 'to saved packages'}`}
                    aria-pressed={savedPackageIds.includes(pkg.id)}
                    onClick={() => toggleSavedPackage(pkg.id)}
                    className={`absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full backdrop-blur-sm transition ${
                      savedPackageIds.includes(pkg.id)
                        ? 'bg-white text-rose-600'
                        : 'bg-slate-900/25 text-white hover:bg-white hover:text-rose-600'
                    }`}
                  >
                    <FaHeart aria-hidden="true" className="text-xs" />
                  </button>
                </div>
                <div className="flex flex-1 flex-col p-3">
                  <div>
                    <h2 className="text-xs font-extrabold leading-snug text-slate-900">{pkg.title}</h2>
                    <p className="mb-1.5 mt-1 flex items-center gap-1 text-[10px] font-semibold text-[#1a5d38]">
                      <FaMapMarkerAlt aria-hidden="true" className="text-[9px]" /> {pkg.location}
                    </p>
                    <p className="line-clamp-2 text-[10px] leading-snug text-slate-600">{pkg.desc}</p>
                  </div>
                  <div className="mt-auto pt-2">
                    <div className="mb-1.5 flex items-center justify-between gap-2 border-t border-slate-100 pt-2 text-[9px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <FaClock aria-hidden="true" className="text-[#1a5d38]" /> {pkg.duration}
                      </span>
                      <span className="flex items-center gap-1 font-bold text-slate-700">
                        <FaStar aria-hidden="true" className="text-amber-400" /> {pkg.rating} <span className="font-normal text-slate-400">({pkg.reviews})</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="block text-[9px] leading-tight text-slate-400">per person</span>
                        <span className="text-xs font-extrabold text-[#1a5d38]">{pkg.price}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedPackage(pkg)}
                        className="inline-flex items-center gap-1 rounded-full bg-[#1a5d38] px-3 py-1.5 text-[9px] font-bold text-white transition hover:bg-[#0f3b23]"
                      >
                        View Details <FaArrowRight aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="py-16 text-center text-slate-500">
              <p className="text-base font-semibold">No tour packages found matching your criteria.</p>
              <button type="button" onClick={() => { setActiveTab('All'); setSearchQuery(''); }} className="mt-3 rounded-lg bg-[#1a5d38] px-4 py-2 text-xs font-medium text-white">
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />

      {selectedPackage && (
        <div
          className="fixed inset-0 z-[100] h-[100dvh] overflow-y-auto bg-white"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedPackage(null);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="package-details-title"
            className="relative min-h-full w-full bg-white"
          >
            <img
              src={selectedPackage.img}
              alt={selectedPackage.title}
              className="block h-auto w-full object-contain"
            />
            <button
              type="button"
              autoFocus
              aria-label="Close package details"
              onClick={() => setSelectedPackage(null)}
              className="fixed right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-slate-950/60 text-white transition hover:bg-slate-950"
            >
              <FaTimes aria-hidden="true" />
            </button>
            <div className="w-full bg-white px-5 pb-5 pt-6 text-slate-900 shadow-[0_-12px_40px_rgb(15_23_42/18%)] sm:px-8 sm:pb-8">
              <span className={`inline-flex rounded-full ${selectedPackage.tagBg} px-3 py-1 text-xs font-bold text-white`}>
                {selectedPackage.category} Tour
              </span>
              <h2 id="package-details-title" className="mt-3 text-2xl font-extrabold text-slate-900">
                {selectedPackage.title}
              </h2>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#1a5d38]">
                <FaMapMarkerAlt aria-hidden="true" />
                {selectedPackage.location}
              </p>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600">
                {selectedPackage.bookingDetails ?? selectedPackage.desc}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                <p><span className="block text-xs text-slate-500">Duration</span><span className="mt-1 flex items-center gap-2 font-bold text-slate-900"><FaClock className="text-[#1a5d38]" />{selectedPackage.duration}</span></p>
                <p><span className="block text-xs text-slate-500">Rating</span><span className="mt-1 flex items-center gap-2 font-bold text-slate-900"><FaStar className="text-amber-400" />{selectedPackage.rating} ({selectedPackage.reviews} reviews)</span></p>
                <p className="col-span-2"><span className="block text-xs text-slate-500">Price per person</span><span className="mt-1 block text-lg font-extrabold text-[#1a5d38]">{selectedPackage.price}</span></p>
              </div>
              <a
                href={selectedPackage.id === 1 || selectedPackage.id === 2 ? '/packages/mekdela-amba' : selectedPackage.id === 3 ? '/packages/gishen-mariam' : selectedPackage.id === 4 ? '/packages/lake-hayq' : selectedPackage.id === 5 ? '/packages/tosa-sucha' : selectedPackage.id === 6 ? '/packages/bati-market' : selectedPackage.id === 7 ? '/packages/wuchale-nature' : selectedPackage.id === 8 ? '/packages/gof-mountain-forest' : `mailto:info@wollotourism.gov.et?subject=${encodeURIComponent(`Booking inquiry: ${selectedPackage.title}`)}&body=${encodeURIComponent(`Hello, I would like to ask about booking the ${selectedPackage.title} tour (${selectedPackage.duration}, ${selectedPackage.price} per person).\n\n${selectedPackage.bookingDetails ?? selectedPackage.desc}`)}`}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1a5d38] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0f3b23]"
              >
                Contact us to book
                <FaArrowRight aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}