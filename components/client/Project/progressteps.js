import React, { useState, useEffect } from "react";

const ProgresSteps = (props) => {
  const [progress, setProgress] = useState(props.progress);
  useEffect(() => {
    setProgress(props.progress);
  }, [props.progress]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <div className="progress-text">{`${progress}%`}</div>
      </div>
    </div>
  );
};

export default ProgresSteps;
