import { useEffect, useState, useRef, useCallback } from "react";
import Reveal from "./motion/Reveal";

interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The biggest change wasn't learning more moves. It was learning what to look for, when to calculate, and how to trust my decisions.",
    name: "Rajvardhan Ranjan",
    detail: "Student · 2025",
    initials: "RR",
  },
  {
    quote:
      "Every session has a clear purpose. I started seeing patterns in positions that used to feel completely confusing.",
    name: "Aarav M.",
    detail: "Junior player",
    initials: "AM",
  },
  {
    quote:
      "What I value most is the way positions are explained. I don't just get an answer — I understand why the answer works.",
    name: "Meera K.",
    detail: "Tournament player",
    initials: "MK",
  },
  {
    quote:
      "The coaching made my tournament preparation much more structured. I now know how to approach a game instead of simply hoping for the right move.",
    name: "Kabir S.",
    detail: "Club player",
    initials: "KS",
  },
  {
    quote:
      "I came in wanting to improve my chess. I left with a much clearer way of thinking about the board.",
    name: "Riya D.",
    detail: "Tournament player",
    initials: "RD",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const active = TESTIMONIALS[activeIndex];

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
  }, []);

  const handleSelectIndex = (index: number) => {
    setActiveIndex(index);
    // Reset timer when manually selecting so it doesn't immediately skip
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      if (!isPaused) {
        timerRef.current = window.setInterval(handleNext, 5000);
      }
    }
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = window.setInterval(handleNext, 5000);
    }

    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [isPaused, handleNext]);

  return (
    <section
      id="testimonials"
      className="
        relative
        isolate
        px-4
        py-12
        text-[var(--color-ink)]
        overflow-hidden

        sm:px-8
        sm:py-14

        md:px-12

        lg:px-16
        lg:py-16

        xl:px-24
      "
    >
      {/* =====================================================
          BACKGROUND SHAPE
      ====================================================== */}

      

      {/* Small decorative dot */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[12%]
          z-0
          h-3
          w-3
          rounded-full
          bg-[#dcae24]
        "
      />
      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1180px]">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <Reveal
          className="
            mb-7
            flex
            flex-col
            gap-4

            lg:mb-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-[760px]">
            <p
              className="
                text-[0.62rem]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[var(--color-ink-soft)]
              "
            >
              In their words
            </p>

            <h2
              className="
                mt-2.5
                font-display
                text-[clamp(2rem,4vw,3.8rem)]
                font-medium
                leading-[0.98]
                tracking-[-0.045em]
              "
            >
              Don't take my word for it.
              <br />

              <span className="font-normal italic text-[var(--color-ink-soft)]">
                Hear it from the board.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[285px]
              text-[0.78rem]
              leading-[1.6]
              text-[var(--color-ink-soft)]

              sm:text-[0.84rem]
            "
          >
            Players talking about the moments their game started to feel
            different.
          </p>
        </Reveal>

        {/* ===================================================
            TESTIMONIAL CARD
        ==================================================== */}

        <Reveal className="relative" y={28} delay={120}>
          <article
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="
              relative
              block
              w-full
              min-w-0
              overflow-hidden
              rounded-[1.45rem]
              bg-[#fffdf7]
              px-7
              py-8
              shadow-[0_22px_60px_rgba(15,23,42,0.10)]

              sm:px-10
              sm:py-9

              lg:min-h-[350px]
              lg:px-14
              lg:py-11
              lg:rounded-[1.65rem]
            "
          >
            {/* Decorative quote mark */}
            <div
              aria-hidden="true"
              className="
                absolute
                right-7
                top-0
                select-none
                font-display
                text-[7rem]
                leading-none
                tracking-[-0.08em]
                text-[#8c241c]

                sm:right-10
                sm:text-[8rem]
              "
            >
              “
            </div>

            {/* Decorative green corner */}
            <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[50px]
          top-[120px]
          z-0
          h-[400px]
          translate-x-1/2
          w-[400px]
          rounded-full
          bg-[#8c241c]

        "
      />

            {/* Decorative gold line */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                top-0
                h-1
                w-20
                bg-[#dcae24]

                sm:w-24
              "
            />

            {/* =================================================
                ACTIVE CONTENT
            ================================================== */}

            <div
              key={activeIndex}
              className="
                relative
                z-10
                animate-[testimonialIn_500ms_cubic-bezier(.22,1,.36,1)]
              "
            >
              <p
                className="
                  mb-4
                  text-[0.58rem]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#8c241c]
                "
              >
                Testimonial
              </p>

              <blockquote
                className="
                  max-w-[820px]
                  font-display
                  text-[clamp(1.35rem,2.5vw,2.25rem)]
                  font-medium
                  leading-[1.18]
                  tracking-[-0.025em]
                  text-[var(--color-ink)]
                "
              >
                “{active.quote}”
              </blockquote>

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-1

                  sm:mt-8
                  sm:flex-row
                  sm:items-center
                  sm:gap-3
                "
              >
                <span
                  className="
                    text-[0.78rem]
                    font-semibold
                    text-[var(--color-ink)]
                  "
                >
                  {active.name}
                </span>

                <span className="hidden text-[var(--color-ink)]/20 sm:block">
                  /
                </span>

                <span
                  className="
                    text-[0.64rem]
                    text-[var(--color-ink-soft)]
                  "
                >
                  {active.detail}
                </span>
              </div>
            </div>

            {/* =================================================
                BOTTOM NAVIGATION
            ================================================== */}

            <div
              className="
                relative
                z-10
                mt-8
                flex
                items-center
                justify-between
                border-t
                border-[var(--color-ink)]/[0.08]
                pt-5

                sm:mt-9
                sm:pt-6
              "
            >
              {/* Reviewer avatars */}
              <div className="flex items-center">
                {TESTIMONIALS.map((testimonial, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={testimonial.name}
                      type="button"
                      onClick={() => handleSelectIndex(index)}
                      aria-label={`Show testimonial from ${testimonial.name}`}
                      className={`
                        relative
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        text-[0.55rem]
                        font-semibold
                        transition-all
                        duration-300

                        ${
                          index !== 0
                            ? "-ml-2"
                            : ""
                        }

                        ${
                          isActive
                            ? "z-10 scale-110 border-[#8c241c] bg-[#8c241c] text-[#fffdf7]"
                            : "border-[#fffdf7] bg-[#e9e1d3] text-[var(--color-ink-soft)] hover:scale-105"
                        }
                      `}
                    >
                      {testimonial.initials}
                    </button>
                  );
                })}
              </div>

              {/* Progress */}
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSelectIndex(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`
                      h-1
                      rounded-full
                      transition-all
                      duration-500

                      ${
                        index === activeIndex
                          ? "w-7 bg-[#8c241c]"
                          : "w-1.5 bg-[var(--color-ink)]/20 hover:bg-[#8c241c]"
                      }
                    `}
                  />
                ))}

                <span
                  className="
                    ml-2
                    text-[0.58rem]
                    font-medium
                    tracking-[0.12em]
                    text-[var(--color-ink)]
                  "
                >
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(TESTIMONIALS.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ===================================================
            CLOSING STATEMENT
        ==================================================== */}

        <Reveal
          className="
            mt-5
            flex
            flex-col
            gap-4
            pt-5

            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <p
            className="
              max-w-[680px]
              font-display
              text-[clamp(1.05rem,2vw,1.55rem)]
              font-medium
              leading-[1.2]
              tracking-[-0.02em]
            "
          >
            The best testimonial isn't a compliment.
            <br className="hidden sm:block" />
            It's a better player sitting across the board.
          </p>

          <a
            href="#contact"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              border-b
              border-[var(--color-ink)]/25
              pb-1
              text-[0.68rem]
              font-medium
              text-[var(--color-ink-soft)]
              transition-colors
              duration-300
              hover:border-[var(--color-ink)]
              hover:text-[var(--color-ink)]
            "
          >
            Start your own journey

            <span
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </Reveal>
      </div>

      <style>{`
        @keyframes testimonialIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}