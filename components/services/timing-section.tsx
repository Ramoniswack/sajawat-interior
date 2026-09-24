"use client"

import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import { MessageCircle, Palette, FileText, Hammer, Gift } from "lucide-react"



export function TimingSection() {
  const { scrollYProgress } = useScroll()

  return (
      <div id="timing" className="w-full pt-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute inset-0 overflow-hidden"
          >
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#e99816]/5 blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-[#e99816]/5 blur-3xl"
            />
          </motion.div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <span
                  className="inline-block rounded-none border border-[#e99816] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#e99816]"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    letterSpacing: '0.05em',
                  }}
                >
                  Project Timeline
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-6 text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                Timing & Schedule
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="block text-[#e99816]"
                >
                  Your Project Timeline
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Understanding our project timeline helps you plan effectively. We provide clear schedules and milestones for every phase of your interior design journey.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-background"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2
                className="mb-4 text-3xl font-light text-foreground md:text-4xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                Project Phases
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto max-w-2xl text-base text-muted-foreground"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  fontWeight: 300,
                }}
              >
                Each phase is carefully planned to ensure quality and timely delivery
              </motion.p>
            </motion.div>

            <div className="relative">
              {/* Animated Timeline Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e99816] to-[#e99816]/20 origin-top"
              />

              <div className="space-y-12">
                {[
                  {
                    phase: "Phase 1",
                    title: "Initial Consultation",
                    duration: "1-2 weeks",
                    description: "Initial meeting, site assessment, and requirement gathering. We understand your vision and establish project scope.",
                    icon: <MessageCircle className="h-6 w-6 text-[#e99816]" />
                  },
                  {
                    phase: "Phase 2",
                    title: "Design Development",
                    duration: "3-4 weeks",
                    description: "Concept development, mood boards, space planning, and detailed design presentations. Multiple iterations until approval.",
                    icon: <Palette className="h-6 w-6 text-[#e99816]" />
                  },
                  {
                    phase: "Phase 3",
                    title: "Documentation & Procurement",
                    duration: "2-3 weeks",
                    description: "Final drawings, material selection, vendor coordination, and procurement planning. All specifications documented.",
                    icon: <FileText className="h-6 w-6 text-[#e99816]" />
                  },
                  {
                    phase: "Phase 4",
                    title: "Implementation",
                    duration: "6-12 weeks",
                    description: "Construction, installation, and project management. Regular site visits and progress updates throughout execution.",
                    icon: <Hammer className="h-6 w-6 text-[#e99816]" />
                  },
                  {
                    phase: "Phase 5",
                    title: "Final Handover",
                    duration: "1 week",
                    description: "Final inspection, snag list completion, styling, and project handover. Training on maintenance if required.",
                    icon: <Gift className="h-6 w-6 text-[#e99816]" />
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                      whileHover={{ 
                        scale: 1.3,
                        boxShadow: "0 0 20px rgba(233, 152, 22, 0.6)"
                      }}
                      className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#e99816] rounded-full border-4 border-background z-10 -translate-x-1/2 cursor-pointer"
                    />

                    {/* Animated Connection Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
                      className={`absolute left-8 md:left-1/2 top-1/2 w-8 md:w-24 h-0.5 bg-gradient-to-r from-[#e99816] to-[#e99816]/30 origin-left ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`}
                    />

                    {/* Content Card */}
                    <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                        whileHover={{ 
                          scale: 1.03, 
                          y: -8,
                          boxShadow: "0 20px 40px rgba(233, 152, 22, 0.15)",
                          borderColor: "#e99816"
                        }}
                        className="border border-border bg-card p-6 transition-all hover:border-[#e99816] hover:shadow-xl relative overflow-hidden"
                        style={{ borderRadius: "0" }}
                      >
                        {/* Animated Background Pattern */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 0.1 }}
                          className="absolute inset-0 bg-gradient-to-br from-[#e99816] to-transparent"
                        />
                        
                        {/* Phase Number */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
                          className="absolute top-4 right-4 opacity-20"
                        >
                          {item.icon}
                        </motion.div>

                        <div className="relative z-10">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 0.7 }}
                            className="mb-3 flex items-center gap-2"
                          >
                            {item.icon}
                            <div className="text-sm font-medium text-[#e99816] uppercase tracking-wider">
                              {item.phase}
                            </div>
                          </motion.div>
                          <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 0.8 }}
                            className="mb-3 text-xl font-medium text-foreground"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                              WebkitFontSmoothing: 'antialiased',
                              MozOsxFontSmoothing: 'grayscale',
                              letterSpacing: '0.02em',
                            }}
                          >
                            {item.title}
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 0.9 }}
                            className="text-sm text-muted-foreground leading-relaxed mb-4"
                            style={{
                              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                              WebkitFontSmoothing: 'antialiased',
                              MozOsxFontSmoothing: 'grayscale',
                              fontWeight: 300,
                            }}
                          >
                            {item.description}
                          </motion.p>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 1.0 }}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "rgba(233, 152, 22, 0.2)"
                            }}
                            className="inline-block bg-[#e99816]/10 px-3 py-1 transition-colors"
                          >
                            <span className="text-sm font-medium text-[#e99816]">{item.duration}</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Important Notes */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-muted/30"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2
                className="mb-4 text-3xl font-light text-foreground md:text-4xl"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                Important Notes
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Timeline Variations",
                  description: "Timelines may vary based on project complexity, size, and client response time. We provide realistic estimates and keep you informed of any changes."
                },
                {
                  title: "Client Availability",
                  description: "Your timely feedback and approvals are crucial for maintaining the schedule. We schedule regular check-ins to ensure smooth progress."
                },
                {
                  title: "Material Lead Times",
                  description: "Custom materials and furniture may have longer lead times. We factor these into our planning and offer alternatives when needed."
                },
                {
                  title: "Quality Assurance",
                  description: "We never compromise quality for speed. Our timelines include adequate time for quality checks and refinements at each stage."
                }
              ].map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="border border-border bg-card p-6 transition-all hover:border-[#e99816] hover:shadow-lg"
                  style={{ borderRadius: "0" }}
                >
                  <h3 className="mb-3 text-lg font-medium text-foreground">{note.title}</h3>
                  <p className="text-sm text-muted-foreground" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    fontWeight: 300,
                  }}>
                    {note.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-[#e99816]"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-3xl font-light text-white md:text-4xl"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                letterSpacing: '0.02em',
              }}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-lg text-white/90"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontWeight: 300,
              }}
            >
              Contact us to discuss your timeline and get a personalized project schedule.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="button-hover inline-block rounded-none bg-white px-8 py-4 text-sm font-medium text-[#e99816] transition-colors hover:bg-gray-100"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  letterSpacing: '0.02em',
                }}
              >
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
  )
}