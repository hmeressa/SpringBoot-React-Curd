import React,{Fragment, useEffect,useState} from "react";
import Table from 'react-bootstrap/Table';
import { Link,useParams } from "react-router-dom";

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const Detailspage = ()=>{
  let index=0
      const inittialStates = {
            id :"",
            firstname : "",
            lastname:"",
            address: ""
          }
const [user, setUser] = useState([inittialStates])

const {id} = useParams();

  useEffect(() => {
    loadUser(); 
  });
  const loadUser = async()=>{
      const result = await axios.get(`http://localhost:8080/getById/${id}`);
      setUser(result.data);
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
              </tr>
            </thead>
            <tbody> 
            {/* {
            user && user.length == 1 
            ? */}
                    <tr>  
                        <td>{index+1}</td>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.address}</td>
                    </tr>                    
            {/* :
            "No employees found"
        }   */}
            </tbody>
          </Table>
        </Fragment>
        );
}
export default Detailspage;