import { useState } from "react";
import Interface from "./Interface";
import PDFUpload from "./PDFUpload";
import Sidebar from "./Sidebar";

const Home = () => {
  const [pdfFile, setPdfFile] = useState(null);
  return (
    <div className=" mx-auto shadow-sm h-screen p-5">
      <div className="flex space-x-5">
        <div className=" basis-3/12">
          <Sidebar pdfFile={pdfFile} />
        </div>

        <div className="basis-6/12">
          <PDFUpload setPdfFile={setPdfFile} />
        </div>

        <div className="basis-3/12">
          <Interface />
        </div>
      </div>
    </div>
  );
};

export default Home;
