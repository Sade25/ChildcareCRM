import React from 'react';
import './ChildEnrollmentForm.css';

const EmergencyTransportationAuth = ({ formData, setFormData, handleNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="emergency-transportation">
      <h2>Emergency Transportation Authorization</h2>
      <div className="form-group radio-group">
        <label className="emergency-contact-question" htmlFor="transportPermission">Permission to secure emergency transportation:</label>
        <div> 
          <input
            type="radio"
            id="transportPermissionYes"
            name="transportPermission"
            value="yes"
            checked={formData.transportPermission === 'yes'}
            onChange={handleChange}
          />
          <label htmlFor="transportPermissionYes">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="transportPermissionNo"
            name="transportPermission"
            value="no"
            checked={formData.transportPermission === 'no'}
            onChange={handleChange}
          />
          <label htmlFor="transportPermissionNo">No</label>
        </div>
      </div>
      {formData.transportPermission === 'no' && (
        <div className="form-group">
          <label htmlFor="noTransportReason">If no, please explain:</label>
          <textarea
            id="noTransportReason"
            name="noTransportReason"
            value={formData.noTransportReason}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default EmergencyTransportationAuth;
