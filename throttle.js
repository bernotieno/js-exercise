function throttle(func, delay) {
  let timeout = null;

  return (...args) =>{
    if (!timeout) {
      func.call(this, ...args)
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    }
  };
}

function opThrottle(func, delay, options = {}) {
  let lastCall = 0;
  let timeout = null;
  let lastArgs = null;

  return (...args) => {
    const now = Date.now();
    lastArgs = args
    if (!timeout && options.leading && now -lastCall >= delay) {
      func.apply(this, args)
      lastCall = now
    }
    if (!timeout) {
      timeout = setTimeout(() => {
        if (options.trailing && lastArgs) {
          func.apply(this, lastArgs)
          lastCall = Date.now()
        }
        timeout = null
      }, delay )
      }
  }

 };