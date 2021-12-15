import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import employeeService from "../services/employeeService";

const Employee = () => {

    const [employees, setEmployees] = useState([])

    const refreshTable = () => {
        employeeService.getEmployees()
            .then(
                response => {
                    setEmployees(response.data);
                }
            )
            .catch(
                err => {
                    console.log("error")
                }
            )
    }

    useEffect(() => {
        refreshTable();
    })

    const deleteEmployee = (employeeId) => {
        employeeService.deleteEmployeeById(employeeId)
        .then(
            response => {
                console.log("Employee removed!");
                refreshTable();
            }
        )
        .catch(
            err => {
                console.log("error", err)
            }
        )
    }

    return (
        <div className="container">
            <center>
                <br />
                <h3>EMPLOYEE LIST</h3>
                <br />
                <div>
                    <table className="table table-light table-striped table-borderless">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>NAME</td>
                                <td>DEPARTMENT</td>
                                <td>LOCATION</td>
                                <td>ACTION</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(
                                    employee => (
                                        <tr key={employee.employeeId}>
                                            <td>{employee.employeeId}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.department}</td>
                                            <td>{employee.location}</td>
                                            <td>
                                                <div className="d-grid gap-2 d-md-flex">
                                                    <Link className="btn btn-primary"
                                                        to={`/editemployee/${employee.employeeId}`}>Update</Link>
                                                    <button className="btn btn-danger"
                                                        onClick={() => deleteEmployee(employee.employeeId)}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                    <Link className="btn btn-primary"
                        to={`/addemployee/`}>Add Employee</Link>
                </div>
            </center>
        </div>
    )
}

export default Employee;