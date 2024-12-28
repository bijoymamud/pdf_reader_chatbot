import React from "react";

const Sidebar = ({ pdfFile }) => {
  return (
    <div className="h-screen bg-white ">
      <h1 className="text-xl font-semibold">Uploaded History :</h1>

      {/* pdf edit and delete task */}
      {pdfFile ? (
        <p className="mt-2 text-sm">File Name : {pdfFile.name}</p>
      ) : (
        <p className="mt-2 text-sm text-gray-500">No file uploaded</p>
      )}
    </div>
  );
};

export default Sidebar;
