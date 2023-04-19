import React,{Fragment, useEffect,useState} from "react";
import Table from 'react-bootstrap/Table';
import { Button } from "antd/lib/radio";
import { Link } from "react-router-dom";

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const Springboot = ()=>{
const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser(); 
  }, []);
  const loadUser = async()=>{
      const result = await axios.get("http://localhost:8080/getAll/${id}");
      setUser(result.data);
  }
  useEffect(() => {
   addUser();
  }, []);

  const addUser = ()=>{
    // const load = async()=>{
      
    // })
  }
     return(
        <Fragment>
              <Table striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th rowSpan={"3"}>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
            user && user.length > 0 
            ?
            (user|| []).map((info,index) =>(
                    <tr>  
                      <th scope="row">{index+1}</th>
                        {/* <td>{info.id}</td> */}
                        <td>{info.firstname}</td>
                        <td>{info.lastname}</td>
                        <td>{info.address}</td>
                        <td className="btn btn-primary">View</td>
                    </tr>                    
            ))
            :
            "No employees found"
        }  
            </tbody>
            <Link to={"/addUser"}>Add New User</Link>
          </Table>
        </Fragment>
        );
}
export default Springboot;

