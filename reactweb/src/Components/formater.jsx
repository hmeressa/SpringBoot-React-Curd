<Form>

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

      <Button type="submit" onClick={(e) => handleSubmit(e)}>Submit</Button>

      
</Form>
     