import React, { useState } from "react";
import '../styles/CRMPages.css'; 

const CRMPages = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    customerID: "",
    complaintType: "",
    complaintSubject: "",
    complaintDescription: "",
    incidentDate: "",
    orderID: "",
    attachment: null,
    location: "",
    priorityLevel: "",
    contactMethod: "",
    resolutionExpectations: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API request)
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="crm-form-container">
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit} className="crm-form">
        {/* User Details */}
        <div className="form-section">
          <label>Full Name (required):</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="form-section">
          <label>Email Address (required):</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-section">
          <label>Phone Number (optional):</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-section">
          <label>Customer ID/Account Number (optional):</label>
          <input type="text" name="customerID" value={formData.customerID} onChange={handleChange} />
        </div>

        {/* Complaint Information */}
        <div className="form-section">
          <label>Complaint Type (required):</label>
          <select name="complaintType" value={formData.complaintType} onChange={handleChange} required>
            <option value="">Select Complaint Type</option>
            <option value="Billing Issue">Billing Issue</option>
            <option value="Product Defect">Product Defect</option>
            <option value="Service Problem">Service Problem</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-section">
          <label>Subject of Complaint (required):</label>
          <input type="text" name="complaintSubject" value={formData.complaintSubject} onChange={handleChange} required />
        </div>
        <div className="form-section">
          <label>Detailed Description (required):</label>
          <textarea name="complaintDescription" value={formData.complaintDescription} onChange={handleChange} required />
        </div>
        <div className="form-section">
          <label>Date of Incident (optional):</label>
          <input type="date" name="incidentDate" value={formData.incidentDate} onChange={handleChange} />
        </div>
        <div className="form-section">
          <label>Order/Transaction ID (optional):</label>
          <input type="text" name="orderID" value={formData.orderID} onChange={handleChange} />
        </div>

        {/* Supporting Information */}
        <div className="form-section">
          <label>Upload Attachments (optional):</label>
          <input type="file" name="attachment" onChange={handleChange} />
        </div>
        <div className="form-section">
          <label>Location/Address (optional):</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </div>

        {/* Complaint Priority */}
        <div className="form-section">
          <label>Priority Level (optional):</label>
          <select name="priorityLevel" value={formData.priorityLevel} onChange={handleChange}>
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Resolution Preferences */}
        <div className="form-section">
          <label>Preferred Contact Method (optional):</label>
          <select name="contactMethod" value={formData.contactMethod} onChange={handleChange}>
            <option value="">Select Contact Method</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="In-Person">In-Person</option>
          </select>
        </div>
        <div className="form-section">
          <label>Resolution Expectations (optional):</label>
          <textarea name="resolutionExpectations" value={formData.resolutionExpectations} onChange={handleChange} />
        </div>

        {/* Captcha/Verification */}
        {/* <div className="form-section"> */}
          {/* <label>Captcha (required):</label> */}
          {/* You can use a captcha service like Google reCAPTCHA here */}
          {/* <input type="text" name="captcha" placeholder="Enter Captcha" required /> */}
        {/* </div> */}

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit Complaint</button>
      </form>
    </div>
  );
};

export default CRMPages;
