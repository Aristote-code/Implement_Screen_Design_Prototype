import { Fragment, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

// Horizontal 7-step consultation tracker. Scrolls horizontally on narrow widths
// so the design stays intact instead of wrapping awkwardly.
export default function StepTracker({
  steps,
  activeIndex,
  onStepClick,
  className = "",
}: {
  steps: readonly string[];
  activeIndex: number;
  onStepClick?: (i: number) => void;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    function check() {
      if (!ref.current) return;
      // sticky top is 104px (88px header + 16px gap); stuck when element is at that position
      setStuck(ref.current.getBoundingClientRect().top <= 105);
    }
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-x-auto rounded-[20px] bg-white p-6 sm:p-7 transition-shadow duration-200 ${
        stuck
          ? "shadow-[0_8px_24px_rgba(17,24,39,0.13)]"
          : "shadow-[0_1px_3px_rgba(17,24,39,0.06)]"
      } ${className}`}
    >
      <div className="flex min-w-[700px] items-start">
        {steps.map((label, i) => {
          const done = i < activeIndex;
          const active = i === activeIndex;
          return (
            <Fragment key={label}>
              <button
                type="button"
                onClick={() => onStepClick?.(i)}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div className="flex w-full items-center">
                  <span
                    className={`h-[2px] flex-1 ${i === 0 ? "invisible" : i <= activeIndex ? "bg-[#2f78ee]" : "bg-[#e9eaec]"}`}
                  />
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full ${
                      done || active ? "bg-[#2f78ee]" : "border-2 border-[#e3e7ee] bg-white"
                    }`}
                  >
                    {done ? (
                      <Check className="size-4 text-white" strokeWidth={3} />
                    ) : (
                      <span className={`size-2.5 rounded-full ${active ? "bg-white" : "bg-[#e3e7ee]"}`} />
                    )}
                  </span>
                  <span
                    className={`h-[2px] flex-1 ${i === steps.length - 1 ? "invisible" : i < activeIndex ? "bg-[#2f78ee]" : "bg-[#e9eaec]"}`}
                  />
                </div>
                <span
                  className={`whitespace-nowrap px-1 text-center text-[13px] ${
                    done || active ? "font-semibold text-[#2f78ee]" : "font-medium text-[#8aa0c2]"
                  }`}
                >
                  {label}
                </span>
              </button>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
