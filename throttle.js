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
  let lastResult;
  let isThrottled = false;

  const leading = options.leading !== false;
  const trailing = options.trailing !== false;

  function invoke(thisArg, args) {
    lastCall = Date.now();
    lastResult = func.apply(thisArg, args);
    lastArgs = null;
  }

  function trailingCall() {
    if (trailing && lastArgs) {
      invoke(this, lastArgs);
    }
    isThrottled = false;
    timeout = null;
  }

  return function throttled(...args) {
    const now = Date.now();
    const callNow = leading && !isThrottled;

    if (!lastCall && !leading) {
      lastCall = now;
    }

    const remaining = wait - (now - lastCall);

    if (callNow || remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      invoke(this, args);
      isThrottled = true;
    } else if (!timeout && trailing) {
      lastArgs = args;
      timeout = setTimeout(trailingCall.bind(this), remaining);
    }

    return lastResult;
  };
}