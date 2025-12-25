'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { SiMagento } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiAdobe } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { SiRadixui } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { id: 1, name: 'React', icon: <FaReact size={48} />, color: '#61DAF8', level: 75 },
      { id: 2, name: 'Next.js', icon: <SiNextdotjs size={48} />, color: '#FAFAFA', level: 75 },
      { id: 4, name: 'JavaScript', icon: <SiJavascript size={48} />, color: '#F7DF1E', level: 75 },
      { id: 5, name: 'HTML5', icon: <SiHtml5 size={48} />, color: '#E34F26', level: 75 },
      { id: 6, name: 'CSS3', icon: <SiCss3 size={48} />, color: '#1572B6', level: 75 },
      { id: 7, name: 'Tailwind CSS', icon: <RiTailwindCssFill size={48} />, color: '#38BDF8', level: 75 },
      { id: 3, name: 'TypeScript', icon: <SiTypescript size={48} />, color: '#3178C6', level: 75 },

      { id: 8, name: 'Redux Toolkit', icon: <SiRedux size={48} />, color: '#764ABC', level: 75 },
      { id: 24, name: 'GSAP', icon: <FaCode size={48} />, color: '#88CE02', level: 75 },
      { id: 25, name: 'Framer Motion', icon: <SiFramer size={48} />, color: '#0055FF', level: 75 },
      { id: 26, name: 'Sass', icon: <SiSass size={48} />, color: '#CC6699', level: 75 },
      { id: 27, name: 'Bootstrap', icon: <SiBootstrap size={48} />, color: '#7952B3', level: 75 },
      { id: 28, name: 'Shadc / Radix UI', icon: <SiRadixui size={48} />, color: '#FFFFFF', level: 75 },
    ]
  },
  {
    name: "CMS & E-Commerce",
    skills: [
      { id: 9, name: 'WordPress', icon: <SiWordpress size={48} />, color: '#21759B', level: 75 },
      { id: 10, name: 'Shopify', icon: <SiShopify size={48} />, color: '#96BF48', level: 75 },
      { id: 11, name: 'Magento', icon: <SiMagento size={48} />, color: '#EE672F', level: 75 },
    ]
  },
  {
    name: "UI/UX Design",
    skills: [
      { id: 14, name: 'Figma', icon: <SiFigma size={48} />, color: '#F24E1E', level: 75 },
      { id: 15, name: 'Adobe XD', icon: <SiAdobexd size={48} />, color: '#FF61F6', level: 75 },
      { id: 16, name: 'Adobe Photoshop', icon: <SiAdobe size={48} />, color: '#31A8FF', level: 75 },
      { id: 17, name: 'Adobe Illustrator', icon: <SiAdobe size={48} />, color: '#FF9A00', level: 75 },
    ]
  },
  {
    name: "Backend & Database",
    skills: [
      { id: 12, name: 'Prisma', icon: <SiPrisma size={48} />, color: '#2D3748', level: 75 },
      { id: 13, name: 'PostgreSQL', icon: <SiPostgresql size={48} />, color: '#336791', level: 75 },
      { id: 18, name: 'Supabase', icon: <SiSupabase size={48} />, color: '#3ECF8E', level: 75 },
      { id: 19, name: 'MySQL', icon: <SiMysql size={48} />, color: '#4479A1', level: 75 },
      { id: 20, name: 'PHP', icon: <SiPhp size={48} />, color: '#777BB4', level: 75 },
      { id: 21, name: 'Docker', icon: <SiDocker size={48} />, color: '#2496ED', level: 75 },
      { id: 22, name: 'MongoDB', icon: <SiMongodb size={48} />, color: '#47A248', level: 75 },
      { id: 23, name: 'Mongoose', icon: <SiMongodb size={48} />, color: '#880000', level: 75 },
      { id: 29, name: 'Node.js', icon: <SiNodedotjs size={48} />, color: '#339933', level: 75 },
      { id: 30, name: 'Express.js', icon: <SiExpress size={48} />, color: '#FFFFFF', level: 75 },
    ]
  }
];

export default function Skills() {
  return (
    <section className='py-24 relative overflow-hidden' id='skills'>

      <div className='max-w-4xl mx-auto px-6 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 md:mb-16 lg:mb-20'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6'>
            My <span className='text-[#E48A57]'>Skills</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed px-4'>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className='space-y-12 md:space-y-16 lg:space-y-20'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className='space-y-12'
            >
              {/* Category Header */}
              <div className='text-center'>
                <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3'>
                  {category.name}
                </h3>
                <div className='w-16 h-0.5 bg-gradient-to-r from-[#E48A57] to-[#98B4CE] mx-auto rounded-full opacity-60'></div>
              </div>

              {/* Skills Grid */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.08 }}
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                    }}
                    className='group'
                  >
                    {/* Skill Card */}
                    <div className='relative bg-gray-900/50 border border-gray-800/30 rounded-xl p-6 hover:bg-gray-900/30 hover:border-gray-700/50 transition-all duration-300 h-full'>
                      <div className='flex flex-col items-center text-center space-y-5'>
                        {/* Icon */}
                        <div className='relative'>
                          <div
                            className='absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                            style={{ backgroundColor: skill.color }}
                          ></div>
                          <div
                            className='relative transition-transform duration-300 group-hover:scale-110'
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </div>
                        </div>

                        {/* Skill Name */}
                        <h4 className='text-base font-medium text-white group-hover:text-[#E48A57] transition-colors duration-300'>
                          {skill.name}
                        </h4>

                        {/* Skill Level */}
                        <div className='w-full space-y-2'>
                          <div className='flex justify-between text-xs text-white/50 mb-2'>
                            <span>Proficiency</span>
                            <span className='font-medium'>{skill.level}%</span>
                          </div>
                          <div className='w-full bg-gray-800/30 rounded-full h-1.5 overflow-hidden'>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.2, delay: 0.3 + skillIndex * 0.05, ease: "easeOut" }}
                              className='h-full rounded-full transition-all duration-500'
                              style={{
                                background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})`,
                                boxShadow: `0 0 8px ${skill.color}30`
                              }}
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-24 text-center'
        >
          <div className='bg-gray-900/20 border border-gray-800/30 rounded-2xl p-10 backdrop-blur-sm hover:bg-gray-900/30 hover:border-gray-700/50 transition-all duration-300'>
            <h3 className='text-2xl font-semibold text-white mb-4'>
              Always Learning
            </h3>
            <p className='text-white/60 max-w-2xl mx-auto leading-relaxed'>
              I'm constantly expanding my skill set and exploring new technologies to stay current with industry trends and deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

