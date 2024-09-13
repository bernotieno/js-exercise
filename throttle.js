// Basic throttle function
function throttle(func, wait) {
    let lastCall = 0;
    let lastResult;
  
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= wait) {
        lastCall = now;
        lastResult = func.apply(this, args);
      }
      return lastResult;
    };
  }
  
  // Throttle function with trailing and leading options
  function opThrottle(func, wait, options = {}) {
    let timeout = null;
    let lastCall = 0;
    let lastArgs = null;
  
    const leading = options.leading !== false;
    const trailing = options.trailing !== false;
  
    function invoke(time) {
      lastCall = time;
      func.apply(this, lastArgs);
      lastArgs = null;
    }
  
    return function (...args) {
      const now = Date.now();
  
      if (!lastCall && !leading) {
        lastCall = now;
      }
  
      const remaining = wait - (now - lastCall);
  
      lastArgs = args;
  
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        invoke(now);
      } else if (!timeout && trailing) {
        timeout = setTimeout(() => {
          invoke(leading ? Date.now() : lastCall + wait);
        }, remaining);
      }
    };
  }