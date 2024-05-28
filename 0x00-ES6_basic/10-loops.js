export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const word of array) {
    res.push(appendString + word);
  }

  return res;
}
