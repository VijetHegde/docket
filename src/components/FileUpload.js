import React from 'react';
import Papa from 'papaparse';

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        complete: function(result) {
          // Process the parsed data (result.data)
          onFileUpload(result.data);
        },
        header: true, // Set this to true if your CSV file has headers
      });
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;