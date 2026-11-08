import Image from "next/image";
import Link from "next/link";

const pillars = [
  { number: "01", title: "AI with a purpose", body: "We use intelligent technology where it makes everyday experiences simpler, clearer, and more useful." },
  { number: "02", title: "Built for real life", body: "Thoughtful products solve specific problems. We focus on the details that make a product genuinely helpful." },
  { number: "03", title: "Small team. Big focus.", body: "A lean, modern approach lets us move quickly, stay curious, and put our energy into what matters." },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faf8] text-[#17231d]">
      <header className="sticky top-0 z-50 border-b border-[#e4ece6] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="#top" className="flex items-center gap-3">
            <span className="block h-10 w-10 overflow-hidden rounded-full"><Image src="/weevmedia.jpeg" alt="Weev Media logo" width={45} height={40} className="h-10 w-10 scale-[1.32] object-cover" /></span>
            <span className="font-script translate-y-[2px] text-3xl leading-none text-[#172d23]">Weev Media</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#52665a] sm:flex">
            <a href="#approach" className="transition hover:text-[#187a55]">Approach</a>
            <a href="#products" className="transition hover:text-[#187a55]">Products</a>
            <a href="#about" className="transition hover:text-[#187a55]">About</a>
            <a href="#contact" className="rounded-full bg-[#187a55] px-5 py-2.5 text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-[#126443]">Let’s talk <span aria-hidden>↗</span></a>
          </div>
          <a href="#contact" className="rounded-full bg-[#187a55] px-4 py-2.5 text-sm font-semibold text-white sm:hidden">Contact</a>
        </nav>
      </header>

      <section id="top" className="relative">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-20 h-[34rem] w-[34rem] rounded-full bg-[#cce8d5]/60 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.92fr_1.08fr]">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e7ddff] bg-white px-4 py-2 text-xs font-bold tracking-wide text-[#187a55] shadow-sm"><span className="h-2 w-2 rounded-full bg-[#27a66d]" /> AI-DRIVEN TECHNOLOGY COMPANY</span>
            <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-[4.6rem]">Technology that solves real problems. <span className="bg-gradient-to-r from-[#187a55] to-[#6fba8e] bg-clip-text text-transparent">Intelligence with purpose.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#65756b]">Weev Media is an AI-focused technology company. We turn complex, everyday problems into useful digital products with applied AI, modern software engineering, and thoughtful design.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#products" className="rounded-full bg-[#187a55] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-[#126443]">Explore our products <span aria-hidden>→</span></a>
              <a href="#about" className="rounded-full border border-[#d8e4db] bg-white px-7 py-3.5 text-sm font-semibold text-[#2d4034] transition hover:border-[#9bc9ad]">Get to know us</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#65756b]"><span className="flex items-center gap-2"><span className="text-[#16845b]">✓</span> Thoughtfully designed</span><span className="flex items-center gap-2"><span className="text-[#16845b]">✓</span> AI-powered problem solving</span><span className="flex items-center gap-2"><span className="text-[#16845b]">✓</span> Built for everyday life</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl">
            <div aria-hidden className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-[#cce8d5] via-[#e2f1e7] to-[#c9edda] blur-2xl" />
            <div className="relative grid grid-cols-[1.05fr_.95fr] gap-3 sm:gap-4">
              <div className="flex min-h-[390px] flex-col justify-between rounded-[2rem] border border-white bg-white p-5 shadow-[0_25px_80px_-35px_rgba(62,40,120,.35)] sm:p-7">
                <div><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e9f5ed] text-xl text-[#187a55]">✳</div><p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-[#668273]">Our first product</p><h2 className="mt-2 text-3xl font-bold tracking-tight">ReTally</h2><p className="mt-3 text-sm leading-6 text-[#65756b]">Your everyday shopping, a little more organized.</p></div>
                <div className="rounded-2xl bg-[#eef6f0] p-4"><div className="flex items-center justify-between text-xs text-[#65756b]"><span>Monthly spending</span><span>↗</span></div><p className="mt-2 text-3xl font-bold text-[#1d3025]">$126.95</p><div className="mt-3 h-2 rounded-full bg-[#dcebe0]"><div className="h-2 w-[38%] rounded-full bg-[#279b6b]" /></div><p className="mt-2 text-[11px] text-[#65756b]">A clearer view of your purchases</p></div>
              </div>
              <div className="mt-12 flex flex-col gap-3 sm:mt-16 sm:gap-4">
                <div className="rounded-[2rem] bg-gradient-to-br from-[#31215e] to-[#7551c9] p-5 text-white shadow-xl shadow-violet-200 sm:p-7"><span className="text-xs font-semibold text-white/65">OUR APPROACH</span><p className="mt-12 text-2xl font-semibold leading-tight sm:text-3xl">Technology that feels simple.</p><div className="mt-5 h-px bg-white/20" /><p className="mt-4 text-xs leading-5 text-white/70">Useful by design. Considered in every detail.</p></div>
                <div className="rounded-[2rem] border border-white bg-white p-5 shadow-[0_25px_80px_-35px_rgba(62,40,120,.35)] sm:p-7"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7f8f1] text-lg text-[#16845b]">✦</div><div><p className="text-sm font-bold">Ideas into products</p><p className="text-xs text-[#8b8799]">From concept to everyday use</p></div></div><div className="mt-6 flex gap-2">{["Thoughtful","Modern","Useful"].map((item)=><span key={item} className="rounded-full bg-[#eff5f0] px-3 py-1.5 text-[10px] font-semibold text-[#756b8e]">{item}</span>)}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="border-y border-[#efecf6] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#187a55]">What guides us</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">We use technology to make hard things easier.</h2><p className="mt-5 text-lg leading-8 text-[#65756b]">We identify meaningful problems, then combine AI, software engineering, and product thinking to build practical solutions.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">{pillars.map((p)=><article key={p.number} className="rounded-[1.75rem] border border-[#e7eee8] bg-[#fcfbff] p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/70"><span className="font-mono text-xs text-[#6b9c7c]">{p.number}</span><h3 className="mt-8 text-xl font-bold">{p.title}</h3><p className="mt-3 leading-7 text-[#65756b]">{p.body}</p></article>)}</div>
        </div>
      </section>

      <section id="products" className="relative overflow-hidden bg-[#edf5ef]">
        <div aria-hidden className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#187a55]">A product from Weev Media</p><div className="mt-4 grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center">
            <div><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Meet ReTally.</h2><p className="mt-2 text-lg font-semibold text-[#187a55]">Scan. Track. Save.</p><p className="mt-6 max-w-xl text-lg leading-8 text-[#6e6981]">Turn everyday receipts into a clearer picture of your spending. Catch duplicate charges, keep budgets on track, and make your next shopping trip a little smarter.</p><Link href="/products/retally" className="mt-8 inline-flex rounded-full bg-[#187a55] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5">Discover ReTally <span className="ml-2">→</span></Link></div>
            <div className="rounded-[2rem] border border-white bg-white p-5 shadow-xl shadow-violet-200/60 sm:p-7"><div className="grid grid-cols-2 gap-3"><div className="rounded-2xl bg-[#edf5ef] p-4"><p className="text-xs text-[#817a96]">Receipts organized</p><p className="mt-2 text-2xl font-bold">All in one place</p></div><div className="rounded-2xl bg-[#e8f5ec] p-4"><p className="text-xs text-[#6d8b7e]">Spending insights</p><p className="mt-2 text-2xl font-bold text-[#177d5c]">At a glance</p></div></div><div className="mt-3 rounded-2xl bg-[#f7faf8] p-5"><div className="flex items-center justify-between"><span className="text-sm font-bold">Your shopping picture</span><span className="text-xs text-[#829087]">ReTally</span></div><div className="mt-5 flex h-28 items-end gap-2">{[38,58,46,75,55,88,66,96,72,83,62,90].map((v,i)=><div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-[#23865d] to-[#b5ddc2]" style={{height:v+"%"}} />)}</div><div className="mt-3 flex justify-between text-[10px] text-[#9b95aa]"><span>Organize</span><span>Understand</span><span>Shop smarter</span></div></div></div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.7fr_1fr]"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#187a55]">About Weev Media</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">AI. Engineering. Impact.</h2></div><div className="space-y-5 text-lg leading-8 text-[#65756b]"><p>Weev Media is built around a simple belief: technology is most valuable when it solves a real problem. We apply AI and modern engineering to turn complex workflows and everyday frustrations into simpler experiences.</p><p>We combine artificial intelligence, software development, and human-centered design to create intelligent products and solutions with measurable practical value.</p></div></div></section>

      <section id="contact" className="bg-[#edf5ef]"><div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#187a55]">Start a conversation</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Have an idea worth exploring?</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#65756b]">We’d love to hear about a product idea, a partnership, or a problem you think technology could solve.</p><a href="mailto:contact-us@weevmedia.com" className="mt-8 inline-flex rounded-full bg-[#187a55] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5">contact-us@weevmedia.com <span className="ml-2">↗</span></a></div></section>

      <footer className="border-t border-[#e4ece6] bg-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-[#748379] sm:flex-row sm:px-8"><Link href="/" className="flex items-center gap-3"><span className="block h-7 w-7 overflow-hidden rounded-full"><Image src="/weevmedia.jpeg" alt="Weev Media logo" width={28} height={28} className="h-7 w-7 scale-[1.32] object-cover" /></span><span>© 2026–2027 Weev Media. All rights reserved.</span></Link><span className="font-script text-2xl text-[#345642]">Strategic. Creative. Connected.</span></div></footer>
    </main>
  );
}
