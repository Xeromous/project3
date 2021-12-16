import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import "./cardstyle.css";
import Loader from 'react-loader-spinner';

function Employee({selectedEmployee}){

    const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);
    const [loading, setLoading]= useState(false);
    useEffect(() => {
        axios.get(`http://statenweb.mockable.io/employee/${selectedEmployee}`).then((r) => setSelectedEmployeeData(r.data));
    }, [selectedEmployee]);


    if(!selectedEmployeeData){
        return <Loader type="Rings" color="black" height={100} width={100} />;
    }

    const {
        id,
        name,
        startDate,
        role,
        department,
        photo,
    } = selectedEmployeeData;

    return <div>
        
    <h3 className="indviual">{role}</h3>
        <Card style={{ width: '18rem' }} className = "customCard center border border-solid border-dark border-4">
            <Card.Img variant="top" src={photo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="indviual">
                All of {name} information
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="color1">Start Date: {startDate}</ListGroupItem>
                <ListGroupItem className="color2">Role: {role}</ListGroupItem>
                <ListGroupItem className="color3">Department: {department}</ListGroupItem>
            </ListGroup>
        </Card>

    </div>;
}

export default Employee;