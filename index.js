const employee = {
  name: "butthead",
  streetAddress: "1234 Why Ln",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newEmployee = {};
  Object.assign(newEmployee, employee);
  newEmployee[key] = value;
  return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
  let newEmployee = {};
  Object.assign(newEmployee, employee);
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
  employee[key] = value;
  return employee;
}
