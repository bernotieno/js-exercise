function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / step;
    const delayBetweenSteps = duration / step;
  
    for (let i = 0; i < step; i++) {
      const distance = start + stepSize * i;
      const point = delayBetweenSteps * i;
      
      setTimeout(() => {
        callback([distance, point]);
      }, point);
    }
  }