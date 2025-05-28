import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Spinner,
  Input,
} from '@material-tailwind/react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import Pagination from './Pagination';
const DynamicTable = ({
  tableTitle,
  columns,
  searchPlaceholder,
  data,
  onDelete,
  onEdit,
  open,
  isLoading,
  SetGetsearchTerm,
  searchableFields = ['title', 'description'],
}) => {
  const [cardsPerPage, setCardsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  // Sync search term with parent component
  useEffect(() => {
    if (SetGetsearchTerm) {
      SetGetsearchTerm(searchTerm);
    }
  }, [searchTerm, SetGetsearchTerm]);
  // Calculate pagination for filtered data
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data?.slice(indexOfFirstCard, indexOfLastCard);
  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  // Clear search
  const handleClearSearch = () => {
    setSearchTerm('');
    if (SetGetsearchTerm) {
      SetGetsearchTerm('');
    }
    setCurrentPage(1);
  };
  // Capitalize and format column headers
  const formatHeader = (col) => {
    return col
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };
  return (
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          <Typography
            variant="h6"
            color="white"
            className="w-full text-center md:w-auto md:text-left"
          >
            {tableTitle}
          </Typography>
          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            {SetGetsearchTerm && (
              <div className="relative flex w-full items-center sm:max-w-[24rem]">
                {!searchTerm && (
                  <span className="absolute right-3 text-white">
                    <AiOutlineSearch size={20} />
                  </span>
                )}
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pr-10 text-white"
                  containerProps={{ className: 'min-w-0' }}
                  label={`Search ${searchPlaceholder}`}
                  color="white"
                />
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-3 text-white hover:text-red-400"
                  >
                    <AiOutlineClose size={20} />
                  </button>
                )}
              </div>
            )}
            {open && (
              <Button
                color="blue"
                size="sm"
                onClick={open}
                className="w-full sm:w-auto"
                disabled={isLoading}
              >
                Add
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-x-scroll px-0 pb-2 pt-0">
        {isLoading ? (
          <div className="flex items-center justify-center py-10">
            <Spinner className="text-blue-gray-500 h-12 w-12" />
          </div>
        ) : currentCards && currentCards.length > 0 ? (
          <div>
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th className="border-blue-gray-50 border-b px-5 py-3 text-left">
                    <Typography
                      variant="small"
                      className="text-blue-gray-400 text-[11px] font-bold uppercase"
                    >
                      SR No
                    </Typography>
                  </th>
                  {columns?.map((col, index) => (
                    <th
                      key={index}
                      className="border-blue-gray-50 border-b px-5 py-3 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-blue-gray-400 text-[11px] font-bold uppercase"
                      >
                        {formatHeader(col)}
                      </Typography>
                    </th>
                  ))}
                  {(onDelete || onEdit) && (
                    <th className="border-blue-gray-50 border-b px-5 py-3 text-left">
                      <Typography
                        variant="small"
                        className="text-blue-gray-400 text-[11px] font-bold uppercase"
                      >
                        Actions
                      </Typography>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentCards?.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-blue-gray-50 border-b">
                    <td className="px-5 py-3">
                      <Typography className="text-blue-gray-600 text-xs font-semibold">
                        {rowIndex + 1 + (currentPage - 1) * cardsPerPage}
                      </Typography>
                    </td>
                    {columns?.map((col, colIndex) => (
                      <td key={colIndex} className="px-5 py-3">
                        {col === 'description' ? (
                          <Typography className="text-blue-gray-600 text-xs font-semibold">
                            <p
                              className="mb-5 text-center font-poppins text-sm leading-normal text-zinc-500 md:text-start"
                              dangerouslySetInnerHTML={{
                                __html: row[col] || '---',
                              }}
                            />
                          </Typography>
                        ) : (
                          <Typography className="text-blue-gray-600 text-xs font-semibold">
                            {row[col] || '---'}
                          </Typography>
                        )}
                      </td>
                    ))}
                    <td className="flex gap-2 px-5 py-3">
                      {onDelete && (
                        <Button
                          variant="text"
                          size="sm"
                          color="red"
                          onClick={() => onDelete(row)}
                        >
                          Delete
                        </Button>
                      )}
                      {onEdit && (
                        <Button
                          variant="text"
                          size="sm"
                          color="blue"
                          onClick={() => onEdit(row)}
                        >
                          Edit
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data?.length > 12 && (
              <Pagination
                totalCards={data?.length}
                cardsPerPage={cardsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                siblingCount={1}
                setCardsPerPage={setCardsPerPage}
              />
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center py-10">
            <Typography className="text-blue-gray-500">
              {searchTerm ? 'No matching results found.' : 'No data available.'}
            </Typography>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
export default DynamicTable;
