// import React from 'react'
// import {motion} from 'framer-motion'

// const Gallery = () => {
//   return (
//     <motion.div initial={{opacity:0.2, y:100}}
//       transition={{duration:1}}
//       whileInView={{opacity:1, y:0}}
//       viewport={{once:true}} className='min-h-[80vh] text-center pt-14 mb-10'>

//       <h1 className='text-center text-3xl font-medium mb-12 sm:mb-6'>We're Crafting Magic..Stay Tuned</h1>
//       <br />
//       <h1 className='text-center text-3xl font-medium mb-12 sm:mb-6'>Coming Soon</h1>
      
//     </motion.div>
//   )
// }

// export default Gallery;
import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-[80vh] py-24 px-6 text-gray-200"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl font-['Orbitron'] font-semibold mb-4
                     bg-gradient-to-r from-neon to-glow bg-clip-text text-transparent"
        >
          VisionX Gallery
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-16">
          A curated space to explore, manage and showcase all your AI-generated creations.
        </p>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {Array(8).fill('').map((_, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0,246,255,0.35)'
              }}
              className="
                glass rounded-xl h-40
                border border-white/10
                flex items-center justify-center
                text-gray-500 text-sm
              "
            >
              Image Preview
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500">
          🚀 Gallery features including filters, downloads and favorites are coming soon.
        </p>
      </div>
    </motion.div>
  );
};

export default Gallery;

