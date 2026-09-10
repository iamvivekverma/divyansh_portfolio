import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Coaching", href: "#coaching" },
  { label: "Achievements", href: "#achievements" },
  { label: "Impacts", href: "#impact" },
  { label: "Testimonials", href: "#testimonials" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  /* --------------------------------------------------
     SCROLL STATE + SMART HIDE / SHOW
  -------------------------------------------------- */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 40);

      if (isOpen) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= 250) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY;

      if (diff > 20) {
        setVisible(false);
        lastScrollY = currentScrollY;
      } else if (diff < -5) {
        setVisible(true);
        lastScrollY = currentScrollY;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  /* --------------------------------------------------
     LOCK BODY + HTML SCROLL WHEN MOBILE MENU IS OPEN
  -------------------------------------------------- */
  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const html = document.documentElement;

    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  /* --------------------------------------------------
     CLOSE MOBILE MENU WITH ESCAPE
  -------------------------------------------------- */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  /* --------------------------------------------------
     CLOSE MOBILE MENU WHEN ENTERING DESKTOP
  -------------------------------------------------- */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    if (mediaQuery.matches) {
      setIsOpen(false);
    }

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  /* --------------------------------------------------
     DETECT ACTIVE SECTION WHILE SCROLLING
  -------------------------------------------------- */
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      const navbarHeight = 82;

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setActiveSection(href.replace("#", ""));
    }

    closeMenu();
  };

  return (
    <>
      {/* =================================================
          MAIN NAVBAR
      ================================================= */}
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-transparent antialiased transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          className={`relative mx-auto flex h-[70px] items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? `mx-3 mt-3 h-[60px] w-[calc(100%-1.5rem)] max-w-[1280px] rounded-full border border-[#11151d]/10 bg-[#fffdf8]/80 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md sm:mx-5 sm:w-[calc(100%-2.5rem)] sm:px-7 md:mx-auto md:w-[calc(100%-3rem)] md:px-8 lg:w-[calc(100%-5rem)] xl:w-[calc(100%-6rem)]`
              : `max-w-[1400px] bg-transparent px-6 sm:px-8 lg:px-12 xl:px-16`
          }`}
        >
          {/* LOGO */}
          <a
            href="#about"
            onClick={(event) => handleNavClick(event, "#about")}
            className="group shrink-0"
          >
            <span className="relative inline-flex flex-col">
              <span className="text-[19px] font-semibold tracking-[-0.03em] text-[#11151d] transition-opacity duration-200 group-hover:opacity-80 sm:text-[21px]">
                Divyansh Singh
              </span>
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-7 lg:flex xl:gap-9">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`py-2 text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                    isActive
                      ? "text-[#11151d]"
                      : "text-[#6e737d] hover:text-[#11151d]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "#contact")}
            className="group hidden items-center gap-2.5 rounded-full bg-[#f5c542] px-5 py-2.5 text-[13.5px] font-medium tracking-[-0.01em] text-[#11151d] transition-all duration-300 hover:bg-[#e8b63f] hover:shadow-[0_4px_16px_rgba(17,21,29,0.10)] active:scale-[0.98] lg:flex"
          >
            <span>Book a Session</span>
            <span className="text-[15px] leading-none transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-full bg-[#11151d] text-white transition-transform duration-300 hover:scale-105 active:scale-95 lg:hidden"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-white transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isOpen ? "rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-white transition-all duration-200 ease-out ${
                  isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-white transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isOpen ? "-rotate-45" : "translate-y-[5px]"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* =================================================
          MOBILE MENU
      ================================================= */}
      <div
        id="mobile-nav-panel"
        className={`fixed inset-0 z-[60] bg-[#fffdf8] antialiased transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-[0.98]"
        }`}
      >
        {/* MOBILE MENU HEADER WITH CLOSE BUTTON */}
        <div className="flex h-[82px] items-center justify-between px-6 sm:px-8">
          <a
            href="#about"
            onClick={(event) => handleNavClick(event, "#about")}
            className={`text-[20px] font-semibold tracking-[-0.03em] text-[#11151d] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
          >
            Divyansh Singh
          </a>

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#11151d] text-white transition-all duration-300 hover:scale-105 active:scale-95 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span className="absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rotate-45 rounded-full bg-white" />
              <span className="absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 -rotate-45 rounded-full bg-white" />
            </span>
          </button>
        </div>

        <div className="flex h-[calc(100vh-82px)] flex-col px-6 pb-8 pt-4 sm:px-8">
          <div className="flex flex-col">
            {NAV_LINKS.map((link, index) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  style={{
                    transitionDelay: isOpen ? `${index * 50 + 100}ms` : "0ms",
                  }}
                  className={`group flex items-center justify-between border-b border-[#11151d]/10 py-4.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  } ${isActive ? "text-[#11151d]" : "text-[#555963]"}`}
                >
                  <span className="flex items-center gap-3 text-[20px] font-medium tracking-[-0.02em]">
                    <span
                      className={`h-[6px] w-[6px] rounded-full bg-[#f5c542] transition-all duration-300 ease-out ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    />
                    {link.label}
                  </span>

                  <span
                    className={`text-[20px] transition-all duration-300 ease-out ${
                      isActive
                        ? "translate-x-0 text-[#11151d]"
                        : "text-[#b1b3b8] group-hover:translate-x-1"
                    }`}
                  >
                    →
                  </span>
                </a>
              );
            })}
          </div>

          {/* MOBILE CTA */}
          <div
            style={{
              transitionDelay: isOpen
                ? `${NAV_LINKS.length * 50 + 100}ms`
                : "0ms",
            }}
            className={`mt-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "#contact")}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#f5c542] px-6 py-3.5 text-[14.5px] font-medium tracking-[-0.01em] text-[#11151d] shadow-[0_4px_20px_rgba(245,197,66,0.25)] transition-all duration-300 hover:bg-[#e8b63f] active:scale-[0.98]"
            >
              <span>Book a Session</span>
              <span className="text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}