import React from 'react';
import './ChildEnrollmentForm.css';

const PhysicianInfo = ({ formData, setFormData, handleNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="physician-info">
      <h2>Physician Information</h2>
      <div className="form-group">
        <label htmlFor="physicianName">Physician's Name</label>
        <input
          type="text"
          id="physicianName"
          name="physicianName"
          value={formData.physicianName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="physicianPhone">Physician's Phone Number</label>
        <input
          type="tel"
          id="physicianPhone"
          name="physicianPhone"
          value={formData.physicianPhone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="physicianAddress">Physician's Address</label>
        <input
          type="text"
          id="physicianAddress"
          name="physicianAddress"
          value={formData.physicianAddress}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default PhysicianInfo;
