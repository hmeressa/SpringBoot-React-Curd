import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Fragment } from 'react';
import { useNavigate,useParams } from "react-router";
import { Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { Button } from 'antd';
// import { Container,Paper} from '@material-ui/core';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const Updatepage = ()=> {
 let history = useNavigate();
 const {ids} = useParams();

  const [user, setUser] = useState({id :"",firstname : "",lastname:"",address: ""})
  const [users, setUsers] = useState({id :"",firstname : "",lastname:"",address: ""})
  const {id,firstname,lastname,address} = users;
  const onInputchange = (e)=>{
  setUser({...user,[e.target.name]:e.target.value});
}
//   useEffect(() => {
//   loadUser(); 
// });
// const onSubmit = async(e)=>{
//   e.preventDefault();
//   const result = await axios.get(`http://localhost:8080/updateById/${ids}`,user);
//   setUser(result.data);
//   history("/Viewpage")
// }
useEffect(() => {
  loadUser(); 
},[]);
const loadUser = async()=>{
    const result = await axios.get(`http://localhost:8080/getById/${ids}`);
    setUser(result.data);
};
    return (
      <Fragment>
      <MDBContainer fluid>
     <MDBRow className='d-flex justify-content-center align-items-center h-100'>
       <MDBCol col='12'>
         <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
           <MDBCardBody className='p-5 w-100 d-flex flex-column'>
             <h2 className="fw-bold mb-2 text-center">Sign up</h2>
             <p className="text-white-50 mb-3">Please enter your Full Information to register!</p>
            {/* <Form onSubmit={e=>onSubmit(e)}> */}
             <MDBInput wrapperClass='mb-4 w-100' label='Id'
             name={"id"} value={id} onChange={e=>onInputchange(e)} id='formControlLg' type='text' size="sm"/>
             <MDBInput wrapperClass='mb-4 w-100' label='First name'
             name={"firstname"} value={firstname} onChange={e=>onInputchange(e)} id='formControlLg' type='text' size="sm"/>
             <MDBInput wrapperClass='mb-4 w-100' label='Last name' 
             name={"lastname"} value={lastname} onChange={e=>onInputchange(e)} id='formControlLg' type='text' size="sm"/>
             <MDBInput wrapperClass='mb-4 w-100' label='Address' 
             name={"address"} value={address} onChange={e=>onInputchange(e)} id='formControlLg' type='text' size="sm"/>
             <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
           <button className='btn btn-success'  size='sm'>Update user</button>
             <hr className="my-4" />
             {/* </Form> */}
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
     </MDBRow>
   </MDBContainer>
   </Fragment>
    );
}

export default Updatepage;