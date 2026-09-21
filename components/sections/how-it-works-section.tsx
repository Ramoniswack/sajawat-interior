"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Box, Hammer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "1. Discovery & Consultation",
    description: "We begin with a deep dive into your vision, lifestyle needs, and personal aesthetic. Understanding you is our first priority.",
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
  },
  {
    title: "2. Design & Planning",
    description: "Our experts craft a bespoke design plan, curating materials, colors, and spatial layouts tailored exclusively for your space.",
    icon: <PenTool className="w-8 h-8 text-primary" />,
  },
  {
    title: "3. 3D Visualization",
    description: "Experience your future space before it's built with our high-fidelity 3D renderings and immersive virtual walkthroughs.",
    icon: <Box className="w-8 h-8 text-primary" />,
  },
  {
    title: "4. Execution & Delivery",
    description: "Our skilled craftsmen and project managers bring the vision to life, ensuring flawless execution down to the finest detail.",
    icon: <Hammer className="w-8 h-8 text-primary" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
};

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" id="process">
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.03 } }
            }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 flex justify-center flex-wrap"
          >
            {"How Sajawat Works".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="flex mr-2 last:mr-0">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } 
                      }
                    }}
                    className={word === "Sajawat" ? "text-primary" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A seamless journey from conceptualization to realization, designed to bring your dream space to life effortlessly.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Background Connector Line */}
          <div className="hidden lg:block absolute top-[52px] left-0 w-full h-0.5 bg-border/40 -z-20" />
          
          {/* Animated Connector Line */}
          <motion.div 
            className="hidden lg:block absolute top-[52px] left-0 h-0.5 bg-primary/40 -z-10" 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="relative group h-full"
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <Card className="h-full border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="bg-secondary/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 shadow-sm">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground/90 leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
