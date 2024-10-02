export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const element of array) {
    const value = appendString + element;
    newArray.push(value);
  }
  return newArray;
}
