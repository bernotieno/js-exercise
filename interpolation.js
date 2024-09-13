function interpolation({ step, start, end, callback, duration }) {
    if (step <= 1) return; // Avoid triggering if step is less than or equal to 1
  
    const stepSize = (end - start) / (step - 1);
    const timeStep = duration / (step - 1);
  
    function runStep(i) {
      if (i >= step) return;
  
      const distance = start + stepSize * i;
      const point = timeStep * i;
  
      setTimeout(() => {
        callback([distance, point]);
        runStep(i + 1); // Recursively go to the next step
      }, point);
    }
  
    runStep(1); // Start from 1 to avoid unnecessary first callback
  }
  