export default function createReportObject(employeesList) {
    return {
        allEmployees: employeesList,

            getNumberOfDepartments(allEmployees) {
                let i = 0;
                
                for (const dep in allEmployees) {
                    i = i+1;
                }
                return i;
            },
        };
}
