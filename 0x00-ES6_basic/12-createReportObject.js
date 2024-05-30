export default function createReportObject(employeesList) {
    return {
  
      allEmployees: employeesList,
  
      getNumberOfDepartments(allEmployees) {
        let i = 0;
  
        // eslint-disable-next-line guard-for-in, no-unused-vars
        for (const dep in allEmployees) {
          i += 1;
        }
  
        return i;
      },
    };
  }