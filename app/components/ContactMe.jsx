'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div className='py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8' id="contacts">
      <div className='max-w-4xl mx-auto'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16'
        >
          Let's <span className='text-[#E48A57]'>Collaborate</span>
        </motion.h1>

        <div className='flex flex-col items-center space-y-6 md:space-y-8'>
          {/* Email - Large Font */}
          <motion.a
            href="mailto:manoj.trivand@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white hover:text-[#E48A57] transition-colors duration-300'
          >
            manoj.trivand@gmail.com
          </motion.a>

          {/* Phone - Small Font */}
          <motion.a
            href="tel:+919746022400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-sm sm:text-base md:text-lg text-white/60 hover:text-white/80 transition-colors duration-300'
          >
            +91 97460 22400
          </motion.a>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex space-x-4 pt-2'
          >
            <a
              href="https://www.linkedin.com/in/manoj-the-dev"
              target="_blank"
              rel="noopener noreferrer"
              className='w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-white/70 hover:text-[#E48A57] hover:bg-gray-800/80 hover:border-[#E48A57]/40 transition-all duration-300'
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/manojkm/"
              target="_blank"
              rel="noopener noreferrer"
              className='w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-white/70 hover:text-[#E48A57] hover:bg-gray-800/80 hover:border-[#E48A57]/40 transition-all duration-300'
            >
              <FaGithub size={20} />
            </a>
            {/* <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className='w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-white/70 hover:text-[#E48A57] hover:bg-gray-800/80 hover:border-[#E48A57]/40 transition-all duration-300'
            >
              <FaInstagram size={20} />
            </a> */}
          </motion.div>

          {/* Download CV Button */}
          <motion.a
            href='/assets/resume/resume_frontend_developer_manojkm_v1.pdf'
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#DBAF6E',
              boxShadow: '0 10px 25px rgba(228, 138, 87, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className='mt-4 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 bg-[#E48A57] text-black font-medium shadow-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl text-sm sm:text-base'
          >
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 16l-5-5h3V4h4v7h3l-5 5zm-7 4h14v-2H5v2z' />
            </svg>
            Download CV
          </motion.a>

          {/* Built by and Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='pt-8 md:pt-12 text-center'
          >
            <p className='text-white/40 text-xs sm:text-sm'>
              Built by Manoj KM | Last Updated: December 5, 2025
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
