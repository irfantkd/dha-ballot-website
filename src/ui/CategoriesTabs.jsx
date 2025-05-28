import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const CategoriesTabs = ({
  heading,
  dummyData,
  onTabClick,
  setActiveTab,
  activeTab,
  className = '',
}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(dummyData);
  }, [dummyData]);

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (onTabClick) {
      onTabClick(id);
    }
  };

  return (
    <>
      <div
        className={`flex flex-col items-center justify-between ${className}`}
        id="project-scroll"
      >
        <ul className="flex cursor-pointer flex-wrap justify-center ">
          {categories?.map((category, index) => (
            <li
              key={category?.id || index}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(category?.title || category.id);
              }}
              className={`duration-400 pointer relative mb-[0.1rem] max-w-full flex-1 whitespace-nowrap border border-b-white border-e-white px-3 py-3  text-center font-poppins text-sm font-semibold text-black transition-all  sm:px-10 sm:py-4 sm:text-base 
                lg:max-w-max xl:border-b-0
                ${
                  activeTab === category?.id || activeTab === category?.title
                    ? 'bg-white'
                    : 'bg-gray-200'
                } ${
                activeTab === category?.id || activeTab === category?.title
                  ? 'after:absolute after:left-0 after:top-0 after:h-[3px] after:w-full after:scale-x-100 after:transform after:bg-gray-800'
                  : 'after:absolute after:left-0 after:top-0 after:h-[3px] after:w-full after:scale-x-0 after:transform after:bg-gray-800'
              }`}
            >
              {category?.name || category?.category_name || category?.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

CategoriesTabs.propTypes = {
  heading: PropTypes.string,
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoriesTabs;
