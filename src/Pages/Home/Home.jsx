import { useState } from "react";
import Interface from "./Interface";
import PDFUpload from "./PDFUpload";
import Sidebar from "./Sidebar";




const Home = () => {
  const [pdfFiles, setPdfFiles] = useState([]); // Array to store multiple PDF files
  const [selectedPdf, setSelectedPdf] = useState(null); // Currently selected PDF for viewing
  const [localPdfFile, setLocalPdfFile] = useState(null); // Track the currently uploaded file in PDFUpload

  const addPdfFile = (file) => {
    setPdfFiles((prev) => [...prev, file]); // Add new file to the array
    setLocalPdfFile(file); // Set the current uploaded file
  };

  const removePdfFile = (fileToRemove) => {
    setPdfFiles((prev) => prev.filter((file) => file !== fileToRemove)); // Remove the file
    if (selectedPdf === fileToRemove) {
      setSelectedPdf(null); // Clear the selected PDF if it's deleted
    }
    if (localPdfFile === fileToRemove) {
      setLocalPdfFile(null); // Clear the uploaded file if it's deleted
    }
  };

  return (
    <div className=" mx-auto shadow-sm h-screen p-5">
      <div className="flex space-x-5">
        <div className="basis-3/12">
          <Sidebar
            pdfFiles={pdfFiles}
            removePdfFile={removePdfFile}
            setSelectedPdf={setSelectedPdf}
          />
        </div>

        <div className="basis-6/12">
          <PDFUpload addPdfFile={addPdfFile} localPdfFile={localPdfFile} />
        </div>

        <div className="basis-3/12">
          <Interface selectedPdf={selectedPdf} />
        </div>
      </div>
    </div>
  );
};

export default Home;



