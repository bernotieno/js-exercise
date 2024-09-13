function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / step;
    const timeStep = duration / step;
  
    function runStep(i) {
      if (i > step) return;
  
      const distance = start + stepSize * i;
      const point = timeStep * i;
  
      setTimeout(() => {
        callback([distance, point]);
  
        // Recursively go to the next step
        runStep(i + 1);
      }, point);
    }
  
    runStep(1);
  }
  