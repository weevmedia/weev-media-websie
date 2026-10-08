import Image from "next/image";

const pillars = [
  {
    title: "AI-first",
    body: "Machine intelligence where it actually helps — not bolted on, but baked into every product from day one.",
  },
  {
    title: "Modern stack",
    body: "The latest tools and frameworks, no legacy baggage. We build on what's best today, not what was safe yesterday.",
  },
  {
    title: "Lean by design",
    body: "A small team with minimum resources and maximum focus. Less overhead means faster shipping and sharper products.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-void text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-line bg-void/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/logo-mark.webp"
              alt="weev Media mark"
              width={36}
              height={36}
              className="rounded-md"
            />
            <span className="text-lg font-semibold tracking-tight">
              weev Media
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-fog sm:flex">
            <a href="#approach" className="transition hover:text-white">
              Approach
            </a>
            <a href="#products" className="transition hover:text-white">
              Products
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a
              href="#contact"
              className="rounded-full bg-neon px-4 py-2 font-medium text-void transition hover:brightness-110"
            >
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-neon px-4 py-2 text-sm font-medium text-void sm:hidden"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-neon/15 blur-[120px]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-block rounded-full border border-line bg-panel px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-ice">
              Technology startup
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Everyday problems,
              <br />
              solved with{" "}
              <span className="bg-gradient-to-r from-neon to-ice bg-clip-text text-transparent">
                AI
              </span>
              .
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
              weev Media builds practical products with the latest artificial
              intelligence and a modern tech stack — a small team, minimum
              resources, maximum impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-full bg-neon px-6 py-3 font-semibold text-void transition hover:brightness-110"
              >
                See what we&rsquo;re building
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-6 py-3 font-semibold text-zinc-100 transition hover:border-fog"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl bg-neon/20 blur-[80px]"
            />
            <Image
              src="/wm-logo-refined.webp"
              alt="weev Media neon logo"
              width={768}
              height={768}
              priority
              className="relative rounded-3xl border border-line"
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-widest text-neon">
            How we work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Small team. Sharp tools. Real outcomes.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-line bg-panel p-7 transition hover:border-neon/50"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-fog">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-t border-line bg-panel/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-widest text-neon">
            Products
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built to be used every day.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-neon/40 bg-panel p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-ice">
                Flagship
              </p>
              <h3 className="mt-3 text-2xl font-bold">ReTally</h3>
              <p className="mt-1 text-sm font-medium text-neon">
                Scan. Track. Save.
              </p>
              <p className="mt-4 leading-relaxed text-fog">
                Scan grocery receipts, catch duplicate charges, and get smart
                nudges on prices and repurchases — your money, accounted for,
                automatically.
              </p>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-dashed border-line bg-void p-8">
              <h3 className="text-2xl font-bold text-fog">More in the lab</h3>
              <p className="mt-4 leading-relaxed text-fog">
                We&rsquo;re a startup — ReTally is first, not last. New
                experiments ship when they&rsquo;re ready to solve a real
                daily problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-line">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-widest text-neon">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Strategic. Creative. Connected.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-fog">
            <p>
              weev Media started with a simple observation: the most annoying
              problems in daily life are also the most solvable — they just
              need someone to apply the latest technology to them properly.
            </p>
            <p>
              So that&rsquo;s what we do. We take modern AI and the best
              current tools, keep the team small and the resources minimum,
              and turn everyday friction into products people actually use.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line bg-panel/40">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Have a problem worth solving?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-fog">
            Whether it&rsquo;s a product idea, a partnership, or just a
            conversation — we&rsquo;d like to hear it.
          </p>
          <a
            href="mailto:hello@weevmedia.com"
            className="mt-8 inline-block rounded-full bg-neon px-8 py-3.5 font-semibold text-void transition hover:brightness-110"
          >
            hello@weevmedia.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-fog sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-mark.webp"
              alt="weev Media mark"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span>© 2026 weev Media. All rights reserved.</span>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest">
            Strategic. Creative. Connected.
          </p>
        </div>
      </footer>
    </div>
  );
}
