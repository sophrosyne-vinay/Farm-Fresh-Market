import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout tittle={'Privacy Policy'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/banner/privaypolicy.gif" 
            alt="contactus"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-4">
          <p>➡️ Clearly state the document is a Privacy Policy.</p>
          <p>➡️ Express commitment to user privacy.</p>
          <p>➡️ Explain use of cookies and tracking technologies.</p>
          <p>➡️ Specify types of information collected.</p>
          <p>➡️ Describe purposes for using collected information.</p>
          <p>➡️ Inform users of their rights and choices.</p>
          <p>➡️ Specify types of information collected.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;