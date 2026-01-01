// import React from 'react';
// import { Link } from 'react-router-dom';
// import { assets } from '../assets/assets';

// const Footer = () => {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer className="bg-white">
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
//                 <div className="grid grid-cols-2 md:grid-cols-12 gap-6">
//                     {/* Brand Section */}
//                     <div className="col-span-2 md:col-span-4">
//                         <div className="flex items-center gap-2 mb-3">
//                             <img src={assets.logo_icon} alt="" className="w-6 h-6" />
//                             <span className="text-lg font-medium">VisionX</span>
//                         </div>
//                         <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                             Turn your imagination into visual art in seconds with our AI-powered platform.
//                         </p>
//                         <div className="flex items-center gap-3">
//                             <a href="https://github.com/neel9130official/VisionX" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition-colors">
//                                 <img src={assets.github_icon} alt="github" className="w-4 h-4" />
//                             </a>
//                             <a href="https://www.linkedin.com/in/neelkanth-mundkar-138495205/" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition-colors">
//                                 <img src={assets.linkedin_icon} alt="linkedin" className="w-4 h-4" />
//                             </a>
// {/*                             <a href="https://www.instagram.com/singh04_ayush/" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition-colors">
//                                 <img src={assets.instagram_icon} alt="Instagram" className="w-4 h-4" />
//                             </a> */}
//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div className="col-span-1 md:col-span-2">
//                         <h3 className="text-xs font-semibold text-gray-900 mb-3">QUICK LINKS</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="/gallery" className="text-sm text-gray-600 hover:text-gray-900">
//                                     Gallery
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="/features" className="text-sm text-gray-600 hover:text-gray-900">
//                                     Features
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="/buy" className="text-sm text-gray-600 hover:text-gray-900">
//                                     Pricing
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Support */}
//                     <div className="col-span-1 md:col-span-2">
//                         <h3 className="text-xs font-semibold text-gray-900 mb-3">SUPPORT</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
//                                     Help Center
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
//                                     Contact Us
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
//                                     Privacy Policy
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
//                                     Terms
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Newsletter */}
//                     <div className="col-span-2 md:col-span-4">
//                         <h3 className="text-xs font-semibold text-gray-900 mb-3">STAY UPDATED</h3>
//                         <p className="text-sm text-gray-600 mb-3">
//                             Subscribe for the latest updates and features.
//                         </p>
//                         <form className="flex flex-col sm:flex-row gap-2 sm:gap-0">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="w-full flex-1 px-4 py-2.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg sm:rounded-r-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//                             />
//                             <button
//                                 type="submit"
//                                 className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg sm:rounded-l-none hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors whitespace-nowrap"
//                             >
//                                 Subscribe
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="mt-8 pt-4 text-center border-t border-gray-100">
//                     <p className="text-sm text-gray-600">
//                         © {currentYear} VisionX. All rights reserved.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { assets } from '../assets/assets';

// const Footer = () => {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer className="bg-bg border-t border-white/10">
//             <div className="max-w-7xl mx-auto px-6 py-12">

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">

//                     {/* Brand */}
//                     <div className="flex items-center gap-4">
//   <a
//     href="https://github.com/neel9130official/VisionX"
//     target="_blank"
//     rel="noreferrer"
//     className="
//       w-9 h-9 flex items-center justify-center rounded-full
//       bg-white/90
//       border border-white/20
//       hover:bg-neon
//       hover:shadow-[0_0_15px_#00f6ff]
//       transition-all
//     "
//   >
//     <img
//       src={assets.github_icon}
//       alt="GitHub"
//       className="w-4 h-4"
//     />
//   </a>

//   <a
//     href="https://www.linkedin.com/in/neelkanth-mundkar-138495205/"
//     target="_blank"
//     rel="noreferrer"
//     className="
//       w-9 h-9 flex items-center justify-center rounded-full
//       bg-white/90
//       border border-white/20
//       hover:bg-neon
//       hover:shadow-[0_0_15px_#00f6ff]
//       transition-all
//     "
//   >
//     <img
//       src={assets.linkedin_icon}
//       alt="LinkedIn"
//       className="w-4 h-4"
//     />
//   </a>
// </div>


//                     {/* Quick Links */}
//                     <div className="md:col-span-2">
//                         <h3 className="text-xs font-semibold text-gray-300 mb-4 tracking-widest">
//                             QUICK LINKS
//                         </h3>
//                         <ul className="space-y-3">
//                             {['Home', 'Gallery', 'Features', 'Pricing'].map((item) => (
//                                 <li key={item}>
//                                     <Link
//                                         to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//                                         className="text-sm text-gray-400 hover:text-neon transition-colors"
//                                     >
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Support */}
//                     <div className="md:col-span-2">
//                         <h3 className="text-xs font-semibold text-gray-300 mb-4 tracking-widest">
//                             SUPPORT
//                         </h3>
//                         <ul className="space-y-3">
//                             {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms'].map((item) => (
//                                 <li key={item}>
//                                     <a
//                                         href="#"
//                                         className="text-sm text-gray-400 hover:text-neon transition-colors"
//                                     >
//                                         {item}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Newsletter */}
//                     <div className="md:col-span-4">
//                         <h3 className="text-xs font-semibold text-gray-300 mb-4 tracking-widest">
//                             STAY UPDATED
//                         </h3>
//                         <p className="text-sm text-gray-400 mb-4">
//                             Subscribe for the latest updates and features.
//                         </p>

//                         <form className="flex flex-col sm:flex-row gap-3">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="flex-1 px-4 py-3 rounded-xl
//                                            bg-black/40 text-white
//                                            border border-white/10
//                                            focus:border-neon outline-none"
//                             />
//                             <button
//                                 type="submit"
//                                 className="px-6 py-2 rounded-xl
//                            bg-gradient-to-r from-cyan-400 to-blue-500
//                            text-black font-semibold
//                            shadow-[0_0_20px_rgba(0,246,255,0.6)]
//                            hover:scale-105 transition"
//                             >
//                                 Subscribe
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Bottom */}
//                 <div className="mt-12 pt-6 text-center border-t border-white/10">
//                     <p className="text-sm text-gray-500">
//                         © {currentYear} VisionX. All rights reserved.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { assets } from '../assets/assets';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-bg border-t border-white/10">
//       <div className="max-w-7xl mx-auto px-6 py-12">

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">

//           {/* Social Icons */}
//           <div className="flex items-center gap-4 md:col-span-2">
//             <a
//               href="https://github.com/neel9130official/VisionX"
//               target="_blank"
//               rel="noreferrer"
//               className="
//                 w-9 h-9 flex items-center justify-center rounded-full
//                 bg-white/90 border border-white/20
//                 hover:bg-neon hover:shadow-[0_0_15px_#00f6ff]
//                 transition-all
//               "
//             >
//               <img src={assets.github_icon} alt="GitHub" className="w-4 h-4" />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/neelkanth-mundkar-138495205/"
//               target="_blank"
//               rel="noreferrer"
//               className="
//                 w-9 h-9 flex items-center justify-center rounded-full
//                 bg-white/90 border border-white/20
//                 hover:bg-neon hover:shadow-[0_0_15px_#00f6ff]
//                 transition-all
//               "
//             >
//               <img src={assets.linkedin_icon} alt="LinkedIn" className="w-4 h-4" />
//             </a>
//           </div>

//           {/* Quick Links */}
//           <div className="md:col-span-2">
//             <h3 className="text-xs font-semibold text-gray-300 mb-4 tracking-widest">
//               QUICK LINKS
//             </h3>
//             <ul className="space-y-3">
//               {['Home', 'Gallery', 'Features', 'Pricing'].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//                     className="text-sm text-gray-400 hover:text-neon transition-colors"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Support */}
//           <div className="md:col-span-2">
//             <h3 className="text-xs font-semibold text-gray-300 mb-4 tracking-widest">
//               SUPPORT
//             </h3>
//             <ul className="space-y-3">
//               {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms'].map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="text-sm text-gray-400 hover:text-neon transition-colors"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="md:col-span-4">
//             <h3 className="text-xs font-semibold text-gray-300 mb-4 tracking-widest">
//               STAY UPDATED
//             </h3>
//             <p className="text-sm text-gray-400 mb-4">
//               Subscribe for the latest updates and features.
//             </p>

//             <form className="flex flex-col sm:flex-row gap-3">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="
//                   flex-1 px-4 py-3 rounded-xl
//                   bg-black/40 text-white
//                   border border-white/10
//                   focus:border-neon outline-none
//                 "
//               />
//               <button
//                 type="submit"
//                 className="
//                   px-6 py-2 rounded-xl
//                   bg-gradient-to-r from-cyan-400 to-blue-500
//                   text-black font-semibold
//                   shadow-[0_0_20px_rgba(0,246,255,0.6)]
//                   hover:scale-105 transition
//                 "
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-12 pt-6 border-t border-white/10 text-center space-y-2">

//           {/* Developer Credit */}
//           <p className="text-sm text-gray-400">
//             Developed by{' '}
//             <a
//               href="https://neelsresume.netlify.app/"
//               target="_blank"
//               rel="noreferrer"
//               className="text-neon hover:underline hover:drop-shadow-[0_0_6px_#00f6ff]"
//             >
//               Neelkanth
//             </a>
//           </p>

//           {/* Contact Info */}
//           <p className="text-xs text-gray-500">
//             📧{' '}
//             <a
//               href="mailto:nilkanthmundkar123@gmail.com"
//               className="hover:text-neon transition-colors"
//             >
//               nilkanthmundkar123@gmail.com
//             </a>
//             {' '} | 📞{' '}
//             <a
//               href="tel:+919130142934"
//               className="hover:text-neon transition-colors"
//             >
//               +91 9130142934
//             </a>
//           </p>

//           <p className="text-xs text-gray-500">
//             © {currentYear} VisionX. All rights reserved.
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Contact highlight handler
  const handleContactClick = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.classList.add('contact-glow');

      setTimeout(() => {
        el.classList.remove('contact-glow');
      }, 2000);
    }
  };

  return (
    <footer className="bg-bg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">

          {/* Social Icons */}
          <div className="flex items-center gap-4 md:col-span-2">
            <a
              href="https://github.com/neel9130official/VisionX"
              target="_blank"
              rel="noreferrer"
              className="
                w-9 h-9 flex items-center justify-center rounded-full
                bg-white/90 border border-white/20
                hover:bg-neon hover:shadow-[0_0_15px_#00f6ff]
                transition-all
              "
            >
              <img src={assets.github_icon} alt="GitHub" className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/neelkanth-mundkar-138495205/"
              target="_blank"
              rel="noreferrer"
              className="
                w-9 h-9 flex items-center justify-center rounded-full
                bg-white/90 border border-white/20
                hover:bg-neon hover:shadow-[0_0_15px_#00f6ff]
                transition-all
              "
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold text-gray-300 mb-4 tracking-widest">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {['Home', 'Gallery', 'Features', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-neon transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold text-gray-300 mb-4 tracking-widest">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-neon">
                  Help Center
                </a>
              </li>
              <li>
                <button
                  onClick={handleContactClick}
                  className="text-sm text-gray-400 hover:text-neon transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-neon">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-neon">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold text-gray-300 mb-4 tracking-widest">
              STAY UPDATED
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for the latest updates and features.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1 px-4 py-3 rounded-xl
                  bg-black/40 text-white
                  border border-white/10
                  focus:border-neon outline-none
                "
              />
              <button
                type="submit"
                className="
                  px-6 py-2 rounded-xl
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  text-black font-semibold
                  shadow-[0_0_20px_rgba(0,246,255,0.6)]
                  hover:scale-105 transition
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom / Contact Section */}
        <div
          id="contact-section"
          className="
            mt-12 pt-6 border-t border-white/10
            text-center space-y-2
            transition-all duration-500
          "
        >
          <p className="text-sm text-gray-400">
            Developed by{' '}
            <a
              href="https://neelsresume.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-neon hover:underline hover:drop-shadow-[0_0_6px_#00f6ff]"
            >
              Neelkanth
            </a>
          </p>

          <p className="text-xs text-gray-500 contact-highlight">
            📧{' '}
            <a
              href="mailto:nilkanthmundkar123@gmail.com"
              className="hover:text-neon transition-colors"
            >
              nilkanthmundkar123@gmail.com
            </a>
            {' '} | 📞{' '}
            <a
              href="tel:+919130142934"
              className="hover:text-neon transition-colors"
            >
              +91 9130142934
            </a>
          </p>

          <p className="text-xs text-gray-500">
            © {currentYear} VisionX. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

