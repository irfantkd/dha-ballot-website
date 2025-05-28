import React, { useState, useEffect } from 'react';

const DynamicSelect = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Ensure "All" option is included only once
  const allOption = { district_name: 'All' };
  const formattedOptions = [
    allOption,
    ...options.filter(
      (opt) => opt?.district_name && opt.district_name !== 'All'
    ),
  ];

  // Reset filtered options and search term when dropdown opens
  useEffect(() => {
    if (isDropdownOpen) {
      setFilteredOptions(formattedOptions);
      setSearchTerm('');
    }
  }, [isDropdownOpen]); // Removed 'options' from dependencies to avoid unnecessary resets

  // Filter options based on search term
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredOptions(
      formattedOptions.filter((option) =>
        option.district_name.toLowerCase().includes(value)
      )
    );
  };

  // Handle option selection
  const handleOptionClick = (option) => {
    const selectedValue =
      option.district_name === 'All'
        ? { value: 'all', label: 'All' }
        : { value: option.district_name, label: option.district_name };
    onChange(selectedValue);
    setIsDropdownOpen(false);
    setSearchTerm('');
    setFilteredOptions(formattedOptions); // Reset to all options on selection
  };

  // Handle dropdown toggle
  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    if (!isDropdownOpen) {
      setFilteredOptions(formattedOptions); // Ensure all options are shown when opening
      setSearchTerm('');
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Input for search and displaying selected value */}
      <div
        className="relative flex cursor-pointer items-center justify-between rounded-md border border-[#e5e7eb] bg-white p-2"
        onClick={handleToggleDropdown}
      >
        <span>{value?.label || placeholder}</span>
        <span className="ml-2 text-gray-500">▾</span>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="z-20 mt-1 max-h-48 w-full overflow-auto rounded border border-[#e5e7eb] bg-white">
          {/* Search Box */}
          <div className="p-2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full rounded-md border p-2"
              placeholder="Search..."
            />
          </div>
          {/* Options */}
          <ul className="z-50">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.district_name}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DynamicSelect;
