import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: 'የጦሳ ተራራ ታሪካዊ ዳራ',
    paragraphs: [
      'የጦሳ ተራራ ታሪክ ከደቡብ ወሎ የተፈጥሮ አካባቢና ከደሴ ከተማ እድገት ጋር በጂኦግራፊያዊ መልኩ ይያያዛል። የተራራማው አካባቢ ለከተማዋ የመሬት ቅርጽ፣ የአየር ሁኔታና የዙሪያ ገጽታ መለያ ከሚሰጡ ተፈጥሯዊ አካላት አንዱ ነው።',
      'ሆኖም የጦሳ ተራራ በተለየ ሁኔታ መቼ እንደተሰየመ፣ በታሪክ ውስጥ የተካሄዱ ልዩ ክስተቶች ወይም የተራራው ስም አመጣጥ ላይ በቂ የተረጋገጠ ማስረጃ አልተገኘም። ስለዚህ የአካባቢው የቃል ታሪክና የሽማግሌዎች ምስክርነት ለተጨማሪ ጥናት ጠቃሚ ናቸው።',
    ],
  },
  {
    title: 'የጦሳ ተራራና የደሴ ከተማ ግንኙነት',
    paragraphs: [
      'ደሴ በደቡብ ወሎ ውስጥ ዋና የንግድ፣ የአስተዳደርና የባህል ማዕከል ናት። ከተማዋ በ19ኛው ክፍለ ዘመን መጨረሻ እየጎለበተች መጣች፣ በተለይም ከ1880ዎቹ ጀምሮ ከክልሉ ፖለቲካና አስተዳደር ጋር ያላት ግንኙነት ጠነከረ።',
      'ጦሳ ተራራ ከደሴ የተፈጥሮ ገጽታ ጋር የተያያዘ በመሆኑ የከተማዋን የቱሪዝም ሀብት ለማስፋፋት ያለው አቅም ሊጠቀስ ይችላል። ተራራውን ከደሴ ሙዚየም፣ ከታሪካዊ ቤተ ክርስቲያናትና ከአካባቢው ባህላዊ ገበያዎች ጋር በማገናኘት የአንድ ቀን የቱሪዝም መርሐ ግብር ማዘጋጀት ይቻላል።',
    ],
  },
  {
    title: 'የተፈጥሮ መልክዓ ምድር',
    paragraphs: [
      'ጦሳ ተራራ የደቡብ ወሎ ከፍተኛ መሬትና የተራራማ አካባቢ ክፍል ነው። እንደ አካባቢው ከፍታና የዝናብ ሁኔታ የሚለያዩ የእፅዋት ሽፋኖች፣ የሣር መሬቶችና የተራራ እይታዎች ሊገኙ ይችላሉ።',
      'የተራራው መልክዓ ምድር ለእግር ጉዞና ለተፈጥሮ ፎቶግራፍ ተስማሚ የሆኑ ቦታዎችን ሊያቀርብ ይችላል። ነገር ግን የተለዩ የጉዞ መንገዶች፣ የከፍታ መለኪያዎችና የደን ዝርያዎች ዝርዝር ከአካባቢው የቱሪዝም ቢሮ ወይም ከተስማሚ የመሬት ጥናት ምንጮች ማረጋገጥ ያስፈልጋል።',
    ],
  },
  {
    title: 'የእፅዋትና የዱር ሕይወት አስፈላጊነት',
    paragraphs: [
      'የተራራማ አካባቢዎች ለአገር በቀል እፅዋት፣ ለወፎችና ለሌሎች የዱር እንስሳት መኖሪያ ሊሆኑ ይችላሉ። የጦሳ አካባቢን በቱሪዝም ልማት ውስጥ ለማካተት የአካባቢውን የእፅዋትና የእንስሳት ሀብት በሳይንሳዊ ጥናት መመዝገብ ይገባል።',
      'የተፈጥሮ ሀብትን መጠበቅ የአፈር መሸርሸርን ለመቀነስ፣ የውሃ ምንጮችን ለመጠበቅና የአካባቢውን የተፈጥሮ ሚዛን ለማስጠበቅ ይረዳል። ጎብኚዎችም ቆሻሻ ባለመጣልና እፅዋትን ባለመጉዳት ለደን ጥበቃ ሊረዱ ይችላሉ።',
    ],
  },
  {
    title: 'የተራራ ጉዞና የጀብዱ ቱሪዝም',
    paragraphs: [
      'የጦሳ ተራራ ለእግር ጉዞ (Hiking)፣ ለተፈጥሮ ምልከታና ለፎቶግራፍ የሚመች መዳረሻ ሊሆን ይችላል። የጉዞ ተሳታፊዎች የደቡብ ወሎን ተራራማ ገጽታ እየተመለከቱ የአካባቢውን ተፈጥሮ ሊያውቁ ይችላሉ።',
      'የተራራ ጉዞ ለማድረግ በቂ ውሃ፣ ተስማሚ ጫማ፣ የአየር ሁኔታ መረጃና የአካባቢ መሪ መያዝ ይመከራል። የጉዞው ደረጃና የሚፈጀው ጊዜ በትክክለኛው መንገድ ላይ ስለሚመሠረት ከመነሳት በፊት ማረጋገጥ ያስፈልጋል።',
    ],
  },
  {
    title: 'የአካባቢው ባህልና ማኅበረሰብ',
    paragraphs: [
      'የጦሳ ተራራ ከደሴና ከደቡብ ወሎ ማኅበረሰቦች የዕለት ተዕለት ኑሮ ጋር በአካባቢያዊ መልኩ ይያያዛል። የአካባቢው ባህላዊ ምግቦች፣ ሙዚቃ፣ የእጅ ሥራዎችና የገበያ ባህል ለጎብኚዎች ተጨማሪ የጉብኝት ልምድ ሊሰጡ ይችላሉ።',
      'ለዘላቂ ቱሪዝም የአካባቢውን ማኅበረሰብ በመመሪያ አገልግሎት፣ በመስተንግዶ፣ በባህላዊ ምርቶች ሽያጭና በተፈጥሮ ጥበቃ ሥራዎች ማሳተፍ ጠቃሚ ነው። ይህ ቱሪዝም ለአካባቢው ኢኮኖሚ እንዲያበረክት ያግዛል።',
    ],
  },
  {
    title: 'የቱሪዝም ልማት እድሎች',
    paragraphs: [
      'የጦሳ ተራራ የተፈጥሮ ጉብኝትን ከደሴ ከተማ ታሪካዊ መስህቦች ጋር ለማገናኘት እድል አለው። በድህረ ገጽ ውስጥ የመዳረሻውን ታሪክ፣ የጉዞ መረጃ፣ ፎቶዎች፣ የመሪ አገልግሎትና የጉዞ ዋጋ በማቅረብ ለጎብኚዎች ግልጽ መረጃ ማቅረብ ይቻላል።',
      'በተጨማሪም የጉዞ መንገዶችን በካርታ ማሳየት፣ የአየር ሁኔታ መረጃ ማቅረብና የአካባቢ መሪዎችን የመገናኛ መረጃ ማካተት የጉብኝት አገልግሎቱን ሊያሻሽል ይችላል።',
    ],
  },
  {
    title: 'የተፈጥሮ ጥበቃና የዘላቂ ቱሪዝም አስፈላጊነት',
    paragraphs: [
      'የተራራ አካባቢዎች ለአፈር ጥበቃ፣ ለውሃ ሀብትና ለብዝሃ ሕይወት አስፈላጊ ናቸው። የቱሪዝም እንቅስቃሴ ሲያድግ የቆሻሻ አወጋገድ፣ የመንገድ ጥበቃና የእፅዋት መጠበቅ በትኩረት መያዝ ይገባል።',
      'ለዚህም የጎብኚዎች ቁጥርን በአካባቢው የመሸከም አቅም መሠረት ማስተዳደር፣ በአካባቢ መሪዎች ሥልጠና መስጠትና የተፈጥሮ ጥበቃ መልዕክት ለጎብኚዎች ማስተላለፍ ይቻላል።',
    ],
  },
];

export default function MountTossa() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="rounded-3xl bg-[#075b3d] px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-100">
            የደቡብ ወሎ ተፈጥሯዊ መስህብ
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">የጦሳ ተራራ ጉዞ</h1>
          <p className="mt-3 text-lg font-semibold text-emerald-50">Mount Tossa Expedition</p>
          <p className="mt-5 max-w-3xl leading-8 text-white/90">
            ጦሳ ተራራ (Mount Tossa) በደቡብ ወሎ ዞን፣ በደሴ ከተማ አካባቢ ከሚገኙ ተፈጥሯዊ መስህቦች አንዱ ነው። ተራራው የከፍተኛ ቦታዎች፣ የተራራማ መልክዓ ምድርና የደቡብ ወሎ የተፈጥሮ ውበት ክፍል ነው።
          </p>
          <p className="mt-3 max-w-3xl leading-8 text-white/90">
            ተራራው ለእግር ጉዞ፣ ለተፈጥሮ ጥናት፣ ለፎቶግራፍና ለውብ እይታ የሚስብ መዳረሻ ሊሆን ይችላል። በደሴ ከተማ አቅራቢያ መገኘቱም ከተማዋን የሚጎበኙ ቱሪስቶች ከከተማዊ ጉብኝት በተጨማሪ የተፈጥሮ ጉዞ እንዲያደርጉ ያስችላል።
          </p>
        </header>

        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">ማጠቃለያና የጉብኝት መረጃ</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              ጦሳ ተራራ በደቡብ ወሎ የተፈጥሮ ገጽታ ውስጥ የሚታይ አስፈላጊ መዳረሻ ሲሆን፣ ለእግር ጉዞ፣ ለተፈጥሮ ጥናትና ለደሴ ከተማ የቱሪዝም ልማት አቅም አለው። በተጨማሪም ተራራውን ከአካባቢው ታሪካዊ ቅርሶችና ባህላዊ መስህቦች ጋር በማገናኘት ለጎብኚዎች የተሟላ የጉዞ ልምድ ማቅረብ ይቻላል።
            </p>
            <dl className="mt-6 grid gap-4 rounded-xl bg-slate-50 p-5 text-sm sm:grid-cols-2">
              <div><dt className="font-semibold text-slate-500">የመዳረሻ ስም</dt><dd className="mt-1 font-bold text-slate-900">Mount Tossa Expedition</dd></div>
              <div><dt className="font-semibold text-slate-500">የአማርኛ ስም</dt><dd className="mt-1 font-bold text-slate-900">የጦሳ ተራራ ጉዞ</dd></div>
              <div><dt className="font-semibold text-slate-500">አካባቢ</dt><dd className="mt-1 font-bold text-slate-900">ደሴ፣ ደቡብ ወሎ፣ አማራ ክልል</dd></div>
              <div><dt className="font-semibold text-slate-500">የጉዞ ዓይነት</dt><dd className="mt-1 font-bold text-slate-900">የተፈጥሮ ጉብኝት፣ የእግር ጉዞ፣ የፎቶግራፍ ጉዞ</dd></div>
              <div className="sm:col-span-2"><dt className="font-semibold text-slate-500">የጉዞ ጊዜ</dt><dd className="mt-1 font-bold text-slate-900">በተመረጠው መንገድና በአካባቢ መሪ ምክር መሠረት መወሰን አለበት።</dd></div>
            </dl>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mount+Tossa+Dessie+Ethiopia"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[#075b3d] px-5 py-3 text-sm font-bold text-[#075b3d] transition hover:bg-emerald-50"
              >
                የጦሳ ተራራን በGoogle Maps ይመልከቱ
              </a>
              <a
                href="mailto:info@wollotourism.gov.et?subject=Booking%20inquiry%3A%20Mount%20Tossa%20Expedition"
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
