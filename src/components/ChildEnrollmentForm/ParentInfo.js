import React from 'react';
import './ChildEnrollmentForm.css';

const ParentInfo = ({ formData, setFormData, handleNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="parent-info">
      <h2>Parent/Guardian Information</h2>
      <div className="form-group">
        <label htmlFor="parentFName">First Name</label>
        <input
          type="text"
          id="parentFName"
          name="parentFName"
          value={formData.parentFName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="parentLName">Last Name</label>
        <input
          type="text"
          id="parentLName"
          name="parentLName"
          value={formData.parentLName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="parentRelation">Relationship to Child</label>
        <input
          type="text"
          id="parentRelation"
          name="parentRelation"
          value={formData.parentRelation}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="parentHomeAddress">Home Address</label>
        <input
          type="text"
          id="parentHomeAddress"
          name="parentHomeAddress"
          value={formData.parentHomeAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="parentCity">City</label>
        <input
          type="text"
          id="parentCity"
          name="parentCity"
          value={formData.parentCity}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="parentState">State</label>
        <input
          type="text"
          id="parentState"
          name="parentState"
          value={formData.parentState}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="parentZipCode">Zip Code</label>
        <input
          type="text"
          id="parentZipCode"
          name="parentZipCode"
          value={formData.parentZipCode}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="parentEmail">Email Address</label>
        <input
          type="text"
          id="parentEmail"
          name="parentEmail"
          value={formData.parentEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="parentPhone">Phone Number</label>
        <input
          type="text"
          id="parentPhone"
          name="parentPhone"
          value={formData.parentPhone}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default ParentInfo;
