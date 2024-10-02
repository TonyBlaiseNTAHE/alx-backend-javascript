export default function createIteratorObject(report) {
  const empl = [];
  for (const employee in report.allEmployees) {
    empl.push(...report.allEmployees[employee]);
  }

  return empl;
}
