// import React from 'react'
// import {stepsData} from '../assets/assets'
// import { motion } from 'framer-motion'

// const Steps = () => {
//   return (
//     <motion.div
//       initial= {{opacity:0.2, y:100}} 
//       transition={{duration:1}} 
//       whileInView={{opacity:1, y:0}} 
//       viewport={{once:true}} 
//       className='flex flex-col items-center justify-center my-32'
//     >
//       <motion.h1 
//         className='text-3xl sm:text-4xl font-semibold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text'
//         style={{
//           WebkitTextFillColor: 'transparent',
//           backgroundSize: '200% 100%',
//           animation: 'gradient 3s linear infinite'
//         }}
//       >
//         How it Works
//       </motion.h1>
      
//       <motion.p 
//         className='text-lg text-gray-600 mb-8 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text'
//         style={{
//           WebkitTextFillColor: 'transparent',
//           backgroundSize: '200% 100%',
//           animation: 'gradient 3s linear infinite'
//         }}
//       >
//         Transform words Into Stunning Images
//       </motion.p>

//       <div className='space-y-4 w-full max-w-3xl text-sm'>
//         {stepsData.map((item, index)=>(
//           <motion.div 
//             key={index} 
//             className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border rounded-lg overflow-hidden relative group'
//             whileHover={{ 
//               scale: 1.02,
//               transition: { duration: 0.2 }
//             }}
//           >
//             <div className='absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
            
//             <div className='relative z-10 bg-white/80 p-2 rounded-full group-hover:bg-white transition-colors duration-300'>
//               <img src={item.icon} alt="" className="w-6 h-6" />
//             </div>
            
//             <div className='relative z-10'>
//               <motion.h2 
//                 className='text-xl font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500'
//                 style={{
//                   WebkitTextFillColor: 'transparent',
//                   transition: 'all 0.3s ease'
//                 }}
//               >
//                 {item.title}
//               </motion.h2>
//               <p className='text-gray-500 group-hover:text-gray-700 transition-colors duration-300'>
//                 {item.description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           100% { background-position: 200% 50%; }
//         }
//       `}</style>
//     </motion.div>
//   )
// }

// export default Steps
import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-32 px-6 text-gray-200"
    >
      {/* Heading */}
      <motion.h1
        className="
  mt-10 text-3xl sm:text-5xl lg:text-6xl
  font-['Orbitron'] max-w-4xl leading-tight
  text-white
"

      >
        How It Works
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400 mb-12 text-center"
      >
        Transform words into stunning AI visuals
      </motion.p>

      {/* Steps */}
      <div className="space-y-6 w-full max-w-3xl">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="
              relative flex items-start gap-5 p-6
              glass border border-white/10
              rounded-2xl overflow-hidden
            "
          >
            {/* Glow on hover */}
            <div className="
              absolute inset-0 opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
              bg-gradient-to-r from-neon/10 to-glow/10
            " />

            {/* Icon */}
            <div className="
              relative z-10 flex items-center justify-center
              w-12 h-12 rounded-xl
              bg-black/40 border border-neon/30
              shadow-[0_0_20px_rgba(0,246,255,0.4)]
            ">
              <img src={item.icon} alt="" className="w-6 h-6" />
            </div>

            {/* Text */}
            <div className="relative z-10">
              <h2
                className="
                  text-xl font-semibold mb-1
                  bg-gradient-to-r from-neon to-glow
                  bg-clip-text text-transparent
                "
              >
                {item.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;

