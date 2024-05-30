export default function createIteratorObject(report) {
    const res = [];
    // eslint-disable-next-line guard-for-in
    for (const empl in report.allEmployees) {
        res.push(...report.allEmployees[empl]);
    }
    return res;

}