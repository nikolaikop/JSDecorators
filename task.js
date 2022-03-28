function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];

  function wrapper(...args) {
    let result;
    let key = args.join(',');
    const hash = {key, result}; 
    let idx = cache.findIndex((itm) => key === itm.key);
    let newCache = []; 
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].result);
      return "Из кэша: " + cache[idx].result;
    } else {
      result = func(...args);
      hash.result = result;
      cache.push(hash);
    if (cache.length > 5){ 
      newCache = cache.filter((itm) => itm != cache[0])
       cache = newCache;
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
    if(flag === false){
      func(...args);
      flag = true;
      timeout = setTimeout(() => {
        flag = false;
      }, ms)
    } else {
      clearTimeout(timeout)
      timeout = setTimeout(() => {flag = false}, ms);
    }
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
    if(flag === false){
      func(...args);
      flag = true;
      timeout = setTimeout(() => {
        flag = false;
      }, ms)
    } else {
      clearTimeout(timeout)
      timeout = setTimeout(() => {flag = false}, ms);
    }
  }
  wrapper.count;
  return wrapper;
}
