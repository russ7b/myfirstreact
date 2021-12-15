import httpCommon from "../commons/http-common";

const getEmployees = () => {
    return httpCommon.get('/employee/employees');
}

const postEmployee = (data) => {
    return httpCommon.post('/employee/employees', data);
}

const getEmployeeById = (employeeId) => {
    return httpCommon.get(`/employee/employees/${employeeId}`);
}

const putEmployee = (data) => {
    return httpCommon.put('/employee/employees', data);
}

const deleteEmployeeById = (employeeId) => {
    return httpCommon.delete(`/employee/employees/${employeeId}`);
}

export default {getEmployees, postEmployee, getEmployeeById, putEmployee, deleteEmployeeById};