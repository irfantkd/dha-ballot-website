import React from 'react';
import PropTypes from 'prop-types';
// import Search from './Search';
const Heading = ({ children, className }) => {
  return (
    <>
      <div
        className={`text-xl uppercase leading-tight tracking-normal sm:text-4xl  ${className}`}
      >
        {children}
      </div>
    </>
  );
};
Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Heading;
