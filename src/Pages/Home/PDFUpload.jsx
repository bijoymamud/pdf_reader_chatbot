"use client";

import { CloudUpload } from "lucide-react";
import { useState } from "react";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";

const PDFUpload = ({ setPdfFile }) => {
  const [localPdfFile, setLocalPdfFile] = useState(null);

  const handleUploadPDF = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setLocalPdfFile(file);
      setPdfFile(file);
    } else {
      return (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Upload your PDF again.</span>
        </div>
      );
    }
  };

  if (localPdfFile) {
    return (
      <div className=" h-screen">
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
