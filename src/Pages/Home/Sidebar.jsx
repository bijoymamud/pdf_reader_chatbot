import { FilePen, FileX2 } from "lucide-react";
import React, { useEffect } from "react";

const Sidebar = ({ pdfFiles, removePdfFile, setSelectedPdf }) => {
  return (
    <div className="h-screen bg-white p-4">
      <h1 className="text-xl font-semibold mb-4">Uploaded History:</h1>

      {pdfFiles.length > 0 ? (
        pdfFiles.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-3 p-2 border rounded-lg shadow-sm"
          >
            <p className="text-base">
              <strong>File Name:</strong> {file.name}
            </p>

            <div className="flex gap-3">
              <button
                className="bg-blue-500 p-1 rounded-full text-white hover:bg-black"
                onClick={() => setSelectedPdf(file)}
              >
                <FilePen size={20} />
              </button>

              <button
                className="bg-red-500 p-1 rounded-full text-white hover:bg-black"
                onClick={() => removePdfFile(file)}
              >
                <FileX2 size={20} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-500">No file uploaded</p>
      )}
    </div>
  );
};

export default Sidebar;

