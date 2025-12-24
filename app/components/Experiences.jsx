"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

const experiencesData = [
  {
    id: "eseller-2014",
    role: "Senior Front-End Developer / Lead UI/UX Designer",
    org: "eSeller Technologies Pvt. Ltd.",
    location: "Technopark, Trivandrum, India",
    dates: "April 2014 – Present",
    logo: "/assets/experiences/eseller.png",
  },
  {
    id: "trivand-2010",
    role: "Senior Front-End Developer",
    org: "Trivand Technologies Pvt. Ltd.",
    location: "Technopark, Trivandrum, India",
    dates: "Jan 2010 – Mar 2014",
    logo: "/assets/experiences/trivand.png",
  },
  {
    id: "anantix-2009",
    role: "Web Designer",
    org: "Anantix Life Sciences (P) Ltd. – Bioworld",
    location: "East Fort, Trivandrum, India",
    dates: "Jan 2009 – Dec 2009",
    logo: "/assets/experiences/bioWORLD.png",
  }
]

function ExperienceCard({ experience }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(228, 138, 87, 0.15)',
        borderColor: '#E48A57'
      }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900/40 border border-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm hover:bg-gray-900/60 transition-all duration-75 group"
    >
      <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-xl overflow-hidden bg-white border border-gray-700 flex-shrink-0 group-hover:border-[#E48A57] transition-colors duration-300"
        >
          <Image src={experience.logo} alt={`${experience.org} logo`} fill sizes="128px" className="object-contain p-2 rounded-xl" />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#E48A57] transition-colors duration-300">
            {experience.role}
          </h3>
          <p className="text-[#98B4CE] font-medium group-hover:text-[#DBAF6E] transition-colors duration-300">{experience.org}</p>
          <p className="text-white/70 text-sm">{experience.location} • {experience.dates}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experiences() {
  return (
    <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 md:py-20 lg:py-24" id="experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        >
          My <span className='text-[#E48A57]'>Experience</span>
        </motion.h2>

        <div className="mt-8 md:mt-12 lg:mt-14 space-y-6 md:space-y-8 lg:space-y-10">
          {experiencesData.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
