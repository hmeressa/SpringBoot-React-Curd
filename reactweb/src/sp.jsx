import React from 'react'
const sp = ()=>{

}
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