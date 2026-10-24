import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: 'የቶሳ ሱቻ ጂኦግራፊያዊ አካባቢ',
    paragraphs: [
      'ቶሳ ሱቻ በደቡባዊ ኢትዮጵያ፣ በዋናው የኢትዮጵያ ስምጥ ሸለቆ ክልል የሚገኝ የተፈጥሮና የጂኦሎጂ መዳረሻ ነው። ከቻሞና ከአባያ ሐይቆች መካከል የሚገኝ ሲሆን ከአርባ ምንጭ በኩል መድረስ ይቻላል።',
      'በተጠቀሱ የጂኦግራፊ መረጃዎች መሠረት ቦታው በ5°55′59″ ሰሜን እና 37°34′01″ ምሥራቅ አቅጣጫ፣ ከባሕር ጠለል 1,650 ሜትር ከፍታ ላይ ይገኛል። የቦታ መረጃና የመዳረሻ ሁኔታ ከጉዞ በፊት መረጋገጥ አለበት።',
    ],
  },
  {
    title: 'የተፈጥሮ ታሪክና ጂኦሎጂ',
    paragraphs: [
      'ቶሳ ሱቻ የባሳልት ወጥመድ ሰልፍና ከስምጥ ሸለቆው የእሳተ ገሞራ አመጣጥ ጋር የተያያዘ መልክዓ ምድር ነው። ጂኦሎጂያዊ ምንጮች አካባቢውን ከእሳተ ገሞራ ቅርጾችና ከስምጥ ሸለቆው እድገት ጋር ያገናኙታል።',
      'በቻሞ ሐይቅ ሰሜናዊ አካባቢ የእሳተ ገሞራ ኮኖችና ሌሎች የመሬት ቅርጾች ይጠቀሳሉ። በጂኦሎጂ ጉዞ ላይ እነዚህን ቅርጾች ከባለሙያ መሪ ጋር ማየት ይቻላል።',
    ],
  },
  {
    title: 'ከቻሞና ከአባያ ሐይቆች ጋር ያለው ግንኙነት',
    paragraphs: [
      'ቶሳ ሱቻ በቻሞና በአባያ ሐይቆች መካከል የሚገኝ የባሳልት ሰልፍ መሆኑ ይገለጻል። በሁለቱ ሐይቆች መካከል ያለው የውሃ ግንኙነት ከውሃ መጠንና ከወቅታዊ ሁኔታ ጋር ሊለያይ ይችላል።',
      'ቦታው በአካባቢው “የእግዚአብሔር ድልድይ” ወይም “Bridge of God” ተብሎ መጠራቱ በቱሪዝም ምንጮች ይጠቀሳል።',
    ],
  },
  {
    title: 'ከኒቺሳር ብሔራዊ ፓርክ ጋር ያለው ግንኙነት',
    paragraphs: [
      'ቶሳ ሱቻ ከኒቺሳር ብሔራዊ ፓርክና ከስምጥ ሸለቆው የተጠበቁ የተፈጥሮ አካባቢዎች ጋር ይያያዛል። ፓርኩ የሣር ሜዳዎችን፣ የደን አካባቢዎችንና የረግረጋማ መሬቶችን ያካትታል።',
      'በፓርኩ ውስጥ ለመጓዝ፣ የዱር እንስሳትን ለመመልከትና የተፈጥሮ ጥናት ለማድረግ የፓርኩን ፈቃድ፣ የመግቢያ ሁኔታና የአካባቢ መሪ መረጃ ከቅድሚያ ማረጋገጥ ያስፈልጋል።',
    ],
  },
  {
    title: 'የጉዞ እንቅስቃሴዎች',
    paragraphs: [
      'የተራራ መውጣትና የመልክዓ ምድር መመልከት።',
      'የባሳልት ሰልፍን፣ የእሳተ ገሞራ ኮኖችንና የስምጥ ሸለቆ ቅርጾችን ማጥናት።',
      'በፓርኩ ደንብና በፈቃድ መሠረት የዱር እንስሳትን መመልከት።',
      'ከአካባቢው ማኅበረሰቦች ጋር በአክብሮት የባህል ጉብኝት ማድረግ።',
      'ፎቶግራፍና የተፈጥሮ ጥበቃ ተሞክሮ።',
    ],
  },
  {
    title: 'የጉዞ አወቃቀር',
    paragraphs: [
      'ከጉዞ በፊት የቶሳ ሱቻን አካባቢ፣ ጂኦሎጂያዊ ታሪክና የመዳረሻ ሁኔታ ማወቅ።',
      'በአካባቢ መሪ እየተመራ የባሳልት ሰልፍንና የእሳተ ገሞራ ቅርጾችን መመልከት።',
      'ከቻሞና ከአባያ ሐይቆች የመልክዓ ምድር እይታን መደሰት።',
      'የፓርኩን ደንቦችና ፈቃድ በመከተል የዱር እንስሳትን መመልከት።',
      'ከአካባቢው ማኅበረሰብ ጋር በአክብሮት መገናኘትና ጉዞውን በተፈጥሮ ጥበቃ ማጠናቀቅ።',
    ],
  },
  {
    title: 'የአየር ሁኔታና የጉዞ ወቅት',
    paragraphs: [
      'የቶሳ ሱቻ አካባቢ የሳቫና የአየር ሁኔታ እንዳለው የተጠቀሱ የአየር መረጃዎች ይገልጻሉ። በአንዳንድ ምንጮች የአማካይ ሙቀት 22°C፣ ዓመታዊ የዝናብ መጠን 1,106 ሚሊሜትር ተብሎ ተጠቅሷል።',
      'እነዚህ ከምንጮች የተጠቀሱ አጠቃላይ መረጃዎች ናቸው፤ የአሁኑን የአየር ሁኔታ አያመለክቱም። ከጉዞ በፊት የቅርብ ጊዜ የአየር መረጃን ያረጋግጡና ጉዞውን ከሁኔታው ጋር ያስማሙ።',
    ],
  },
  {
    title: 'ደህንነትና ዝግጅት',
    paragraphs: [
      'ተሳታፊዎች ጠንካራ የእግር ጫማ፣ ተስማሚ ልብስ፣ በቂ የመጠጥ ውሃ፣ ምግብ፣ የፀሐይ መከላከያ፣ የተሞላ ስልክና መሠረታዊ የመጀመሪያ እርዳታ ዕቃዎችን ይዘው መሄድ ይገባቸዋል።',
      'የመንገድ፣ የአየር ሁኔታና የፓርክ ደህንነት መረጃን ከአካባቢው መሪዎች ጋር ያረጋግጡ። ከቡድንዎ ጋር ይቆዩ፣ የመሪዎን መመሪያ ይከተሉና ያልተረጋገጡ ጠርዞችን አይቅረቡ።',
    ],
  },
  {
    title: 'ኃላፊነት የሚሰማው ጉዞ መርህ',
    paragraphs: [
      'ጎብኚዎች የተፈጥሮ አካባቢውን ማክበር፣ የዱር እንስሳትን አለማስቸገር፣ ቆሻሻን ይዘው መውጣትና ከሰዎች ፎቶግራፍ በፊት ፈቃድ መጠየቅ አለባቸው።',
      'የተጠበቀ አካባቢ ስለሆነ ወደ ፓርኩ የሚደረግ ጉዞ በፈቃድ፣ በፓርኩ ደንቦችና በአካባቢ መሪዎች መመሪያ መሠረት መካሄድ አለበት። የባህል መረጃዎችን ከተረጋገጡ ጂኦሎጂያዊና ታሪካዊ እውነታዎች በተለየ መልኩ ያቅርቡ።',
    ],
  },
  {
    title: 'ማጠቃለያ',
    paragraphs: [
      'ቶሳ ሱቻ በደቡባዊ ኢትዮጵያ የሚገኝ የተፈጥሮና የጂኦሎጂ መዳረሻ ነው። የባሳልት ሰልፉ፣ የእሳተ ገሞራ ቅርጾቹና በቻሞና በአባያ ሐይቆች መካከል ያለው አቀማመጥ ልዩ ያደርጉታል።',
      'በተገቢው መሪ የተደረገ ጉዞ ጎብኚዎች የአካባቢውን መልክዓ ምድር፣ ጂኦሎጂና ማኅበረሰብ እንዲያውቁ ያስችላል።',
    ],
  },
];

export default function TosaSucha() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="rounded-3xl bg-[#075b3d] px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-100">
            የተፈጥሮና የጂኦሎጂ መዳረሻ | ደቡባዊ ኢትዮጵያ
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">የቶሳ ሱቻ ተራራ ጉዞ</h1>
          <p className="mt-3 text-lg font-semibold text-emerald-50">Tosa Sucha Mountain Expedition</p>
          <p className="mt-5 max-w-3xl leading-8 text-white/90">
            ቶሳ ሱቻ (Tosa Sucha) በዋናው የኢትዮጵያ ስምጥ ሸለቆ ክልል የሚገኝ የተፈጥሮና የጂኦሎጂ መዳረሻ ነው። የቻሞና የአባያ ሐይቆችን የሚለየው የባሳልት ሰልፍ በአካባቢው “የእግዚአብሔር ድልድይ” (Bridge of God) ተብሎ ይጠራል።
          </p>
          <p className="mt-3 max-w-3xl leading-8 text-white/90">
            ጉዞው የተፈጥሮ፣ የጂኦሎጂ፣ የዱር እንስሳትና የአካባቢ ባህል ተሞክሮዎችን ሊያጣምር ይችላል። የፓርክ ፈቃድና የአካባቢ መሪ መረጃ ከጉዞ በፊት ያረጋግጡ።
          </p>
        </header>

        <div className="mt-8 space-y-6">
          {sections.map((section, index) => (
            <section key={section.title} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">
                {index + 1}. {section.title}
              </h2>
              {index === 4 || index === 5 ? (
                <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-8 text-slate-700 marker:text-[#075b3d]">
                  {section.paragraphs.map((paragraph) => <li key={paragraph}>{paragraph}</li>)}
                </ul>
              ) : (
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              )}
            </section>
          ))}

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">የመረጃ ምንጮች</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700 marker:text-[#075b3d]">
              <li><a className="font-semibold text-[#075b3d] underline" href="https://volcano.si.edu/" target="_blank" rel="noreferrer">Smithsonian Global Volcanism Program</a></li>
              <li><a className="font-semibold text-[#075b3d] underline" href="https://volcanodb.com/113/Tosa-Sucha" target="_blank" rel="noreferrer">VolcanoDB — Tosa Sucha</a></li>
              <li><a className="font-semibold text-[#075b3d] underline" href="https://aroundus.com/p/11456627-nechisar-national-park" target="_blank" rel="noreferrer">Around Us — Nechisar National Park</a></li>
              <li><a className="font-semibold text-[#075b3d] underline" href="https://ethiopiaodyssey.com/geological-tour/" target="_blank" rel="noreferrer">Ethiopia Odyssey — Geological Tour</a></li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tosa+Sucha+Ethiopia"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[#075b3d] px-5 py-3 text-sm font-bold text-[#075b3d] transition hover:bg-emerald-50"
              >
                ቶሳ ሱቻን በGoogle Maps ይመልከቱ
              </a>
              <a
                href="mailto:info@wollotourism.gov.et?subject=Booking%20inquiry%3A%20Tosa%20Sucha%20Expedition"
                className="inline-flex items-center justify-center rounded-xl bg-[#075b3d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#06472f]"
              >
                ለጉዞው ለመጠየቅ ያግኙን
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
