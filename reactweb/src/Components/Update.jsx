import React, { Fragment, useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap'
import { useNavigate, Link } from "react-router";
import Information from "./Information";
import uuid from 'react-uuid'
const Update = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [age, setage] = useState('');
    const [sex, setsex] = useState('');
    const [address, setaddress] = useState('');
    
      let history = useNavigate();
      
       var index = Information.map(function(e){
            return e.firstname;
       }).indexOf(firstname);

    const handleSubmit = (e) => {
          e.preventDefault();
          let info = Information[index];
          info.firstname = firstname;
          info.lastname = lastname;
          info.age = age;
          info.sex = sex;
          info.address = address;
          history("/view");  
    }
      useEffect(() => {
            setfirstname(localStorage.getItem('firstname'));
            setlastname(localStorage.getItem('lastname'));
            setage(localStorage.getItem('age'));
            setsex(localStorage.getItem('sex'));
            setaddress(localStorage.getItem('address'));
      }, []);
    return (
        
        <Fragment>
            <h1>New user Registration page</h1>
            <Form className="d-grip-gap-2" style={{marginLeft : "8rem" ,marginRight : "8rem"}}>
            <Form.Group className="mb-3" controlId="formfirstname">
                <Form.Control type="text" placeholder="Enter your firstname" value={firstname} required onChange={(e) => setfirstname(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formlastname">
                <Form.Control type="text" placeholder="Enter your lastname" value={lastname} required onChange={(e) => setlastname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
                <Form.Control type="text" placeholder="Enter your age" value={age} required onChange={(e) => setage(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formsex">
                <Form.Control type="text" placeholder="Enter your sex"  value={sex} required onChange={(e) => setsex(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
                <Form.Control type="text" placeholder="Enter your address" value={address} required onChange={(e) => setaddress(e.target.value)} />
            </Form.Group>
            <Button type="submit" onClick={(e) => handleSubmit(e)}>Update User</Button>
        </Form>
        </Fragment>
    );
}
export default Update;