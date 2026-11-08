import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ReTally — Scan. Track. Save. | Weev Media",
  description:
    "Keep grocery spending in view. Scan receipts, catch duplicate charges, build smarter shopping lists, and stay ahead of recalls with ReTally.",
};

const features = [
  {
    number: "01",
    title: "Every receipt, accounted for",
    description:
      "Scan a receipt with your camera or choose a photo. ReTally reads the store, date, items, prices, tax, and total so your purchases are easy to find later.",
    tag: "Smart receipt scanning",
  },
  {
    number: "02",
    title: "Catch the details that add up",
    description:
      "Spot duplicate charges on a receipt and recognize repeat purchases across receipts. Review what was flagged and decide what to keep.",
    tag: "Duplicate detection",
  },
  {
    number: "03",
    title: "Make your budget useful",
    description:
      "See monthly spending, track a grocery or overall budget, and understand your pace with projected totals and a 12-month view.",
    tag: "Spending insights",
  },
  {
    number: "04",
    title: "Shop with a little more context",
    description:
      "Build store-aware shopping lists from purchase history, notice price changes, and get relevant food-recall alerts tied to recent purchases.",
    tag: "Smarter shopping",
  },
];

const previewTiles = [
  { title: "Spending overview", detail: "A clear view of this month's activity", number: "01" },
  { title: "Receipt details", detail: "Items, prices, and duplicate checks", number: "02" },
  { title: "Monthly budget", detail: "Track your pace and what remains", number: "03" },
  { title: "Smart lists & recalls", detail: "Useful context for your next shop", number: "04" },
];

export default function ReTallyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-void text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-line bg-void/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" aria-label="Weev Media home" className="flex items-center gap-3">
            <span className="block h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/weevmedia.jpeg"
                alt="Weev Media logo"
                width={45}
                height={40}
                className="h-10 w-10 scale-[1.32] object-cover"
              />
            </span>
            <span className="font-script text-3xl leading-none translate-y-[3px]">Weev Media</span>
          </Link>
          <div className="flex items-center gap-5 text-sm text-fog">
            <Link href="/#products" className="hidden transition hover:text-white sm:block">Other products</Link>
            <Link href="/#contact" className="rounded-full bg-neon px-4 py-2 font-semibold text-void transition hover:brightness-110">Contact</Link>
          </div>
        </nav>
      </header>

      <section className="relative isolate">
        <div aria-hidden className="pointer-events-none absolute -top-36 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-neon/15 blur-[130px]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-20 sm:pb-28 sm:pt-28 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Link href="/" className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.24em] text-fog transition hover:text-white">
              <span aria-hidden>←</span> A Weev Media product
            </Link>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10b981] text-2xl font-black text-white shadow-lg shadow-neon/20">R</div>
              <span className="text-2xl font-bold tracking-tight">ReTally</span>
            </div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[.28em] text-neon">Scan · Track · Save</p>
            <h1 className="max-w-2xl text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Know where your grocery money goes.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog">
              Turn everyday receipts into a clearer picture of your spending.
              Catch duplicate charges, keep budgets on track, and make your next
              shopping trip a little smarter.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#features" className="rounded-full bg-neon px-6 py-3 font-semibold text-void transition hover:brightness-110">Explore ReTally</a>
              <a href="#demo" className="rounded-full border border-line px-6 py-3 font-semibold transition hover:border-fog">Watch the demo</a>
            </div>
            <p className="mt-5 text-xs text-fog">Built for everyday shopping. Designed to make the details easier to see.</p>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <div aria-hidden className="absolute inset-8 rounded-[3rem] bg-neon/20 blur-[90px]" />
            <div className="relative rounded-[2.8rem] border border-white/10 bg-gradient-to-br from-[#17231f] via-[#0c1713] to-[#101014] p-4 shadow-2xl shadow-black/50">
              <div className="rounded-[2.2rem] border border-white/10 bg-[#f5f7f6] p-5 text-[#171b19]">
                <div className="flex items-center justify-between text-xs text-[#68716c]"><span>9:41</span><span>•••</span></div>
                <div className="mt-7 flex items-center justify-between">
                  <div><p className="text-xs text-[#758078]">Good evening</p><p className="text-xl font-bold">Your spending</p></div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0eaf78] font-black text-white">R</div>
                </div>
                <div className="mt-6 rounded-2xl bg-[#0eaf78] p-5 text-white">
                  <p className="text-xs text-white/75">This month</p>
                  <p className="mt-1 text-4xl font-bold">$126.95</p>
                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/25"><div className="h-full w-[38%] rounded-full bg-white" /></div>
                  <div className="mt-2 flex justify-between text-[11px] text-white/80"><span>38% of budget</span><span>$473.05 left</span></div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white p-4 shadow-sm"><p className="text-[11px] text-[#758078]">Receipts</p><p className="mt-1 text-2xl font-bold">8</p><p className="text-[10px] text-[#0eaf78]">This month</p></div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm"><p className="text-[11px] text-[#758078]">Duplicates</p><p className="mt-1 text-2xl font-bold">0</p><p className="text-[10px] text-[#758078]">Charges flagged</p></div>
                </div>
                <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between"><p className="text-sm font-semibold">Recent receipt</p><span className="text-xs text-[#0eaf78]">View all</span></div>
                  <div className="mt-4 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4e8e8] text-sm font-bold text-[#b84444]">C</div><div className="flex-1"><p className="text-sm font-semibold">Costco Wholesale</p><p className="text-[11px] text-[#758078]">Nov 6 · 8 items</p></div><p className="text-sm font-bold">$48.32</p></div>
                </div>
                <div className="mt-5 flex justify-around border-t border-[#e8ece9] pt-4 text-[10px] text-[#78817b]"><span>Home</span><span>Receipts</span><span>Smart List</span><span>More</span></div>
              </div>
              <p className="px-2 pb-2 pt-4 text-center text-[10px] uppercase tracking-[.2em] text-white/45">Product preview · illustrative interface</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-line bg-panel/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-neon">A clearer everyday picture</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">Small details. Better decisions.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fog">ReTally brings your receipts, spending patterns, and shopping reminders together in one place.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.number} className="group rounded-3xl border border-line bg-[#0a0a0e] p-7 transition hover:border-neon/40 sm:p-9">
                <div className="flex items-center justify-between"><span className="font-mono text-sm text-neon">{feature.number}</span><span className="rounded-full border border-line px-3 py-1 text-[10px] uppercase tracking-wider text-fog">{feature.tag}</span></div>
                <h3 className="mt-8 text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-fog">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[.25em] text-neon">Inside ReTally</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Made for the moments that matter.</h2></div>
            <p className="max-w-md text-sm leading-relaxed text-fog">A closer look at the app screens is coming soon. The gallery will use the actual ReTally screenshots.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {previewTiles.map((tile) => (
              <div key={tile.number} className="flex min-h-64 flex-col justify-between rounded-3xl border border-dashed border-line bg-panel/60 p-6">
                <span className="font-mono text-xs text-neon">{tile.number} / PREVIEW</span>
                <div><h3 className="text-lg font-semibold">{tile.title}</h3><p className="mt-2 text-sm leading-relaxed text-fog">{tile.detail}</p></div>
                <span className="text-xs text-fog/60">App screenshot coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="border-t border-line bg-panel/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-neon">See it in action</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">A quick look at ReTally.</h2>
            <p className="mt-4 text-fog">The product walkthrough will live here.</p>
            <div className="mt-10 flex aspect-video items-center justify-center rounded-3xl border border-dashed border-white/15 bg-[#08090b] p-8">
              <div className="max-w-sm text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-neon/50 bg-neon/10 text-2xl text-neon">▶</div>
                <p className="mt-5 text-lg font-semibold">Video demo coming soon</p>
                <p className="mt-2 text-sm leading-relaxed text-fog">A YouTube product demo will be embedded here when the link is ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="text-xs font-semibold uppercase tracking-[.25em] text-neon">Coming soon</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Keep every purchase in view.</h2><p className="mt-4 max-w-xl leading-relaxed text-fog">ReTally is preparing for its store launch. App download links will be added as soon as the listings are live.</p></div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <span aria-disabled="true" className="cursor-not-allowed rounded-2xl border border-line bg-panel px-5 py-4 text-sm font-semibold text-fog"><span className="block text-[10px] font-normal uppercase tracking-widest text-fog/60">Download on</span>App Store · Coming soon</span>
            <span aria-disabled="true" className="cursor-not-allowed rounded-2xl border border-line bg-panel px-5 py-4 text-sm font-semibold text-fog"><span className="block text-[10px] font-normal uppercase tracking-widest text-fog/60">Get it on</span>Google Play · Coming soon</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-fog sm:flex-row">
          <Link href="/" className="flex items-center gap-3">
            <span className="block h-7 w-7 overflow-hidden rounded-full">
              <Image
                src="/weevmedia.jpeg"
                alt="Weev Media logo"
                width={28}
                height={28}
                className="h-7 w-7 scale-[1.32] object-cover"
              />
            </span>
            <span>© 2026-2027 Weev Media. All rights reserved.</span>
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[.2em]">ReTally · Scan · Track · Save</span>
        </div>
      </footer>
    </main>
  );
}
