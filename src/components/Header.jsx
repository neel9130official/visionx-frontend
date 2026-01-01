// import React, { useContext } from 'react'
// import { assets } from '../assets/assets'
// import { motion } from "motion/react"
// import { AppContext } from '../context/AppContext'
// import { useNavigate } from 'react-router-dom'
// const Header = () => {

//   const {user, setShowLogin} = useContext(AppContext)
//   const navigate = useNavigate()

//   const onClickHandler = () =>{
//     if(user){
//       navigate('/result')
//     }else{
//       setShowLogin(true)
//     }
//   }

//   return (
//     <motion.div className='flex flex-col justify-center items-center text-center my-20' initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>

//         <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500' initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.8}}>
//             <p>Best Text to image generator</p>
//             <img src={assets.star_icon} alt="" />
//         </motion.div>

//         <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-600' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4, duration:2}}>image</span>, in seconds</motion.h1>

//         <motion.p className='text-center max-w-xl mx-auto mt-5' initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.6, duration:0.8}}>Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen</motion.p>

//         <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full cursor-pointer' whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1}}}>Generate Images
//             <img className='h-6' src={assets.star_group} alt="" />
//         </motion.button>
        
//         <motion.div
//          initial={{opacity:0}}
//          animate={{opacity:1}}
//          transition={{dealy:1, duration:1}}
//          className='flex flex-wrap justify-center mt-16 gap-3'>
//             {Array(6).fill('').map((items, index)=>(
//                 <motion.img 
//                 whileHover={{scale:1.05, duration:0.1}}
//                 className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
//                     src={index % 2 == 0 ? assets.sample_img_2 : assets.sample_img_1} alt="" key={index} width={70} />
//                 ))}
//         </motion.div>
        
//         <motion.p
//         initial={{opacity:0}}
//         animate={{opacity:1}}
//         transition={{dealy:1.2, duration:0.8}}
//          className='mt-2 text-neutral-600'>Generated images from VisionX</motion.p>

//     </motion.div>
//   )
// }

// export default Header
// import React, { useContext } from 'react';
// import { assets } from '../assets/assets';
// import { motion } from 'framer-motion';
// import { AppContext } from '../context/AppContext';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const { user, setShowLogin } = useContext(AppContext);
//   const navigate = useNavigate();

//   const onClickHandler = () => {

//     const demoImages = [
//   assets.demo_photo1,
//   assets.demo_photo2,
//   assets.demo_photo3,
//   assets.demo_photo4,
//   assets.demo_photo5,
//   assets.demo_photo6,
// ];

//     if (user) {
//       navigate('/result');
//     } else {
//       setShowLogin(true);
//     }
//   };

//   return (
//     <motion.div
//       className="flex flex-col items-center text-center my-28 px-6 text-gray-200"
//       initial={{ opacity: 0, y: 80 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >

//       {/* Badge */}
//       <motion.div
//         className="inline-flex items-center gap-2 px-6 py-2 rounded-full
//                    glass border border-neon/30 text-sm text-gray-300"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//       >
//         <span>Best AI Text-to-Image Generator</span>
//         <img src={assets.star_icon} alt="" className="h-4" />
//       </motion.div>

//       {/* Headline */}
//       <motion.h1
//         className="mt-10 text-4xl sm:text-6xl lg:text-7xl font-['Orbitron']
//                    max-w-4xl leading-tight"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 1 }}
//       >
//         From imagination to AI visuals
//       </motion.h1>

//       {/* Subtext */}
//       <motion.p
//         className="mt-6 max-w-2xl text-gray-400 text-base sm:text-lg"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.8 }}
//       >
//         VisionX turns imagination into visuals using cutting-edge AI, in just seconds.
//       </motion.p>

//       {/* CTA */}
//       {/* <motion.button
//         onClick={onClickHandler}
//         className="
//           mt-10 px-14 py-4 rounded-xl
//           bg-gradient-to-r from-neon to-glow
//           text-black font-semibold
//           inline-flex items-center gap-3
//           shadow-[0_0_30px_rgba(0,246,255,0.6)]
//         "
//         whileHover={{
//           scale: 1.08,
//           boxShadow: '0 0 50px rgba(0,246,255,0.9)'
//         }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ type: 'spring', stiffness: 300, damping: 15 }}
//       >
//         Generate Images
//         <img className="h-6" src={assets.star_group} alt="" />
//       </motion.button> */}
//        <motion.button
//   onClick={onClickHandler}
//   className="
//     mt-10 px-14 py-4 rounded-xl
//     bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
//     text-black font-semibold
//     inline-flex items-center gap-3
//     shadow-[0_0_30px_rgba(0,246,255,0.6)]
//   "
//   whileHover={{
//     scale: 1.08,
//     boxShadow: '0 0 50px rgba(0,246,255,0.9)',
//   }}
//   whileTap={{ scale: 0.95 }}
//   transition={{ type: 'spring', stiffness: 300, damping: 15 }}
// >
//   Generate Images
//   <img className="h-6" src={assets.star_group} alt="" />
// </motion.button>



//       {/* Samples */}
//       <motion.div
//   className="flex flex-wrap justify-center gap-4 mt-20"
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ delay: 1, duration: 0.8 }}
// >
//   {demoImages.map((img, index) => (
//     <motion.img
//       key={index}
//       src={img}
//       alt={`AI demo ${index + 1}`}
//       className="
//         rounded-xl cursor-pointer
//         border border-neon/30
//         shadow-[0_0_20px_rgba(0,246,255,0.3)]
//         max-sm:w-14
//       "
//       width={80}
//       whileHover={{ scale: 1.08 }}
//     />
//   ))}
// </motion.div>


//       <motion.p
//         className="mt-4 text-sm text-gray-500"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2, duration: 0.8 }}
//       >
//         AI-generated images powered by VisionX
//       </motion.p>
//     </motion.div>
//   );
// };

// export default Header;
import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  // ✅ MUST BE HERE (component scope)
  const demoImages = [
    assets.demo_photo1,
    assets.demo_photo2,
    assets.demo_photo3,
    assets.demo_photo4,
    assets.demo_photo5,
    assets.demo_photo6,
  ];

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center my-28 px-6 text-gray-200"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      {/* Badge */}
      <motion.div
        className="
          inline-flex items-center gap-2 px-6 py-2 rounded-full
          glass border border-cyan-400/30 text-sm text-gray-300
        "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span>Best AI Text-to-Image Generator</span>
        <img src={assets.star_icon} alt="" className="h-4" />
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="
          mt-10 text-4xl sm:text-6xl lg:text-7xl
          font-['Orbitron'] max-w-4xl leading-tight
          text-white
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        From imagination to AI visuals
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-6 max-w-2xl text-gray-400 text-base sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        VisionX transforms your ideas into stunning AI-generated visuals —
        fast, intuitive, and futuristic.
      </motion.p>

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
          scale: 1.08,
          boxShadow: '0 0 50px rgba(0,246,255,0.9)',
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </motion.button>

      {/* Demo Images */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {demoImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`AI demo ${index + 1}`}
            className="
              rounded-xl cursor-pointer
              border border-cyan-400/30
              shadow-[0_0_20px_rgba(0,246,255,0.3)]
              max-sm:w-14
            "
            width={80}
            whileHover={{ scale: 1.08 }}
          />
        ))}
      </motion.div>

      <motion.p
        className="mt-4 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        AI-generated images powered by VisionX
      </motion.p>
    </motion.div>
  );
};

export default Header;

