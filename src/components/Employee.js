import { useEffect, useState } from "react";
import employeeService from "../services/employeeService";

const Employee = () => {

    const[employees, setEmployees] = useState([])

    useEffect( () => {
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
    })

    return (
        <div>
            <h3>EMPLOYEE LIST</h3>
            <div>
                <table border="1">
                    <tr>
                        <td>NAME</td>
                        <td>DEPARTMENT</td>
                        <td>LOCATION</td>
                    </tr>
                    {
                        employees.map(
                            employee =>(
                                <tr key={employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.location}</td>
                                </tr>
                            )
                        )
                    }
            </table>
            </div>
        </div>
    )
}

export default Employee;