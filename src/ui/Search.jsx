import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Search = ({
  searchTerm,
  setSearchTerm,
  allProjects,
  placeholder = 'Search...',
  onSearchSubmit,
  handelclearesearch,
  basePath = '',
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Reset dropdown and suggestions if search term is empty
    if (!searchTerm?.trim()) {
      setShowDropdown(false);
      setSuggestions([]);
      setIsSearching(false);
      return;
    }

    // Show dropdown and filter suggestions
    setShowDropdown(true);
    const filteredSuggestions = allProjects?.filter((project) =>
      [
        project?.title,
        project?.name,
        project?.cnic,
        project?.address,
        project?.business_address,
        project?.business_name,
        project?.city,
        project?.phone_number,
        project?.reg_no,
        project?.star_rating,
      ]
        ?.filter((field) => field !== null && field !== undefined) // Remove undefined/null values
        ?.some((field) =>
          // Only apply toLowerCase to strings
          typeof field === 'string'
            ? field.toLowerCase().includes(searchTerm?.toLowerCase())
            : String(field).toLowerCase().includes(searchTerm?.toLowerCase())
        )
    );

    // Update suggestions and searching state
    setSuggestions(filteredSuggestions);
    setIsSearching(true);
  }, [searchTerm, allProjects]);
  // useEffect(() => {
  //   // Reset dropdown and suggestions if search term is empty
  //   if (!searchTerm?.trim()) {
  //     setShowDropdown(false);
  //     setSuggestions([]);
  //     setIsSearching(false);
  //     return;
  //   }

  //   // Show dropdown and filter suggestions
  //   setShowDropdown(true);
  //   const filteredSuggestions = allProjects?.filter((project) =>
  //     [
  //       project?.title,
  //       project?.name,
  //       project?.cnic,
  //       project?.address,
  //       project?.business_address,
  //       project?.business_name,
  //       project?.city,
  //       project?.phone_number,
  //       project?.reg_no,
  //       project?.star_rating,
  //     ]
  //       ?.filter(Boolean) // Remove undefined/null values
  //       ?.some((field) =>
  //         field.toLowerCase()?.includes(searchTerm?.toLowerCase())
  //       )
  //   );

  //   // Update suggestions and searching state
  //   setSuggestions(filteredSuggestions);
  //   setIsSearching(true);
  // }, [searchTerm, allProjects]);

  // Handle selecting a title from suggestions
  const handleSelectTitle = (title) => {
    setSearchTerm(title);
    setShowDropdown(false);
    onSearchSubmit(title);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDropdown(false);
    onSearchSubmit(searchTerm);
  };

  // NEW: Handle click on suggestion item with conditional navigation
  const handleSuggestionClick = (project) => {
    // IMPORTANT: Prevent navigation for specific base paths
    // Only apply search submit logic for 'dealer' and 'blackListedPersons'
    if (
      ['dealer', 'blackListedPersons', 'download', 'videoGallary'].includes(
        basePath
      )
    ) {
      // Just update search term and trigger search submit
      handleSelectTitle(project.title || project.cnic || project.name);
    } else {
      // Navigate to project page for other base paths
      navigate(`/${basePath}/${project?.slug}`);
    }
  };

  return (
    <div className="relative mx-auto w-[80%] max-w-xl">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="relative flex w-full items-center border-b border-gray-300 font-poppins"
      >
        <BsSearch className="text-xl text-white" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:uppercase placeholder:tracking-widest placeholder:text-gray-300 focus:outline-none sm:text-xl"
        />
        {searchTerm && (
          <RxCross1
            className="cursor-pointer text-lg text-white sm:text-2xl"
            onClick={handelclearesearch}
          />
        )}
        <button type="submit">
          <IoIosArrowRoundForward className="ml-1 text-2xl text-white sm:ml-4 sm:text-5xl" />
        </button>
      </form>

      {/* Search Suggestions Dropdown */}
      {searchTerm?.length >= 3 && showDropdown && (
        <div className="absolute left-0 right-0 z-10 max-h-60 overflow-y-auto bg-white shadow-lg">
          {isSearching && suggestions?.length === 0 ? (
            <div className="p-2 text-gray-500">No results found</div>
          ) : (
            suggestions?.map((project) => (
              <div
                key={project.id}
                className="cursor-pointer p-2 hover:bg-gray-200"
                // NEW: Use handleSuggestionClick instead of inline navigation
                onClick={() => handleSuggestionClick(project)}
              >
                {project.title || project.cnic || project.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
