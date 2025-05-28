import React from 'react';
import image from '../../assets/images/HeroSectionImg/image.png';

function Home() {
  return (
    <section className="relative flex h-screen items-center justify-center bg-gray-900 px-4 ">
      {/* Background Image */}
      <img
        src={image}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl justify-between items-center gap-8 md:gap-16">
        {/* Text Section */}
        <div className="text-white max-w-xl w-full md:w-1/2">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold text-yellow-400 leading-tight">
            How to Apply for Public Ballot?
          </h1>
          <p className="mb-6 text-base md:text-lg text-gray-300 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a galley of type a galley of type
          </p>
          <button className="rounded-lg bg-gray-700 px-12 py-3 font-semibold text-white transition hover:bg-gray-800">
            Apply Now
          </button>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2 max-w-md aspect-video overflow-hidden rounded-md ">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/watch?v=h-UGzslg8cE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Home;
