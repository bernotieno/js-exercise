function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / step;
    const timeStep = duration / step;
  
    // console.log(`Interpolation called with step: ${step}, start: ${start}, end: ${end}, duration: ${duration}`);
  
    for (let i = 0; i < step; i++) {
      const distance = start + stepSize * i;
      const point = timeStep * i;
      
      setTimeout(() => {
        // console.log(`Executing callback at ${Date.now()}: [${distance}, ${point}]`);
        callback([distance, point]);
      }, point);
    }
  
    // console.log('All callbacks scheduled');
  }