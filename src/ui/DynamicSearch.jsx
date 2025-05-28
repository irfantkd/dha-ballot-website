import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
const DynamicSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="mx-auto mb-10 mt-4 w-[40%]">
      <div className="relative flex w-full items-center justify-center border-b border-gray-300 font-poppins">
        <BsSearch className="text-xl text-white" />
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search By Title"
          className="w-full bg-transparent px-4 py-3 text-xl placeholder:font-extralight  placeholder:uppercase  placeholder:tracking-widest placeholder:text-gray-300 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default DynamicSearch;
