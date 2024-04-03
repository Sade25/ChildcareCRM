import React, { useState } from 'react';
import './ChildEnrollmentForm.css';
import ChildInfo from './ChildInfo';
import ParentInfo from './ParentInfo';
import EmergencyContact from './EmergencyContact';
import PhysicianInfo from './PhysicianInfo';
import HealthMedicalInfo from './HealthMedicalInfo';
import AdditionalInfo from './AdditionalInfo';
import EmergencyTransportation from './EmergencyTransportation';
import { saveChildInfoToFirebase } from '../../firebase';
import { addNewChild } from '../../firebaseService';


const ChildEnrollmentForm = () => {
  const [formData, setFormData] = useState({
    childInfo: {},
    parentInfo: {},
    emergencyContact: {},
    physicianInfo: {},
    healthMedicalInfo: {},
    additionalInfo: {},
    emergencyTransportation: {},
    // Initialize form data state with all necessary fields
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };


  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ChildInfo formData={formData} setFormData={setFormData} handleNext={handleNext} />;
      case 2:
        return <ParentInfo formData={formData} setFormData={setFormData} handleNext={handleNext} />;
      case 3:
        return <EmergencyContact formData={formData} setFormData={setFormData} handleNext={handleNext} />;
      case 4:
        return <PhysicianInfo formData={formData} setFormData={setFormData} handleNext={handleNext} />;
      case 5:
        return <HealthMedicalInfo formData={formData} setFormData={setFormData} handleNext={handleNext} />;
      case 6:
        return <AdditionalInfo formData={formData} setFormData={setFormData} handleNext={handleNext} />;
      case 7:
        return <EmergencyTransportation formData={formData} setFormData={setFormData} handleNext={handleNext} />;
      default:
        return <div>Review and Submit</div>; // or some completion step
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Here you should include validation for formData or individual steps
    // If validation passes, then proceed to save data

    try {
      // Assuming formData.childInfo exists and is the data for the child_info collection
      const childId = await addNewChild(formData.childInfo);
      console.log(`New child added with ID: ${childId}`);
      // Handle post-save actions, such as resetting the form, notifying the user, or redirecting
    } catch (error) {
      // Handle errors, for example, by showing an error message to the user
      console.error("Failed to save child information: ", error);
    }
  };
  

  return (
    <div className="container">
      <h3>Child Enrollment Form</h3>
      <form onSubmit={handleSubmit}>
        {renderStep()}
        {currentStep > 1 && (
          <button type="button" className="navigator-button" onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </button>
        )}
        {currentStep < 8 && (
          <button type="button" className="navigator-button" onClick={handleNext}>
            Next
          </button>
        )}
        {currentStep === 8 && (
          <button type="submit" className="btn">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default ChildEnrollmentForm;
