import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Intro from "./components/Intro";
import { FiArrowRight, FiArrowUpRight, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Reveal from "./components/motion/Reveal";
import MyGallery from "./components/MyGallery";

function Home() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[var(--color-paper)] text-[var(--color-ink)] font-body antialiased">
      {/* HERO */}
      <div className="relative z-0">
        <Hero />
      </div>

      {/* ALL CONTENT ABOVE THE PINNED HERO */}
      <div className="relative z-15">
        <div className="relative -mt-2 overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)] pb-12">
          {/* Matching Hero Board Texture Overlay */}
          <div
            aria-hidden="true"
            className="hero-board-texture pointer-events-none absolute inset-0 z-0 opacity-40"
          />

          {/* Soft Ground Glow */}
          <div
            aria-hidden="true"
            className="hero-ground-glow pointer-events-none absolute inset-0 z-0 opacity-60"
          />

          <div className="relative z-10 mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-16 xl:px-24 xl:py-20">
            <Reveal className="max-w-[620px]" y={20} duration={800}>
              <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#dcae24]">
                The next move is yours.
              </p>

              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.035em]">
                Stop guessing.
                <br />
                <span className="text-[#dcae24]">Start seeing.</span>
              </h2>

              <p className="mt-4 max-w-[48ch] text-[0.9rem] leading-[1.65] text-[var(--color-paper)]/60 sm:text-[0.96rem]">
                Bring a position you&apos;re struggling with. We&apos;ll break
                it down, find the patterns, and turn uncertainty into a clear
                plan.
              </p>
            </Reveal>

            <Reveal className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[280px]" y={20} delay={120} duration={750}>
              <a
                href="https://wa.me/918873548879?text=Hi%20Divyansh%2C%20I%27m%20interested%20in%20booking%20a%20free%20trial%20session%20for%20chess%20coaching."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-[#dcae24]/60 px-5 py-4 transition-all duration-300 hover:border-[#dcae24] hover:bg-[#dcae24] hover:text-[var(--color-ink)] sm:px-6"
              >
                <span className="text-[0.8rem] font-medium tracking-wide sm:text-[0.88rem]">
                  Book a session
                </span>

                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#coaching"
                className="group flex items-center justify-between px-5 py-2.5 text-[var(--color-paper)]/55 transition-colors duration-300 hover:text-[var(--color-paper)] sm:px-6"
              >
                <span className="text-[0.78rem] underline sm:text-[0.82rem]">
                  Explore how sessions work
                </span>

                <FiArrowUpRight className="h-4 w-4 text-[var(--color-paper)]/35 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* SECTION SEPARATOR */}
        <div className="border-b border-[var(--color-line)]" />

        {/* =========================================================
            ABOUT
        ========================================================== */}
        <section
          id="about"
          className="
            bg-[var(--color-paper)]
            px-5
            py-16
            sm:px-8
            sm:py-20
            md:px-12
            lg:px-16
            lg:py-24
            xl:px-24
          "
        >
          <div className="mx-auto max-w-[1240px]">
            {/* Section Header */}
            <Reveal className="mb-12 border-l-2 border-[var(--color-ink)] pl-6" y={24}>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#8c241c]">
                About the mentor
              </p>

              <h2
                className="
                  mt-3
                  max-w-[850px]
                  font-display
                  text-[clamp(2rem,4vw,3.5rem)]
                  font-medium
                  leading-[1.1]
                  tracking-[-0.03em]
                  text-[var(--color-ink)]
                "
              >
                I don't teach players to{" "}
                <span className="text-[#8c241c] italic font-normal">
                  memorize more.
                </span>
                <br />
                I teach them to think better.
              </h2>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <Reveal className="md:block" delay={80}>
              <div>
                <p className="text-[0.92rem] leading-[1.75] text-[var(--color-ink-soft)] sm:text-[0.98rem]">
  I'm <strong>Divyansh Singh</strong> — an <strong>internationally FIDE-rated player</strong>, 
  <strong>2 times state champion</strong> and <strong>chess coach based in Jaipur</strong>. Having competed internationally 
  for India, my coaching is grounded in <strong>real, tournament-tested experience</strong> rather than pure theory.
</p>

<p className="mt-5 text-[0.92rem] leading-[1.75] text-[var(--color-ink-soft)] sm:text-[0.98rem]">
  <strong>I've trained 500+ students across 20+ countries, guiding over 100 players to earn official FIDE and USCF ratings.</strong>
</p>
              </div>
              </Reveal>

              <Reveal className="md:block" delay={160}>
              <div>
                <p className="text-[0.92rem] leading-[1.75] text-[var(--color-ink-soft)] sm:text-[0.98rem]">
                  Instead of throwing endless engine variations at the board, we slow the position
                  down. We learn what to notice first, what to calculate next, and which decisions
                  actually deserve your attention.
                </p>

                <p className="mt-5 text-[0.92rem] leading-[1.75] text-[var(--color-ink-soft)] sm:text-[0.98rem]">
                  The goal isn't to make you dependent on a coach — it's to make the board feel
                  clearer when you're sitting in front of it alone.
                </p>
              </div>
              </Reveal>
            </div>

            <Reveal className="mt-12 rounded-2xl p-6 sm:p-8" y={18} delay={240}>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#8c241c]">
                The philosophy
              </p>

              <p className="mt-2 font-display text-[1.2rem] font-medium tracking-[-0.01em] text-[var(--color-ink)] sm:text-[1.45rem]">
                Better decisions beat more information.
              </p>
            </Reveal>
          </div>
        </section>
        <MyGallery/>

        {/* SECTION SEPARATOR */}
        <div className="border-b border-[var(--color-line)]" />

        {/* =========================================================
            COACHING / TRAINING OPTIONS
        ========================================================== */}
        <section
          id="coaching"
          className="
            relative
            overflow-hidden
            bg-[var(--color-paper)]
            px-5
            py-16
            sm:px-8
            sm:py-20
            md:px-12
            lg:px-16
            lg:py-24
            xl:px-24
          "
        >
          <div className="mx-auto max-w-[1240px]">
            {/* SECTION HEADER */}
            <Reveal className="mb-10 max-w-[800px]" y={24}>
              <div className="border-l-2 border-[var(--color-ink)] pl-6">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
                  Coaching options
                </p>

                <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.8rem)] font-medium leading-[1] tracking-[-0.04em] text-[var(--color-ink)]">
                  Coaching built around
                  <br />
                  <span className="font-normal italic text-[#8c241c]">
                    your game.
                  </span>
                </h2>
              </div>
            </Reveal>

            {/* COACHING GRID */}
            <div className="grid gap-4 sm:gap-5 lg:grid-cols-4">
              {/* CARD 01 — PRIVATE COACHING */}
              <Reveal className="lg:col-span-2" y={28}>
              <a
                href="https://wa.me/918873548879?text=Hi%20Divyansh%2C%20I%27m%20interested%20in%20private%20coaching%20sessions."
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
              <article className="group relative isolate min-h-[280px] overflow-hidden rounded-[1.5rem] bg-[var(--color-ink)] p-6 text-[var(--color-paper)] shadow-lg transition-all duration-500 hover:-translate-y-1 sm:min-h-[320px] sm:p-8 cursor-pointer">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 z-0 h-56 w-56 rounded-full border border-[var(--color-paper)]/10 transition-transform duration-700 ease-out group-hover:scale-125"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -right-10 z-0 h-44 w-44 rounded-full bg-[#8c241c] opacity-80 transition-transform duration-700 ease-out group-hover:translate-x-3 group-hover:-translate-y-3"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[-5%] top-[15%] z-0 select-none font-serif text-[12rem] leading-none text-[var(--color-paper)]/[0.05] transition-transform duration-700 ease-out group-hover:rotate-3"
                >
                  ♞
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--color-paper)]/50">
                        01 / One-to-one
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-paper)]/15 text-[0.75rem] transition-transform duration-500 group-hover:rotate-45">
                        ↗
                      </span>
                    </div>

                    <h3 className="max-w-[9ch] font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-[0.95] tracking-[-0.035em]">
                      Private
                      <br />
                      Coaching
                    </h3>
                  </div>

                  <div>
                    <p className="max-w-[34ch] text-[0.84rem] leading-[1.65] text-[var(--color-paper)]/65 sm:text-[0.88rem]">
                      Personalized one-to-one chess coaching tailored to your goals, strengths, and target rating.
                    </p>

                    <span className="mt-4 inline-block min-w-[120px] rounded-full border border-[var(--color-paper)]/30 px-4 py-2 text-center text-[0.75rem] font-medium text-[var(--color-paper)]/80 transition-colors group-hover:border-[var(--color-paper)]/60 group-hover:text-[var(--color-paper)]">
                      Book Session
                    </span>
                  </div>
                </div>
              </article>
              </a>
              </Reveal>

              {/* CARD 02 — GROUP COACHING */}
              <Reveal className="lg:col-span-2" y={28} delay={80}>
              <a
                href="https://wa.me/918873548879?text=Hi%20Divyansh%2C%20I%27m%20interested%20in%20group%20coaching%20sessions."
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
              <article className="group relative isolate min-h-[280px] overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-white p-6 text-[var(--color-ink)] shadow-lg transition-all duration-500 hover:-translate-y-1 sm:min-h-[320px] sm:p-8 cursor-pointer">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -left-12 z-0 h-52 w-52 rounded-full bg-[#dcae24] transition-transform duration-700 ease-out group-hover:translate-x-5 group-hover:-translate-y-4 group-hover:scale-105"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-10 z-0 h-36 w-36 rounded-full bg-[#8c241c] transition-transform duration-700 ease-out group-hover:-translate-x-4 group-hover:translate-y-3"
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--color-ink)]/45">
                        02 / Together
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-ink)]/10 bg-[var(--color-paper)]/40 text-[0.75rem] transition-transform duration-500 group-hover:rotate-45">
                        ↗
                      </span>
                    </div>

                    <h3 className="max-w-[9ch] font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-[0.95] tracking-[-0.035em]">
                      Group
                      <br />
                      Coaching
                    </h3>
                  </div>

                  <div>
                    <p className="max-w-[34ch] text-[0.84rem] leading-[1.65] text-[var(--color-ink)]/62 sm:text-[0.88rem]">
                      Focused chess training in a collaborative environment where students solve positions together.
                    </p>

                    <span className="mt-4 inline-block min-w-[120px] rounded-full border border-[var(--color-ink)]/30 px-4 py-2 text-center text-[0.75rem] font-medium text-[var(--color-ink)]/80 transition-colors group-hover:border-[var(--color-ink)]/60 group-hover:text-[var(--color-ink)]">
                      Book Session
                    </span>
                  </div>
                </div>
              </article>
              </a>
              </Reveal>

              {/* CARD 03 — BEGINNER TO ADVANCED */}
              <Reveal className="lg:col-span-2" y={28} delay={120}>
              <a
                href="https://wa.me/918873548879?text=Hi%20Divyansh%2C%20I%27m%20interested%20in%20coaching%20from%20beginner%20to%20advanced%20level."
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
              <article className="group relative isolate min-h-[280px] overflow-hidden rounded-[1.5rem] bg-[#8c241c] p-6 text-white shadow-lg transition-all duration-500 hover:-translate-y-1 sm:min-h-[320px] sm:p-8 cursor-pointer">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 bottom-[-15px] z-0 grid h-52 w-52 rotate-[-8deg] grid-cols-8 opacity-20 transition-transform duration-700 ease-out group-hover:rotate-0"
                >
                  {Array.from({ length: 64 }).map((_, index) => (
                    <span
                      key={index}
                      className={
                        (Math.floor(index / 8) + index) % 2 === 0
                          ? "bg-white/20"
                          : "bg-transparent"
                      }
                    />
                  ))}
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/55">
                        03 / Progression
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[0.75rem] transition-transform duration-500 group-hover:rotate-45">
                        ↗
                      </span>
                    </div>

                    <h3 className="max-w-[11ch] font-display text-[clamp(1.9rem,3.5vw,3rem)] font-medium leading-[0.92] tracking-[-0.04em]">
                      Beginner
                      <br />
                      to Advanced
                    </h3>
                  </div>

                  <div>
                    <p className="max-w-[48ch] text-[0.84rem] leading-[1.65] text-white/70 sm:text-[0.88rem]">
                      From fundamentals and basic tactical awareness to deeper structural understanding and calculated endgames.
                    </p>

                    <span className="mt-4 inline-block min-w-[120px] rounded-full border border-white/30 px-4 py-2 text-center text-[0.75rem] font-medium text-white/80 transition-colors group-hover:border-white/60 group-hover:text-white">
                      Book Session
                    </span>
                  </div>
                </div>
              </article>
              </a>
              </Reveal>

              {/* CARD 04 — COMPETITIVE TRAINING */}
              <Reveal className="lg:col-span-2" y={28} delay={160}>
              <a
                href="https://wa.me/918873548879?text=Hi%20Divyansh%2C%20I%27m%20interested%20in%20competitive%20training%20for%20tournaments."
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
              <article className="group relative isolate min-h-[280px] overflow-hidden rounded-[1.5rem] bg-[var(--color-ink)] p-6 text-[var(--color-paper)] shadow-lg transition-all duration-500 hover:-translate-y-1 sm:min-h-[320px] sm:p-8 cursor-pointer">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-16 z-0 h-60 w-60 rotate-[18deg] rounded-[35%] bg-[#dcae24] opacity-90 transition-transform duration-700 ease-out group-hover:rotate-[26deg]"
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--color-paper)]/50">
                        04 / Competitive
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-paper)]/15 text-[0.75rem] transition-transform duration-500 group-hover:rotate-45">
                        ↗
                      </span>
                    </div>

                    <h3 className="max-w-[11ch] font-display text-[clamp(1.9rem,3.5vw,3rem)] font-medium leading-[0.92] tracking-[-0.04em]">
                      Competitive
                      <br />
                      Training
                    </h3>
                  </div>

                  <div>
                    <p className="max-w-[48ch] text-[0.84rem] leading-[1.65] text-[var(--color-paper)]/65 sm:text-[0.88rem]">
                      Preparation for rated tournaments, opening portfolio creation, and post-game analytical reviews.
                    </p>

                    <span className="mt-4 inline-block min-w-[120px] rounded-full border border-[var(--color-paper)]/30 px-4 py-2 text-center text-[0.75rem] font-medium text-[var(--color-paper)]/80 transition-colors group-hover:border-[var(--color-paper)]/60 group-hover:text-[var(--color-paper)]">
                      Book Session
                    </span>
                  </div>
                </div>
              </article>
              </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION SEPARATOR */}
        <div className="border-b border-[var(--color-line)]" />

        {/* =========================================================
            ACHIEVEMENTS
        ========================================================== */}
        <section
          id="achievements"
          className="
            bg-[var(--color-paper)]
            px-5
            py-16
            sm:px-8
            sm:py-20
            md:px-12
            lg:px-16
            lg:py-24
            xl:px-24
          "
        >
          <div className="mx-auto max-w-[1240px]">
            <Reveal className="mb-12 max-w-[820px]" y={24}>
              <div className="border-l-2 border-[#8c241c] pl-6">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#8c241c]">
                  Achievements
                </p>

                <h2 className="mt-3 font-display text-[clamp(2.2rem,6vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
                  Results that
                  <br />
                  <span className="font-normal italic text-[#8c241c]">
                    speak for themselves.
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="grid border-t border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  value: "500+",
                  title: "Students Trained",
                  description:
                    "Players coached across different ages, levels, and goals.",
                },
                {
                  value: "100+",
                  title: "FIDE & USCF Rated",
                  description:
                    "Students guided toward earning official chess ratings.",
                },
                {
                  value: "20+",
                  title: "Countries",
                  description:
                    "A growing coaching community connected across the world.",
                },
                {
                  value: "2×",
                  title: "State Champion",
                  description:
                    "Competitive experience brought directly into the coaching process.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} y={20} delay={index * 70}>
                  <article
                    className="
                      group
                      min-h-[230px]
                      border-b
                      border-[var(--color-line)]
                      p-6
                      transition-colors
                      duration-300
                      hover:bg-[#8c241c]/[0.035]
                      sm:min-h-[250px]
                      sm:p-7
                      lg:border-b-0
                      lg:border-r
                      lg:last:border-r-0
                      lg:p-8
                    "
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-display text-[clamp(2.8rem,4vw,4rem)] font-medium leading-none tracking-[-0.055em] text-[#8c241c]">
                        {item.value}
                      </span>

                      <span className="pt-1 text-[0.65rem] font-medium tracking-[0.16em] text-[var(--color-ink-soft)]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-12">
                      <h3 className="font-display text-[1.08rem] font-medium tracking-[-0.015em] text-[var(--color-ink)] sm:text-[1.15rem]">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-[24ch] text-[0.82rem] leading-[1.65] text-[var(--color-ink-soft)] sm:text-[0.86rem]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION SEPARATOR */}
        <div className="border-b border-[var(--color-line)]" />

        {/* GALLERY */}
        <Gallery />

        {/* SECTION SEPARATOR */}
        <div className="border-b border-[var(--color-line)]" />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* SECTION SEPARATOR */}
        <div className="border-b border-[var(--color-line)]" />

        {/* =========================================================
            CONTACT / FINAL CTA
        ========================================================== */}
        <section
          id="contact"
          className="
            bg-[var(--color-paper)]
            px-5
            py-20
            sm:px-8
            sm:py-24
            md:px-12
            lg:px-16
            lg:py-28
            xl:px-24
          "
        >
          <div className="mx-auto flex max-w-[1240px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-[800px]" y={24}>
              <div className="mb-5 border-l-2 border-[var(--color-ink)] pl-6">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#8c241c]">
                  Contact
                </p>

                <h2 className="mt-3 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[var(--color-ink)]">
                  Bring your position.
                  <br />
                  <span className="italic font-normal text-[#8c241c]">
                    Leave with a plan.
                  </span>
                </h2>
              </div>
            </Reveal>

            <Reveal y={18} delay={120}>
            <a
              href="mailto:Divyanshsingh24@gmail.com"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3
                border-b-2
                border-[var(--color-ink)]
                pb-1.5
                text-[0.92rem]
                font-medium
                text-[var(--color-ink)]
                transition-colors
                hover:border-[#8c241c]
                hover:text-[#8c241c]
                sm:text-[1rem]
              "
            >
              Divyanshsingh24@gmail.com
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            </Reveal>

            <Reveal y={18} delay={160}>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/Divyanshsinghofficial_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-ink)]/15 bg-[var(--color-paper)] text-[var(--color-ink-soft)] transition-all duration-300 hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/918873548879"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-ink)]/15 bg-[var(--color-paper)] text-[var(--color-ink-soft)] transition-all duration-300 hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/Divyanshsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-ink)]/15 bg-[var(--color-paper)] text-[var(--color-ink-soft)] transition-all duration-300 hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="mailto:Divyanshsingh@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-ink)]/15 bg-[var(--color-paper)] text-[var(--color-ink-soft)] transition-all duration-300 hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black px-5 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6">
            <div className="shrink-0">
              <p className="font-display text-[0.9rem] font-medium tracking-tight text-white">
                Divyansh Singh
              </p>
              <p className="mt-0.5 hidden text-[0.68rem] text-white/60 sm:block">
                Chess mentor &amp; strategist
              </p>
            </div>

            <div className="hidden items-center gap-6 md:flex lg:gap-8">
              {["about", "gallery", "coaching", "achievements", "testimonials"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-[0.72rem] font-medium capitalize text-white/60 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            <div className="flex shrink-0 items-center gap-4 sm:gap-6">
              <a
                href="#contact"
                className="hidden text-[0.72rem] font-medium text-white transition-opacity hover:opacity-80 sm:block"
              >
                Book a session
              </a>
              <p className="text-[0.68rem] text-white/60">
                © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* WhatsApp Floating Button */}
      {showWhatsApp && (
        <a
          href="https://wa.me/918873548879"
          target="_blank"
          rel="noopener noreferrer"
          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-xl
            animate-bounce
          "
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="h-7 w-7" />
        </a>
      )}
    </main>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleEnterSite = () => {
    localStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  if (showIntro) {
    return <Intro onEnter={handleEnterSite} />;
  }

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <Navbar />
      <Home />
    </div>
  );
}
