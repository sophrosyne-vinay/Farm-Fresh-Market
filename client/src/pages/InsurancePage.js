// client/src/pages/InsurancePage.js
import React from "react";
import Layout from "./../components/Layout/Layout";

const InsurancePage = () => {
  return (
    <Layout title="Seed Insurance">
      <div className="container mt-5">
        <h1 className="text-center">Seed Insurance</h1>
        <p className="text-center">
          Protect your investment by opting for seed insurance. This insurance will cover any loss due to seeds not growing properly.
        </p>
        <p className="text-center">
          If you face any issues with the growth of your purchased seeds, you can claim the insurance by submitting your details.
        </p>
        <div className="text-center mt-4">
          <button className="btn btn-success">Learn More & Apply</button>
        </div>
      </div>
    </Layout>
  );
};

export default InsurancePage;
