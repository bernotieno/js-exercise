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

  function invoke() {
    lastCall = Date.now();
    lastResult = func.apply(this, lastArgs);
    lastArgs = null;
  }

  function trailingCall() {
    if (trailing && lastArgs) {
      invoke();
    }
    isThrottled = false;
    timeout = null;
  }

  return function (...args) {
    const now = Date.now();

    if (!lastCall && !leading) {
      lastCall = now;
    }

    const remaining = wait - (now - lastCall);

    if (!isThrottled && (remaining <= 0 || remaining > wait)) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      invoke();
      isThrottled = true;
    } else {
      lastArgs = args;
      if (!timeout && trailing) {
        timeout = setTimeout(trailingCall, remaining);
      }
    }

    return lastResult;
  };
}