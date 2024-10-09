export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      //console.log("succeded");
      resolve("succeded");
    }, 200);
  });
}
