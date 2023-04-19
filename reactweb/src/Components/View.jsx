import React, { Fragment } from "react";
import Information from "./Information";
import {Link,useNavigate} from 'react-router-dom'
import { Button,Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const View = ()=>{

    const handleUpdate = (id,firstname, lastname, age, sex, address) => {
        localStorage.setItem("id", id);
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("sex", sex);
        localStorage.setItem("age", age);
        localStorage.setItem("address", address);
    }
    //to delete user with id
    let history = useNavigate();
    const handleInfo = (id)=>{
        var index = Information.map(function(e){
            return e.id;
        }).indexOf(id);
        Information.splice(index,1);
        history("/view");
    }
    return(
        
        <Fragment >
            <h1 className="text-color :red">User Full Information</h1>
        <Table striped bordered hover size = "sm" style={{marginLeft : "4rem" ,marginRight : "8rem"}}>
        <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Address</th>
            <td>Acrions</td>
        </tr>

        {
            Information.sort && Information.length > 0 
            ?
            Information.map((info) => {
                
                return(
                    <tr key={info.id}>  
                        <td>{info.id}</td>
                        <td>{info.firstname}</td>
                        <td>{info.lastname}</td>
                        <td>{info.age}</td>
                        <td>{info.sex}</td>
                        <td>{info.address}</td>
                        <td>
                            <Button onClick={()=>handleInfo(info.id)}>Delete</Button>
                            <Link to={"/update"}>
                            <Button onClick={()=>handleUpdate(info.id,info.firstname,info.lastname,info.age,info.sex,info.address)}>Update</Button>
                            </Link>
                        </td>
                    </tr>
                )
                     
            })
            :
            "No employees found"
        }   
</Table>
    <br />
    <br />
    <Link className="d-grid-gap-2" to="/create" >
         <Button size="lg">Add New User</Button>
    </Link>
</Fragment>
    );

    
}
export default View;