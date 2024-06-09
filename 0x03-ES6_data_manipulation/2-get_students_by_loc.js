export default function getStudentsByLocation(obj, city) {
  const studentByCity = obj.filter((loc) => loc.location === city);
  return studentByCity;
}
