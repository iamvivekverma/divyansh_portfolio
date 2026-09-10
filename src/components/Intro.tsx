import { useEffect, useState } from "react";

interface IntroProps {
  onEnter?: () => void;
}

export default function Intro({ onEnter }: IntroProps) {
  const [mounted, setMounted] = useState(false);
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [isTypingFirst, setIsTypingFirst] = useState(true);
  const [isTypingSecond, setIsTypingSecond] = useState(false);
  
  // Closing sequence states
  const [startClosing, setStartClosing] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const firstText = "Hi, I'm Toyesh Singh";
  const secondText = "Chess Mentor & Strategist";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let timeoutId: number;

    // Helper for human-like variable typing delay
    const getRandomDelay = () => Math.floor(Math.random() * 40) + 45;

    let idx1 = 0;
    const typeFirstLine = () => {
      if (idx1 < firstText.length) {
        setFirstLine(firstText.slice(0, idx1 + 1));
        idx1++;
        timeoutId = window.setTimeout(typeFirstLine, getRandomDelay());
      } else {
        setIsTypingFirst(false);
        // Pause before second line
        timeoutId = window.setTimeout(() => {
          setShowSecondLine(true);
          setIsTypingSecond(true);
          
          let idx2 = 0;
          const typeSecondLine = () => {
            if (idx2 < secondText.length) {
              setSecondLine(secondText.slice(0, idx2 + 1));
              idx2++;
              timeoutId = window.setTimeout(typeSecondLine, getRandomDelay());
            } else {
              setIsTypingSecond(false);
              
              // Wait before initiating closing sequence
              timeoutId = window.setTimeout(() => {
                setStartClosing(true);
                
                // Trigger callback after curtain transition completes (900ms)
                timeoutId = window.setTimeout(() => {
                  setIsClosed(true);
                  onEnter?.();
                }, 900);
              }, 1800);
            }
          };
          
          typeSecondLine();
        }, 400);
      }
    };

    timeoutId = window.setTimeout(typeFirstLine, 600);

    return () => clearTimeout(timeoutId);
  }, [mounted, onEnter]);

  if (isClosed) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-white selection:bg-neutral-900 selection:text-white">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white opacity-80" />

      {/* Top Half Curtain for Split Transition */}
      <div
        className={`absolute top-0 left-0 w-full h-[50.5vh] bg-white transition-transform duration-900 ease-[cubic-bezier(0.87,0,0.13,1)] z-10 origin-top ${
          startClosing ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Bottom Half Curtain for Split Transition */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[50.5vh] bg-white transition-transform duration-900 ease-[cubic-bezier(0.87,0,0.13,1)] z-10 origin-bottom ${
          startClosing ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Main Content Container */}
      <div
        className={`relative z-20 h-full w-full flex items-center justify-center transition-all duration-700 ease-out ${
          startClosing
            ? "opacity-0 scale-95 blur-md"
            : "opacity-100 scale-100 blur-none"
        }`}
      >
        <div className="text-center px-6 max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-neutral-950 flex items-center justify-center flex-wrap">
            <span>{firstLine}</span>
            {isTypingFirst && (
              <span className="inline-block w-[3px] h-[0.8em] bg-neutral-900 ml-2 animate-[pulse_0.8s_infinite] rounded-full shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
            )}
          </h1>

          {/* Subtitle / Role */}
          <div className="h-12 mt-4 flex items-center justify-center">
            {showSecondLine && (
              <p className="font-body text-[clamp(1.125rem,3vw,1.75rem)] font-medium text-neutral-600 tracking-[-0.02em] transition-all duration-500 flex items-center justify-center">
                <span>{secondLine}</span>
                {isTypingSecond && (
                  <span className="inline-block w-[2.5px] h-[0.85em] bg-neutral-500 ml-1.5 animate-[pulse_0.8s_infinite] rounded-full" />
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}