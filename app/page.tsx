import Image from "next/image";
import Link from "next/link";

const pillars = [
  { number: "01", title: "AI with a purpose", body: "We use intelligent technology where it makes everyday experiences simpler, clearer, and more useful." },
  { number: "02", title: "Built for real life", body: "Thoughtful products solve specific problems. We focus on the details that make a product genuinely helpful." },
  { number: "03", title: "Small team. Big focus.", body: "A lean, modern approach lets us move quickly, stay curious, and put our energy into what matters." },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfaff] text-[#17152b]">
      <header className="sticky top-0 z-50 border-b border-[#ece9f5] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="#top" className="flex items-center gap-3">
            <span className="block h-10 w-10 overflow-hidden rounded-full"><Image src="/weevmedia.jpeg" alt="Weev Media logo" width={45} height={40} className="h-10 w-10 scale-[1.32] object-cover" /></span>
            <span className="font-script translate-y-[2px] text-3xl leading-none text-[#24203b]">Weev Media</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#625e75] sm:flex">
            <a href="#approach" className="transition hover:text-[#7046d8]">Approach</a>
            <a href="#products" className="transition hover:text-[#7046d8]">Products</a>
            <a href="#about" className="transition hover:text-[#7046d8]">About</a>
            <a href="#contact" className="rounded-full bg-[#7046d8] px-5 py-2.5 text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-[#5d35c5]">Let’s talk <span aria-hidden>↗</span></a>
          </div>
          <a href="#contact" className="rounded-full bg-[#7046d8] px-4 py-2.5 text-sm font-semibold text-white sm:hidden">Contact</a>
        </nav>
      </header>

      <section id="top" className="relative">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-20 h-[34rem] w-[34rem] rounded-full bg-[#d9c9ff]/60 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.92fr_1.08fr]">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e7ddff] bg-white px-4 py-2 text-xs font-bold tracking-wide text-[#7046d8] shadow-sm"><span className="h-2 w-2 rounded-full bg-[#21b98a]" /> INDEPENDENT PRODUCT STUDIO</span>
            <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-[4.6rem]">A little more clarity. <span className="bg-gradient-to-r from-[#7046d8] to-[#a477f5] bg-clip-text text-transparent">A lot more possibility.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#6c687d]">Weev Media creates thoughtful digital products that make everyday tasks easier. Practical ideas, modern technology, and a human-first point of view.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#products" className="rounded-full bg-[#7046d8] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-[#5d35c5]">Explore our products <span aria-hidden>→</span></a>
              <a href="#about" className="rounded-full border border-[#ded9eb] bg-white px-7 py-3.5 text-sm font-semibold text-[#39344f] transition hover:border-[#bda8f2]">Get to know us</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#777287]"><span className="flex items-center gap-2"><span className="text-[#20ad83]">✓</span> Thoughtfully designed</span><span className="flex items-center gap-2"><span className="text-[#20ad83]">✓</span> AI where it helps</span><span className="flex items-center gap-2"><span className="text-[#20ad83]">✓</span> Built for everyday life</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl">
            <div aria-hidden className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-[#d9c9ff] via-[#e9e2ff] to-[#c9f2e7] blur-2xl" />
            <div className="relative grid grid-cols-[1.05fr_.95fr] gap-3 sm:gap-4">
              <div className="flex min-h-[390px] flex-col justify-between rounded-[2rem] border border-white bg-white p-5 shadow-[0_25px_80px_-35px_rgba(62,40,120,.35)] sm:p-7">
                <div><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f0eaff] text-xl text-[#7046d8]">✳</div><p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-[#8b7ba9]">Our first product</p><h2 className="mt-2 text-3xl font-bold tracking-tight">ReTally</h2><p className="mt-3 text-sm leading-6 text-[#777287]">Your everyday shopping, a little more organized.</p></div>
                <div className="rounded-2xl bg-[#f4f0ff] p-4"><div className="flex items-center justify-between text-xs text-[#777287]"><span>Monthly spending</span><span>↗</span></div><p className="mt-2 text-3xl font-bold text-[#29233e]">$126.95</p><div className="mt-3 h-2 rounded-full bg-[#e2d8fa]"><div className="h-2 w-[38%] rounded-full bg-[#8c63e8]" /></div><p className="mt-2 text-[11px] text-[#777287]">A clearer view of your purchases</p></div>
              </div>
              <div className="mt-12 flex flex-col gap-3 sm:mt-16 sm:gap-4">
                <div className="rounded-[2rem] bg-gradient-to-br from-[#31215e] to-[#7551c9] p-5 text-white shadow-xl shadow-violet-200 sm:p-7"><span className="text-xs font-semibold text-white/65">OUR APPROACH</span><p className="mt-12 text-2xl font-semibold leading-tight sm:text-3xl">Technology that feels simple.</p><div className="mt-5 h-px bg-white/20" /><p className="mt-4 text-xs leading-5 text-white/70">Useful by design. Considered in every detail.</p></div>
                <div className="rounded-[2rem] border border-white bg-white p-5 shadow-[0_25px_80px_-35px_rgba(62,40,120,.35)] sm:p-7"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7f8f1] text-lg text-[#15966d]">✦</div><div><p className="text-sm font-bold">Ideas into products</p><p className="text-xs text-[#8b8799]">From concept to everyday use</p></div></div><div className="mt-6 flex gap-2">{["Thoughtful","Modern","Useful"].map((item)=><span key={item} className="rounded-full bg-[#f5f2fb] px-3 py-1.5 text-[10px] font-semibold text-[#756b8e]">{item}</span>)}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="border-y border-[#efecf6] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#8059dc]">What guides us</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Good technology should make life feel lighter.</h2><p className="mt-5 text-lg leading-8 text-[#777287]">We start with a real-world frustration, then bring design and technology together to make it easier.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">{pillars.map((p)=><article key={p.number} className="rounded-[1.75rem] border border-[#eeeaf6] bg-[#fcfbff] p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/70"><span className="font-mono text-xs text-[#9a83cf]">{p.number}</span><h3 className="mt-8 text-xl font-bold">{p.title}</h3><p className="mt-3 leading-7 text-[#777287]">{p.body}</p></article>)}</div>
        </div>
      </section>

      <section id="products" className="relative overflow-hidden bg-[#f3efff]">
        <div aria-hidden className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#8059dc]">A product from Weev Media</p><div className="mt-4 grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center">
            <div><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Meet ReTally.</h2><p className="mt-2 text-lg font-semibold text-[#8059dc]">Scan. Track. Save.</p><p className="mt-6 max-w-xl text-lg leading-8 text-[#6e6981]">Turn everyday receipts into a clearer picture of your spending. Catch duplicate charges, keep budgets on track, and make your next shopping trip a little smarter.</p><Link href="/products/retally" className="mt-8 inline-flex rounded-full bg-[#7046d8] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5">Discover ReTally <span className="ml-2">→</span></Link></div>
            <div className="rounded-[2rem] border border-white bg-white p-5 shadow-xl shadow-violet-200/60 sm:p-7"><div className="grid grid-cols-2 gap-3"><div className="rounded-2xl bg-[#f2edff] p-4"><p className="text-xs text-[#817a96]">Receipts organized</p><p className="mt-2 text-2xl font-bold">All in one place</p></div><div className="rounded-2xl bg-[#eaf8f2] p-4"><p className="text-xs text-[#6d8b7e]">Spending insights</p><p className="mt-2 text-2xl font-bold text-[#177d5c]">At a glance</p></div></div><div className="mt-3 rounded-2xl bg-[#fbfaff] p-5"><div className="flex items-center justify-between"><span className="text-sm font-bold">Your shopping picture</span><span className="text-xs text-[#8d849f]">ReTally</span></div><div className="mt-5 flex h-28 items-end gap-2">{[38,58,46,75,55,88,66,96,72,83,62,90].map((v,i)=><div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-[#8a61e2] to-[#c7b3fa]" style={{height:v+"%"}} />)}</div><div className="mt-3 flex justify-between text-[10px] text-[#9b95aa]"><span>Organize</span><span>Understand</span><span>Shop smarter</span></div></div></div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.7fr_1fr]"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#8059dc]">About Weev Media</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Strategic. Creative. Connected.</h2></div><div className="space-y-5 text-lg leading-8 text-[#777287]"><p>Weev Media started with a simple observation: the most annoying problems in daily life are often the most solvable — they just need someone to apply the right technology thoughtfully.</p><p>We bring modern AI, considered design, and a lean product mindset together to turn everyday friction into products people can actually use.</p></div></div></section>

      <section id="contact" className="bg-[#f3efff]"><div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#8059dc]">Start a conversation</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Have an idea worth exploring?</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#777287]">We’d love to hear about a product idea, a partnership, or a problem you think technology could solve.</p><a href="mailto:contact-us@weevmedia.com" className="mt-8 inline-flex rounded-full bg-[#7046d8] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5">contact-us@weevmedia.com <span className="ml-2">↗</span></a></div></section>

      <footer className="border-t border-[#ece9f5] bg-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-[#817b92] sm:flex-row sm:px-8"><Link href="/" className="flex items-center gap-3"><span className="block h-7 w-7 overflow-hidden rounded-full"><Image src="/weevmedia.jpeg" alt="Weev Media logo" width={28} height={28} className="h-7 w-7 scale-[1.32] object-cover" /></span><span>© 2026–2027 Weev Media. All rights reserved.</span></Link><span className="font-script text-2xl text-[#4b4265]">Strategic. Creative. Connected.</span></div></footer>
    </main>
  );
}
