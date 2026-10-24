import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import image12 from "../assets/image12.jpg";
import image10 from "../assets/image10.jpg";
import image23 from "../assets/image 23.jpg";
import image26 from "../assets/image26.jpg";
import image17 from "../assets/image17.jpg";
import image1 from "../assets/image1.jfif";
import image3 from "../assets/image3.jpg.jfif";
import image24 from "../assets/image24.jpg";
import image2 from "../assets/image 2.jpg";
import image19 from "../assets/image19.jpg";
import {
  FaCloudSun,
  FaMapMarkerAlt,
  FaGlobe,
  FaPlayCircle,
  FaEye,
  FaBullseye,
  FaCheckCircle,
  FaLeaf,
  FaGooglePlay,
  FaApple,
  FaArrowRight,
  FaCompass,
  FaMap,
  FaHeart,
  FaHome,
  FaUser
} from "react-icons/fa";

const aboutHeroImages = [
  { src: image12, name: "Yegof Forest", localName: "የጎፍ ደን" },
  { src: image10, name: "Mount Tossa", localName: "ጦሳ ተራራ" },
];

const aboutGalleryImages = [
  {
    src: image23,
    alt: "Kombolcha mountain landscape",
    title: "Mountain Landscapes",
    description: "Discover the Gof Mountain and forest landscape near Kombolcha.",
    href: "/packages/gof-mountain-forest",
  },
  {
    src: image26,
    alt: "Historic cannon in South Wollo",
    title: "Historical Heritage",
    description: "Learn about the history and heritage of Mekdela Amba.",
    href: "/packages/mekdela-amba",
  },
  {
    src: image17,
    alt: "Church on a rocky hill in South Wollo",
    title: "Faith and Heritage",
    description: "Visit Gishen Debre Kerbe Mariam, an important religious and historic site.",
    href: "/packages/gishen-mariam",
  },
  {
    src: image10,
    alt: "Baboons in a mountain landscape",
    title: "Wildlife and Nature",
    description: "Explore the natural landscape and wildlife around Mount Tossa.",
    href: "/packages/mount-tossa",
  },
  {
    src: image1,
    alt: "South Wollo natural scenery",
    title: "South Wollo Scenery",
    description: "Discover the landscapes and natural beauty of South Wollo.",
    href: "/packages/lake-hayq",
  },
  {
    src: image3,
    alt: "Lake and mountain landscape in South Wollo",
    title: "Regional Landscapes",
    description: "Discover Lake Hayq and the surrounding scenery of South Wollo.",
    href: "/packages/lake-hayq",
  },
  {
    src: image24,
    alt: "Mekdela Amba historic mountain",
    title: "Mekdela Amba",
    description: "Explore the historic mountain stronghold of Emperor Tewodros II.",
    href: "/packages/mekdela-amba",
  },
  {
    src: image2,
    alt: "Pilgrims walking along a mountain path",
    title: "Mountain Pilgrimage",
    description: "Explore the historic mountain trails and pilgrimage heritage of South Wollo.",
    href: "/packages/mekdela-amba",
  },
  {
    src: image12,
    alt: "Yegof forest and surrounding mountains",
    title: "Yegof Forest",
    description: "Explore the forest and mountain landscapes near Kombolcha.",
    href: "/packages/gof-mountain-forest",
  },
  {
    src: image19,
    alt: "Aerial view of a lakeside community in South Wollo",
    title: "Lakeside Community",
    description: "Discover Lake Hayq and the communities around its shoreline.",
    href: "/packages/lake-hayq",
  },
];

export default function AboutPage() {
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveHeroImage((currentImage) => (currentImage + 1) % aboutHeroImages.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".about-reveal");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        
        {/* ================= HERO SECTION (FULL WIDTH) ================= */}
        <section className="relative flex min-h-[calc(100vh-100px)] min-h-[calc(100svh-100px)] w-full flex-col justify-center overflow-hidden px-4 text-white sm:px-8 lg:px-16">
          {aboutHeroImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
                activeHeroImage === index ? "about-hero-image opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent" />

          <div className="relative z-10 w-full max-w-[1400px] mx-auto h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg">About Us</h2>
              <p className="text-base sm:text-xl text-blue-50 leading-relaxed font-light max-w-xl">
                Connecting People, Culture, and Nature for a Sustainable Future in South Wollo.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 right-8 lg:right-16 z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hidden sm:flex items-center gap-5 shadow-2xl">
            <div className="flex items-center gap-3 border-r border-white/20 pr-5">
              <FaCloudSun className="text-4xl text-yellow-300 drop-shadow-md" />
              <div>
                <p className="text-2xl font-bold leading-none">21°C</p>
                <p className="text-xs text-white/80 mt-1">18° / 12°</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold flex items-center gap-1.5"><FaMapMarkerAlt className="text-blue-300"/> Mekdela</p>
              <p className="text-xs text-white/80 mt-1">Partly Cloudy</p>
              <p className="text-[11px] text-white/60 mt-1 flex items-center gap-1">Thu, Oct 16, 2026 &bull; 10:42 AM</p>
            </div>
          </div>
          <div
            role="group"
            aria-label={`${aboutHeroImages[activeHeroImage].name} ${aboutHeroImages[activeHeroImage].localName}`}
            className="absolute left-1/2 top-1/2 z-20 flex max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 justify-center"
          >
            <div
              key={aboutHeroImages[activeHeroImage].name}
              aria-current="true"
              className="about-hero-label about-hero-label-active rounded-xl border border-sky-200 bg-slate-950/90 px-3 py-2 text-white shadow-lg backdrop-blur-md sm:px-4 sm:py-2.5"
            >
              <span className="block text-center text-[28px] font-bold leading-tight">
                {aboutHeroImages[activeHeroImage].name}
              </span>
              <span lang="am" className="block text-center text-lg font-medium leading-tight text-sky-100">
                {aboutHeroImages[activeHeroImage].localName}
              </span>
            </div>
          </div>
        </section>

        {/* ================= ABOUT DETAILS ================= */}
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24">
          <div className="about-reveal flex items-center gap-4 mb-10">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl shadow-sm border border-blue-100">
              <FaGlobe />
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-950">About Mekdela Amba University</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-reveal">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Mekdela Amba University (MAU) is a public university located in Mekdela, South Wollo Zone, Amhara Region, Ethiopia. The university is committed to academic excellence, research, community service, and the sustainable development of the region. Through innovation, partnership, and local engagement, MAU plays a vital role in promoting tourism, culture, and natural heritage in South Wollo.
              </p>
              <button className="bg-[#00a8ff] text-white text-sm sm:text-base font-bold px-8 py-3.5 rounded-full flex items-center gap-3 hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
                Learn More About MAU <FaArrowRight />
              </button>
            </div>

            <div className="about-reveal relative rounded-2xl overflow-hidden shadow-2xl group h-[300px] sm:h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200" 
                alt="University Campus" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              <button className="absolute bottom-5 right-5 bg-blue-950/80 backdrop-blur-md text-white text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-blue-900 transition">
                <FaPlayCircle className="text-xl" /> Virtual Tour
              </button>
            </div>
          </div>
        </section>

        <section className="w-full bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-16">
            <div className="about-reveal mb-10">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Discover South Wollo</p>
              <h3 className="mt-2 text-3xl font-extrabold text-blue-950 sm:text-4xl">
                Landscapes, Heritage &amp; Nature
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Explore the mountain scenery, historical heritage, faith sites, and wildlife that make the region distinctive.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {aboutGalleryImages.map((image) => (
                <figure
                  key={image.title}
                  className={`about-reveal group overflow-hidden rounded-3xl shadow-xl ${
                    image.href ? "bg-white" : "relative bg-slate-200"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                      image.href ? "h-56" : "h-[320px] sm:h-[420px] lg:h-[480px]"
                    }`}
                    loading="lazy"
                  />
                  {image.href ? (
                    <figcaption className="p-5">
                      <h4 className="text-lg font-extrabold text-slate-900">{image.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{image.description}</p>
                      <a
                        href={image.href}
                        className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#075b3d] hover:text-[#06472f]"
                      >
                        View details <FaArrowRight aria-hidden="true" />
                      </a>
                    </figcaption>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                      <figcaption className="absolute bottom-0 left-0 p-6 text-xl font-extrabold text-white drop-shadow sm:p-8 sm:text-2xl">
                        {image.title}
                      </figcaption>
                    </>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MISSION, VISION, VALUES ================= */}
        <section className="bg-slate-50 w-full py-16 sm:py-24 border-y border-slate-200">
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="about-reveal flex items-center gap-4 mb-12">
              <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl shadow-sm">
                <FaBullseye />
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-950">Our Mission, Vision & Values</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="about-reveal bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="h-14 w-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-2xl mb-6">
                  <FaBullseye />
                </div>
                <h4 className="text-xl font-extrabold text-blue-950 mb-3">Our Mission</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To provide quality education, conduct relevant research, and serve the community through innovation and partnership.
                </p>
              </div>

              <div className="about-reveal bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="h-14 w-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-2xl mb-6">
                  <FaEye />
                </div>
                <h4 className="text-xl font-extrabold text-blue-950 mb-3">Our Vision</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To be a leading university in Africa, recognized for excellence in education, research and community service.
                </p>
              </div>

              <div className="about-reveal bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="h-14 w-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-2xl mb-6">
                  <FaCheckCircle />
                </div>
                <h4 className="text-xl font-extrabold text-blue-950 mb-3">Our Values</h4>
                <ul className="text-sm text-slate-600 space-y-3 mt-4">
                  <li className="flex items-center gap-3"><FaCheckCircle className="text-blue-400 text-lg" /> Excellence</li>
                  <li className="flex items-center gap-3"><FaCheckCircle className="text-blue-400 text-lg" /> Integrity</li>
                  <li className="flex items-center gap-3"><FaCheckCircle className="text-blue-400 text-lg" /> Inclusion</li>
                  <li className="flex items-center gap-3"><FaCheckCircle className="text-blue-400 text-lg" /> Sustainability</li>
                </ul>
              </div>

              <div className="about-reveal bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="h-14 w-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-2xl mb-6">
                  <FaLeaf />
                </div>
                <h4 className="text-xl font-extrabold text-blue-950 mb-3">Focus on Tourism</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Mekdela Amba University promotes tourism research and community engagement to support sustainable tourism development in South Wollo Zone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPLORE MEKDELA AMBA ================= */}
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-0 bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <div className="about-reveal relative h-[300px] lg:h-auto group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
                alt="Mekdela Amba Mountain" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-3 rounded-xl text-base font-bold flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#00a8ff]" /> Mekdela Amba
                <span className="text-xs font-normal opacity-80 border-l border-white/30 pl-3 ml-1 hidden sm:inline">The Pride of South Wollo</span>
              </div>
            </div>
            
            <div className="about-reveal p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-4">Explore Mekdela Amba</h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Mekdela Amba is not just a mountain, it's a symbol of history, faith and natural beauty. Explore the heritage, enjoy the breathtaking views, and be part of the story.
              </p>
              <button className="self-start bg-[#00a8ff] text-white text-base font-bold px-8 py-3.5 rounded-full flex items-center gap-3 hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
                Explore Mekdela Amba <FaArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* ================= APP PROMO BANNER ================= */}
        <section className="w-full bg-slate-900 py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/40 to-transparent" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00a8ff]/20 rounded-full blur-3xl" />
          
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between">
            
            <div className="about-reveal text-center lg:text-left mb-12 lg:mb-0 lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                Smart Trip Planner
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
                Mobile Integration
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Create personalized itineraries, get real-time updates, and access offline maps with the South Wollo Tourism App.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="bg-white text-slate-900 rounded-xl px-6 py-3 flex items-center justify-center gap-3 hover:bg-slate-100 transition shadow-lg">
                  <FaGooglePlay className="text-2xl text-blue-600" />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] uppercase opacity-70 font-bold">Get it on</p>
                    <p className="text-sm font-extrabold">Google Play</p>
                  </div>
                </button>
                <button className="bg-white text-slate-900 rounded-xl px-6 py-3 flex items-center justify-center gap-3 hover:bg-slate-100 transition shadow-lg">
                  <FaApple className="text-3xl text-slate-900" />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] uppercase opacity-70 font-bold">Download on the</p>
                    <p className="text-sm font-extrabold">App Store</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="about-reveal lg:w-1/2 flex justify-center lg:justify-end relative">
              <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rotate-[-4deg] hover:rotate-0 transition duration-500">
                
                <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-20">
                  <div className="w-28 h-5 bg-slate-800 rounded-b-xl" />
                </div>

                <div className="absolute inset-0 bg-white flex flex-col pt-5">
                  <div className="px-4 py-2 flex items-center justify-between z-10 bg-white">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 bg-blue-600 rounded flex items-center justify-center text-white text-[10px]">
                        <FaCompass />
                      </div>
                      <div>
                        <p className="text-[9px] font-extrabold text-blue-950 leading-none">South Wollo Tourism</p>
                      </div>
                    </div>
                    <div className="h-5 w-5 bg-slate-200 rounded-full" />
                  </div>

                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600" 
                      alt="App Hero" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <h3 className="text-white font-serif italic text-base leading-tight drop-shadow-md">Your Next Adventure<br/>Starts Here</h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 bg-white">
                    <ul className="space-y-5">
                      <li className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full border-[1.5px] border-emerald-500 flex items-center justify-center text-emerald-500 shrink-0">
                          <FaCheckCircle className="text-[10px]" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700">Multilingual Support</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full border-[1.5px] border-emerald-500 flex items-center justify-center text-emerald-500 shrink-0">
                          <FaCheckCircle className="text-[10px]" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700">Offline Saved Guides</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full border-[1.5px] border-emerald-500 flex items-center justify-center text-emerald-500 shrink-0">
                          <FaCheckCircle className="text-[10px]" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700">Smart Recommendations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border-t border-slate-200 py-3 px-6 flex justify-between items-center text-slate-400 text-lg">
                    <FaHome className="text-blue-600" />
                    <FaMap />
                    <FaHeart />
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}