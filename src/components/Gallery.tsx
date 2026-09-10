import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Reveal from "./motion/Reveal";

interface GalleryImage {
  src: string;
  alt: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/1.png", alt: "Chess moment 1" },
  { src: "/images/2.png", alt: "Chess moment 2" },
  { src: "/images/4.png", alt: "Chess moment 3" },
  { src: "/images/7.png", alt: "Chess moment 4" },
  { src: "/images/8.png", alt: "Chess moment 5" },
  { src: "/images/9.jpeg", alt: "Chess moment 6" },
  { src: "/images/10.jpeg", alt: "Chess moment 7" },
  { src: "/images/11.jpeg", alt: "Chess moment 8" },
  { src: "/images/12.jpeg", alt: "Chess moment 9" },
  { src: "/images/13.jpeg", alt: "Chess moment 10" },
  { src: "/images/14.jpeg", alt: "Chess moment 11" },
  { src: "/images/15.jpeg", alt: "Chess moment 12" },
  { src: "/images/16.jpeg", alt: "Chess moment 13" },
];

interface GalleryProps {
  images?: GalleryImage[];
}

export default function Gallery({
  images = GALLERY_IMAGES,
}: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(
    null
  );

  const activeImage =
    activeIndex !== null && images[activeIndex]
      ? images[activeIndex]
      : null;

  const openGallery = (index = 0) => {
    if (!images.length) return;

    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setActiveIndex(null);
  };

  const nextImage = () => {
    if (images.length <= 1) return;

    setActiveIndex((current) => {
      if (current === null) return 0;
      return (current + 1) % images.length;
    });
  };

  const previousImage = () => {
    if (images.length <= 1) return;

    setActiveIndex((current) => {
      if (current === null) return 0;

      return (
        (current - 1 + images.length) % images.length
      );
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const html = document.documentElement;

    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          closeGallery();
          break;

        case "ArrowRight":
          event.preventDefault();
          nextImage();
          break;

        case "ArrowLeft":
          event.preventDefault();
          previousImage();
          break;

        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  if (!images.length) return null;

  return (
    <>
      {/* GALLERY */}

      <section
        id="impacts"
        className="
          relative
          overflow-hidden
          px-5
          py-20
          text-[#11151d]
          sm:px-8
          sm:py-24
          lg:px-16
          lg:py-28
          xl:px-24
        "
      >
        <div className="mx-auto max-w-[1240px]">

          {/* Header */}

          <Reveal y={24}>
            <div
              className="
                mb-12
                flex
                flex-col
                gap-8
                border-b
                border-[#11151d]/10
                pb-8
                sm:mb-14
                md:flex-row
                md:items-end
                md:justify-between
                lg:mb-16
                lg:pb-10
              "
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-[2px] w-8 bg-[#dcae24]"
                  />

                  <p
                    className="
                      text-[0.62rem]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[#8c241c]
                    "
                  >
                    Impacts
                  </p>
                </div>

                <h2
                  className="
                    max-w-[780px]
                    font-display
                    text-[clamp(2.6rem,6vw,5.2rem)]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.055em]
                  "
                >
                  Sessions, tournaments,{" "}
                  <span className="font-normal italic text-[#8c241c]">
                    and the work.
                  </span>
                </h2>
              </div>

              <p
                className="
                  max-w-[330px]
                  text-[0.8rem]
                  leading-[1.7]
                  text-[#11151d]/60
                  sm:text-[0.86rem]
                "
              >
                From quiet study sessions to tournament
                halls — a glimpse into the work, progress,
                and people behind every position.
              </p>
            </div>
          </Reveal>

          {/* Gallery */}

          <Reveal y={32} delay={100}>
            <button
              type="button"
              onClick={() => openGallery(0)}
              aria-label="Open photo collection"
              className="
                group
                relative
                block
                w-full
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#11151d]/10
                bg-[#dcae24]
                text-left
                outline-none
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_30px_70px_rgba(17,21,29,0.12)]
                focus-visible:ring-2
                focus-visible:ring-[#8c241c]
                focus-visible:ring-offset-4
              "
            >
              <div
                className="
                  relative
                  h-[400px]
                  w-full
                  sm:h-[550px]
                "
              >
                {/* Subtle grid */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.08]
                  "
                >
                  
                </div>

                {/* Burgundy accent */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    right-0
                    top-0
                    z-10
                    h-24
                    w-24
                    bg-[#8c241c]
                    sm:h-28
                    sm:w-28
                  "
                />

                {/* Images */}

                <div className="absolute inset-0">

                  {/* Image 1 */}

                  {images[0] && (
                    <div
                      className="
                        absolute
                        left-[7%]
                        top-[8%]
                        z-20
                        w-[56%]
                        rotate-[-3deg]
                        bg-[#fffdf7]
                        p-2
                        shadow-[0_25px_50px_rgba(17,21,29,0.22)]
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:rotate-[-1deg]
                        group-hover:scale-[1.02]
                        sm:left-[9%]
                        sm:w-[51%]
                        lg:left-[10%]
                        lg:top-[9%]
                        lg:w-[48%]
                      "
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={images[0].src}
                          alt=""
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />
                      </div>
                    </div>
                  )}

                  {/* Image 2 */}

                  {images[1] && (
                    <div
                      className="
                        absolute
                        right-[6%]
                        top-[18%]
                        z-30
                        w-[38%]
                        rotate-[4deg]
                        bg-[#fffdf7]
                        p-2
                        shadow-[0_22px_45px_rgba(17,21,29,0.2)]
                        transition-transform
                        duration-700
                        group-hover:rotate-[6deg]
                        group-hover:translate-x-1
                        sm:right-[8%]
                        sm:w-[34%]
                        lg:right-[9%]
                        lg:w-[31%]
                      "
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={images[1].src}
                          alt=""
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />
                      </div>
                    </div>
                  )}

                  {/* Image 3 */}

                  {images[2] && (
                    <div
                      className="
                        absolute
                        bottom-[8%]
                        left-[6%]
                        z-30
                        w-[34%]
                        rotate-[4deg]
                        bg-[#fffdf7]
                        p-2
                        shadow-[0_22px_45px_rgba(17,21,29,0.2)]
                        transition-transform
                        duration-700
                        group-hover:rotate-[2deg]
                        group-hover:-translate-y-1
                        sm:left-[9%]
                        sm:w-[30%]
                        lg:left-[10%]
                        lg:w-[27%]
                      "
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={images[2].src}
                          alt=""
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />
                      </div>
                    </div>
                  )}

                  {/* Image 4 */}

                  {images[3] && (
                    <div
                      className="
                        absolute
                        bottom-[7%]
                        right-[8%]
                        z-20
                        w-[46%]
                        rotate-[-4deg]
                        bg-[#fffdf7]
                        p-2
                        shadow-[0_25px_50px_rgba(17,21,29,0.22)]
                        transition-transform
                        duration-700
                        group-hover:rotate-[-2deg]
                        group-hover:scale-[1.02]
                        sm:right-[10%]
                        sm:w-[41%]
                        lg:right-[11%]
                        lg:w-[37%]
                      "
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={images[3].src}
                          alt=""
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />
                      </div>
                    </div>
                  )}

                  {/* Image 5 */}

                  {images[4] && (
                    <div
                      className="
                        absolute
                        left-[42%]
                        top-[51%]
                        z-40
                        w-[21%]
                        rotate-[2deg]
                        bg-[#fffdf7]
                        p-1.5
                        shadow-[0_18px_35px_rgba(17,21,29,0.2)]
                        transition-transform
                        duration-700
                        group-hover:-translate-y-2
                        sm:left-[43%]
                        sm:w-[18%]
                        lg:left-[45%]
                        lg:w-[15%]
                      "
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={images[4].src}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom action */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    z-50
                    flex
                    items-center
                    gap-3
                    sm:bottom-7
                    sm:left-7
                    lg:bottom-8
                    lg:left-8
                    cursor-pointer
                    bg-white 
                    px-5
                    py-1.5
                    rounded-[10px]
                  "
                >
                  <span
                    className="
                      text-[0.62rem]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#11151d]/60
                    "
                  >
                    View collection
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#11151d]/20
                      text-[#11151d]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:border-[#8c241c]
                     bg-[#8c241c]
                      text-[#fffdf7]
                    "
                  >
                    ↗
                  </span>
                </div>
              </div>
            </button>
          </Reveal>
        </div>
      </section>

      {/* POPUP */}

      {isOpen &&
        activeImage &&
        activeIndex !== null &&
        createPortal(
          <div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-[#090b0f]/95
              p-4
              backdrop-blur-md
              sm:p-8
            "
            role="dialog"
            aria-modal="true"
            aria-label="Gallery"
            onClick={(event) => {
              if (
                event.target === event.currentTarget
              ) {
                closeGallery();
              }
            }}
          >
            {/* Close */}

            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close gallery"
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.06]
                text-xl
                text-white/80
                backdrop-blur-md
                transition-all
                duration-300
                hover:rotate-90
                hover:border-[#dcae24]
                hover:bg-[#dcae24]
                hover:text-[#11151d]
                sm:right-7
                sm:top-7
              "
            >
              ×
            </button>

            {/* Counter */}

            <div
              className="
                absolute
                left-5
                top-6
                z-30
                flex
                items-center
                gap-3
                sm:left-8
                sm:top-8
              "
            >
              <span className="h-[2px] w-6 bg-[#dcae24]" />

              <span
                className="
                  font-mono
                  text-[0.65rem]
                  tracking-[0.16em]
                  text-white/55
                "
              >
                {String(activeIndex + 1).padStart(2, "0")}
                {" / "}
                {String(images.length).padStart(2, "0")}
              </span>
            </div>

            {/* Previous */}

            {images.length > 1 && (
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="
                  absolute
                  left-3
                  top-1/2
                  z-20
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.05]
                  text-xl
                  text-white/75
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-x-1
                  hover:border-[#dcae24]
                  hover:bg-[#dcae24]
                  hover:text-[#11151d]
                  sm:left-7
                "
              >
                ←
              </button>
            )}

            {/* Next */}

            {images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="
                  absolute
                  right-3
                  top-1/2
                  z-20
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.05]
                  text-xl
                  text-white/75
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:border-[#dcae24]
                  hover:bg-[#dcae24]
                  hover:text-[#11151d]
                  sm:right-7
                "
              >
                →
              </button>
            )}

            {/* Image */}

            <div
              className="
                relative
                flex
                h-full
                w-full
                items-center
                justify-center
                px-8
                py-16
                sm:px-20
                sm:py-20
              "
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div
                className="
                  relative
                  max-h-full
                  max-w-full
                  bg-[#fffdf7]
                  p-1
                  shadow-[0_30px_100px_rgba(0,0,0,0.5)]
                  sm:p-2
                "
              >
                <img
                  key={activeIndex}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  draggable={false}
                  className="
                    max-h-[78vh]
                    max-w-[88vw]
                    object-contain
                    sm:max-h-[82vh]
                    sm:max-w-[82vw]
                  "
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}