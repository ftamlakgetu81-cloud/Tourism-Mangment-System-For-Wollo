import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: 'ሐይቁ ለምን ልዩ ነው',
    paragraphs: [
      'ሐይቅ በደቡብ ወሎ ዞን፣ ከሐይቅ ከተማ አጠገብ የሚገኝ የተፈጥሮ፣ የታሪክና የሃይማኖት ቅርስ ያለው ሐይቅ ነው። ተራሮች፣ የግብርና መሬቶችና የዳርቻ መንደሮች የአካባቢውን ገጽታ ይሞላሉ። የኢስጢፋኖስ ደብር በፊንስላው ላይ ያለው አቀማመጥም ልዩ የጉብኝት ተሞክሮ ይሰጣል።',
      'የሐይቁ ጸጥታ ያለው ውሃ፣ የወፍ ሕይወትና የተራራ እይታዎች ለዳርቻ መራመድ፣ ለፎቶግራፍ፣ ለወፍ መከታተልና ለተፈጥሮ ጥናት ሊያመቹ ይችላሉ።',
    ],
  },
  {
    title: 'ታሪካዊ ማዕከል፡ የኢስጢፋኖስ ደብር',
    paragraphs: [
      'የሐይቅ ኢስጢፋኖስ ደብር በኢትዮጵያ የቤተ ክርስቲያን ታሪክ ውስጥ አስፈላጊ የእምነትና የትምህርት ማዕከል ነው። የደብሩ መሠረትና የአባ እየሱስ ሞአ ሚና በታሪካዊ መግለጫዎች ይጠቀሳሉ።',
      'ደብሩ የትምህርትና የመጽሐፍ ሥራ ማዕከል ሆኖ ተገልጿል። የሃይማኖት ንብረቶች፣ መጻሕፍትና ከኢትዮጵያ ንጉሠ ነገሥታት ጋር የተያያዙ እቃዎች በደብሩ ሙዚየም እንዳሉ የጉብኝት ምንጮች ይጠቅሳሉ።',
      'ደብሩ ከንጉሣዊ ታሪክና ከኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ገዳማዊ ትምህርት ጋር የተሳሰሩ ትረካዎችንም ይዟል።',
    ],
  },
  {
    title: 'የጀልባ ጉዞ ተሞክሮ',
    paragraphs: [
      'የጀልባ ጉዞ የሐይቁን ውሃ፣ የደብሩን ፊንስላ እይታ፣ የተራራ መልክዓ ምድርንና የአካባቢውን የዓሣ ማጥመድ ጀልባዎች ለማየት ዕድል ሊሰጥ ይችላል። የጀልባ አገልግሎቱና መንገዱ እንደ ወቅቱና እንደ ውሃው ሁኔታ ይለያያሉ።',
      'ጉዞ ከመጀመር በፊት የአየርና የውሃ ሁኔታን፣ የጀልባውን ደህንነትና የአካባቢ አገልግሎት አቅርቦትን ያረጋግጡ።',
    ],
  },
  {
    title: 'የወፍ መከታተልና የተፈጥሮ ጥናት',
    paragraphs: [
      'የሐይቁ ዳርቻና ውሃ ለተለያዩ የውሃና የዳርቻ ወፎች መኖሪያ ሊሆኑ ይችላሉ። ጠዋት ጸጥታን ጠብቆ ወፎችን መመልከት የተፈጥሮ ጉዞውን ያበለጽጋል።',
      'የተፈጥሮ ጥናት ሐይቁን እንደ አካባቢያዊ ስርዓት ለማየት፣ የውሃ አካሉ፣ የግብርና መሬቶቹና የተራራ መልክዓ ምድሩ እንዴት እንደሚገናኙ ለመረዳት ይረዳል።',
    ],
  },
  {
    title: 'ዓሣ ማጥመድና የአካባቢ ሕይወት',
    paragraphs: [
      'ዓሣ ማጥመድ በሐይቁ ዙሪያ ከአካባቢው ሕይወትና ኢኮኖሚ ጋር የተያያዘ እንቅስቃሴ ነው። ጎብኚዎች ከአካባቢው ዓሣ አጥማጆች ስለ ሥራቸውና ስለ ሐይቁ አጠቃቀም ሊማሩ ይችላሉ።',
      'ዓሣ ለማጥመድ ከመዘጋጀትዎ በፊት የአካባቢውን ፈቃድ፣ ደንቦችና ወቅታዊ ሁኔታ ያረጋግጡ።',
    ],
  },
  {
    title: 'የሐይቅ ዳርቻ መራመድና የባህል ተሞክሮ',
    paragraphs: [
      'በሐይቁ ዳርቻ መራመድ የሐይቁን ውሃ፣ የግብርና መሬቶችንና የአካባቢውን መንደሮች ለማየት ዕድል ይሰጣል። ወደ ደብሩ ፊንስላ ወይም ወደ ሌሎች የሐይቁ ክፍሎች መድረስ እንደ መንገድና የአካባቢ መመሪያ ይወሰናል።',
      'በሐይቅ ከተማና በአጎራባች ማኅበረሰቦች ውስጥ የአካባቢውን ሕይወት፣ ገበያዎችንና የወሎ ባህልን ማወቅ ይቻላል። ሰዎችን ከመቅረጽ በፊት ፈቃድ ይጠይቁ።',
    ],
  },
  {
    title: 'የኢስጢፋኖስ ደብር ጉብኝት',
    paragraphs: [
      'የኢስጢፋኖስ ደብርና ሙዚየም ጉብኝት የሐይቅ ጉዞ ዋና ክፍል ሊሆን ይችላል። የደብሩን የመግቢያ ፈቃድና መመሪያዎች ማክበር ያስፈልጋል።',
      'ደብሩ በፊንስላ ላይ ይገኛል። የመግቢያ ደንቦችና የሚፈቀዱ የጉብኝት ቦታዎች ከደብሩ ጋር በቅድሚያ መረጋገጥ አለባቸው። የተለያዩ ጎብኚዎች ተሞክሮ በደብሩ ሕጎች መሠረት ሊለያይ ይችላል።',
      'ጉብኝቱ የቤተ ክርስቲያን ታሪክን፣ የመጽሐፍ ሥራንና የገዳማዊ ባህልን ለማወቅ ዕድል ይሰጣል።',
    ],
  },
  {
    title: 'የአንድ ቀን የጉዞ እቅድ',
    paragraphs: [
      'ከደሴ ወይም ከኮምቦልቻ ጠዋት ተነስተው ወደ ሐይቅ መጓዝ።',
      'በዳርቻው ስለ ሐይቁ፣ ስለ ደብሩ ታሪክና ስለ አካባቢው ማኅበረሰብ ማብራሪያ ማዳመጥ።',
      'ካለና ደህንነቱ ከተረጋገጠ የጀልባ ጉዞና የወፍ መከታተል ማድረግ።',
      'የደብሩን ደንብ በመከተል ደብሩንና ሙዚየሙን መጎብኘት።',
      'በአካባቢው ምግብ ቤት ማረፍ፤ በፈቃድና በደንብ መሠረት ዓሣ ማጥመድ ወይም ወፍ መከታተል።',
      'በወቅቱና በመንገድ ሁኔታ መሠረት ወደ ደሴ፣ ኮምቦልቻ ወይም ሌላ መዳረሻ መመለስ።',
    ],
  },
  {
    title: 'ኃላፊነት የሚሰማው ጉዞ መርህ',
    paragraphs: [
      'የሐይቅ ጉዞ ለተፈጥሮ፣ ለእምነትና ለማኅበረሰቡ አክብሮት የተመሠረተ መሆን አለበት። በደብር ውስጥ ተገቢ አለባበስ ያድርጉ፣ የአካባቢውን መመሪያ ይከተሉ፣ ከፎቶግራፍ በፊት ፈቃድ ይጠይቁና ቆሻሻን ይዘው ይውጡ።',
      'የጀልባ ጉዞ፣ የደብር መግቢያ፣ ዓሣ ማጥመድና ፎቶግራፍ ከማድረግዎ በፊት አስፈላጊውን የአካባቢ ወይም የደብር ፈቃድ ያረጋግጡ።',
      'የአየርና የሐይቁ ሁኔታ፣ የመንገድ መዳረሻና አገልግሎቶች ሊለወጡ ይችላሉ። ጉዞውን በአካባቢው መሪዎችና በታማኝ የጀልባ አገልግሎት አቅራቢዎች ጋር ያቅዱ።',
    ],
  },
];

export default function LakeHayq() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="rounded-3xl bg-[#075b3d] px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-100">
            የተፈጥሮ፣ የታሪክና የእምነት መዳረሻ | ደቡብ ወሎ
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">ሐይቅ እና ኢስጢፋኖስ ደብር</h1>
          <p className="mt-3 text-lg font-semibold text-emerald-50">Lake Hayq &amp; Istifanos Monastery</p>
          <p className="mt-5 max-w-3xl leading-8 text-white/90">
            ሐይቅ በደቡብ ወሎ ዞን፣ ከሐይቅ ከተማ አጠገብ የሚገኝ የተፈጥሮ፣ የታሪክና የሃይማኖት ቅርስ ነው። የዳርቻ መራመድ፣ የጀልባ ጉዞ፣ የወፍ መከታተልና የኢስጢፋኖስ ደብር ጉብኝት የጉዞው ክፍሎች ሊሆኑ ይችላሉ።
          </p>
          <p className="mt-3 max-w-3xl leading-8 text-white/90">
            ከደሴ ወይም ከኮምቦልቻ የአንድ ቀን ጉዞ ለማድረግ ይቻላል፤ ሐይቁም ወደ ሌሎች የወሎ ታሪካዊ መዳረሻዎች በሚደረግ ጉዞ ሊካተት ይችላል።
          </p>
        </header>

        <div className="mt-8 space-y-6">
          {sections.map((section, sectionIndex) => (
            <section key={section.title} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">
                {sectionIndex + 1}. {section.title}
              </h2>
              {sectionIndex === 8 ? (
                <ol className="mt-4 list-decimal space-y-3 pl-6 text-base leading-8 text-slate-700 marker:font-bold marker:text-[#075b3d]">
                  {section.paragraphs.map((paragraph) => <li key={paragraph}>{paragraph}</li>)}
                </ol>
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
              <li>
                <a className="font-semibold text-[#075b3d] underline" href="https://www.visitethiopia.et/space/hayq-estifanos-monastery" target="_blank" rel="noreferrer">
                  Visit Ethiopia — Hayq Estifanos Monastery
                </a>
              </li>
              <li>
                <a className="font-semibold text-[#075b3d] underline" href="https://actiontourethiopia.com/lake-hayq/" target="_blank" rel="noreferrer">
                  Action Tour Ethiopia — Lake Hayq
                </a>
              </li>
              <li>
                <a className="font-semibold text-[#075b3d] underline" href="https://www.akbartravels.com/ae/about-city/dessie/" target="_blank" rel="noreferrer">
                  Akbar Travels — Dessie
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lake+Hayq+Ethiopia"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[#075b3d] px-5 py-3 text-sm font-bold text-[#075b3d] transition hover:bg-emerald-50"
              >
                ሐይቅን በGoogle Maps ይመልከቱ
              </a>
              <a
                href="mailto:info@wollotourism.gov.et?subject=Booking%20inquiry%3A%20Lake%20Hayq%20Adventure%20Tour"
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
