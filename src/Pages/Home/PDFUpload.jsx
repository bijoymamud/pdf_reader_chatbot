"use client";

import { CloudUpload } from "lucide-react";
import { useState } from "react";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";

const PDFUpload = ({ addPdfFile, localPdfFile }) => {
  const handleUploadPDF = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      addPdfFile(file); // Add file to the state in `Home`
    }
  };

  if (localPdfFile) {
    return (
      <div className="h-screen">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={URL.createObjectURL(localPdfFile)} />
        </Worker>
      </div>
    );
  }

  return (
    <div className="flex justify-center h-screen flex-col bg-slate-100">
      <div className="text-center">
        <div className="flex flex-col items-center">
          <label
            htmlFor="file-upload"
            className="flex items-center gap-3 cursor-pointer bg-blue-500 font-semibold hover:bg-blue-600 text-white py-2 px-6 rounded-sm shadow-lg text-base"
          >
            Upload PDF <CloudUpload size={20} />
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleUploadPDF}
          />
          <p className="text-gray-500 mt-4">
            No PDF selected. Please upload one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PDFUpload;

