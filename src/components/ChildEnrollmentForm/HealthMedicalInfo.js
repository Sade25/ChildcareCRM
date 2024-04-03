import React from 'react';
import './ChildEnrollmentForm.css';

const HealthMedicalInfo = ({ formData, setFormData, handleNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="health-medical-info">
      <h2>Health and Medical Information</h2>
      <div className="form-group">
        <label htmlFor="allergies">Allergies (Food, Medication, Environmental)</label>
        <input
          type="text"
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="medicalConditions">Special Health or Medical Conditions</label>
        <input
          type="text"
          id="medicalConditions"
          name="medicalConditions"
          value={formData.medicalConditions}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="medication">Current Medication</label>
        <input
          type="text"
          id="medication"
          name="medication"
          value={formData.medication}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
        <input
          type="text"
          id="dietaryRestrictions"
          name="dietaryRestrictions"
          value={formData.dietaryRestrictions}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="doctorName">Physician/Clinic Name</label>
        <input
          type="text"
          id="doctorName"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="doctorPhone">Physician/Clinic Phone Number</label>
        <input
          type="tel"
          id="doctorPhone"
          name="doctorPhone"
          value={formData.doctorPhone}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default HealthMedicalInfo;
