// Cities Only
function citiesOnly(arr) {
    return arr.map(obj => obj.city);
  }
  
  // Upper Casing States
  function upperCasingStates(arr) {
    return arr.map(state => 
      state.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    );
  }
  
  // Fahrenheit to Celsius
  function fahrenheitToCelsius(arr) {
    return arr.map(temp => {
      const fahrenheit = parseInt(temp);
      const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
      return `${celsius}°C`;
    });
  }
  
  // Trim Temp
  function trimTemp(arr) {
    return arr.map(obj => ({
      ...obj,
      temperature: obj.temperature.replace(/\s/g, '')
    }));
  }
  
  // Temp Forecasts
  function tempForecasts(arr) {
    return arr.map(obj => {
      const celsius = Math.floor((parseInt(obj.temperature) - 32) * 5 / 9);
      const cityState = `${obj.city}, ${upperCasingStates([obj.state])[0]}`;
      return `${celsius}°Celsius in ${cityState}`;
    });
  }
  