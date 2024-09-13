function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / step;
    const delayBetweenSteps = duration / step;
  
    function executeStep(currentStep) {
      if (currentStep >= step) return;
  
      const distance = start + stepSize * currentStep;
      const point = delayBetweenSteps * currentStep;
  
      callback([distance, point]);
  
      setTimeout(() => executeStep(currentStep + 1), delayBetweenSteps);
    }
  
    executeStep(0);
  }