import React, { Fragment, useState } from "react";
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router";
import Information from "./Information";
import { Link } from "react-router-dom";
import axios from "axios";
const AddUser = ()=> {
  let history = useNavigate();
  const inittialStates = {
    firstname : "",
    lastname:"",
    address: ""
  }
      const[users, setUsers] = useState([inittialStates]);
      const {firstname,lastname,address} = users;

    const onInputChange = (e)=>{
      setUsers({...users,[e.target.name] : e.target.value});
    }
    const onSubmit = async(e) =>{
            e.preventDefault();
            await axios.post("http://localhost:8080/save",users);
            alert(Response)
            // history("/springboot");
    }
    return (
        <Fragment>
            <h1>New user Registration page</h1>
            <Form onSubmit={(e) =>onSubmit(e)} className="d-grip-gap-2" style={{marginLeft : "8rem" ,marginRight : "8rem"}}>
         
            <Form.Group className="mb-3" controlId="formfirstname">
                <Form.Control type="text" placeholder="Enter your firstname" 
                  name={"firstname"} value={firstname} onChange={(e)=>onInputChange(e)}/>
            </Form.Group> 
            
            <Form.Group className="mb-3" controlId="formlastname">
                <Form.Control type="text" placeholder="Enter your lastname" 
                 name={"lastname"} value={lastname} onChange={(e) => onInputChange(e)}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
                <Form.Control type="text" placeholder="Enter your address"
                   name={"address"} value={address} onChange={(e) => onInputChange(e)}/>
            </Form.Group>

            <Link type="submit" to={"/springboot"}>Save User</Link>
        </Form>
        </Fragment>
    );
}
export default AddUser;