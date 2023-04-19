import React,{Fragment, useEffect,useState} from "react";
import Table from 'react-bootstrap/Table';
import { Button } from "antd/lib/radio";
import { Link,useParams } from "react-router-dom";

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const Viewpage = ()=>{
const [user, setUser] = useState([]);

// const {id} = useParams();

  useEffect(() => {
    loadUser(); 
  }, []); 
  const loadUser = async()=>{
      const result = await axios.get("http://localhost:8080/getAll/");
      setUser(result.data);
  }

  const deleteUser = async(id)=>{
    const result = await axios.delete(`http://localhost:8080/deleteById/${id}`);
    alert(result.data)
   loadUser()
  }

     return(
        <Fragment>
              <Table striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>IdNo.</th>
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
                        <td>{info.id}</td>
                        <td>{info.firstname}</td>
                        <td>{info.lastname}</td>
                        <td>{info.address}</td>
                        <Link className="btn btn-primary" to={`/Detailspage/${info.id}`}>View</Link>
                        <Link className="btn btn-success" onClick={loadUser} to={`/Updatepage/${info.id}`}>Edit</Link>
                        <button className="btn btn-warring" onClick={()=>deleteUser(info.id)}>Delete</button>
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
export default Viewpage;