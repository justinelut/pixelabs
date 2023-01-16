import React, {useState} from "react";

function ProjectProgress() {

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <div>
      <div className="steps-container">
        <div className={`step step-${currentStep === 1 ? 'active' : 'inactive'}`}>Step 1</div>
        <div className={`step step-${currentStep === 2 ? 'active' : 'inactive'}`}>Step 2</div>
        <div className={`step step-${currentStep === 3 ? 'active' : 'inactive'}`}>Step 3</div>
        <div className={`step step-${currentStep === 4 ? 'active' : 'inactive'}`}>Step 4</div>
        <div className={`step step-${currentStep === 5 ? 'active' : 'inactive'}`}>Step 5</div>
      </div>
      <div className="buttons-container">
        <button onClick={handlePreviousStep}>Previous</button>
        <button onClick={handleNextStep}>Next</button>
      </div>
    </div>
  );
}

export default ProjectProgress;
