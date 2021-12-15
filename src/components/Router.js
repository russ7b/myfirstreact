import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home"
import PageNotFound from "./PageNotFound"
import Employee from "./Employee"
import AddEmployee from "./AddEmployee"

const Router = () =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="*" element={<PageNotFound/>} />
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/employees" element={<Employee/>} />
                    <Route exact path="/addemployee" element={<AddEmployee/>} />
                    <Route exact path="/editemployee/:employeeId" element={<AddEmployee/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;