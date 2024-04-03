import React from 'react';
import './ChildEnrollmentForm.css';

const EmergencyContact = ({ formData, setFormData, handleNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="emergency-contact">
      <h2>Emergency Contact Information</h2>
      <div className="form-group">
        <label htmlFor="emergencyName">Name</label>
        <input
          type="text"
          id="emergencyName"
          name="emergencyName"
          value={formData.emergencyName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="emergencyRelationship">Relationship to Child</label>
        <input
          type="text"
          id="emergencyRelationship"
          name="emergencyRelationship"
          value={formData.emergencyRelationship}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="emergencyPhone">Telephone Number</label>
        <input
          type="tel"
          id="emergencyPhone"
          name="emergencyPhone"
          value={formData.emergencyPhone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="emergencyAddress">Address</label>
        <input
          type="text"
          id="emergencyAddress"
          name="emergencyAddress"
          value={formData.emergencyAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="emergencyCity">City</label>
        <input
          type="text"
          id="emergencyCity"
          name="emergencyCity"
          value={formData.emergencyCity}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="emergencyState">State</label>
        <input
          type="text"
          id="emergencyState"
          name="emergencyState"
          value={formData.emergencyState}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="emergencyZip">Zip Code</label>
        <input
          type="text"
          id="emergencyZip"
          name="emergencyZip"
          value={formData.emergencyZip}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default EmergencyContact;
