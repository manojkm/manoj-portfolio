'use client'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image";

const featuredProjects = [
  {
    title: "Trivand.com",
    desc: "Official website for Trivand Technologies - a comprehensive business website featuring responsive design, modern UI/UX, and seamless user experience.",
    stack: "WordPress, HTML5, CSS3, JavaScript, Responsive Design",
    url: "https://www.trivand.com",
    src: "/assets/projects/trivand.png",
    category: "Business Website"
  },
  {
    title: "Granite Zone UK",
    desc: "E-commerce platform for granite and stone products in the UK market. A large granite worktop supplier in the UK. Features include product catalog, shopping cart, and payment integration.",
    stack: "WordPress, WooCommerce, PHP, CSS3, JavaScript",
    url: "https://www.granitezone.co.uk",
    src: "/assets/projects/granite_zone.png",
    category: "E-Commerce"
  },
  {
    title: "Trendy Men UK",
    desc: "Fashion e-commerce store specializing in men's clothing and accessories. Built with focus on user experience and seamless checkout process.",
    stack: "Shopify, Liquid, CSS3, JavaScript",
    url: "https://www.trendymen.co.uk",
    src: "/assets/projects/trendy_men.png",
    category: "E-Commerce"
  },

]

const allProjects = {
  ecommerce: [

    { name: "Trendy Men - UK", url: "https://www.trendymen.co.uk", platform: "Shopify" },
    { name: "Ferris Music - UK", url: "https://ferrismusic.com", platform: "Shopify" },
    { name: "TekEir - UK", url: "https://www.tekeir.com", platform: "Shopify" },
    { name: "Renewables Merchant - UK", url: "https://www.renewablesmerchant.co.uk", platform: "Magento" },
    { name: "Performance Lights - UK", url: "https://www.performancelights.co.uk", platform: "Magento" },
    { name: "W&E Shirley Ltd - UK", url: "https://www.shirleyagri.com", platform: "Magento" },
    { name: "Henderson Bearings - UK", url: "http://www.hendersonbearings.co.uk", platform: "Magento" },
    { name: "Power Enhancer - UK", url: "https://www.powerenhancer.co.uk", platform: "WooCommerce" },
    { name: "Grosvenor Furniture - UK", url: "https://www.grosvenorfurniture.com", platform: "WooCommerce" },
    { name: "Instalights - UK", url: "https://www.instalights.co.uk", platform: "Magento" },
    { name: "Carovan - UK", url: "https://www.carovan.co.uk", platform: "Magento" },
    { name: "Flame Fireplaces - UK", url: "https://www.flamefires.com", platform: "Magento" },
    { name: "Stove Bay - UK", url: "https://www.stovebay.com", platform: "Magento" },
    { name: "Stove Spares Direct - UK", url: "https://www.stovesparesdirect.com", platform: "Magento" },
    { name: "Biggest Little Shop Online - UK", url: "https://www.biggestlittleshoponline.com", platform: "Magento" },
    { name: "SISTO-X Magnetics - UK", url: "https://www.sisto-x.com", platform: "Magento" },
    { name: "Partystore Systems - UK", url: "https://www.partystoresystems.com", platform: "Magento" },
    { name: "Home Health - UK", url: "https://homehealth-uk.com", platform: "WooCommerce" },
    { name: "Lancashire Lighting - UK", url: "https://www.lancashirelighting.co.uk", platform: "Magento" },
    { name: "Lighting At Home - UK", url: "https://www.lightingathome.co.uk", platform: "Magento" },
    { name: "MAGISNAT OMICS LLC - US", url: "https://www.magisnatstore.com", platform: "WooCommerce" },
    { name: "Vulu Tech - UK", url: "https://www.vulutech.co.uk", platform: "Magento" },
    { name: "The Leather Bag Co. - UK", url: "https://www.theleatherbagco.com", platform: "Magento" },
    { name: "JR Games Ltd - UK", url: "https://www.jrgames.ie", platform: "Shopify" },
    { name: "Cello Express - UK", url: "https://celloexpress.co.uk", platform: "WooCommerce" },
    { name: "Boulder Formats - IRE", url: "https://www.boulderformats.ie", platform: "Magento" },
    { name: "Dubai Lighting - AE", url: "https://www.dubailighting.ae", platform: "Magento" },
    { name: "Digitronic Essex - UK", url: "https://www.g4gadgets.co.uk", platform: "Magento" },
    { name: "Gracee Jewellery Ltd - UK", url: "https://www.graceejewellery.co.uk", platform: "Magento" },
    { name: "Lubricant Technology - UK", url: "https://www.lubetechshop.co.uk", platform: "WooCommerce" },
    { name: "Watch Strap World - UK", url: "https://www.watchstrapworld.com", platform: "Magento" },

  ],
  ebay: [
    { name: "Duckhams Official Store", url: "https://www.ebay.co.uk/itm/157537347107" },
  ],
  business: [
    { name: "Trivand.com", url: "https://www.trivand.com", platform: "WordPress" },
    { name: "e shop electricals", url: "https://eshoptvm.com", platform: "WordPress" },
    { name: "Granite Zone - UK", url: "https://www.granitezone.co.uk", platform: "WordPress" },
    { name: "Transpo Assist - US", url: "https://www.transpoassist.com", platform: "WordPress" },
    { name: "Heatiq - UK", url: "https://www.heatiq.co.uk", platform: "WordPress" },
    { name: "DHS Trucking - US", url: "https://www.dhstruck.com", platform: "WordPress" },
    { name: "Stack It High NI - UK", url: "https://www.stackithighni.co.uk", platform: "WordPress" },
    { name: "Arasys Aesthetics Clinic - UK", url: "https://arasys.spiderdns.co.uk", platform: "WordPress" },
    { name: "Keohane Consulting - IRE", url: "https://www.keohane.ie", platform: "WordPress" },
    { name: "Green Quantum Limited - US", url: "https://greenquantum.co", platform: "WordPress" },
    { name: "GoFly Holidays", url: "https://goflyholidays.com", platform: "WordPress" },
    { name: "Patlers", url: "https://petlers.com", zzatform: "WordPress" },
    { name: "Lanweys", url: "https://lanweys.in", platform: "WordPress" },
    { name: "Sri Lanka Luxury Property", url: "https://srilankaluxuryproperty.com", platform: "WordPress" },
  ],
  webApplications: [
    { name: "Horizon Claim Management", url: "https://figma.fun/vcdSeH", platform: "Figma" },
    { name: "Vehicle Inspection Mobile App - Vision", url: "https://figma.fun/3diGhr", platform: "Figma" },
    { name: "Vehicle Claims Reporter Mobile App - Vision", url: "https://figma.fun/gqv8xW", platform: "Figma" },
    { name: "STARR Insurance", url: "https://figma.fun/hhtcqQ", platform: "Figma" },
  ]
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('featured')
  const [activeCategory, setActiveCategory] = useState('ecommerce')

  return (
    <section className='py-24 relative overflow-hidden' id='projects'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-8 md:mb-12'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8'>
            <span className='text-[#E48A57]'>Projects</span>
          </h2>

          {/* Main Tabs */}
          <div className='flex justify-center gap-2 mb-8'>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${activeTab === 'featured'
                ? 'bg-[#E48A57] text-black'
                : 'bg-gray-800/50 text-white/70 hover:text-white hover:bg-gray-800/70'
                }`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${activeTab === 'all'
                ? 'bg-[#E48A57] text-black'
                : 'bg-gray-800/50 text-white/70 hover:text-white hover:bg-gray-800/70'
                }`}
            >
              All
            </button>
          </div>
        </motion.div>

        {/* Featured Tab Content */}
        {activeTab === 'featured' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='space-y-8 md:space-y-10'
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-gray-900/40 border border-gray-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-gray-900/60 hover:border-gray-700 transition-all duration-300 group'
              >
                <div className='flex flex-col md:flex-row gap-6 items-start'>
                  {/* Project Image */}
                  <div className='w-full md:w-1/3 flex-shrink-0'>
                    <div className='relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/30 aspect-3/3'>
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        className='object-contain transition-transform duration-500 group-hover:scale-105'
                      />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className='flex-1 space-y-4'>
                    <div className='flex items-start justify-between gap-4'>
                      <div className='flex-1'>
                        <div className='flex items-center gap-3 mb-2'>
                          <span className='px-3 py-1 bg-[#E48A57]/10 border border-[#E48A57]/20 rounded-full text-[#E48A57] text-xs font-medium'>
                            {project.category}
                          </span>
                        </div>
                        <h3 className='text-xl md:text-2xl font-bold text-white group-hover:text-[#E48A57] transition-colors duration-300 mb-2'>
                          {project.title}
                        </h3>
                        <p className='text-sm md:text-base text-white/70 leading-relaxed'>
                          {project.desc}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className='flex flex-wrap gap-2'>
                      {project.stack.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className='px-2.5 py-1 bg-gray-800/50 border border-gray-700/50 rounded-md text-xs text-white/60'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Visit Link */}
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className='inline-flex items-center gap-2 text-[#E48A57] hover:text-[#DBAF6E] transition-colors duration-300 text-sm font-medium'
                    >
                      <span>Visit Website</span>
                      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* All Tab Content */}
        {activeTab === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='space-y-6'
          >
            {/* Category Sub-Tabs */}
            <div className='flex flex-wrap justify-center gap-2 mb-8'>
              {Object.keys(allProjects).map((category) => {
                const categoryNames = {
                  ecommerce: 'E-Commerce',
                  ebay: 'eBay',
                  business: 'Business',
                  webApplications: 'React / NextJS / Angular Web Apps'
                }
                const count = allProjects[category].length
                if (count === 0) return null

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === category
                      ? 'bg-[#E48A57] text-black'
                      : 'bg-gray-800/50 text-white/70 hover:text-white hover:bg-gray-800/70'
                      }`}
                  >
                    {categoryNames[category]} ({count})
                  </button>
                )
              })}
            </div>

            {/* Project Links List */}
            <div className='space-y-2'>
              {allProjects[activeCategory].map((project, index) => {
                // Platform badge colors
                const platformColors = {
                  'WordPress': { bg: 'bg-[#21759B]/20', border: 'border-[#21759B]/40', text: 'text-[#21759B]' },
                  'Shopify': { bg: 'bg-[#96BF48]/20', border: 'border-[#96BF48]/40', text: 'text-[#96BF48]' },
                  'Magento': { bg: 'bg-[#EE672F]/20', border: 'border-[#EE672F]/40', text: 'text-[#EE672F]' },
                  'eBay': { bg: 'bg-[#0064D2]/20', border: 'border-[#0064D2]/40', text: 'text-[#0064D2]' },
                }
                const platformStyle = project.platform ? platformColors[project.platform] || platformColors['WordPress'] : null
                const cleanUrl = project.url.replace(/^https?:\/\//, '').replace(/^www\./, '')

                return (
                  <motion.a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 8 }}
                    className='flex items-center justify-between p-3 bg-gray-900/40 border border-gray-800 rounded-lg backdrop-blur-sm hover:bg-gray-900/60 hover:border-gray-700 transition-all duration-300 group'
                  >
                    <div className='flex items-center gap-3 flex-1 min-w-0'>
                      <div className='w-1.5 h-1.5 rounded-full bg-[#E48A57] flex-shrink-0'></div>
                      <div className='flex items-center gap-2 min-w-0 flex-1'>
                        <span className='text-white group-hover:text-[#E48A57] min-w-[280px] max-w-[280px] transition-colors duration-300 truncate text-sm leading-tight'>
                          {project.name}
                        </span>

                        <span className='flex items-center text-white/70 text-sm truncate leading-tight gap-2'>
                          <span className='text-white/40 text-xs flex-shrink-0 leading-tight'>
                            •
                          </span>
                          {cleanUrl}
                          <svg
                            className='w-4 h-4 text-white/40 group-hover:text-[#E48A57] transition-colors duration-300 flex-shrink-0'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center gap-2 flex-shrink-0 ml-2'>
                      {project.platform && platformStyle && (
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${platformStyle.bg} ${platformStyle.border} ${platformStyle.text}`}>
                          {project.platform}
                        </span>
                      )}

                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
