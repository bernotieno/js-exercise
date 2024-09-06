let brickCount = 0;

export const build = (amount) => {
  const tower = document.getElementsByTagName('body')[0];
  
  const addBrick = () => {
    if (brickCount < amount) {
      brickCount++;
      const brick = document.createElement('div');
      brick.id = `brick-${brickCount}`;
      
      if (brickCount % 3 === 2) {  // Middle column
        brick.dataset.foundation = true;
      }
      
      tower.appendChild(brick);
      setTimeout(addBrick, 100);
    }
  };
  
  addBrick();
};

export const repair = (...ids) => {
  ids.forEach(id => {
    const brick = document.getElementById(id);
    if (brick) {
      if (brick.dataset.foundation) {
        brick.dataset.repaired = 'in progress';
      } else {
        brick.dataset.repaired = 'true';
      }
    }
  });
};

export const destroy = () => {
  const tower = Array.from(document.querySelectorAll("div[id^='brick-']"));
  if (tower.length > 0) {
tower[tower.length-1].remove();
  }
};