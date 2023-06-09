const employee = {

}
function updateEmployeeWithKeyAndValue(employee,name,Sam){
    const newObj = { ...employee };

    newObj[name] = Sam;
  
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, Broadway) {
    employee[streetAddress] = Broadway; 
    return employee; 
  }

  function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = { ...employee }; 
    delete newEmployee[name]; 
    return newEmployee; 
  }

  function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
    return employee; 
  }
  
  