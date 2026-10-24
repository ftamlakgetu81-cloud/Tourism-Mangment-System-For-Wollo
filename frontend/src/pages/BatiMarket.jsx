import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import batiMarketImage28 from '../assets/image28.jpg';
import batiMarketImage29 from '../assets/image29.jpg';
import batiMarketImage30 from '../assets/image30.jpg';
import batiMarketImage31 from '../assets/image31.jpg';

const sections = [
  {
    title: 'መግቢያ',
    paragraphs: [
      'የባቲ ገበያ በኢትዮጵያ አማራ ክልል፣ በደቡብ ወሎ ዞን በሚገኘው የባቲ ከተማ ውስጥ ከሚታወቁ ባህላዊ የንግድ ማዕከላት አንዱ ነው። ገበያው የአካባቢውን ኢኮኖሚ፣ የማኅበረሰብ ግንኙነትና የባህል ልውውጥ በማጠናከር ይታወቃል።',
      'ባህላዊ ገበያዎች የሸቀጦች ግዢና ሽያጭ ብቻ ሳይሆኑ ሰዎች የሚገናኙባቸው፣ የሚወያዩባቸው፣ ዜና የሚለዋወጡባቸውና ከሌሎች ማኅበረሰቦች ጋር ግንኙነት የሚፈጥሩባቸው ማዕከላትም ናቸው።',
      'የባቲ ገበያ ታሪክ ከከተማዋና ከአካባቢው የኑሮ ዘይቤ ጋር የተያያዘ ሲሆን፣ ምርቶችን ለማሰራጨት፣ ለነጋዴዎች የገቢ ዕድል ለመፍጠርና በሕዝቡ መካከል ግንኙነትን ለማጠናከር አስተዋጽኦ ያደርጋል።',
    ],
  },
  {
    title: 'የባቲ ገበያ አመጣጥና ታሪካዊ እድገት',
    paragraphs: [
      'የባቲ ገበያን አመጣጥ ለመረዳት የአካባቢውን ባህላዊ የንግድ ልምድና የሕዝቡን የኑሮ ዘይቤ መመልከት ያስፈልጋል። በብዙ የኢትዮጵያ አካባቢዎች ሰዎች የሚያመርቱትን ምርት ከሚያስፈልጋቸው ዕቃዎች ጋር በመለዋወጥ ይጠቀሙ ነበር። በኋላም የገንዘብ አጠቃቀምና የንግድ ልምዶች እየተስፋፉ ሲሄዱ ሳምንታዊ ገበያዎች የአካባቢ ኢኮኖሚ አስፈላጊ ክፍል ሆኑ።',
      'ባቲ በባህላዊ ሰኞ ገበያው ይታወቃል። ከከተማዋና ከአካባቢው የገጠር ማኅበረሰቦች የሚመጡ ሰዎች ምርቶቻቸውን ለመሸጥና የሚያስፈልጋቸውን ለመግዛት በገበያው ይሰበሰባሉ።',
      'የንግድ ፍላጎት፣ የሕዝብ ቁጥር፣ የመጓጓዣ እድገትና የከተማዋ መስፋፋት የገበያውን እንቅስቃሴ ሊያሳድጉ ይችላሉ። የተመሠረተበት ትክክለኛ ዓመትና የእድገቱ ደረጃዎች ግን በታሪካዊ ምንጮች ማረጋገጥ ይገባል።',
    ],
  },
  {
    title: 'የሰኞ ገበያ ታሪካዊ ሚና',
    paragraphs: [
      'የባቲ ገበያ በተለይ በሰኞ በሚካሄደው ባህላዊ ገበያ ይታወቃል። ይህ የገበያ ቀን ለንግድ እንቅስቃሴ ብቻ ሳይሆን ለማኅበራዊ ግንኙነትም አስፈላጊ ጊዜ ነው።',
      'በሰኞ ገበያ ወቅት ከባቲ ከተማና ከአካባቢው የገጠር ስፍራዎች የሚመጡ ነጋዴዎችና ገዢዎች ይሰበሰባሉ። የግብርና ምርቶች፣ የእንስሳት ምርቶች፣ የቤት ውስጥ ዕቃዎችና ሌሎች ሸቀጦች ይሸጣሉ።',
      'ነጋዴዎች ከገዢዎች ጋር ዋጋ ይደራደራሉ፣ ምርቶችን ይለዋወጣሉ፣ አዳዲስ የንግድ ግንኙነቶችንም ይፈጥራሉ። ይህ ሳምንታዊ ልምድ ከአንድ ትውልድ ወደ ሌላ የሚተላለፍ የአካባቢው የንግድ ባህል ክፍል ነው።',
    ],
  },
  {
    title: 'የባቲ ገበያና የንግድ ምርቶች',
    paragraphs: [
      'የገበያው ይዘት ከአካባቢው የግብርና ምርት፣ ከእንስሳት እርባታና ከዕለታዊ የሸማቾች ፍላጎት ጋር ይያያዛል። የእህል ዓይነቶች፣ ጥራጥሬዎች፣ ቅመማ ቅመሞች፣ የቤት ዕቃዎች፣ አልባሳትና ሌሎች የዕለት ተዕለት ፍጆታ ምርቶች ሊገኙ ይችላሉ።',
      'የእንስሳት ንግድም ከአካባቢው የኑሮ ዘይቤና ከእርባታ ሥራ ጋር የተያያዘ የንግድ ክፍል ነው። በባህላዊ ገበያ ውስጥ አምራቾች ምርቶቻቸውን በቀጥታ ለገዢዎች ለማቅረብ ዕድል ያገኛሉ።',
      'የሸቀጦች ልውውጥ የዋጋ ድርድርን፣ የደንበኛና የነጋዴ ግንኙነትን እንዲሁም የምርት ስርጭትን ያካትታል። ስለዚህ ገበያው ከአካባቢው የኢኮኖሚ ሕይወት ጋር በቅርብ የተያያዘ ተቋም ነው።',
    ],
  },
  {
    title: 'የባቲ ገበያና የሕዝቦች ግንኙነት',
    paragraphs: [
      'የባቲ ገበያ የተለያዩ ማኅበረሰቦች የሚገናኙበት ማኅበራዊ ማዕከል ነው። ከተለያዩ መንደሮችና አካባቢዎች የሚመጡ ሰዎች ስለ ምርት፣ ዋጋ፣ ሥራና ሌሎች የማኅበረሰብ ጉዳዮች ይወያያሉ።',
      'ተደጋጋሚ የንግድ ግንኙነት መተዋወቅንና መተማመንን ያጠናክራል። ነጋዴዎች የንግድ አጋሮች ያፈራሉ፤ ገዢዎችም የሚያምኑባቸውን ነጋዴዎች ያውቃሉ።',
      'በገበያው የሚገናኙ ሰዎች የተለያዩ የአነጋገር ልምዶችን፣ የምግብ ባህሎችን፣ የአለባበስ ልማዶችንና የኑሮ ዘይቤዎችን ሊያውቁ ይችላሉ። በዚህ መልኩ ገበያው የንግድና የባህል ልውውጥ ሚናዎችን በአንድ ላይ ያከናውናል።',
    ],
  },
  {
    title: 'የባቲ ገበያና የባህል ቅርስ',
    paragraphs: [
      'የባቲ ገበያ ባህላዊ ቅርስ ከንግድ ሥርዓቱ፣ ከሰዎች የመገናኛ ልምድና ከአካባቢው የኑሮ ዘይቤ ጋር ይያያዛል። ባህላዊ ገበያዎች የሥራ ልምድን፣ የሸቀጦች ምርጫንና የንግድ ልማዶችን የሚያሳዩ ሕያው ቅርሶች ናቸው።',
      'የምርቶች ምርጫ፣ የዋጋ ድርድር፣ የነጋዴዎች ግንኙነትና የገበያ ቀን ሥርዓት ከትውልድ ወደ ትውልድ የሚተላለፉ የንግድ ልምዶች ክፍሎች ናቸው።',
      'የገበያውን የቀድሞ ታሪክ ከአረጋውያን ቃለ መጠይቅ፣ ከአካባቢው ሰነዶችና ከታሪካዊ ምንጮች መሰብሰብ ለቅርስ ጥበቃ ይጠቅማል።',
    ],
  },
  {
    title: 'የባቲ ገበያ በዘመናዊ ለውጥ ውስጥ',
    paragraphs: [
      'የንግድ ሥርዓቶች በመጓጓዣ፣ በቴክኖሎጂ፣ በከተማ እድገትና በሸማቾች ፍላጎት ምክንያት እየተለወጡ ናቸው። የመጓጓዣ አገልግሎት መሻሻልና የንግድ መረጃ በቀላሉ መገኘት የገበያውን እንቅስቃሴ ሊያሳድጉ ይችላሉ።',
      'በተመሳሳይ ጊዜ የዋጋ ለውጥ፣ የመጓጓዣ ወጪ፣ የገበያ መሠረተ ልማትና የምርት አቅርቦት ችግሮች ነጋዴዎችንና ገዢዎችን ሊነኩ ይችላሉ። የገበያው እድገት የቀድሞ ልምዶችን በመጠበቅ ከዘመናዊ ፍላጎቶች ጋር ማስማማትን ይጠይቃል።',
      'የገበያ ቦታዎችን በንጽህና መጠበቅ፣ ለነጋዴዎችና ለገዢዎች ምቹ ሁኔታ መፍጠርና ባህላዊ የንግድ ልምዶችን ለወጣቱ ትውልድ ማስተላለፍ አስፈላጊ ናቸው።',
    ],
  },
  {
    title: 'የባቲ ገበያ ታሪክ ማጠቃለያ',
    paragraphs: [
      'የባቲ ገበያ በደቡብ ወሎ የንግድና የማኅበራዊ ግንኙነት ማዕከል ሆኖ የሚታወቅ ባህላዊ ገበያ ነው። በሰኞ ገበያው የሚታወቀው ባቲ ከተማ የአካባቢውን ምርትና የንግድ ልምድ ከተለያዩ ማኅበረሰቦች ጋር የሚያገናኝ ስፍራ ነው።',
      'የገበያው አስፈላጊነት በኢኮኖሚ ሚናው፣ በማኅበራዊ ግንኙነት ሚናውና በባህላዊ ልምዶችን በማስቀጠል የሚኖረው አስተዋጽኦ ይገለጻል።',
      'የተመሠረተበትን ዘመን፣ የቀድሞ የንግድ ምርቶችንና በጊዜ ሂደት የተከሰቱ ለውጦችን በትክክል ለመመዝገብ ከአካባቢው አረጋውያን፣ ከከተማው አስተዳደርና ከታሪክ ምንጮች ተጨማሪ ምርምር ማድረግ ያስፈልጋል።',
    ],
  },
];

const marketImages = [
  { src: batiMarketImage28, alt: 'የባቲ ገበያ አጠቃላይ እይታ' },
  { src: batiMarketImage29, alt: 'በገበያው ውስጥ የሚቀርቡ የአካባቢ ምርቶች' },
  { src: batiMarketImage30, alt: 'የእንስሳት ገበያና የአካባቢ ንግድ' },
  { src: batiMarketImage31, alt: 'በባህላዊ ገበያ የተሰበሰቡ ሰዎች' },
];

export default function BatiMarket() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="rounded-3xl bg-[#075b3d] px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-100">
            የባህልና የንግድ ቅርስ | ባቲ፣ ደቡብ ወሎ
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">የባቲ ገበያ ታሪክ</h1>
          <p className="mt-3 text-lg font-semibold text-emerald-50">Bati Market History &amp; Local Culture Tour</p>
          <p className="mt-5 max-w-3xl leading-8 text-white/90">
            ባቲ በባህላዊ ሰኞ ገበያው፣ በአካባቢ ምርቶችና በሕዝቦች መካከል በሚፈጥረው የንግድና የባህል ልውውጥ ይታወቃል። ይህ ገጽ ስለ ገበያው ታሪካዊ ሚና፣ ማኅበራዊ ግንኙነትና ባህላዊ ቅርስ አጠቃላይ እይታ ያቀርባል።
          </p>
          <p className="mt-3 max-w-3xl leading-8 text-white/90">
            የተመሠረተበት ትክክለኛ ዓመትና የተለዩ ታሪካዊ ክስተቶች በተጨማሪ ምንጮች መረጋገጥ ስለሚገባቸው እዚህ እንደተረጋገጡ እውነታዎች አልቀረቡም።
          </p>
        </header>

        <section aria-label="የባቲ ገበያ ፎቶዎች" className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {marketImages.map((image, index) => (
            <figure key={image.src} className={`overflow-hidden rounded-2xl bg-white shadow-sm ${index === 0 ? 'sm:col-span-2' : ''}`}>
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover ${index === 0 ? 'h-64 sm:h-80' : 'h-56'}`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <figcaption className="px-4 py-3 text-sm font-medium text-slate-600">{image.alt}</figcaption>
            </figure>
          ))}
        </section>

        <div className="mt-8 space-y-6">
          {sections.map((section, index) => (
            <section key={section.title} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">
                ገጽ {index + 1}፡ {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">ለጎብኚዎች መረጃ</h2>
          <p className="mt-4 leading-8 text-slate-700">
            የገበያ ቀንና የአገልግሎት ሁኔታ ከመጓዝዎ በፊት በአካባቢው ያረጋግጡ። ሰዎችን ወይም የሸቀጦችን ፎቶ ከማንሳት በፊት ፈቃድ ይጠይቁ፣ የገበያ ንግድን በአክብሮት ይመልከቱ፣ እንዲሁም ከአካባቢው ነጋዴዎችና አገልግሎት ሰጪዎች ጋር በአክብሮት ይገናኙ።
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bati%2C+South+Wollo%2C+Ethiopia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-[#075b3d] px-5 py-3 text-sm font-bold text-[#075b3d] transition hover:bg-emerald-50"
            >
              ባቲን በGoogle Maps ይመልከቱ
            </a>
            <a
              href="mailto:info@wollotourism.gov.et?subject=Booking%20inquiry%3A%20Bati%20Market%20%26%20Local%20Culture%20Tour"
              className="inline-flex items-center justify-center rounded-xl bg-[#075b3d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#06472f]"
            >
              ለጉዞው ለመጠየቅ ያግኙን
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}