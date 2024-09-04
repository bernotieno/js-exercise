function hasCity(country, cities) {
    return function(city) {
      if (cities.includes(city)) {
        return `${city} is a city from ${country}`;
      } else {
        return `${city} is not a city from ${country}`;
      }
    };
  }