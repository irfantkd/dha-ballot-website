// import React from 'react';
// import image from '../../assets/images/HeroSectionImg/image.png';
// import DHA from '../../assets/videos/DHA.MP4';
// // import { Home } from 'lucide-react';
// import Cards from "../Cards/Cards"

// const Home = () => {
//   return (
//     <>
//     <section className="relative flex h-screen items-center justify-center bg-gray-900 px-4">
//       {/* Background Image */}
//       <img
//         src={image}
//         alt="Hero Background"
//         className="absolute inset-0 h-full w-full object-cover opacity-60"
//       />

//       {/* Content */}
//       <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
//         {/* Text Section */}
//         <div className="w-full max-w-xl text-white md:w-1/2">
//           <h1 className="mb-4 text-4xl font-bold leading-tight text-yellow-400 md:text-5xl">
//             How to Apply for Public Ballot?
//           </h1>
//           <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s, when an unknown printer took a galley of type
//             a galley of type a galley of type
//           </p>
//           <button className="rounded-lg bg-gray-800 px-12 py-3 font-semibold text-white transition hover:bg-gray-600">
//             Apply Now
//           </button>
//         </div>

//         {/* Video Section */}
//         <div className="aspect-video w-full max-w-lg overflow-hidden rounded-md bg-black md:w-1/2">
//           <video className="h-full w-full" controls autoPlay muted loop>
//             <source src={DHA} type="video/mp4" />
//           </video>
//         </div>
//       </div>
    
//     </section>
//       <Cards/>

//       </>
//   );
// };

// export default Home;


import React from 'react';
import image from '../../assets/images/HeroSectionImg/image.png';
import DHA from '../../assets/videos/DHA.MP4';
import Cards from "../Cards/Cards"; // Make sure this path is correct
const Home = () => {
  return (
    <>
      <section className="relative flex h-screen items-center justify-center bg-gray-900 px-4">
        {/* Background Image */}
        <img
          src={image}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        {/* Content */}
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
          {/* Text Section */}
          <div className="w-full max-w-xl text-white md:w-1/2">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-yellow-400 md:text-5xl">
              How to Apply for Public Ballot?
            </h1>
            <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              a galley of type a galley of type
            </p>
            <button className="rounded-lg bg-gray-800 px-12 py-3 font-semibold text-white transition hover:bg-gray-600">
              Apply Now
            </button>
          </div>
          {/* Video Section */}
          <div className="aspect-video w-full max-w-lg overflow-hidden rounded-md bg-black md:w-1/2">
            <video className="h-full w-full" controls autoPlay muted loop>
              <source src={DHA} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <Cards />
    </>
  );
};
export default Home;