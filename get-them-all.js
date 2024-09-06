// Function to get architects and non-architects
export const getArchitects = () => {
    const architects = [...document.getElementsByTagName('a')];
    const nonArchitects =[...document.getElementsByTagName('span')];
    return [architects, nonArchitects];
  };
  
  // Function to get classical and non-classical architects
  export const getClassical = () => {
    const [architects,_] = getArchitects()
    const classical = architects.filter(architect => architect.classList.contains('classical'));
    const nonClassical = architects.filter(architect => !architect.classList.contains('classical'));
    return [classical, nonClassical];
  };
  
  // Function to get active and non-active classical architects
  export const getActive = () => {
    const [classicalArchitects,_] = getClassical()
    const active = classicalArchitects.filter(architect => architect.classList.contains('active'));
    const nonActive = classicalArchitects.filter(architect => !architect.classList.contains('active'));
    return [active, nonActive];
  };
  
  // Function to get Bonanno Pisano and other active classical architects
  export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano');
    const [activeNone,_] = getActive()
    const otherActiveClassical = activeNone.filter(architect => architect.id !== 'BonannoPisano');
    return [bonannoPisano, otherActiveClassical];
  };