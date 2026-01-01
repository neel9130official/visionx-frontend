// import React from 'react';
// import {motion} from 'framer-motion';


// const Features = () => {
//   return (
//     <motion.div initial={{opacity:0.2, y:100}}
//         transition={{duration:1}}
//         whileInView={{opacity:1, y:0}}
//         viewport={{once:true}} className='min-h-[80vh] text-center pt-14 mb-10'>

//         <h1 className='text-center text-3xl font-medium mb-12 sm:mb-6'>Features are on the way..Stay Tuned</h1>
//         <br />
//         <h1 className='text-center text-3xl font-medium mb-12 sm:mb-6'>Coming Soon</h1>
      
//     </motion.div>
//   )
// }

// export default Features;
import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const upcomingFeatures = [
    {
      title: 'Advanced Prompt Controls',
      desc: 'Fine-tune lighting, camera angle, resolution and artistic style.'
    },
    {
      title: 'Image History & Versions',
      desc: 'Access, compare and download all previously generated images.'
    },
    {
      title: 'Style Presets',
      desc: 'Save and reuse your favorite AI art styles instantly.'
    },
    {
      title: 'High-Resolution Exports',
      desc: 'Download ultra-HD images optimized for print and web.'
    }
  ];

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
          Features Coming Soon
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-16">
          VisionX is evolving. These powerful features are currently under development
          and will be available in upcoming releases.
        </p>

        {/* Feature Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(0,246,255,0.35)'
              }}
              transition={{ duration: 0.3 }}
              className="
                glass p-8 rounded-2xl
                border border-white/10
                text-left
              "
            >
              <h3
                className="text-xl font-semibold mb-2
                           bg-gradient-to-r from-neon to-glow
                           bg-clip-text text-transparent"
              >
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-20 text-sm text-gray-500">
          🚀 More features are actively being designed and tested.
        </p>
      </div>
    </motion.div>
  );
};

export default Features;

