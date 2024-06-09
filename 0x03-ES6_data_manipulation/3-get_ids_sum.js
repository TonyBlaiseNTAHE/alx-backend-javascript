export default function getStudentIdsSum(obj) {
  const sum = obj.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return sum;
}
