import { Play } from 'lucide-react';
import Button from '../../../ui/Button';
const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dktyonr0v/image/upload/v1740123076/website-static-images/header-image.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex w-[85%] flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
        {/* Text Section */}
        <div className="w-full max-w-xl text-white md:w-1/2">
          <h1
            className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl"
            style={{ fontFamily: 'Sansation, sans-serif' }}
          >
            How to Apply for Public Ballot?
          </h1>
          <p
            className="mb-6 text-justify text-base leading-relaxed text-gray-300 md:text-lg"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Join DHA Bahawalpur, where dreams come true. Experience premier
            community lifestyle with modern amenities, sustainable development,
            and the perfect blend of heritage and innovation in the heart of
            historical Bahawalpur.
          </p>
          <Button
            style={{ fontFamily: 'Sansation, sans-serif' }}
            className="!hover:bg-red-700 rounded-lg !bg-[#ea5547] px-12 py-3 font-semibold text-white transition-all duration-300"
          >
            {' '}
            Apply Now
          </Button>
        </div>

        {/* Video Section */}
        <div className="relative aspect-video w-full  overflow-hidden rounded-lg bg-black shadow-lg md:w-1/2">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://test-app.dhabahawalpur.com/public/storage/media_folders/3742/media/file_0/04.mp4"
              type="video/mp4"
            />
            <source
              src="https://test-app.dhabahawalpur.com/public/storage/media_folders/3742/media/file_0/04.mp4"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay with Title */}
          <div className="absolute inset-0 flex items-end bg-black/20 p-4">
            <div className="text-white">
              <p
                className="text-sm font-medium"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                DHA Bahawalpur Overview
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Tagline */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform text-center">
        <p
          className="text-lg text-gray-400"
          style={{ fontFamily: 'Brush Script MT, cursive' }}
        >
          Where Dreams Come True
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
