function dogYears(planet, dogAgeInSeconds) {
    const orbitalYears = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

    const secondsInEarthYear = 31557600;

    const ageInEarthYears = dogAgeInSeconds / secondsInEarthYear;

    const orbitalPeriod = orbitalYears[planet.toLowerCase()];

    if (!orbitalPeriod) {
        throw new Error('Invalid planet name');
    }

    const ageInPlanetYears = ageInEarthYears / orbitalPeriod;
    
    return parseFloat(ageInPlanetYears.toFixed(2));
}