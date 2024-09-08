import { places } from "./where-do-we-go.data.js";
function parseLatitude(coordinate) {
    const [degrees, minutes, seconds, direction] = coordinate.match(/(\d+)°(\d+)'([\d.]+)"([NS])/).slice(1);
    let decimal = parseInt(degrees) + parseInt(minutes) / 60 + parseFloat(seconds) / 3600;
    return direction === 'S' ? -decimal : decimal;
}


export function explore() {
    const sortedPlaces = places.sort((a, b) => {
      const latA = parseLatitude(a.coordinates.split(' ')[0]);
      const latB = parseLatitude(b.coordinates.split(' ')[0]);
      return latB - latA;
    });
  
    const body = document.body;
    const locationIndicator = document.createElement('a');
    locationIndicator.className = 'location';
    body.appendChild(locationIndicator);
  
    const compass = document.createElement('div');
    compass.className = 'direction';
    body.appendChild(compass);
  
    let lastScrollPosition = window.scrollY;
  
    sortedPlaces.forEach((place) => {
      const section = document.createElement('section');
      const imageName = place.name.split(',')[0].toLowerCase().replace(/ /g, '-');
      section.style.background = `url('./where-do-we-go_images/${imageName}.jpg') center/cover no-repeat`;
      body.appendChild(section);
    });

    function formatCoordinatesForUrl(coordinate) {
    return coordinate
        .replace(/°/g, '%C2%B0')
        .replace(/"/g, '%22')
        .replace(/ /g, '%20');
}
 
    function updateLocationIndicator() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentIndex = Math.floor((scrollPosition + windowHeight / 2) / windowHeight);
      const currentPlace = sortedPlaces[currentIndex];
  
      if (currentPlace) {
        locationIndicator.textContent = `${currentPlace.name}\n${currentPlace.coordinates}`;
        locationIndicator.style.color = currentPlace.color;
          const coordinates = formatCoordinatesForUrl(currentPlace.coordinates);
        locationIndicator.href = `https://www.google.com/maps/place/${coordinates}`;
        locationIndicator.target = '_blank';
      }
  
      const scrollDirection = scrollPosition > lastScrollPosition ? 'S' : 'N';
      compass.textContent = scrollDirection;
  
      lastScrollPosition = scrollPosition;
    }
  
    window.addEventListener('scroll', updateLocationIndicator);
    updateLocationIndicator(); 
  }