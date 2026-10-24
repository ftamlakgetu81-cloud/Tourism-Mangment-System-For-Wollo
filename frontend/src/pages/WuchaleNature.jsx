import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: 'መግቢያ',
    paragraphs: [
      'ውጫሌ በኢትዮጵያ ታሪክ ውስጥ በተለይ ከውጫሌ ውል ጋር በተያያዘ የሚታወቅ ስፍራ ነው። የአካባቢው ታሪክ፣ የገጠር ሕይወት፣ የእርሻ ልምዶችና የተፈጥሮ አካባቢ ለታሪክና ለቱሪዝም ጥናት የሚያገለግሉ ጉዳዮች ናቸው።',
      'የተፈጥሮ ቱሪዝም ተፈጥሯዊ ውበትን፣ ተራራዎችን፣ ሸለቆዎችን፣ ወንዞችን፣ ደኖችንና የአካባቢውን የእንስሳትና የዕፅዋት ሀብት ለመመልከት የሚደረግ ጉዞ ነው። ይህም ከተፈጥሮ ጋር በተያያዘ እውቀት ለማግኘትና የአካባቢን ሀብት ለመጠበቅ ይረዳል።',
      'የውጫሌን አቅም ለመረዳት የመሬት አቀማመጥ፣ የዕፅዋት ሽፋን፣ የውሃ ሀብት፣ የገጠር ኑሮና ታሪካዊ ስፍራዎች በትክክል መመርመር ያስፈልጋል።',
    ],
  },
  {
    title: 'የውጫሌ ታሪካዊ አመጣጥ',
    paragraphs: [
      'ውጫሌ በ1889 እ.ኤ.አ. በአፄ ምኒልክ ሁለተኛና በጣሊያን መንግሥት መካከል በተፈረመው የውጫሌ ውል ይታወቃል። ይህ ውል በኢትዮጵያና በጣሊያን መካከል የፖለቲካና የዲፕሎማሲ ግንኙነት ታሪክ ውስጥ አስፈላጊ ክስተት ነበር።',
      'በአማርኛና በጣሊያንኛ ጽሑፎች መካከል በአንድ አንቀጽ ትርጉም ላይ የተፈጠረ ልዩነት የሁለቱን አገሮች ግንኙነት ውጥረት ውስጥ አስገባ። ይህም በኋላ ከተከሰቱ የፖለቲካና የወታደራዊ ግጭቶች ጋር ከተያያዙ ጉዳዮች አንዱ ሆነ።',
      'የውጫሌ ውል ታሪክ ስፍራውን ከተፈጥሮ ጉዞ በተጨማሪ ለታሪካዊ ቱሪዝም አስፈላጊ ያደርገዋል። የታሪኩን ትርጓሜና የተፈረመበትን ትክክለኛ ቦታ ከታሪካዊ ምንጮች ማረጋገጥ ይገባል።',
    ],
  },
  {
    title: 'የውጫሌ የተፈጥሮ አካባቢ',
    paragraphs: [
      'የተፈጥሮ ቱሪዝም እድገት ከአካባቢው የመሬት አቀማመጥና ከተፈጥሮ ሀብቶች ጋር የተያያዘ ነው። የአካባቢውን ሸለቆዎች፣ ኮረብታዎች፣ የእርሻ መሬቶችና የውሃ ሀብቶች ማጥናት ለቱሪዝም ያላቸውን አቅም ለመረዳት ይረዳል።',
      'የገጠር አካባቢዎች ተፈጥሯዊ ገጽታ ለጎብኚዎች ልዩ ተሞክሮ ሊሰጥ ይችላል። የእርሻ መሬቶች፣ የዕፅዋት ዓይነቶች፣ የወፎች መኖሪያዎችና የተፈጥሮ እይታዎች ለፎቶግራፍ፣ ለእግር ጉዞና ለተፈጥሮ ጥናት ይጠቅማሉ።',
      'ተፈጥሯዊ ሀብቶችን በትክክል ለመግለጽ የጂኦግራፊ መረጃ፣ የውሃ ምንጮች፣ የዕፅዋት ሽፋንና የዱር እንስሳት መኖር በመስክ ምርምር ማረጋገጥ ያስፈልጋል።',
    ],
  },
  {
    title: 'የተፈጥሮ ሀብትና ብዝሃ ሕይወት',
    paragraphs: [
      'ብዝሃ ሕይወት በአንድ አካባቢ የሚገኙ የተለያዩ የዕፅዋት፣ የእንስሳትና የሌሎች ሕያዋን ፍጥረታት ዓይነቶችን ያካትታል። የተፈጥሮ ቱሪዝም በተፈጥሮ ላይ የሚደረግ ጥናትንና ጥበቃን ያበረታታል።',
      'በገጠር አካባቢዎች የሚገኙ ዛፎች፣ ቁጥቋጦዎች፣ የመሬት ሽፋን ዕፅዋትና የእርሻ ሰብሎች ለሥነ ምህዳር ሚዛን አስፈላጊ ናቸው፤ ለአፈር ጥበቃ፣ ለውሃ ዑደትና ለሕያዋን መኖሪያነት ይረዳሉ።',
      'ጎብኚዎች ዕፅዋትን ከመጉዳት፣ ቆሻሻ ከመጣል፣ የዱር እንስሳትን ከማስጨነቅና መኖሪያዎችን ከማበላሸት መቆጠብ አለባቸው። ስለ አካባቢው ዝርያዎች የተለየ መረጃ በምርምር መረጋገጥ ይገባል።',
    ],
  },
  {
    title: 'የውጫሌ ገጠር ሕይወትና ባህላዊ አካባቢ',
    paragraphs: [
      'የገጠር ሕይወት ከመሬት፣ ከውሃ፣ ከእንስሳትና ከዕለታዊ የሥራ ልምዶች ጋር የተያያዘ ነው። በብዙ የኢትዮጵያ ገጠር ማኅበረሰቦች ግብርናና እንስሳት እርባታ ዋና የኑሮ መሠረቶች ናቸው።',
      'የተፈጥሮ ጉዞ ጎብኚዎች የገጠር ኑሮን እንዲረዱ ዕድል ሊፈጥር ይችላል። የእርሻ ሥራዎችን መመልከት፣ ባህላዊ የምግብ ዝግጅትን ማወቅና ከአካባቢው ነዋሪዎች የቀድሞ ልምዶችን መስማት የጉዞው ክፍሎች ሊሆኑ ይችላሉ።',
      'የአካባቢው ባህላዊ እውቀት በተፈጥሮ ሀብት አጠቃቀም ውስጥ ይታያል። የአፈርን ባህሪ፣ የዝናብ ወቅትንና የሰብል ምርጫን በልምድ መማር ለባህላዊ ጥናት ጠቃሚ ነው።',
    ],
  },
  {
    title: 'የውጫሌ ተፈጥሮ ቱሪዝም አቅም',
    paragraphs: [
      'የተፈጥሮ ቱሪዝም የአካባቢውን ተፈጥሯዊ ሀብት ለጎብኚዎች በማስተዋወቅ የአካባቢ ኢኮኖሚን ለማጠናከር ይረዳል። ውጫሌን ለማስተዋወቅ የተፈጥሮ መስህቦችን በትክክል መለየትና ማስመዝገብ ያስፈልጋል።',
      'ከተፈጥሮ ጉዞ ጋር ሊያያዙ የሚችሉ እንቅስቃሴዎች የእግር ጉዞ፣ የወፎች ምልከታ፣ የተፈጥሮ ፎቶግራፍ፣ የገጠር ጉብኝትና የአካባቢውን ሥነ ምህዳር ማጥናት ያካትታሉ። እነዚህ በአካባቢው ሁኔታና በጎብኚዎች ደህንነት መሠረት መዘጋጀት አለባቸው።',
      'የውጫሌ ታሪካዊ ማንነትን ከተፈጥሮ ጉዞ ጋር ማገናኘት ለጎብኚዎች ሰፊ የትምህርት ተሞክሮ ሊፈጥር ይችላል። የተፈጥሮ መስህቦች ስም፣ አቀማመጥ፣ መንገድና የጉብኝት ሁኔታ በአካባቢያዊ መረጃ መረጋገጥ አለበት።',
    ],
  },
  {
    title: 'የተፈጥሮ ጥበቃና የቱሪዝም ልማት',
    paragraphs: [
      'የተፈጥሮ ቱሪዝም እድገት የአካባቢውን ተፈጥሯዊ ሀብት በመጠበቅ መካሄድ አለበት። ሀብቶቹ ካልተጠበቁ የአፈር መሸርሸር፣ የዕፅዋት መጥፋት፣ የውሃ ብክለትና የዱር እንስሳት መኖሪያ መበላሸት ሊከሰት ይችላል።',
      'የውሃ ምንጮችን ንጹሕ ማድረግ፣ ዛፎችን መጠበቅ፣ ቆሻሻን በተገቢው ሁኔታ ማስወገድና የመሬት አጠቃቀምን ማስተካከል የአካባቢ ጥበቃ ዋና ተግባራት ናቸው።',
      'የአካባቢው ማኅበረሰብ፣ አስተዳደርና የቱሪዝም ተዋናዮች የጉብኝት መንገዶችን በመለየት፣ መረጃ በማዘጋጀትና የአካባቢ መመሪያ ሰጪዎችን በማሠልጠን በጋራ ሊሠሩ ይችላሉ። የአካባቢ ምርቶችንና አገልግሎቶችን ማበረታታትም የሥራ ዕድል ይፈጥራል።',
    ],
  },
  {
    title: 'መደምደሚያ',
    paragraphs: [
      'ውጫሌ በ1889 እ.ኤ.አ. ከተፈረመው የውጫሌ ውል ጋር በተያያዘ በኢትዮጵያ ታሪክ የሚታወቅ ስፍራ ነው። ይህ ታሪካዊ ማንነት ለታሪካዊ ቱሪዝም መሠረት ሲሆን፣ የአካባቢው ተፈጥሯዊ ሀብቶችና የገጠር ሕይወት ደግሞ ለተፈጥሮ ጉዞ ሊያገለግሉ ይችላሉ።',
      'የተፈጥሮ ገጽታ፣ የዕፅዋት ሀብት፣ የውሃ ምንጮችና ታሪካዊ ስፍራዎች በትክክል መለየትና መመዝገብ ለጎብኚዎች መመሪያ ለመስጠት ይረዳል። ተፈጥሮን መጠበቅና የአካባቢውን ሕዝብ በቱሪዝም ልማት ማሳተፍ ወሳኝ ናቸው።',
    ],
  },
];

const wuchaleImage =
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&auto=format&fit=crop';

export default function WuchaleNature() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="overflow-hidden rounded-3xl bg-[#075b3d] text-white">
          <img
            src={wuchaleImage}
            alt="የውጫሌ የተፈጥሮ ገጽታ"
            className="h-64 w-full object-cover sm:h-96"
          />
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-100">
              የተፈጥሮና የታሪክ ጉዞ | ውጫሌ፣ ደቡብ ወሎ
            </p>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">የውጫሌ የተፈጥሮ ቱሪዝም</h1>
            <p className="mt-3 text-lg font-semibold text-emerald-50">Wuchale Nature Tour</p>
            <p className="mt-5 max-w-3xl leading-8 text-white/90">
              የውጫሌ ታሪካዊ ማንነትን ከገጠር ሕይወትና ከተፈጥሮ ጉዞ ጋር ያገናኙ። የተፈጥሮ ስፍራዎችና የመዳረሻ ሁኔታዎች በአካባቢው መረጃ መረጋገጥ እንዳለባቸው ያስታውሱ።
            </p>
          </div>
        </header>

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

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">የጉብኝት መረጃ</h2>
            <p className="mt-4 leading-8 text-slate-700">
              የመንገድ ሁኔታን፣ የጉብኝት ፈቃድንና በአካባቢው የሚገኙ ተፈጥሯዊ መስህቦችን ከጉዞ በፊት ያረጋግጡ። ጎብኚዎች የአካባቢ መመሪያን መከተል፣ ቆሻሻን ይዘው መውጣት፣ ዕፅዋትንና እንስሳትን አለማስቸገር፣ የአካባቢውን ሰዎች ፎቶ ከማንሳት በፊት ፈቃድ መጠየቅ አለባቸው።
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Wuchale%2C+South+Wollo%2C+Ethiopia"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[#075b3d] px-5 py-3 text-sm font-bold text-[#075b3d] transition hover:bg-emerald-50"
              >
                ውጫሌን በGoogle Maps ይመልከቱ
              </a>
              <a
                href="mailto:info@wollotourism.gov.et?subject=Booking%20inquiry%3A%20Wuchale%20Nature%20Tour"
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
