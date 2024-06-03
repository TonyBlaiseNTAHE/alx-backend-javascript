export default function createIteratorObject(report) {
  const res = [];

  for (const empl in report.allEmployees) {
    res.push(...report.allEmployees[empl]);
  }
  return res;
}
