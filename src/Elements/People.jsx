import axios from "axios";
import Employee from "./Person";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import "./style2.css";
import Loader from 'react-loader-spinner';

function Employees(){

    const [employeeData, setEmployeeData] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(getEmployees, []);

    function getEmployees() {
        axios.get('https://statenweb.mockable.io/employees').then(function(response){
            setEmployeeData(response.data);
        });
    }

    function getEmployeeById(id) {
        setSelectedEmployee(id);
    }

    if(employeeData.length === 0) {
        return <Loader type="Rings" color="black" height={100} width={100} />
    }

    if(selectedEmployee){
         return <div>
            <Employee selectedEmployee = {selectedEmployee}/>
            <Button variant="dark" onClick = {() => setSelectedEmployee(null)}>Go Back</Button>
        </div>
    }

    return <div>
        <h4 className="center permanent">Christmas Naughty List</h4>
            <p className="App Alfa"></p>
        {employeeData.map((employee) => <p key={employee.id}><Button variant="dark" onClick={() => getEmployeeById(employee.id)}>{employee.name} - {employee.department}</Button></p>)}
    </div>;
}


export default Employees;