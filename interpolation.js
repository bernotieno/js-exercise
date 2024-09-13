function interpolation({ step, start, end, callback, duration }) {
  const stepSize = (end - start) / (step - 1);
  const timeStep = duration / (step - 1);

  function scheduleCallback(i) {
    if (i > step) return; // Stop recursion when all steps are handled

    const distance = start + stepSize * i;
    const point = timeStep * i;

    setTimeout(() => {
      callback([distance, point]);
      scheduleCallback(i + 1); // Schedule the next step
    }, point); // Delay based on `point`
  }

  scheduleCallback(1); // Start the recursion
}
