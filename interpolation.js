function interpolation({ step, start, end, callback, duration }) {
  const stepSize = (end - start) / step;
  const timeStep = duration / step;

  for (i=1; i<=step;i++){
    const distance = Number((start + stepSize * i-1).toFixed(2));
    const point = Number((timeStep * i).toFixed(2));

    setTimeout(() => {
      callback([distance, point]);
    }, point);
  }
}
