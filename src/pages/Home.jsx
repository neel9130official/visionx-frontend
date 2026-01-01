// import React from 'react'
// import Header from '../components/Header'
// import Steps from '../components/Steps'
// import Description from '../components/Description'
// import Testimonials from '../components/Testimonials'
// import GenerateBtn from '../components/GenerateBtn'

// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <Steps />
//       <Description />
//       <Testimonials />
//       <GenerateBtn />
//     </div>
//   )
// }

// export default Home
import React from 'react';
import Header from '../components/Header';
import Steps from '../components/Steps';
import Description from '../components/Description';
import Testimonials from '../components/Testimonials';
import GenerateBtn from '../components/GenerateBtn';

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-[#050b14] text-gray-200">

      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] 
                      bg-cyan-500/20 rounded-full blur-[200px]" />
      <div className="absolute top-[30%] -right-40 w-[500px] h-[500px] 
                      bg-purple-500/20 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] 
                      bg-pink-500/20 rounded-full blur-[200px]" />

      {/* Page Content */}
      <div className="relative z-10">
        <Header />
        <Steps />
        <Description />
        <Testimonials />
        <GenerateBtn />
      </div>

    </div>
  );
};

export default Home;

