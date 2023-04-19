import React, { Fragment, useState } from "react";
import { Button, Form } from 'react-bootstrap'
import { useNavigate, Link } from "react-router";
import Information from "./Information";
import uuid from 'react-uuid'
const Register = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [age, setage] = useState('');
    const [sex, setsex] = useState('');
    const [address, setaddress] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const unId = uuid();
        const userId = unId.slice(0,8);

        Information.push({
            id: userId,
            firstname: firstname,
            lastname: lastname,
            age: age,
            sex: sex,
            address: address,
        })
        history("/view");
    }
    return (
        
        <Fragment>
            <h1>New user Registration page</h1>
            <Form className="d-grip-gap-2" style={{marginLeft : "8rem" ,marginRight : "8rem"}}>
            <Form.Group className="mb-3" controlId="formfirstname">
                <Form.Control type="text" placeholder="Enter your firstname" required onChange={(e) => setfirstname(e.target.value)} />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formlastname">
                <Form.Control type="text" placeholder="Enter your lastname" required onChange={(e) => setlastname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
                <Form.Control type="text" placeholder="Enter your age" required onChange={(e) => setage(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formsex">
                <Form.Control type="text" placeholder="Enter your sex" required onChange={(e) => setsex(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
                <Form.Control type="text" placeholder="Enter your address" required onChange={(e) => setaddress(e.target.value)} />
            </Form.Group>
            <Button type="submit" onClick={(e) => handleSubmit(e)}>Add New User</Button>
        </Form>
        </Fragment>
    );
}
export default Register;