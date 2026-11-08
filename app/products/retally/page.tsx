import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ReTally — Scan. Track. Save. | Weev Media",
  description: "Keep grocery spending in view. Scan receipts, catch duplicate charges, build smarter shopping lists, and stay ahead of recalls with ReTally.",
};

const features = [
  { n: "01", title: "Every receipt, accounted for", tag: "Smart receipt scanning", body: "Scan a receipt with your camera or choose a photo. ReTally reads the store, date, items, prices, tax, and total so your purchases are easy to find later." },
  { n: "02", title: "Catch the details that add up", tag: "Duplicate detection", body: "Spot duplicate charges on a receipt and recognize repeat purchases across receipts. Review what was flagged and decide what to keep." },
  { n: "03", title: "Make your budget useful", tag: "Spending insights", body: "See monthly spending, track a grocery or overall budget, and understand your pace with projected totals and a 12-month view." },
  { n: "04", title: "Shop with a little more context", tag: "Smarter shopping", body: "Build store-aware shopping lists from purchase history, notice price changes, and get relevant food-recall alerts tied to recent purchases." },
];

function Brand() {
  return <Link href="/" aria-label="Weev Media home" className="flex items-center gap-3"><span className="block h-10 w-10 overflow-hidden rounded-full"><Image src="/weevmedia.jpeg" alt="Weev Media logo" width={45} height={40} className="h-10 w-10 scale-[1.32] object-cover" /></span><span className="font-script translate-y-[2px] text-3xl leading-none text-[#24203b]">Weev Media</span></Link>;
}

const appScreenshots = [
  "IMG_2089.PNG", "IMG_2090.PNG", "IMG_2091.PNG", "IMG_2092.PNG",
  "IMG_2093.PNG", "IMG_2094.PNG", "IMG_2095.PNG", "IMG_2096.PNG",
  "IMG_2097.PNG", "IMG_2098.PNG", "IMG_2099.PNG", "IMG_2100.PNG",
  "IMG_2101.PNG", "IMG_2102.PNG", "IMG_2103.PNG", "IMG_2104.PNG",
  "IMG_2105.PNG",
];

function AppMockup() {
  return <div className="relative mx-auto w-full max-w-[560px]">
    <div aria-hidden className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-[#d8c8ff] via-[#e7e1ff] to-[#c9f2e7] blur-3xl" />
    <div className="relative grid grid-cols-3 items-center gap-2 sm:gap-4">
      {appScreenshots.slice(0, 3).map((file, index) => (
        <div key={file} className={`relative overflow-hidden rounded-[1.5rem] border-[5px] border-[#28243a] bg-white p-1.5 shadow-2xl shadow-violet-300/60 sm:rounded-[2rem] sm:border-[7px] sm:p-2 ${index === 1 ? "z-10 -translate-y-5 sm:-translate-y-8" : "mt-8 sm:mt-12"}`}>
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1rem] bg-[#f5f2fc] sm:rounded-[1.4rem]">
            <Image src={`/images/retally/${file}`} alt={`ReTally app screen ${index + 1}`} fill priority={index === 1} sizes="(max-width: 640px) 30vw, 180px" className="object-cover" />
          </div>
        </div>
      ))}
    </div>
    <p className="relative mt-5 text-center text-xs font-semibold uppercase tracking-[.18em] text-[#8d849f]">A clearer view of every shop</p>
  </div>;
}

export default function ReTallyPage() {
  return <main className="min-h-screen overflow-hidden bg-[#fbfaff] text-[#17152b]">
    <header className="sticky top-0 z-40 border-b border-[#ece9f5] bg-white/90 backdrop-blur-xl"><nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"><Brand /><div className="flex items-center gap-4 text-sm font-medium text-[#625e75] sm:gap-7"><Link href="/#products" className="hidden transition hover:text-[#7046d8] sm:block">Other products</Link><a href="#features" className="hidden transition hover:text-[#7046d8] sm:block">Features</a><Link href="/#contact" className="rounded-full bg-[#7046d8] px-5 py-2.5 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5">Contact</Link></div></nav></header>

    <section className="relative isolate overflow-hidden"><div aria-hidden className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[40rem] w-[40rem] rounded-full bg-[#dfd2ff]/70 blur-3xl" /><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.95fr_1.05fr]">
      <div><Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-[#8b7ba9] transition hover:text-[#7046d8]">← A Weev Media product</Link><div className="mt-8 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8d68e5] to-[#6740c7] text-2xl font-black text-white shadow-lg shadow-violet-200">R</div><span className="text-2xl font-bold tracking-tight">ReTally</span></div><p className="mt-7 text-xs font-bold uppercase tracking-[.24em] text-[#8059dc]">Scan · Track · Save</p><h1 className="mt-5 max-w-2xl text-5xl font-bold leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-[4.5rem]">Take control of your grocery spending.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#6c687d]">Turn everyday receipts into a clearer picture of your money. Catch duplicate charges, keep budgets on track, and make your next shopping trip a little smarter.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#features" className="rounded-full bg-[#7046d8] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5">Explore features <span className="ml-2">→</span></a><a href="#download" className="rounded-full border border-[#ded9eb] bg-white px-7 py-3.5 text-sm font-semibold text-[#39344f] transition hover:border-[#bda8f2]">Get the app</a></div><div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#777287]"><span><b className="mr-2 text-[#20ad83]">✓</b>Receipts organized</span><span><b className="mr-2 text-[#20ad83]">✓</b>Spending insights</span><span><b className="mr-2 text-[#20ad83]">✓</b>Smarter lists</span></div></div>
      <AppMockup />
    </div></section>

    <section className="border-y border-[#ece9f5] bg-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-3 sm:px-8"><div><p className="text-sm font-bold">Every receipt, in one place</p><p className="mt-1 text-sm text-[#817b92]">Find the details when you need them.</p></div><div><p className="text-sm font-bold">Spending that makes sense</p><p className="mt-1 text-sm text-[#817b92]">Understand your monthly patterns.</p></div><div><p className="text-sm font-bold">A smarter next shop</p><p className="mt-1 text-sm text-[#817b92]">Use purchase history to plan ahead.</p></div></div></section>

    <section id="features" className="bg-[#fbfaff]"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#8059dc]">A clearer everyday picture</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Small details. Better decisions.</h2><p className="mt-5 text-lg leading-8 text-[#777287]">ReTally brings your receipts, spending patterns, and shopping reminders together in one place.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2">{features.map((f)=><article key={f.n} className="rounded-[1.75rem] border border-[#eeeaf6] bg-white p-7 shadow-[0_12px_40px_-30px_rgba(62,40,120,.25)] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/70 sm:p-9"><div className="flex items-center justify-between"><span className="font-mono text-sm text-[#9a83cf]">{f.n}</span><span className="rounded-full bg-[#f3efff] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#8059dc]">{f.tag}</span></div><h3 className="mt-8 text-2xl font-bold tracking-tight">{f.title}</h3><p className="mt-4 leading-7 text-[#777287]">{f.body}</p></article>)}</div></div></section>

    <section className="bg-[#f2edff]"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#8059dc]">Designed around your routine</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Your shopping story, all in one view.</h2><p className="mt-5 text-lg leading-8 text-[#777287]">From the first scan to your monthly overview, ReTally helps turn scattered receipts into useful information.</p></div><div className="grid grid-cols-2 gap-3 sm:gap-4"><div className="rounded-[1.5rem] bg-white p-5 shadow-lg shadow-violet-200/50 sm:p-7"><span className="text-2xl">▤</span><h3 className="mt-8 font-bold">Receipt history</h3><p className="mt-2 text-sm leading-6 text-[#817b92]">Search and revisit your purchases.</p></div><div className="mt-8 rounded-[1.5rem] bg-white p-5 shadow-lg shadow-violet-200/50 sm:p-7"><span className="text-2xl text-[#15966d]">⌁</span><h3 className="mt-8 font-bold">Budget insights</h3><p className="mt-2 text-sm leading-6 text-[#817b92]">See your spending at a glance.</p></div><div className="-mt-8 rounded-[1.5rem] bg-white p-5 shadow-lg shadow-violet-200/50 sm:p-7"><span className="text-2xl text-[#8059dc]">✓</span><h3 className="mt-8 font-bold">Duplicate checks</h3><p className="mt-2 text-sm leading-6 text-[#817b92]">Notice charges worth a second look.</p></div><div className="rounded-[1.5rem] bg-gradient-to-br from-[#7046d8] to-[#9b79ed] p-5 text-white shadow-lg shadow-violet-200/70 sm:p-7"><span className="text-2xl">✦</span><h3 className="mt-8 font-bold">Smart shopping</h3><p className="mt-2 text-sm leading-6 text-white/75">Plan lists with more context.</p></div></div></div></section>

    <section id="download" className="bg-white"><div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-24"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#8059dc]">Coming soon</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">A smarter way to keep track.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#777287]">ReTally is preparing for its store launch. We’ll add the official download links as soon as the listings are live.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><span className="rounded-2xl border border-[#e8e2f3] bg-[#fbfaff] px-6 py-4 text-left"><span className="block text-[10px] font-semibold uppercase tracking-widest text-[#938ba5]">Download on</span><span className="mt-1 block font-bold">App Store · Coming soon</span></span><span className="rounded-2xl border border-[#e8e2f3] bg-[#fbfaff] px-6 py-4 text-left"><span className="block text-[10px] font-semibold uppercase tracking-widest text-[#938ba5]">Get it on</span><span className="mt-1 block font-bold">Google Play · Coming soon</span></span></div></div></section>

    <footer className="border-t border-[#ece9f5] bg-[#fbfaff]"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-[#817b92] sm:flex-row sm:px-8"><Brand /><span>© 2026–2027 Weev Media. All rights reserved.</span><Link href="/#contact" className="font-semibold text-[#7046d8] hover:underline">Contact us ↗</Link></div></footer>
  </main>;
}
