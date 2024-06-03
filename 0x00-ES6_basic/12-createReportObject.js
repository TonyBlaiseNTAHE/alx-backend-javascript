export default function createReportObject(employeesList) {
  return {

    allEmployees: employeesList,

    getNumberOfDepartments(allEmployees) {
      let count = 0;

      for (const department in allEmployees) {
        if (allEmployees.hasOwnProperty(department)) {
          count += 1;
        }
      }

      return count;
    },
  };
}
