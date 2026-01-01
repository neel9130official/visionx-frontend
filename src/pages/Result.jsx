// import React, { useContext, useEffect, useState, useRef } from 'react'
// import {assets} from '../assets/assets'
// import {motion} from 'framer-motion'
// import { AppContext } from '../context/AppContext'
// import { loadImage } from "canvas";

// const ChevronIcon = ({ open }) => (
//   <svg
//   className={` h-5 transition-transform ${open ? "rotate-180" : ""}`}
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
// >
//   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// </svg>
// );

// //Custom Dropdown 
// const CustomDropdown = ({format = '',setFormat = () =>{},formats = []}) => {
//   const [open, setOpen] = useState(false)
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);
//   return (
//     <div className="relative inline-block">
//       <button
//         type="button"
//         onClick={() => setOpen(!open)}
//         className="bg-transparent w-40 border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer  text-center"
//       >
//         <div className='flex justify-between'>
//         <p>{format}</p>
//         <ChevronIcon open={open}></ChevronIcon> </div>
//       </button>

//       {open && (
//         <div ref={dropdownRef} className="absolute rounded-xl z-5 mt-1 w-40 bg-white border border-zinc-250 shadow-lg">
//           {formats.map((fmt) => (
//             <div
//               key={fmt}
//               role="menuitem"
//               tabIndex={0}
//               onClick={() => {
//                 setFormat(fmt);
//                 setOpen(false);
//               }}
//               className="text-black px-8 py-3 rounded-xl hover:bg-zinc-200 cursor-pointer text-center"
//             >
//               {fmt}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// const Result = () => {

//   const [image, setImage] = useState(assets.sample_img_1)
//   const[isImageLoaded, setIsImageLoaded] = useState(false)
//   const[loading, setLoading] = useState(false)
//   const [input, setInput] = useState('')
//   const [format,setFormat] = useState('PNG')
//   const {generateImage} = useContext(AppContext)

//   const onSubmitHandler = async(e) =>{
//     e.preventDefault()
//     setLoading(true)

//     if(input){
//       const image = await generateImage(input)
//       if(image){
//         setIsImageLoaded(true)
//         setImage(image)
//       }
//     }
//     setLoading(false)

//   }
//   useEffect(()=>{
//     window.scrollTo(0,0)
//   },[])

//   //Convert Image into different formats [JPEG, PNG, SVG, WebP]
//   const convertImage = async (input, format) => {
//     const image = await loadImage(input)
//     const extension = format.toLowerCase()
//     const canvas = document.createElement("canvas")
//     const ctx = canvas.getContext("2d")
//     canvas.width = image.width
//     canvas.height = image.height
//     ctx.drawImage(image, 0, 0)
    

//     //Trigger image download
//     const downloadImage = (blob) => {
//       const url = URL.createObjectURL(blob)
//       const link = document.createElement("a")
//       link.href = url
//       link.download = `image.${extension}`
//       link.click()
//       URL.revokeObjectURL(url)
//     };

//     if (extension === "svg") {
//       const dataUrl = canvas.toDataURL("image/png")
//       console.log(dataUrl)
//       const svgContent = `
//         <svg xmlns='http://www.w3.org/2000/svg' width='${image.width}' height='${image.height}'>
//           <image href='${dataUrl}' width='${image.width}' height='${image.height}'/>
//         </svg>`
//       const blob = new Blob([svgContent], { type: "image/svg+xml" })
//       downloadImage(blob)
//     }else{
//       canvas.toBlob((blob) => {
//         if (blob) downloadImage(blob, extension)
//         else console.error("Failed to convert canvas to blob.")
//         }, `image/${extension}`)
//     }
//   };
  
//   return (
//     <motion.form
//     initial={{opacity:0.2, y:100}}
//     transition={{duration:1}}
//     whileInView={{opacity:1, y:0}}
//     viewport={{once:true}}
//     onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'>

//     <div>
//       <div className='relative'>
//         <img src={image} alt="" className='max-w-sm rounded' />
//         <span className={`absolute bottom-0 h-1 bg-blue-500 ${loading ? 'w-full transistion-all duration-[10s]' : 'w-0'}`}></span>
//       </div>
//       <p className={!loading ? 'hidden' : ''}>Loading...</p>
//     </div>

//     {!isImageLoaded &&
//       <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'> 
//         <input onChange={e => setInput(e.target.value)} value={input}
//         type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color'/>
//         <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>Generate</button>
//       </div>
//     }

//     {isImageLoaded &&
//       <div className='flex flex-col'>
//       <div className='flex gap-5 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
  
//           <p onClick={()=>{setIsImageLoaded(false)}} 
//           className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
//           <CustomDropdown format={format} setFormat={setFormat} formats={["JPEG", "PNG", "WebP", "SVG"]}></CustomDropdown>
//           </div>
//           <div className="flex sm:justify-end justify-center mt-5 p-0.5 text-white">
//             <div
//               onClick={async (e) => {
//                 e.preventDefault();
//                 await convertImage(image,format);
//               }}
//               className="w-40 bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
//             >
//               Download
//             </div>
//           </div>
//       </div>

//     }

//     </motion.form>
//   )
// }

// export default Result
import React, { useContext, useEffect, useState, useRef } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

/* ---------- ICON ---------- */
const ChevronIcon = ({ open }) => (
  <svg
    className={`h-5 transition-transform ${open ? 'rotate-180' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

/* ---------- DROPDOWN ---------- */
const CustomDropdown = ({ format, setFormat, formats }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="glass px-6 py-3 w-40 rounded-full flex justify-between items-center border border-neon/30"
      >
        {format}
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="absolute mt-2 w-40 glass rounded-xl border border-white/10 z-10">
          {formats.map((fmt) => (
            <div
              key={fmt}
              onClick={() => {
                setFormat(fmt);
                setOpen(false);
              }}
              className="px-6 py-3 cursor-pointer hover:bg-neon/10"
            >
              {fmt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ---------- MAIN ---------- */
const Result = () => {
  const { generateImage } = useContext(AppContext);

  const [image, setImage] = useState(assets.sample_img_1);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [format, setFormat] = useState('PNG');

  useEffect(() => window.scrollTo(0, 0), []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) return;

    setLoading(true);
    const result = await generateImage(prompt);
    if (result) {
      setImage(result);
      setGenerated(true);
    }
    setLoading(false);
  };

  /* ---------- DOWNLOAD (BROWSER SAFE) ---------- */
  const downloadImage = async () => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const ext = format.toLowerCase();
      canvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `visionx.${ext}`;
        link.click();
        URL.revokeObjectURL(link.href);
      }, `image/${ext}`);
    };
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-24 px-6 text-gray-200 bg-[#050b14]"
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">

        {/* IMAGE */}
        <div className="relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-neon border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-neon to-glow opacity-40 rounded-3xl" />
          <img
            src={image}
            alt="AI Result"
            className="relative z-10 mx-auto rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(0,246,255,0.6)]"
          />
        </div>

        {/* INPUT */}
        {!generated && (
          <div className="glass flex items-center px-4 py-2 rounded-full max-w-xl mx-auto border border-white/10">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your imagination…"
              className="flex-1 bg-transparent outline-none px-4 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-neon to-glow text-black font-semibold"
            >
              Generate
            </button>
          </div>
        )}

        {/* ACTIONS */}
        {generated && (
          <div className="space-y-6">
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => setGenerated(false)}
                className="px-8 py-3 rounded-full border border-neon/40 hover:bg-neon/10"
              >
                Generate Another
              </button>
              <CustomDropdown
                format={format}
                setFormat={setFormat}
                formats={['PNG', 'JPEG', 'WebP']}
              />
            </div>

            <button
              type="button"
              onClick={downloadImage}
              className="px-10 py-3 rounded-full bg-gradient-to-r from-neon to-glow text-black font-semibold"
            >
              Download Image
            </button>
          </div>
        )}
      </div>
    </motion.form>
  );
};

export default Result;

