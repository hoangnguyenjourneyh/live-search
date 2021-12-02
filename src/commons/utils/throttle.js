export function throttleFunc(fn, wait) {
  var lastFn, lastTime = 0;
  return function() {
    const context = this,
    args = arguments;
    if (args && (args[1] === 'cancel')) {
      clearTimeout(lastFn);
    }
    var remaining = wait - (Date.now() - lastTime);
    if (remaining <= 0) {
      fn.apply(context, args);
      lastTime = Date.now();
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        fn.apply(context, args);
        lastTime = Date.now();
      }, remaining);
    }
  };
};