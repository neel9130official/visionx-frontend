// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { motion } from 'framer-motion';

// const GenerationResult = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { token, backendUrl } = useContext(AppContext);
//   const [generation, setGeneration] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchGeneration = async () => {
//       try {
//         console.log('Fetching generation with ID:', id);
//         const response = await axios.get(`${backendUrl}/api/image/generation/${id}`, {
//           headers: { 
//             token,
//             'Content-Type': 'application/json'
//           }
//         });

//         console.log('Server response:', response.data);

//         if (response.data.success) {
//           setGeneration(response.data.generation);
//         } else {
//           console.error('Server returned error:', response.data.message);
//           toast.error(response.data.message || 'Failed to load generation');
//           navigate('/dashboard');
//         }
//       } catch (error) {
//         console.error('Error fetching generation:', error);
//         console.error('Error details:', error.response?.data);
//         toast.error(error.response?.data?.message || 'Failed to load generation');
//         navigate('/dashboard');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id && token) {
//       fetchGeneration();
//     } else {
//       console.error('Missing id or token:', { id, hasToken: !!token });
//       toast.error('Missing required data to fetch generation');
//       navigate('/dashboard');
//     }
//   }, [id, token, backendUrl, navigate]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (!generation) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold text-red-600 mb-4">Generation Not Found</h2>
//           <p className="text-gray-600 mb-4">
//             We couldn't find the image generation you're looking for. This could be because:
//           </p>
//           <ul className="list-disc text-left max-w-md mx-auto mb-6 text-gray-600">
//             <li className="mb-2">The generation ID is invalid</li>
//             <li className="mb-2">The generation has been deleted</li>
//             <li className="mb-2">You don't have permission to view this generation</li>
//           </ul>
//           <div className="space-y-4">
//             <button
//               onClick={() => navigate('/dashboard')}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
//             >
//               Back to Dashboard
//             </button>
//             <button
//               onClick={() => window.location.reload()}
//               className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 w-full"
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0.2, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       className="min-h-screen py-8"
//     >
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//           <div className="mb-6">
//             <h1 className="text-2xl font-bold text-gray-800 mb-2">Generated Image</h1>
//             <p className="text-gray-600">{generation.prompt}</p>
//             <p className="text-sm text-gray-500 mt-1">
//               Generated on {new Date(generation.createdAt).toLocaleDateString()}
//             </p>
//           </div>

//           <div className="relative rounded-lg overflow-hidden mb-6">
//             <img
//               src={generation.imageUrl}
//               alt={generation.prompt}
//               className="w-full h-auto rounded-lg"
//             />
//           </div>

//           <div className="flex gap-4 justify-center">
//             <button
//               onClick={() => navigate('/result')}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//             >
//               Generate New Image
//             </button>
//             <a
//               href={generation.imageUrl}
//               download
//               className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900"
//             >
//               Download Image
//             </a>
//             <button
//               onClick={() => navigate('/dashboard')}
//               className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50"
//             >
//               Back to Dashboard
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default GenerationResult; 
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const GenerationResult = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token, backendUrl } = useContext(AppContext);

  const [generation, setGeneration] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH RESULT ---------------- */
  useEffect(() => {
    if (!id || !token) {
      navigate('/dashboard');
      return;
    }

    const fetchGeneration = async () => {
      try {
        const { data } = await axios.get(
          `${backendUrl}/api/image/generation/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (data.success) {
          setGeneration(data.generation);
        } else {
          toast.error(data.message || 'Failed to load generation');
          navigate('/dashboard');
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message || 'Unable to load generation'
        );
        navigate('/dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchGeneration();
  }, [id, token, backendUrl, navigate]);

  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-neon border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  /* ---------------- NOT FOUND ---------------- */
  if (!generation) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-300">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Result Not Found
          </h2>
          <p className="mb-6">
            The requested generation could not be loaded.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-neon to-glow text-black font-semibold"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- RESULT UI ---------------- */
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-24 px-6 text-gray-200"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-3xl font-['Orbitron'] font-semibold
                       bg-gradient-to-r from-neon to-glow
                       bg-clip-text text-transparent"
          >
            AI Generation Complete
          </h1>
          <p className="text-gray-400 mt-2">
            {generation.prompt}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Generated on {new Date(generation.createdAt).toLocaleString()}
          </p>
        </div>

        {/* Image */}
        <div className="relative mb-10">
          <div className="absolute inset-0 blur-3xl opacity-40
                          bg-gradient-to-r from-neon to-glow rounded-3xl" />
          <img
            src={generation.imageUrl}
            alt={generation.prompt}
            className="relative z-10 w-full rounded-3xl border border-white/10
                       shadow-[0_0_60px_rgba(0,246,255,0.5)]"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate('/result')}
            className="px-8 py-3 rounded-xl
                       bg-gradient-to-r from-neon to-glow
                       text-black font-semibold"
          >
            Generate New Image
          </button>

          <a
            href={generation.imageUrl}
            download
            className="px-8 py-3 rounded-xl
                       border border-neon/40
                       hover:bg-neon/10 transition"
          >
            Download Image
          </a>

          <button
            onClick={() => navigate('/dashboard')}
            className="px-8 py-3 rounded-xl
                       border border-white/20
                       hover:bg-white/10 transition"
          >
            Back to Dashboard
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default GenerationResult;
