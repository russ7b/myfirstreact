import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";

const AddEmployee = () => {

    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();
    const { employeeId } = useParams("");

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = { employeeId, name, department, location }

        if (employeeId) {
            //update
            employeeService.putEmployee(employee)
                .then(
                    response => {
                        console.log("Employee updated!", response.data);
                        navigate("/employees");
                    }
                )
                .catch(
                    err => {
                        console.log("error")
                    }
                )
        }
        else {
            //add
            employeeService.postEmployee(employee)
                .then(
                    response => {
                        console.log("Employee added!", response.data);
                        navigate("/employees");
                    }
                )
                .catch(
                    err => {
                        console.log("error")
                    }
                )
        }
    }

    //not working
    useEffect(
        () => {
            if (employeeId) {
                employeeService.getEmployeeById(employeeId)
                    .then(
                        employee => {
                            setName(employee.data.name);
                            setDepartment(employee.data.department);
                            setLocation(employee.data.location);
                        }
                    )
                    .catch(
                        err => {
                            console.log("error")
                        }
                    )
            }
        },[]
    )

    return (
        <div className="container">
            <br />
            <form>
                <div className="mb-3">
                    <label for="inputName" className="form-label">Name</label>
                    <input type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Your name"
                        onChange={
                            (e) => setName(e.target.value)
                        } />
                </div>
                <div className="mb-3">
                    <label for="inputDepartment" className="form-label">Department</label>
                    <input type="text"
                        className="form-control"
                        id="inputDepartment"
                        placeholder="Assigned department"
                        onChange={
                            (e) => setDepartment(e.target.value)
                        } />
                </div>
                <div className="mb-3">
                    <label for="inputLocation" className="form-label">Location</label>
                    <input type="text"
                        className="form-control"
                        id="inputLocation"
                        placeholder="Address"
                        onChange={
                            (e) => setLocation(e.target.value)
                        } />
                </div>
                <button type="submit"
                    className="btn btn-primary"
                    onClick={(e) => saveEmployee(e)}>Submit</button>
            </form>
        </div>
    );
}

export default AddEmployee;