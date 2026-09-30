"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "motion/react";

interface CardProps {
  number: string;
  title: string;
  description: string;
  colorTheme?: "gold" | "gold-dark" | "gold-light";
  className?: string;
  rotate?: string;
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  colorTheme = "gold",
  className,
  rotate,
  colors: customColors,
}: CardProps) => {
  const defaultBgColors = {
    gold: "bg-[#e99816]/10 hover:bg-[#e99816]/20",
    "gold-dark": "bg-[#d4850d]/10 hover:bg-[#d4850d]/20",
    "gold-light": "bg-[#f0a928]/10 hover:bg-[#f0a928]/20",
  };
  const defaultTextColors = {
    gold: "text-[#e99816]",
    "gold-dark": "text-[#d4850d]",
    "gold-light": "text-[#f0a928]",
  };
  const defaultBorderColors = {
    gold: "border-[#e99816]/30 hover:border-[#e99816]",
    "gold-dark": "border-[#d4850d]/30 hover:border-[#d4850d]",
    "gold-light": "border-[#f0a928]/30 hover:border-[#f0a928]",
  };

  const bgColor = customColors?.bg || defaultBgColors[colorTheme];
  const textColor = customColors?.text || defaultTextColors[colorTheme];
  const borderColor = customColors?.border || defaultBorderColors[colorTheme];

  return (
    <div
      className={`relative w-full md:w-[280px] transition-all duration-500 hover:z-30 hover:scale-110 hover:shadow-2xl ${rotate} ${className}`}
    >
      <div className="bg-white dark:bg-neutral-900 p-3 rounded-sm shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] dark:shadow-none border border-neutral-200 dark:border-neutral-800 hover:border-[#e99816] dark:hover:border-[#e99816] transition-all duration-500">
        <Pin className={`w-8 h-8 ${textColor} z-20 mb-6 mx-auto transition-all duration-500 hover:scale-110`} />
        <div
          className={`${bgColor} border ${borderColor} rounded-sm p-6 h-full flex flex-col relative overflow-hidden transition-all duration-500`}
        >
          <span
            className={`${textColor} text-5xl font-bold mb-4 transition-all duration-500 hover:scale-110`}
          >
            {number}
          </span>
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 leading-none mb-3 transition-all duration-500 hover:translate-x-1">
            {title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed transition-all duration-500 hover:text-neutral-800 dark:hover:text-neutral-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export interface Step {
  title: string;
  description: string;
  colorTheme?: "gold" | "gold-dark" | "gold-light";
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface StepPosition {
  className?: string;
  rotate?: string;
}

export interface HowItWorksProps {
  features?: Step[];
  className?: string;
  stepPositions?: StepPosition[];
}

const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-0 md:left-[15%]", rotate: "rotate-4" },
  {
    className: "md:absolute md:top-[120px] md:right-[15%]",
    rotate: "-rotate-4",
  },
  { className: "md:absolute md:top-[450px] md:left-[15%]", rotate: "rotate-4" },
  {
    className: "md:absolute md:top-[570px] md:right-[10%]",
    rotate: "-rotate-4",
  },
  { className: "md:absolute md:top-[850px] md:left-[15%]", rotate: "rotate-4" },
];

export default function HowItWorks({
  features,
  className,
  stepPositions,
}: HowItWorksProps) {
  const defaultFeatures: Step[] = [
    {
      title: "Create Account",
      description:
        "Sign up in minutes. Enter your details and verify your email to get started.",
      colorTheme: "gold",
    },
    {
      title: "Verify Identity",
      description:
        "Complete your profile verification to ensure secure transactions and compliance.",
      colorTheme: "gold-dark",
    },
    {
      title: "Select Plan",
      description:
        "Choose from a variety of investment plans tailored to your financial goals.",
      colorTheme: "gold-light",
    },
    {
      title: "Analyze & Invest",
      description:
        "Review returns and make your first investment with confidence.",
      colorTheme: "gold",
    },
    {
      title: "Track Growth",
      description:
        "Monitor your portfolio in real-time and watch your wealth grow over time.",
      colorTheme: "gold-dark",
    },
  ];

  const data = features && features.length > 0 ? features : defaultFeatures;
  const positions = stepPositions || DEFAULT_CARD_POSITIONS;

  let height = 1130;
  if (data.length === 1) height = 400;
  else if (data.length === 2) height = 450;
  else if (data.length === 3) height = 800;
  else if (data.length === 4) height = 900;
  else height = 1130;

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`bg-white dark:bg-black max-md:pt-10 max-md:pb-25 md:py-20 px-8 relative ${className}`}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.15]"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
            backgroundSize: "100% 32px",
            marginTop: "4px",
          }}
        ></div>
        <div
          className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-[0.1]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "100% 32px",
            marginTop: "4px",
          }}
        ></div>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="relative w-full max-w-[1000px] mx-auto flex flex-col space-y-8 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
            style={{ "--md-height": `${height}px` } as React.CSSProperties}
          >
            {data.length > 1 && (
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                viewBox={`0 0 1000 ${height}`}
                preserveAspectRatio="none"
              >
                {(() => {
                  const pathD = data.reduce((acc, _, index) => {
                    if (index >= data.length - 1) return acc;
                    if (index === 0)
                      return "M 290 150 C 500 150, 550 270, 710 270"; // 1 -> 2
                    if (index === 1)
                      return acc + " C 850 270, 500 350, 290 450"; // 2 -> 3
                    if (index === 2)
                      return acc + " C 290 600, 550 720, 750 720"; // 3 -> 4
                    if (index === 3)
                      return acc + " C 950 720, 500 800, 290 850"; // 4 -> 5
                    return acc;
                  }, "");
                  return (
                    <m.path
                      d={pathD}
                      stroke="currentColor"
                      className="text-[#e99816]/30 dark:text-[#e99816]/50"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{
                        strokeDashoffset: -140, // Multiple of 14 (8+6) for seamless loop
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length];

              return (
                <Card
                  key={step.title}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  colorTheme={step.colorTheme || "gold"}
                  colors={step.colors}
                  rotate={position.rotate}
                  className={position.className}
                />
              );
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
