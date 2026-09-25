"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { api, ProcessStep } from "@/lib/api";

interface HowItWorksSectionProps {
  title?: string;
  description?: string;
}

export function HowItWorksSection({ title = "Our Process", description = "" }: HowItWorksSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>([])

  useEffect(() => {
    async function fetchProcessSteps() {
      try {
        const data = await api.getProcessSteps()
        setProcessSteps(data)
      } catch (error) {
        console.error('Failed to fetch process steps:', error)
      }
    }
    fetchProcessSteps()
  }, [])

  useEffect(() => {
    if (isPaused || processSteps.length === 0) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, processSteps.length]);

  const workflowSteps = processSteps

  if (workflowSteps.length === 0) {
    return null
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="process">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Main Immersive Card */}
        <motion.div
          className="w-full bg-white rounded-none border border-[#E8E8E8] shadow-[0_4px_40px_-2px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col relative"
          whileHover={{ y: -4, boxShadow: "0 12px 50px -4px rgba(0,0,0,0.08)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Top Bar */}
          <div className="flex justify-between items-center px-8 py-6 border-b border-[#E8E8E8]/60">
            <span className="text-[11px] font-bold tracking-[0.2em] text-black uppercase">{title}</span>
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-400">01 — {workflowSteps.length.toString().padStart(2, '0')}</span>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">

            {/* Left Image Section */}
            <div className="w-full lg:w-1/2 p-6 lg:p-8 h-[400px] lg:h-full">
              <div className="relative w-full h-full rounded-none overflow-hidden bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={workflowSteps[activeStep].image_url || workflowSteps[activeStep].image || '/images/placeholder-room.jpg'}
                      alt={workflowSteps[activeStep].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Text Section */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="flex flex-col max-w-lg"
                >
                  <span className="text-8xl lg:text-[120px] font-light text-gray-100 leading-none mb-4 -ml-2 tracking-tighter select-none">
                    {String(workflowSteps[activeStep].step_number || activeStep + 1).padStart(2, '0')}
                  </span>

                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-semibold tracking-widest text-primary uppercase">Step {activeStep + 1}</span>
                    <div className="h-[1px] w-12 bg-black/10"></div>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-black mb-6">
                    {workflowSteps[activeStep].title}
                  </h3>

                  <p className="text-lg text-gray-500 leading-relaxed mb-10 font-light">
                    {workflowSteps[activeStep].description}
                  </p>

                  <button className="flex items-center gap-2 text-sm font-semibold tracking-wide text-black hover:text-primary transition-colors group w-fit">
                    Explore process
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Timeline Section */}
          <div className="px-8 py-8 border-t border-[#E8E8E8]/60 bg-gray-50/30">
            <div className="flex items-center justify-between relative max-w-4xl mx-auto">

              {/* Timeline background line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-[#E8E8E8] -z-10" />

              {workflowSteps.map((step, index) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;

                return (
                  <button
                    key={step.id || index}
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                    className="relative flex flex-col items-center gap-4 group bg-white/0"
                  >
                    {/* Node */}
                    <div className="relative flex items-center justify-center">
                      <motion.div
                        className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${isActive ? 'border-black bg-black' : isPast ? 'border-black bg-white' : 'border-[#D1D1D1] bg-white'}`}
                      />
                      {/* Active indicator ring */}
                      {isActive && (
                        <motion.div
                          layoutId="activeRing"
                          className="absolute w-7 h-7 rounded-full border border-black/20"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>

                    {/* Label */}
                    <span className={`text-[10px] sm:text-xs font-semibold tracking-[0.15em] transition-all duration-300 ${isActive ? 'text-black scale-110' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {step.short_title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}