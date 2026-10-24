import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const heritagePoints = [
  'የእግዚአብሔር አብ ደብር፤ የትክክለኛው መስቀል ክፍል ይገኛል ተብሎ በቤተ ክርስቲያን ባህል የሚታመንበት።',
  'ግሸን ማሪያም፣ ቅዱስ ገብርኤልና ቅዱስ ሚካኤል ደብራት።',
  'ከመስቀል በዓልና ከማሪያም ወርሃዊ አክብሮት ጋር የተያያዙ የእምነት ልምዶች።',
  'የአምባ ግሸን የንጉሣዊ እስረኛ ታሪክና የአህመድ ግራኝ ዘመቻዎች ታሪካዊ ማብራሪያ።',
];

export default function GishenMariam() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="rounded-3xl bg-[#075b3d] px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-100">
            የእምነትና የታሪክ ቅርስ | ደቡብ ወሎ
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">ግሸን ደብረ ከርቤ ማሪያም</h1>
          <p className="mt-3 text-lg font-semibold text-emerald-50">Gishen Debre Kerbe Mariam Monastery</p>
          <p className="mt-5 max-w-3xl leading-8 text-white/90">
            ግሸን ደብረ ከርቤ ማሪያም፣ ደብረ ግሸን ወይም አምባ ግሸን ተብሎም የሚጠራ፣ በደቡብ ወሎ የሚገኝ ታሪካዊና ሃይማኖታዊ ቦታ ነው። የኦርቶዶክስ ተዋሕዶ ባህል፣ የንጉሣዊ ታሪክና የተራራማ መልክዓ ምድር በዚህ መዳረሻ ይገናኛሉ።
          </p>
        </header>

        <div className="mt-8 space-y-6">
          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">የደብሩ ስምና ሃይማኖታዊ አስፈላጊነት</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              ግሸን ደብረ ከርቤ ማሪያም በብዙ ምንጮች “ደብረ ግሸን” ተብሎ ይጠራል። በአካባቢው ከግሸን ማሪያም፣ ከቅዱስ ገብርኤል፣ ከቅዱስ ሚካኤልና ከእግዚአብሔር አብ ጋር የተያያዙ ደብራትና ቅርሶች ይጠቀሳሉ።
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              በቤተ ክርስቲያን ባህል መሠረት የትክክለኛው መስቀል ክፍል በዘርዓ ያዕቆብ ዘመን ወደ ግሸን አምባ ተወስዶ በእግዚአብሔር አብ ደብር እንደተቀመጠ ይታመናል። ይህ ትረካ ከመስቀል በዓልና ከቦታው የእምነት ልምዶች ጋር በቅርበት ይያያዛል።
            </p>
            <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-7 text-amber-900">
              የመስቀሉ ክፍል ታሪክ በቤተ ክርስቲያን እምነትና ባህል የተጠበቀ ነው፤ ይህን ከተረጋገጡ ታሪካዊ መረጃዎች በተለየ መልኩ መግለጽ ይገባል።
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">የመስቀል ክፍል ታሪክ</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ እምነት መሠረት ቅድስት ሄለና የትክክለኛውን መስቀል ካገኘች በኋላ ክፍሎቹን ለተለያዩ ቦታዎች እንዳስተላለፈች፣ አንድ ክፍልም ወደ ኢትዮጵያ እንደመጣ ይነገራል። በባህሉ መሠረት ይህ ክፍል በወርቃማ ሳጥን ውስጥ በእግዚአብሔር አብ ደብር ይጠበቃል ተብሎ ይታመናል።
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              ሌላው የቤተ ክርስቲያን ትረካ ዘርዓ ያዕቆብ በጾምና በጸሎት ፍለጋ ካደረገ በኋላ መስቀልን የሚያስታውስ ቅርጽ ያለውን ተራራ አግኝቶ በዚያ ደብር እንደመሠረተ ይናገራል።
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">የአምባ ግሸን የንጉሣዊ ታሪክ</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              አምባ ግሸን በኢትዮጵያ ታሪክ የንጉሣዊ እስረኛ ቦታ እንደነበረ ይጠቀሳል። በተለያዩ ዘመናት የንጉሠ ነገሥቱ ወንድ ዘመዶችና ወንድሞች ከዙፋን ፉክክር እንዲርቁ በአምባው እንዲቆዩ ይደረግ ነበር ተብሎ በታሪካዊ መግለጫዎች ይነገራል።
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              የአምባው የእስረኛ ሥርዓት በንጉሠ ነገሥት ናዖድ ዘመን እንዳበቃ የሚገልጹ ምንጮች አሉ፤ ይሁንና የታሪክ ዝርዝሮች ከምንጭ ወደ ምንጭ ሊለያዩ ይችላሉ።
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">የአህመድ ግራኝ ጥቃቶች</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              በ16ኛው ክፍለ ዘመን የአህመድ ግራኝ ሠራዊቶች ግሸን አምባን ለመያዝ በተደጋጋሚ እንደሞከሩና በአንድ ዘመቻ የደብሩን መከላከያ እንዳፈረሱ በታሪካዊ ምንጮች ይገለጻል። እነዚህ ክስተቶች የግሸንን ቦታ በኢትዮጵያ የሃይማኖትና የፖለቲካ ታሪክ ውስጥ ያለውን አስፈላጊነት ያሳያሉ።
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">የጉዞ ትኩረት ነጥቦች</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              የግሸን ደብረ ከርቤ ማሪያም ጉዞ ሃይማኖታዊ፣ ታሪካዊና የመልክዓ ምድር ልምድን ሊያጣምር ይችላል። በደብሩ የመግቢያ ሁኔታና በአካባቢው መመሪያ መሠረት ጎብኚዎች ሊያዩ ወይም ሊማሩ የሚችሉት፦
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700 marker:text-[#075b3d]">
              {heritagePoints.map((point) => <li key={point}>{point}</li>)}
              <li>የመስቀል ቅርጽ ያለው ተራራና ዙሪያው የከፍታ መልክዓ ምድር።</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              የተጠቀሱት ቦታዎች ሁሉ ለጎብኚዎች ክፍት ወይም በአሁኑ ጊዜ ተደራሽ መሆናቸው አይገመትም። ከጉዞ በፊት የመዳረሻ፣ የፈቃድና የጉብኝት ሁኔታን ከደብሩ ወይም ከአካባቢው መሪ ጋር ያረጋግጡ።
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">ኃላፊነት የሚሰማው የጉዞ መርህ</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              ግሸን የሃይማኖትና የባህል ቅርስ ስለሆነ ጉዞው በአክብሮት መካሄድ አለበት። ጎብኚዎች በደብሩ መመሪያ መሠረት ተገቢ አለባበስ ማድረግ፣ የአካባቢውን ሥርዓት መከተል፣ ሰዎችን ወይም ቅዱስ ቦታዎችን ከመቅረጽ በፊት ፈቃድ መጠየቅና ቆሻሻን ከቦታው ማስወገድ ይገባቸዋል።
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-extrabold text-[#075b3d] sm:text-2xl">ተጨማሪ መረጃ</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              የመስቀል ታሪክና የደብሩን ሃይማኖታዊ ባህል በቤተ ክርስቲያን ምንጮች ማንበብ ይቻላል፤ የአምባ ግሸንና የአህመድ ግራኝ ታሪክ ደግሞ በታሪካዊ ጥናቶች ውስጥ ተጨማሪ ማብራሪያ አለው።
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://eotcmk.org/e/gishen-mariam-2/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[#075b3d] px-5 py-3 text-sm font-bold text-[#075b3d] transition hover:bg-emerald-50"
              >
                የቤተ ክርስቲያን ምንጭ ያንብቡ
              </a>
              <a
                href="https://nai.uu.se/download/18.39fca04516faedec8b248de5/1580829011871/ORTGIR05.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[#075b3d] px-5 py-3 text-sm font-bold text-[#075b3d] transition hover:bg-emerald-50"
              >
                ታሪካዊ ጥናቱን ያንብቡ
              </a>
              <a
                href="mailto:info@wollotourism.gov.et?subject=Booking%20inquiry%3A%20Gishen%20Debre%20Kerbe%20Mariam"
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
