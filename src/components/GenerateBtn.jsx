// import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
// import {motion} from 'framer-motion'
// import { AppContext } from '../context/AppContext'
// import { useNavigate } from 'react-router-dom'

// const GenerateBtn = () => {
//   const [isHovered, setIsHovered] = useState(false)
//   const {user, setShowLogin} = useContext(AppContext)
//   const naviagte = useNavigate()

//   const onClickHandler = () =>{
//     if(user){
//       naviagte('/result')
//     }else{
//       setShowLogin(true)
//     }
//   }

//   const textVariants = {
//     initial: { 
//       opacity: 0,
//       y: 20,
//     },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         staggerChildren: 0.2,
//       }
//     }
//   }

//   const letterVariants = {
//     initial: { y: 20, opacity: 0 },
//     animate: { 
//       y: 0, 
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 10,
//         stiffness: 100
//       }
//     }
//   }

//   return (
//     <motion.div initial= {{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}} 
//     className='pb-16 text-center'>

//       <motion.h1 
//         className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold py-6 md:py-16 relative'
//         variants={textVariants}
//         initial="initial"
//         animate="animate"
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//       >
//         <motion.span 
//           variants={letterVariants}
//           className='text-neutral-800'
//         >
//           See the{' '}
//         </motion.span>
//         <motion.span
//           className='inline-block relative cursor-pointer'
//           whileHover={{
//             scale: 1.1,
//             transition: {
//               duration: 0.3,
//               ease: "easeOut"
//             }
//           }}
//         >
//           <motion.span
//             className='absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 blur-lg opacity-50'
//             animate={{
//               backgroundPosition: isHovered ? ["0%", "100%"] : "0%",
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "linear"
//             }}
//           />
//           <motion.span
//             className='relative bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent'
//             animate={{
//               backgroundPosition: isHovered ? ["0%", "200%"] : "0%",
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "linear"
//             }}
//             whileHover={{
//               rotate: [0, -3, 3, -3, 0],
//               transition: {
//                 duration: 0.5,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }
//             }}
//           >
//             magic
//           </motion.span>
//         </motion.span>
//         <motion.span 
//           variants={letterVariants}
//           className='text-neutral-800'
//         >
//           . Try now
//         </motion.span>
//       </motion.h1>

//       <motion.button 
//         onClick={onClickHandler} 
//         className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto cursor-pointer'
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         transition={{
//           type: "spring",
//           stiffness: 400,
//           damping: 15
//         }}
//       >
//         Generate Images
//         <img src={assets.star_group} alt="" className='h-6' />
//       </motion.button>

//     </motion.div>
//   )
// }

// export default GenerateBtn
import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const GenerateBtn = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 12, stiffness: 120 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="pb-24 text-center text-gray-200"
    >
      {/* Headline */}
      <motion.h1
        className="text-2xl md:text-3xl lg:text-4xl font-['Orbitron'] py-12"
        variants={textVariants}
        initial="initial"
        animate="animate"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.span variants={letterVariants} className="text-gray-300">
          See the{' '}
        </motion.span>

        {/* MAGIC */}
        <motion.span variants={letterVariants} className="text-gray-300">
          MAGIC..
        </motion.span>

        <motion.span variants={letterVariants} className="text-gray-300">
           And Try now
        </motion.span>
      </motion.h1>

      {/* CTA Button */}
      <motion.button
        onClick={onClickHandler}
        className="
          mt-10 px-14 py-4 rounded-xl
          bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
          text-black font-semibold
          inline-flex items-center gap-3
          shadow-[0_0_30px_rgba(0,246,255,0.6)]
        "
        whileHover={{
          scale: 1.07,
          boxShadow: '0 0 40px rgba(0,246,255,0.9)'
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        Generate Images
        <img src={assets.star_group} alt="stars" className="h-6" />
      </motion.button>
    </motion.div>
  );
};

export default GenerateBtn;
