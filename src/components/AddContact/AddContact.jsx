import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
const AddContact = (props) => {
  console.log(props);
  const [user, setUser] = useState("");
  const [user2, setUser2] = useState("");
  const [user3, setUser3] = useState("");
  const [user4, setUser4] = useState("");

  const handleInput = (e) => {
    setUser(e.target.value);
  };
  const handleInput2 = (e) => {
    setUser2(e.target.value);
  };
  const handleInput3 = (e) => {
    setUser3(e.target.value);
  };
  const handleInput4 = (e) => {
    setUser4(e.target.value);
  };

  const handleAdd = (e) => {
    if (!user || !user2 || !user3 || !user4) {
      alert("Fill in the fields");
      return;
    }
    const newUser = {
      user: user,
      user2: user2,
      user3: user3,
      user4: user4,
      id: Date.now(),
    };
    props.handleTask(newUser);
    setUser("");
    setUser2("");
    setUser3("");
    setUser4("");
  };
  return (
    <div>
      <Form style={{ padding: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Add Contact
        </h2>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>

            <Form.Control
              placeholder="Enter Name"
              onChange={handleInput}
              value={user}
              type="text"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              placeholder="Enter Surname"
              onChange={handleInput2}
              value={user2}
              type="text"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Number</Form.Label>
            <Form.Control
              placeholder="Enter Number"
              onChange={handleInput3}
              value={user3}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Enter Email"
              onChange={handleInput4}
              value={user4}
              type="email"
            />
          </Form.Group>
        </Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ marginTop: "30px", width: "100px" }}
            onClick={handleAdd}
            variant="primary"
          >
            ADD
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddContact;
