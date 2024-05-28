export default function appendToEachArrayValue(array, appendString) {
	const res = [];
	for (const element of array){
		let value = appendString + element;
		res.push(value);
  }
  return res;
}
