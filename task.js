function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];

  function wrapper(...args) {
    let key = args.join(',');
    let idx = cache.findIndex((itm) => key === itm.key);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].result);
      return "Из кэша: " + cache[idx].result;
    } else {
      let result = func(...args);
      cache.push({key, result});
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let timeout;
  let flag = false;
  
  function wrapper(...args) {
    if(flag === false) {
      func.call(this, ...args);
      flag = true;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      flag = false;
    }, ms)
  }
  return wrapper;
}

function debounceDecorator2(func) {
  // Ваш код
  let timeout;
  let flag = false;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count = wrapper.count + 1;
    if(flag === false) {
      func.call(this, ...args);
      flag = true;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      flag = false;
    }, ms)
  }
  wrapper.count;
  return wrapper;
}
