import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Fragment } from 'react';
import { useNavigate } from "react-router";
import { Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { Button } from 'antd';
// import { Container,Paper} from '@material-ui/core';
// import { fetchUrl } from 'fetch';

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
// fetchUrl()
const Signuppage = ()=> {

  let history = useNavigate();
  const inittialStates = {
    id :"6",
    firstname : "a",
    lastname:"a",
    address: "a"
  }
      const [id, setId] =useState('');
      const [firstname,setFirstname] =useState('');
      const [lastname,setLastname] =useState('');
      const [address,setAddress] =useState('');
      const user = {id,firstname,lastname,address}
        const save = async(e)=>{
          e.preventDefault();
          try{
            const result = await axios.post("http://localhost:8080/save",user)
            .then(e=>{
              alert(e.data);
            }).catch(e=>{
              alert(e);
            })
            console.log(result.data)
          }
         catch(err)
         {
          console.error(err)
         }
         history("/Viewpage")
        }
       
      // }
    return (
      <Fragment>
      <MDBContainer fluid>
     <MDBRow className='d-flex justify-content-center align-items-center h-100'>
       <MDBCol col='12'>

         <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
           <MDBCardBody className='p-5 w-100 d-flex flex-column'>

             <h2 className="fw-bold mb-2 text-center">Sign up</h2>
             <p className="text-white-50 mb-3">Please enter your Full Information to register!</p>
             <MDBInput wrapperClass='mb-4 w-100' label='Id'
             name={"firstname"} value={id} onChange={(e)=>setId(e.target.value)} id='formControlLg' type='text' size="sm"/>
             <MDBInput wrapperClass='mb-4 w-100' label='First name'
             name={"firstname"} value={firstname} onChange={(e)=>setFirstname(e.target.value)} id='formControlLg' type='text' size="sm"/>
             <MDBInput wrapperClass='mb-4 w-100' label='Last name' 
             name={"lastname"} value={lastname} onChange={(e)=>setLastname(e.target.value)} id='formControlLg' type='text' size="sm"/>
             <MDBInput wrapperClass='mb-4 w-100' label='Address' 
             name={"address"} value={address} onChange={(e)=>setAddress(e.target.value)} id='formControlLg' type='text' size="sm"/>
             <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
           <button className='btn btn-success'  onClick={save} size='sm'>Create account</button>
             <hr className="my-4" />
           </MDBCardBody>
         </MDBCard>

       </MDBCol>
     </MDBRow>

   </MDBContainer>
   </Fragment>
    );
}

export default Signuppage;