function throttle(func, wait) {
  let lastCall = 0;
  let timeout = null;

  return function throttled(...args) {
    const now = Date.now();
    const remaining = wait - (now - lastCall);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCall = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        lastCall = Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
}

function opThrottle(func, wait, options = {}) {
  let lastCall = 0;
  let timeout = null;
  let lastArgs = null;
  let result;

  const leading = options.leading !== false;
  const trailing = options.trailing !== false;

  function invoke(thisArg, args) {
    lastCall = Date.now();
    result = func.apply(thisArg, args);
    lastArgs = null;
  }

  function trailingCall() {
    if (trailing && lastArgs) {
      invoke(this, lastArgs);
    }
  }

  return function throttled(...args) {
    const now = Date.now();
    const remaining = wait - (now - lastCall);

    if (!lastCall && !leading) {
      lastCall = now;
    }

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      invoke(this, args);
    } else {
      lastArgs = args;
      if (!timeout && trailing) {
        timeout = setTimeout(() => {
          trailingCall.call(this);
          timeout = null;
        }, remaining);
      }
    }

    return result;
  };
}