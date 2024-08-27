const planetYears = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

function dogYears(planet, ageInSecs) {
    const earthYearsInSec = 31557600;

    const ageInEarthYears = ageInSecs / earthYearsInSec;

    const ageInPlanetYears = ageInEarthYears / planetYears[planet.toLowerCase()];

    const dogYear = ageInPlanetYears * 7;

    return parseFloat(dogYear.toFixed(2));
}
