import React, { useState } from 'react';

const ITEMS_PER_PAGE = 10;

const TableView = ({ tableName, columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!columns || !data) {
    return (
      <>
        <h2 
          className="text-xl font-semibold text-gray-700 px-4 py-3 sticky top-0 bg-white z-10 border-b border-gray-200"
        >
          {tableName || "Table"}
        </h2>
        <p className="text-gray-500 p-4 text-center">Table schema or data not loaded.</p>
      </>
    );
  }
  
  if (data.length === 0) {
     return (
      <>
        <h2 
          className="text-xl font-semibold text-gray-700 px-4 py-3 sticky top-0 bg-white z-10 border-b border-gray-200"
        >
          {tableName}
        </h2>
        <p className="text-gray-500 p-4 text-center">No data in this table.</p>
      </>
    );
  }

  // Pagination logic
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <>
      {/* Table name header, sticky to the top of its scrollable container in RightContent */}
      <h2 
        className="text-xl font-semibold text-gray-700 px-4 py-3 sticky top-0 bg-white z-10 border-b border-gray-200"
      >
        {tableName}
      </h2>
      
      {/* This div handles horizontal scrolling for the table if it's too wide. */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 whitespace-nowrap"
                >
                  {col.replace(/_/g, ' ')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentData.map((row) => ( // Use currentData, row.id for key
              <tr key={row.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-150">
                {columns.map((col) => (
                  <td 
                    key={col} // Use column name for cell key
                    className="px-4 py-3 whitespace-nowrap text-sm text-gray-700"
                  >
                    {String(row[col])} {/* Ensure value is a string */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 bg-white">
          {/* Mobile View: Simple Previous/Next */}
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>

          {/* Desktop View: Detailed Info and Buttons */}
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{Math.min(startIndex + 1, data.length)}</span> to <span className="font-medium">{Math.min(endIndex, data.length)}</span> of{' '}
                <span className="font-medium">{data.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Current page indicator (optional, could be expanded with page numbers) */}
                <span className="relative inline-flex items-center px-4 py-2 border-y border-gray-300 bg-white text-sm font-medium text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TableView;