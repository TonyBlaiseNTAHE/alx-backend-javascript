function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('API response');
    }, 1000);
  });
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);
