function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / (step - 1);
    const timeStep = duration / (step - 1);
  
    function runStep(i) {
      if (i >= step) return;
  
      const distance = start + stepSize * i;
      const point = timeStep * i;
  
      setTimeout(() => {
        callback([distance, point]);
  
        // Recursively go to the next step
        runStep(i + 1);
      }, point);
    }
  
    // Start from 0 instead of 1
    runStep(0);
  }