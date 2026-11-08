import Image from "next/image";
import Link from "next/link";

const capabilities = [
  { number: "01", title: "Applied AI", body: "We bring AI into practical workflows—helping people find information, reduce repetitive work, and make better use of their data.", icon: "✳" },
  { number: "02", title: "Intelligent software", body: "We design and engineer modern digital products that connect thoughtful experiences with reliable technology.", icon: "⌘" },
  { number: "03", title: "Product thinking", body: "We start with the problem, shape a clear experience, and build technology around what people actually need.", icon: "↗" },
];

function Brand() {
  return <Link href="/" aria-label="Weev Media home" className="flex items-center gap-3"><span className="block h-10 w-10 overflow-hidden rounded-full"><Image src="/weevmedia.jpeg" alt="Weev Media logo" width={45} height={40} className="h-10 w-10 scale-[1.32] object-cover" /></span><span className="font-script translate-y-[2px] text-3xl leading-none text-[#17231d]">Weev Media</span></Link>;
}

export default function Home() {
  return <main className="min-h-screen overflow-hidden bg-[#f6f9fc] text-[#14263b]">
    <header className="sticky top-0 z-50 border-b border-[#e9edf1] bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Brand />
        <div className="hidden items-center gap-8 text-sm font-medium text-[#52677f] sm:flex">
          <a href="#capabilities" className="transition hover:text-[#087eaa]">What we do</a>
          <a href="#products" className="transition hover:text-[#087eaa]">Products</a>
          <a href="#about" className="transition hover:text-[#087eaa]">About</a>
          <a href="#contact" className="rounded-full bg-[#1456a0] px-5 py-2.5 text-white shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-[#103f7c]">Let’s talk ↗</a>
        </div>
        <a href="#contact" className="rounded-full bg-[#1456a0] px-4 py-2.5 text-sm font-semibold text-white sm:hidden">Contact</a>
      </nav>
    </header>

    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute -right-36 -top-28 -z-10 h-[42rem] w-[42rem] rounded-full bg-[#f2f5f8] blur-3xl" />
      <div aria-hidden className="absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#f2f5f8] blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e6ebf0] bg-white px-4 py-2 text-xs font-bold tracking-[.12em] text-[#1456a0] shadow-sm"><span className="h-2 w-2 rounded-full bg-[#1456a0]" /> AI-DRIVEN TECHNOLOGY COMPANY</span>
          <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[1.03] tracking-[-.06em] sm:text-6xl lg:text-[4.65rem]">We turn complex problems into <span className="text-[#087eaa]">intelligent products.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#637184]">Weev Media is a technology company focused on practical AI, modern software engineering, and digital experiences that make everyday work and life simpler.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#capabilities" className="rounded-full bg-[#1456a0] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-[#103f7c]">Explore what we do <span className="ml-2">→</span></a>
            <a href="#products" className="rounded-full border border-[#dce2e8] bg-white px-7 py-3.5 text-sm font-semibold text-[#31465c] transition hover:border-[#aebbc8]">See our products</a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#637184]"><span>Applied AI</span><span>·</span><span>Software engineering</span><span>·</span><span>Digital products</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div aria-hidden className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-[#d7e0e8] via-[#f5f7f9] to-[#e9eef2] blur-3xl" />
          <div className="relative rounded-[2.2rem] border border-white/80 bg-white/90 p-5 shadow-[0_30px_90px_-35px_rgba(20,86,160,.20)] backdrop-blur sm:p-7">
            <div className="flex items-center justify-between border-b border-[#edf0f3] pb-5"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#748394]">The Weev approach</p><p className="mt-1 text-lg font-bold">From challenge to solution</p></div><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e7f4eb] text-xl text-[#1456a0]">✳</div></div>
            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-[#f7f9fa] bg-[#fbfdff] p-4"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e5f2fa] font-bold text-[#1456a0]">01</span><div><p className="text-sm font-bold">Understand the problem</p><p className="mt-0.5 text-xs text-[#748394]">People, context, and the real need</p></div></div></div>
              <div className="ml-5 h-4 w-px bg-[#d6dde4]" />
              <div className="rounded-2xl border border-[#e8edf1] bg-[#f4f6f8] p-4"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e5ebef] font-bold text-[#1456a0]">02</span><div><p className="text-sm font-bold">Apply the right technology</p><p className="mt-0.5 text-xs text-[#6d8374]">AI, software, and thoughtful design</p></div></div></div>
              <div className="ml-5 h-4 w-px bg-[#d6dde4]" />
              <div className="rounded-2xl border border-[#e8edf1] bg-white p-4"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1456a0] font-bold text-white">03</span><div><p className="text-sm font-bold">Build something useful</p><p className="mt-0.5 text-xs text-[#748394]">A practical product or experience</p></div></div></div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-xl bg-[#173d2b] px-4 py-3 text-white"><span className="text-xs font-semibold tracking-wide">INTELLIGENCE WITH PURPOSE</span><span className="text-lg text-[#a8c6df]">↗</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="capabilities" className="border-y border-[#e9edf1] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#1456a0]">What we do</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Technology should move things forward.</h2><p className="mt-5 text-lg leading-8 text-[#637184]">We bring together the right mix of intelligence, engineering, and product thinking to create solutions with a clear purpose.</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {capabilities.map(item=><article key={item.number} className="rounded-[1.8rem] border border-[#e9edf1] bg-[#f8fafb] p-7 transition hover:-translate-y-1 hover:border-[#d5dfe7] hover:shadow-xl hover:shadow-emerald-100/60 sm:p-9"><div className="flex items-center justify-between"><span className="font-mono text-xs text-[#748394]">{item.number}</span><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edf1f4] text-xl text-[#1456a0]">{item.icon}</span></div><h3 className="mt-9 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-[#637184]">{item.body}</p></article>)}
        </div>
      </div>
    </section>

    <section id="products" className="bg-[#edf5ef]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#176b49]">Our product portfolio</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Ideas made useful.</h2></div><p className="max-w-md text-base leading-7 text-[#637469]">Weev Media is the company behind a growing portfolio of focused digital products. ReTally is one example.</p></div>
        <article className="mt-10 grid overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_25px_80px_-40px_rgba(22,76,48,.25)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="p-7 sm:p-10 lg:p-12"><span className="inline-flex rounded-full bg-[#e8f4ec] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#176b49]">Featured product</span><div className="mt-7 flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#176b49] text-2xl font-black text-white">R</span><span className="text-2xl font-bold">ReTally</span></div><h3 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">A smarter way to keep track of every shop.</h3><p className="mt-5 max-w-xl leading-7 text-[#637469]">ReTally turns grocery receipts into useful information with receipt scanning, spending insights, duplicate checks, and smarter shopping lists.</p><Link href="/products/retally" className="mt-8 inline-flex rounded-full bg-[#176b49] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#10583b]">Explore ReTally <span className="ml-2">→</span></Link></div>
          <div className="relative min-h-[300px] overflow-hidden bg-[#e5f2e8] p-7 sm:p-10"><div aria-hidden className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#b7ddc3] blur-3xl" /><div className="relative grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white bg-white p-4 shadow-lg"><p className="text-xs text-[#718477]">Receipt capture</p><div className="mt-8 h-24 rounded-xl bg-[#f0f6f1] p-3"><div className="h-2 w-3/4 rounded bg-[#c8ddce]" /><div className="mt-3 h-2 w-full rounded bg-[#dce9df]" /><div className="mt-2 h-2 w-4/5 rounded bg-[#dce9df]" /><div className="mt-4 h-2 w-1/2 rounded bg-[#8ab99a]" /></div></div><div className="mt-8 rounded-2xl border border-white bg-white p-4 shadow-lg"><p className="text-xs text-[#718477]">Spending overview</p><div className="mt-7 flex h-24 items-end gap-2">{[35,60,45,80,55,92].map((v,i)=><div key={i} className="flex-1 rounded-t bg-[#27845a]" style={{height:v+"%"}} />)}</div></div><div className="col-span-2 rounded-2xl bg-[#17432e] p-5 text-white"><p className="text-xs uppercase tracking-[.16em] text-[#a8d6b7]">Scan · Track · Save</p><p className="mt-3 text-2xl font-bold">Every purchase, in perspective.</p></div></div></div>
        </article>
      </div>
    </section>

    <section id="about" className="bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.7fr_1fr]"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#176b49]">About Weev Media</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Independent thinking. Intelligent technology.</h2></div><div className="space-y-5 text-lg leading-8 text-[#637469]"><p>Weev Media is an AI-focused technology company creating digital products that solve practical problems. We believe great technology should be capable under the hood and simple to use on the surface.</p><p>Our work brings together applied AI, modern software engineering, and human-centered product design—turning promising ideas into useful experiences.</p></div></div></section>

    <section id="contact" className="bg-[#edf5ef]"><div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#176b49]">Start a conversation</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Have a problem worth solving?</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#637469]">Tell us what you’re exploring. We’re interested in ideas where AI and technology can make a meaningful difference.</p><a href="mailto:contact-us@weevmedia.com" className="mt-8 inline-flex rounded-full bg-[#176b49] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5">contact-us@weevmedia.com ↗</a></div></section>

    <footer className="border-t border-[#e2ebe4] bg-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-[#748379] sm:flex-row sm:px-8"><Brand /><span>© 2026–2027 Weev Media. All rights reserved.</span><span className="font-script text-2xl text-[#345642]">Intelligence with purpose.</span></div></footer>
  </main>;
}
