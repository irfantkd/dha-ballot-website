import Heading from './Heading';
import PropTypes from 'prop-types';

const Header = ({ children, className = '' }) => {
  const { bgImage, headingText, searchComponent } = children || {};

  // Calculate optimal background position based on viewport height

  return (
    <>
      <div>
        <div
          className={`${className} // relative  flex h-[38dvh] w-full items-center  justify-center bg-cover bg-center
          sm:h-[40dvh] 
          `}
          style={{
            backgroundImage: `url(${
              bgImage ||
              'https://res.cloudinary.com/dktyonr0v/image/upload/v1740123076/website-static-images/header-image.jpg'
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70 "></div>
          <div className="relative z-10 flex w-full flex-col items-center justify-center  sm:mt-20">
            <Heading className="mx-auto  mb-3 w-[85%] text-center font-poppins font-bold  text-white sm:mb-8">
              {headingText}
            </Heading>
            {searchComponent}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
};
