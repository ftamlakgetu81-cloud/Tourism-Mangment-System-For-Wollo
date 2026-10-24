import { useEffect, useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaMountain,
  FaLandmark,
  FaChurch,
  FaArrowRight,
  FaStar,
  FaCompass,
  FaUsers,
  FaCalendarAlt,
  FaLeaf,
  FaRoute,
  FaUtensils,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import gishenImage from "../assets/image1.jfif";
import gishenHighlandsImage from "../assets/image 2.jpg";
import southWolloImage3 from "../assets/image3.jpg.jfif";
import southWolloImage4 from "../assets/image4.jfif";
import southWolloImage5 from "../assets/image 5.jfif";
import gofMountainImage from "../assets/image 23.jpg";
import southWolloImage16 from "../assets/image16.jpg";
import southWolloImage17 from "../assets/image17.jpg";
import southWolloImage20 from "../assets/image20.jpg";

const heroImages = [
  gishenImage,
  gishenHighlandsImage,
  southWolloImage3,
  southWolloImage4,
  southWolloImage5,
  southWolloImage16,
  southWolloImage17,
  southWolloImage20,
];

const destinations = [
  {
    id: 1,
    name: "Gishen Mariam",
    location: "Raya Kobo area, North Wollo",
    category: "Religious & Historical",
    description:
      "Explore the well-known religious pilgrimage site of Gishen Debre Kerbe Mariam.",
    image: gishenImage,
    icon: FaChurch,
  },
  {
    id: 2,
    name: "Gishen Mariam Road",
    location: "Gishen Mariam, North Wollo",
    category: "Religious & Historical",
    description:
      "Follow the scenic mountain road to Gishen Debre Kerbe Mariam, a renowned religious pilgrimage site.",
    image: gishenHighlandsImage,
    icon: FaLandmark,
  },
  {
    id: 3,
    name: "Lake Hayq",
    location: "Hayq, South Wollo",
    category: "Nature & Adventure",
    description:
      "Enjoy the natural scenery, peaceful lake views, and nearby cultural heritage.",
    image: southWolloImage3,
    icon: FaMountain,
  },
  {
    id: 4,
    name: "Dessie Highlands",
    location: "Dessie area, South Wollo",
    category: "Nature & Adventure",
    description:
      "Explore mountain landscapes and scenic viewpoints around Dessie.",
    image: southWolloImage4,
    icon: FaMountain,
  },
  {
    id: 5,
    name: "South Wollo Heritage",
    location: "South Wollo, Amhara Region",
    category: "Religious & Historical",
    description:
      "Discover local traditions, historical places, and the cultural heritage of Wollo.",
    image: southWolloImage5,
    icon: FaLandmark,
  },
];

const categories = [
  {
    title: "Nature & Adventure",
    subtitle: "Mountains, waterfalls, trekking",
    icon: FaMountain,
    category: "Nature & Adventure",
  },
  {
    title: "History & Heritage",
    subtitle: "Ancient sites and local landmarks",
    icon: FaLandmark,
    category: "Religious & Historical",
  },
  {
    title: "Culture & Festivals",
    subtitle: "Traditional events, music, food",
    icon: FaChurch,
    category: "Religious & Historical",
  },
  {
    title: "Local Experiences",
    subtitle: "Meet communities and discover Wollo",
    icon: FaUsers,
    category: "Nature & Adventure",
  },
];

function WolloMap() {
  const places = [
    { x: 145, y: 115, label: "Mekdela" },
    { x: 325, y: 192, label: "Dessie" },
    { x: 520, y: 105, label: "Hayq" },
    { x: 590, y: 215, label: "Gishen Mariam" },
  ];

  return (
    <svg
      viewBox="0 0 720 300"
      role="img"
      aria-labelledby="wollo-map-title"
      className="aspect-[12/5] h-auto w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="wollo-map-title">
        Illustrated map showing places in South Wollo
      </title>
      <rect width="720" height="300" fill="#e8f5e9" />
      <path
        d="M-20 220C95 170 115 255 225 196S360 120 450 173 595 220 740 115M25 20C105 80 190 60 265 120s160 65 224 22 130-46 250-6"
        fill="none"
        stroke="#c8e6c9"
        strokeWidth="36"
        strokeLinecap="round"
      />
      <path
        d="M-20 220C95 170 115 255 225 196S360 120 450 173 595 220 740 115M25 20C105 80 190 60 265 120s160 65 224 22 130-46 250-6"
        fill="none"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="12 10"
      />
      <path
        d="M75 270 165 30m0 0 310 240m0 0L650 40"
        stroke="#d6e6da"
        strokeWidth="2"
      />
      {places.map((place) => (
        <g key={place.label}>
          <circle
            cx={place.x}
            cy={place.y}
            r="13"
            fill="#059669"
            opacity="0.18"
          />
          <circle
            cx={place.x}
            cy={place.y}
            r="7"
            fill="#047857"
            stroke="#fff"
            strokeWidth="3"
          />
          <text
            x={place.x + 15}
            y={place.y + 5}
            fill="#334155"
            fontSize="15"
            fontWeight="600"
          >
            {place.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPreviousImage(currentImage);
      setCurrentImage((currentImage + 1) % heroImages.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [currentImage]);

  const filteredDestinations = destinations.filter((destination) => {
    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
      destination.name.toLowerCase().includes(search) ||
      destination.location.toLowerCase().includes(search) ||
      destination.description.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" ||
      destination.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const chooseCategory = (category) => {
    setSelectedCategory(category);
    document
      .getElementById("destinations")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative flex min-h-[calc(100vh-100px)] items-center overflow-hidden bg-slate-950">
          {heroImages.map((image, index) => (
            <img
              key={`${image}-${currentImage === index ? currentImage : index === previousImage ? `exit-${currentImage}` : "inactive"}`}
              src={image}
              alt={`South Wollo tourism landscape ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover ${
                currentImage === index
                  ? "z-10 home-hero-image"
                  : index === previousImage
                    ? "z-0 home-hero-image-exit"
                    : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-slate-950/10" />

          <div className="relative z-10 w-full px-5 py-20 sm:px-8 lg:px-12">
            <div className="w-full">
             
              <h1
                key={currentImage}
                className="hero-enter w-full whitespace-normal text-[clamp(1rem,4vw,4rem)] font-extrabold leading-tight tracking-tight text-white sm:whitespace-nowrap"
              > Tourism Management System For South Wollo
              
              </h1>

          
            </div>

          </div>

          {/* SLIDER INDICATORS */}
          <div
            className="absolute bottom-8 left-5 z-10 flex items-center gap-2 sm:left-8 lg:left-12"
            role="group"
            aria-label="Choose a featured image"
          >
            {heroImages.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={currentImage === index}
                onClick={() => {
                  if (index !== currentImage) {
                    setPreviousImage(currentImage);
                    setCurrentImage(index);
                  }
                }}
                className={`h-2.5 rounded-full transition-all ${
                  currentImage === index
                    ? "w-10 bg-emerald-400"
                    : "w-2.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </section>

        {/* QUICK SEARCH */}
        <section className="relative z-20 mx-auto -mt-8 max-w-6xl px-5 sm:px-8">
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:p-7">
            <div className="grid gap-4 md:grid-cols-[1fr_260px_auto] md:items-end">
              <div>
                <label
                  htmlFor="destination-search"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Search destinations
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-emerald-500">
                  <FaSearch className="text-slate-400" />
                  <input
                    id="destination-search"
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search by destination or location..."
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="destination-category"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Category
                </label>

                <select
                  id="destination-category"
                  value={selectedCategory}
                  onChange={(event) =>
                    setSelectedCategory(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500"
                >
                  <option value="All">All Categories</option>
                  <option value="Religious & Historical">
                    Religious & Historical
                  </option>
                  <option value="Nature & Adventure">
                    Nature & Adventure
                  </option>
                </select>
              </div>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("destinations")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
              >
                <FaSearch />
                Search
              </button>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section id="categories" className="border-y border-slate-100 bg-white py-5 sm:py-7">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => chooseCategory(category.category)}
                    className="group flex min-w-0 items-center gap-2 rounded-xl px-2 py-2 text-left transition hover:bg-emerald-50 sm:gap-3 sm:px-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white sm:h-12 sm:w-12 sm:text-xl">
                      <Icon />
                    </div>

                    <span className="min-w-0">
                      <span className="block text-xs font-extrabold text-slate-900 sm:text-sm">
                        {category.title}
                      </span>
                      <span className="mt-0.5 hidden text-xs leading-4 text-slate-500 sm:block">
                        {category.subtitle}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* DESTINATIONS */}
        <section
          id="destinations"
          className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-emerald-600">
                Places to discover
              </p>

              <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Popular Destinations
              </h2>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                Find places to explore across Wollo. Search or select a
                category to narrow your results.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="self-start rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700 sm:self-auto"
            >
              Clear filters
            </button>
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1.8fr)_minmax(300px,0.9fr)]">
            <div className="flex min-w-0 snap-x gap-3 overflow-x-auto pb-3">
              {filteredDestinations.map((destination) => {
                const Icon = destination.icon;

                return (
                  <article
                    key={destination.id}
                    className="group w-[min(72vw,220px)] shrink-0 snap-start overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:w-48 xl:w-[190px]"
                  >
                    <div className="relative h-24 overflow-hidden sm:h-28">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                      <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-1 text-[9px] font-bold text-emerald-800 shadow">
                        {destination.category}
                      </span>
                    </div>
                    <div className="p-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-extrabold text-slate-900">
                          {destination.name}
                        </h3>
                        <Icon className="mt-0.5 shrink-0 text-sm text-emerald-600" />
                      </div>
                      <p className="mt-1 flex items-center gap-1 text-[10px] text-slate-500">
                        <FaMapMarkerAlt className="shrink-0 text-emerald-600" />
                        <span className="truncate">{destination.location}</span>
                      </p>
                      <p className="mt-2 line-clamp-2 text-[10px] leading-4 text-slate-600">
                        {destination.description}
                      </p>
                      <a
                        href="/destinations"
                        className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700"
                      >
                        View details
                        <FaArrowRight />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            <article className="min-w-0 overflow-hidden rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-emerald-700">
                Explore South Wollo
              </p>
              <h3 className="mt-1 text-lg font-extrabold text-slate-900">
                Interactive Map
              </h3>
              <p className="text-xs leading-5 text-slate-600">
                Find destinations and places to explore in the region.
              </p>
              <a
                href="/destinations"
                aria-label="Explore South Wollo destinations"
                className="mt-3 block overflow-hidden rounded-lg bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <WolloMap />
              </a>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-semibold text-slate-600">
                {["Destinations", "History", "Nature", "Culture"].map(
                  (label) => (
                    <span
                      key={label}
                      className="rounded-full bg-slate-100 px-2.5 py-1"
                    >
                      {label}
                    </span>
                  )
                )}
              </div>
            </article>
          </div>

          {filteredDestinations.length === 0 && (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
              <FaSearch className="mx-auto text-3xl text-slate-400" />
              <h3 className="mt-4 text-xl font-bold text-slate-800">
                No destinations found
              </h3>
              <p className="mt-2 text-slate-500">
                Try another search term or choose a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-5 rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700"
              >
                Show all destinations
              </button>
            </div>
          )}
        </section>

        {/* TRIP PLANNING AND LOCAL EXPERIENCES */}
        <section className="bg-slate-50 py-10 sm:py-14">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:px-12 xl:grid-cols-[0.9fr_0.8fr_1.3fr]">
              <article className="relative overflow-hidden rounded-3xl bg-slate-900 p-7 text-white sm:p-9">
                <img
                  src={gishenHighlandsImage}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-emerald-950/50" />
                <div className="relative">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-300">
                    Plan your trip
                  </p>
                  <h2 className="mt-3 max-w-sm text-2xl font-extrabold sm:text-3xl">
                    Your Wollo journey starts here
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                    Find destinations, explore local experiences, and prepare
                    for your visit to South Wollo.
                  </p>

                  <ul className="mt-6 grid gap-3 text-sm text-white/90">
                    <li className="flex items-center gap-3">
                      <FaSearch className="text-emerald-300" />
                      Find places that match your interests
                    </li>
                    <li className="flex items-center gap-3">
                      <FaRoute className="text-emerald-300" />
                      Discover historic and natural attractions
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCalendarAlt className="text-emerald-300" />
                      Start planning your visit
                    </li>
                  </ul>

                  <a
                    href="#destinations"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
                  >
                    Explore destinations
                    <FaArrowRight />
                  </a>
                </div>
              </article>

              <article className="flex flex-col justify-center rounded-2xl border border-emerald-100 bg-white p-5 sm:p-6">
                <FaLeaf className="text-2xl text-emerald-600" />
                <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-emerald-700">
                  About us
                </p>
                <h2 className="mt-2 text-lg font-extrabold text-slate-900">
                  Sustainable tourism and cultural heritage
                </h2>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Discover Wollo's natural beauty and traditions while
                  supporting local communities and preserving the region's
                  heritage.
                </p>
                <a
                  href="/about"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-900"
                >
                  Learn about us
                  <FaArrowRight />
                </a>
              </article>

            <div className="contents">
              <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                <div className="mb-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-emerald-700">
                    Travel experiences
                  </p>
                  <h2 className="mt-1 text-lg font-extrabold text-slate-900">
                    Make your visit memorable
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      title: "የጎፍ ተራራና ደን",
                      description:
                        "በአማራ ክልል፣ በደቡብ ወሎ ዞን፣ በኮምቦልቻ ከተማ አቅራቢያ የሚገኝ ጠቃሚ የተፈጥሮ ሀብት ነው። ተራራው ከባህር ጠለል በላይ እስከ 3,000 ሜትር የሚጠጋ ከፍታ ያለው ሲሆን፣ የተፈጥሮ ደን፣ የተከሉ ዛፎችና የዱር እንስሳት መኖሪያ የሆነ አካባቢ ነው።",
                      image: gofMountainImage,
                      icon: FaMountain,
                    },
                    {
                      title: "Culture & heritage",
                      description: "Discover local traditions",
                      image: gishenImage,
                      icon: FaLandmark,
                    },
                    {
                      title: "Local cuisine",
                      description: "Experience Wollo hospitality",
                      image: southWolloImage5,
                      icon: FaUtensils,
                    },
                    {
                      title: "Lake adventures",
                      description: "Enjoy the natural scenery",
                      image: southWolloImage3,
                      icon: FaCompass,
                    },
                  ].map((experience) => {
                    const Icon = experience.icon;

                    return (
                      <a
                        key={experience.title}
                        href="/destinations"
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <img
                          src={experience.image}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="h-24 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-28"
                        />
                        <div className="p-3 sm:p-4">
                          <div className="flex items-start gap-2 text-xs font-extrabold text-slate-900 sm:text-sm">
                            <Icon className="text-emerald-600" />
                            {experience.title}
                          </div>
                          <p className="mt-2 text-xs leading-5 text-slate-600">
                            {experience.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-300">
                Travel with confidence
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Why Explore Wollo With Us?
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                A central place to discover attractions and learn about
                tourism opportunities in Wollo.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <FaCompass className="text-3xl text-emerald-300" />
                <h3 className="mt-5 text-xl font-bold">Discover Places</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Browse natural attractions, historical locations, and
                  cultural destinations.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <FaUsers className="text-3xl text-emerald-300" />
                <h3 className="mt-5 text-xl font-bold">Local Experiences</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Learn about local heritage and tourism experiences across
                  Wollo.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <FaCalendarAlt className="text-3xl text-emerald-300" />
                <h3 className="mt-5 text-xl font-bold">Plan Your Visit</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Use destination information as a starting point for planning
                  a trip.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-emerald-700 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <FaStar className="mx-auto text-3xl text-emerald-200" />

            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Start Your Wollo Journey
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-emerald-50">
              Explore the destinations, discover the culture, and prepare for
              your next travel experience in Wollo.
            </p>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("destinations")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-extrabold text-emerald-800 transition hover:bg-emerald-50"
            >
              Explore Destinations
              <FaArrowRight />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}