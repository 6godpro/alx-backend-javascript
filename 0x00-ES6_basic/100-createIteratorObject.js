export default function createIteratorObject(report) {
  const employees = [];
  for (const departmentName of Object.keys(report.allEmployees)) {
    employees.push(...report.allEmployees[departmentName]);
  }
  return employees;
}
