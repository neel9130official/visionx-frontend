// import React, { useContext, useEffect, useState } from 'react'
// import { assets } from '../assets/assets'
// import { AppContext } from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {

//   const [state, setState] = useState('Login')
//   const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
//   const navigate = useNavigate();

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {

//       if (state === 'Login') {
//         const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

//         if (data.success) {
//           setToken(data.token)
//           setUser(data.user)
//           localStorage.setItem('token', data.token)
//           window.scrollTo({ top: 0, behavior: 'smooth' });
//           setShowLogin(false)
//           navigate('/dashboard')
//         } else {
//           toast.error(data.message)
//         }

//       } else {
//         const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

//         if (data.success) {
//           setToken(data.token)
//           setUser(data.user)
//           localStorage.setItem('token', data.token)
//           setShowLogin(false)
//           navigate('/dashboard')
//         } else {
//           toast.error(data.message)
//         }

//       }

//     } catch (error) {
//       // Prefer server-provided error message when available (e.g., 409 response)
//       const serverData = error?.response?.data;
//       const serverMessage = serverData?.message;

//       if (serverData?.type === 'info') {
//         // Show info/warning style toast instead of error
//         toast.info(serverMessage || 'Info');
//       } else {
//         toast.error(serverMessage || error.message || 'An error occurred');
//       }
//     }
//   }

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     const navbar = document.getElementById('nav-bar')
//     navbar.style.opacity = 0.05
//     return () => {
//       document.body.style.overflow = 'unset';
//       navbar.style.opacity = 1
//     }
//   }, [])

//   return (
//     <div className='fixed top-0 left-0 right-0 bottom-0 z-[9999] backdrop-blur-sm bg-black/30 flex justify-center items-center'>

//       <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500 shadow-xl'>
//         <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
//         <p className='text-sm'>Welcome back! Please sign in to continue</p>

//         {state !== 'Login' &&
//           <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
//             <img src={assets.user_icon} alt="" />
//             <input onChange={e => setName(e.target.value)} value={name} type="text" className='outline-none text-sm' placeholder='Full Name' required />
//           </div>}

//         <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
//           <img src={assets.email_icon} alt="" />
//           <input onChange={e => setEmail(e.target.value)} value={email} type="email" className='outline-none text-sm' placeholder='Email id' required />
//         </div>

//         <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
//           <img src={assets.lock_icon} alt="" />
//           <input onChange={e => setPassword(e.target.value)} value={password} type="password" className='outline-none text-sm' placeholder='Password' required />
//         </div>

//         <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password?</p>

//         <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'Login' : 'Create Account'}</button>

//         {state === 'Login' ? <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p>
//           :
//           <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Login</span></p>}

//         <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' />

//   </form>

//     </div>
//   )
// }

// export default Login
// import React, { useContext, useEffect, useState } from 'react';
// import { assets } from '../assets/assets';
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [state, setState] = useState('Login');
//   const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
//   const navigate = useNavigate();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       if (state === 'Login') {
//         const { data } = await axios.post(
//           backendUrl + '/api/user/login',
//           { email, password }
//         );

//         if (data.success) {
//           setToken(data.token);
//           setUser(data.user);
//           localStorage.setItem('token', data.token);
//           setShowLogin(false);
//           navigate('/dashboard');
//         } else {
//           toast.error(data.message);
//         }
//       } else {
//         const { data } = await axios.post(
//           backendUrl + '/api/user/register',
//           { name, email, password }
//         );

//         if (data.success) {
//           setToken(data.token);
//           setUser(data.user);
//           localStorage.setItem('token', data.token);
//           setShowLogin(false);
//           navigate('/dashboard');
//         } else {
//           toast.error(data.message);
//         }
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || 'Something went wrong');
//     }
//   };

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     const navbar = document.getElementById('nav-bar');
//     if (navbar) navbar.style.opacity = 0.05;

//     return () => {
//       document.body.style.overflow = 'unset';
//       if (navbar) navbar.style.opacity = 1;
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center">

//       <form
//         onSubmit={onSubmitHandler}
//         className="relative glass w-[90%] max-w-md p-8"
//       >
//         {/* Close */}
//         <img
//           src={assets.cross_icon}
//           alt="Close"
//           onClick={() => setShowLogin(false)}
//           className="absolute top-4 right-4 w-4 cursor-pointer opacity-70 hover:opacity-100"
//         />

//         {/* Heading */}
//         <h1 className="text-center text-3xl font-['Orbitron'] bg-gradient-to-r from-neon to-glow bg-clip-text text-transparent">
//           {state}
//         </h1>
//         <p className="text-center text-sm text-gray-400 mt-2">
//           Access the VisionX AI platform
//         </p>

//         {/* Name */}
//         {state !== 'Login' && (
//           <div className="mt-6">
//             <input
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               type="text"
//               placeholder="Full Name"
//               className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon"
//               required
//             />
//           </div>
//         )}

//         {/* Email */}
//         <div className="mt-4">
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             type="email"
//             placeholder="Email Address"
//             className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon"
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="mt-4">
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             type="password"
//             placeholder="Password"
//             className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon"
//             required
//           />
//         </div>

//         <p className="text-xs text-neon mt-3 cursor-pointer">
//           Forgot password?
//         </p>

//         {/* Button */}
//         <button
//           type="submit"
//           className="mt-6 w-full py-3 rounded-xl font-semibold text-black
//           bg-gradient-to-r from-neon to-glow
//           hover:shadow-neon transition-all duration-300"
//         >
//           {state === 'Login' ? 'Login' : 'Create Account'}
//         </button>

//         {/* Switch */}
//         <p className="mt-6 text-center text-sm text-gray-400">
//           {state === 'Login' ? (
//             <>
//               Don&apos;t have an account?{' '}
//               <span
//                 onClick={() => setState('Sign Up')}
//                 className="text-neon cursor-pointer"
//               >
//                 Sign Up
//               </span>
//             </>
//           ) : (
//             <>
//               Already have an account?{' '}
//               <span
//                 onClick={() => setState('Login')}
//                 className="text-neon cursor-pointer"
//               >
//                 Login
//               </span>
//             </>
//           )}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mode, setMode] = useState('login');
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!backendUrl) {
      toast.error('Backend not configured');
      return;
    }

    try {
      const url =
        mode === 'login'
          ? `${backendUrl}/api/user/login`
          : `${backendUrl}/api/user/register`;

      const payload =
        mode === 'login'
          ? { email, password }
          : { name, email, password };

      const { data } = await axios.post(url, payload);

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        setShowLogin(false);
        navigate('/dashboard');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md">

      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="
          relative w-full max-w-md p-8
          glass text-gray-200 rounded-2xl
          border border-white/10
          shadow-[0_0_40px_rgba(0,246,255,0.25)]
        "
      >
        {/* Close */}
        <button
          type="button"
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-neon"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-3xl font-['Orbitron'] text-center mb-2">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          {mode === 'login'
            ? 'Login to continue creating with VisionX'
            : 'Join VisionX and start generating AI visuals'}
        </p>

        {/* Name */}
        {mode === 'signup' && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="
              w-full mb-4 px-4 py-3 rounded-xl
              bg-black/40 text-white
              border border-white/10
              focus:border-neon focus:ring-2 focus:ring-neon/40
              outline-none transition
            "
          />
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="
            w-full mb-4 px-4 py-3 rounded-xl
            bg-black/40 text-white
            border border-white/10
            focus:border-neon focus:ring-2 focus:ring-neon/40
            outline-none transition
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="
            w-full mb-6 px-4 py-3 rounded-xl
            bg-black/40 text-white
            border border-white/10
            focus:border-neon focus:ring-2 focus:ring-neon/40
            outline-none transition
          "
        />

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full py-3 rounded-xl
            bg-gradient-to-r from-cyan-400 to-blue-500
            text-black font-semibold
            shadow-[0_0_25px_rgba(0,246,255,0.6)]
            hover:scale-105 transition
          "
        >
          {mode === 'login' ? 'Login' : 'Create Account'}
        </button>

        {/* Toggle */}
        <p className="mt-6 text-center text-sm text-gray-400">
          {mode === 'login' ? (
            <>
              Don’t have an account?{' '}
              <span
                onClick={() => setMode('signup')}
                className="text-neon cursor-pointer hover:underline"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setMode('login')}
                className="text-neon cursor-pointer hover:underline"
              >
                Login
              </span>
            </>
          )}
        </p>
      </motion.form>
    </div>
  );
};

export default Login;

