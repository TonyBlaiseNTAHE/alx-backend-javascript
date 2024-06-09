export default function getListStudentIds(obj) {
  if (!Array.isArray(obj)) {
    return [];
  }
  let arr = [];
  arr = obj.map((ids) => ids.id);
  return arr;
}
