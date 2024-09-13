function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / step;
    const timeStep = duration / step;
  
    function runStep(i) {
      if (i >= step) return;
  
      const distance = start + stepSize * (i + 1);
      const point = timeStep * (i + 1);
      
      setTimeout(() => {
        callback([distance, point]);
        runStep(i + 1); // Recursively call the next step
      }, point);
    }
  
    runStep(0); // Start the process
  }
  