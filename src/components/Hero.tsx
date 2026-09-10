import React from "react";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import heroBackground from "../assets/bg.png";
import divyanshImage from "../assets/divyansh.png";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: <FaLinkedinIn />,
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: <FaWhatsapp />,
  },
  {
    label: "Email",
    href: "mailto:",
    icon: <MdEmail />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <FaInstagram />,
  },
];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#fffdf7]
        pt-22
        pb-10
        sm:pt-28
        sm:pb-12
        lg:pt-31
        lg:pb-15
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-3
          sm:px-6
          lg:px-10
          xl:px-12
        "
      >
        {/* =========================================================
            ULTRA-WIDE HERO CARD
        ========================================================= */}
        <div
          className="
            relative
            isolate
            aspect-[8/3]
            w-full
            min-h-[280px]
            overflow-hidden
            rounded-[1.25rem]
            shadow-[0_20px_60px_rgba(17,21,29,0.10)]
            sm:min-h-[330px]
            sm:rounded-[1.75rem]
            lg:min-h-[430px]
            lg:rounded-[2.5rem]
            xl:min-h-[470px]
          "
        >
          {/* BACKGROUND */}
          <img
            src={heroBackground}
            alt=""
            aria-hidden="true"
            className="
              absolute
              inset-0
              z-0
              h-full
              w-full
              object-center
            "
          />

          {/* CHESS STRATEGY ILLUSTRATION */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[38%]
              top-[15%]
              z-[5]
              h-[66%]
              w-[30%]
              opacity-[0.18]
              sm:left-[38%]
              sm:w-[29%]
              lg:left-[39%]
              lg:top-[13%]
              lg:h-[70%]
              lg:w-[28%]
            "
          >
            <svg
              viewBox="0 0 500 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <g stroke="#11151d" strokeWidth="1" opacity="0.28">
                <path d="M85 55H415" />
                <path d="M85 110H415" />
                <path d="M85 165H415" />
                <path d="M85 220H415" />
                <path d="M85 275H415" />
                <path d="M85 330H415" />
                <path d="M85 55V330" />
                <path d="M140 55V330" />
                <path d="M195 55V330" />
                <path d="M250 55V330" />
                <path d="M305 55V330" />
                <path d="M360 55V330" />
                <path d="M415 55V330" />
              </g>

              <path
                d="M115 292C175 240 205 190 248 150C288 112 332 91 394 72"
                stroke="#8c241c"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="7 9"
              />

              <path
                d="M175 292C220 255 264 205 305 158"
                stroke="#8c241c"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d="M305 158L289 163"
                stroke="#8c241c"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d="M305 158L301 174"
                stroke="#8c241c"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <circle cx="305" cy="158" r="29" stroke="#dcae24" strokeWidth="3" />
              <circle cx="305" cy="158" r="5" fill="#dcae24" />

              <g
                fill="#11151d"
                fontFamily="Georgia, 'Times New Roman', serif"
                textAnchor="middle"
              >
                <text x="120" y="307" fontSize="72">♟</text>
                <text x="205" y="253" fontSize="68">♞</text>
                <text x="305" y="183" fontSize="70" fill="#8c241c">♕</text>
                <text x="390" y="102" fontSize="66">♜</text>
                <text x="365" y="302" fontSize="64">♟</text>
              </g>

              <g
                fill="#11151d"
                fontFamily="Inter, Arial, sans-serif"
                fontSize="8"
                fontWeight="600"
                opacity="0.6"
              >
                <text x="91" y="48">a</text>
                <text x="146" y="48">b</text>
                <text x="201" y="48">c</text>
                <text x="256" y="48">d</text>
                <text x="311" y="48">e</text>
                <text x="366" y="48">f</text>
                <text x="411" y="48">g</text>
              </g>
            </svg>
          </div>

          {/* CONTENT GRID */}
          <div className="absolute inset-0 z-10 grid grid-cols-[57%_43%]">
            {/* LEFT CONTENT */}
            <div className="relative flex min-w-0 flex-col justify-center pl-[clamp(2.75rem,7.5vw,7.5rem)] py-[5%]">
              <h1 className="font-serif leading-[0.82] tracking-[-0.065em] text-[#11151d]">
                <span className="relative font-serif text-[clamp(2.35rem,5vw,6.8rem)] leading-[0.83] tracking-[-0.068em] text-[#11151d]">
                  Arena
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-10 h-[2px] w-[94%] -rotate-[1.5deg] rounded-full bg-[#8c241c] sm:h-[3px] lg:h-[4px]"
                  />
                </span>

                <span className="mt-[0.12em] block font-semibold text-[clamp(3.15rem,6.1vw,7rem)] leading-[0.82]">
                  Candidate
                </span>

                <span className="-ml-[0.025em] block font-semibold text-[clamp(3.7rem,7.2vw,8.2rem)] leading-[0.78] tracking-[-0.075em] text-[#8c241c]">
                  Master
                </span>
              </h1>

              <p className="mt-[4.5%] max-w-[30rem] font-sans text-[clamp(11px,1.12vw,17px)] font-medium leading-[1.55] tracking-[-0.01em] text-[#11151d]/70 sm:max-w-[33rem] lg:max-w-[36rem]">
                FIDE Arena Candidate Master and chess mentor helping students
                develop stronger thinking, deeper focus, and confidence through
                the game of chess.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex min-w-0 items-end justify-center overflow-visible">
              <img
                src={divyanshImage}
                alt="Divyansh Singh playing chess"
                className="relative z-20 block h-auto w-[125%] max-w-none translate-y-[1%] object-contain sm:w-[120%] lg:w-[116%] xl:w-[112%]"
              />
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="absolute bottom-[5.5%] left-[42%] z-30 flex -translate-x-2/3 items-center">
            {SOCIAL_LINKS.map((social, index) => (
              <React.Fragment key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="group relative flex items-center gap-2.5 px-2.5 py-2 text-[#11151d]/70 transition-all duration-300 hover:-translate-y-1 hover:text-[#8c241c] sm:gap-3 sm:px-3 sm:py-2.5 lg:gap-3.5 lg:px-3.5 lg:py-3"
                >
                  <span className="flex items-center justify-center text-[15px] transition-transform duration-300 group-hover:scale-110 sm:text-[16px] lg:text-[18px]">
                    {social.icon}
                  </span>

                  <span className="hidden font-sans text-[9px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:text-[10px] lg:block lg:text-[11px] group-hover:tracking-[0.2em]">
                    {social.label}
                  </span>

                  <span className="absolute bottom-0 left-2.5 h-[2px] w-[calc(100%-20px)] origin-left bg-[#dcae24] transition-all duration-300 group-hover:scale-x-[0.45] group-hover:bg-[#8c241c] sm:left-3 sm:w-[calc(100%-24px)] lg:left-3.5 lg:w-[calc(100%-28px)]" />
                </a>

                {index < SOCIAL_LINKS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mx-1.5 h-1 w-1 rotate-45 bg-[#8c241c]/40 transition-transform duration-300 sm:mx-2 lg:mx-2.5"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* =========================================================
            STATS — SINGLE ROW LOCKED ACROSS ALL SCREEN SIZES
        ========================================================= */}
        <div
          className="
            mx-auto
            mt-6
            grid
            w-full
            max-w-[950px]
            grid-cols-4
            divide-x
            divide-[#d8d1bf]
            sm:mt-10
            lg:mt-12
          "
        >
          {/* STAT 1 */}
          <div className="px-1 text-center sm:px-4 lg:px-8">
            <div className="font-serif text-[clamp(1.1rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.05em] text-[#11151d]">
              500<span className="text-[#eab62f]">+</span>
            </div>
            <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.05em] text-[#6b7280] sm:mt-2 sm:text-[10px] sm:tracking-[0.12em] lg:text-xs">
              Students Mentored
            </p>
          </div>

          {/* STAT 2 */}
          <div className="px-1 text-center sm:px-4 lg:px-8">
            <div className="font-serif text-[clamp(1.1rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.05em] text-[#11151d]">
              5<span className="text-[#eab62f]">+</span>
            </div>
            <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.05em] text-[#6b7280] sm:mt-2 sm:text-[10px] sm:tracking-[0.12em] lg:text-xs">
              Years Experience
            </p>
          </div>

          {/* STAT 3 */}
          <div className="px-1 text-center sm:px-4 lg:px-8">
            <div className="font-serif text-[clamp(1.1rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.05em] text-[#11151d]">
              20<span className="text-[#eab62f]">+</span>
            </div>
            <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.05em] text-[#6b7280] sm:mt-2 sm:text-[10px] sm:tracking-[0.12em] lg:text-xs">
              Countries
            </p>
          </div>

          {/* STAT 4 */}
          <div className="px-1 text-center sm:px-4 lg:px-8">
            <div className="font-serif text-[clamp(1.1rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.05em] text-[#11151d]">
              FIDE
            </div>
            <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.05em] text-[#6b7280] sm:mt-2 sm:text-[10px] sm:tracking-[0.12em] lg:text-xs">
              Title Certified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;