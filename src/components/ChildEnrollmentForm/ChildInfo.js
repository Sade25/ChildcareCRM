import React from 'react';
import './ChildEnrollmentForm.css';

const ChildInfo = ({ formData, setFormData, handleNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Ensure that formData.childFName is accessed safely
  const childFName = formData && formData.childFName ? formData.childFName : '';

  return (
    <div className="child-info">
      <h4>Child Information</h4>
      <div className="form-group">
        <label htmlFor="childFName">First Name</label>
        <input
          type="text"
          id="childFName"
          name="childFName"
          value={formData.childFName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="childLName">Last Name</label>
        <input
          type="text"
          id="childLName"
          name="childLName"
          value={formData.childLName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstDayAtProgram">First Day at Program</label>
        <input
          type="date"
          id="firstDayAtProgram"
          name="firstDayAtProgram"
          value={formData.firstDayAtProgram}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="homeAddress">Home Address</label>
        <input
          type="text"
          id="homeAddress"
          name="homeAddress"
          value={formData.homeAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="homeTelephone">Home Telephone</label>
        <input
          type="text"
          id="homeTelephone"
          name="homeTelephone"
          value={formData.homeTelephone}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default ChildInfo;