import React from 'react';
import './ChildEnrollmentForm.css';

const AdditionalInfo = ({ formData, setFormData, handleNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="additional-info-diapering">
      <h2>Additional Information & Diapering Preferences</h2>
      <div className="form-group">
        <label htmlFor="childHistory">History of hospitalization, surgery, or health concerns</label>
        <textarea
          id="childHistory"
          name="childHistory"
          value={formData.childHistory}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="childPreferences">Child’s preferences, fears, and comfort methods</label>
        <textarea
          id="childPreferences"
          name="childPreferences"
          value={formData.childPreferences}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="toiletTrained">Is the child toilet trained?</label>
        <select
          id="toiletTrained"
          name="toiletTrained"
          value={formData.toiletTrained}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      {formData.toiletTrained === 'no' && (
        <div className="form-group">
          <label htmlFor="diaperChangeFrequency">Preferred diaper change frequency (in hours)</label>
          <input
            type="number"
            id="diaperChangeFrequency"
            name="diaperChangeFrequency"
            value={formData.diaperChangeFrequency}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default AdditionalInfo;
