export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (var element of array) {
    var value = appendString + element;
    newArray.push(value);
  }
  return newArray;
}
