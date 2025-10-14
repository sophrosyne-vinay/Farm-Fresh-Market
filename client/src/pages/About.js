import React from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import Layout from "./../components/Layout/Layout";

// You don't need to import the PDF file since it's in the public folder
const pdfFile = '/brochure.pdf'; // This path works because it's in the public directory

// Set the workerSrc property
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${GlobalWorkerOptions.version}/pdf.worker.js`;

const About = () => {
  const handlePdfDownload = () => {
    // Trigger PDF download
    const link = document.createElement("a");
    link.href = pdfFile; // Link to your PDF file
    link.download = 'brochure.pdf'; // Specify the download file name
    link.click();
  };

  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/banner/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Discover a world of convenience and style at our Company Name. 
            We are your premier destination for an elevated online shopping experience. 
            Our mission is to redefine the way you shop by offering an extensive range of quality products, 
            intuitive navigation, and top-notch customer service.
          </p>
        </div>
      </div>

      <div className="pdf-button-container">
        <button onClick={handlePdfDownload} className="btn btn-primary">
          Download Our Brochure
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="pdf-viewer">
        <h2>View Our Brochure:</h2>
        <Worker workerUrl={`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${GlobalWorkerOptions.version}/pdf.worker.js`}>
          <Viewer fileUrl={pdfFile} />
        </Worker>
      </div>
    </Layout>
  );
};

export default About;
