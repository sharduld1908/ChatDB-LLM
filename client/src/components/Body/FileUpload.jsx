import React from 'react';

function FileUpload() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      // Add actual file upload logic here
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-lg font-medium text-gray-700 mb-3">Upload a file</h3>
      <label 
        htmlFor="file-upload-input" 
        className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2.5 px-6 rounded-md shadow-sm transition duration-150 ease-in-out inline-block text-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
      >
        CHOOSE FILE
      </label>
      <input 
        id="file-upload-input" 
        name="file-upload-input" 
        type="file" 
        className="sr-only" // Visually hidden, functionality triggered by label
        onChange={handleFileChange} 
      />
      {/* Future: Display selected file name or upload progress */}
    </div>
  );
}

export default FileUpload;