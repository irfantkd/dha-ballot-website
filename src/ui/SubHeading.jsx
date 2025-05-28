import React from 'react';
import PropTypes from 'prop-types';
const SubHeading = ({ children, className }) => {
  return (
    <div
      className={` text-xs uppercase tracking-normal md:text-sm ${className}`}
    >
      {children}
    </div>
  );
};
SubHeading.propTypes = {
  children: PropTypes.node.isRequired, // Accepts strings, elements, or any renderable content
  className: PropTypes.string,
};
export default SubHeading;
