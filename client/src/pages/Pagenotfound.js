import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import "../styles/Pagenotfound.css";

const Pagenotfound = () => {
  return (
    <Layout title={'Go Back - Page Not Found'}>
      <div className="pnf">
        <div className="pnf-404">
          <span className="digit">4</span>
          <span className="digit">0</span>
          <span className="digit">4</span>
        </div>
        <h1 className="pnf-text">Oops! Page Not Found</h1>
        <p className="pnf-description">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="pnf-btn">Go Back</Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
