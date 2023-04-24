import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ContactList = (props) => {
  console.log(props);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div id="todo">
        <h2 style={{ textAlign: "center" }}>Contact Book</h2>
        <Card style={{ width: "18rem" }}>
          {props.contacts.map((item) => {
            console.log(item);
            return (
              <Card.Body style={{ border: "1px solid grey" }} key={item.id}>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Card.Title>{item.user}</Card.Title>
                  <Card.Title>{item.user2}</Card.Title>
                </div>
                <hr />
                <Card.Title style={{ textAlign: "center" }}>
                  {item.user3}
                </Card.Title>
                <hr />
                <Card.Title style={{ textAlign: "center" }}>
                  {item.user4}
                </Card.Title>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    style={{ width: "80px", marginRight: "20px" }}
                    onClick={() => props.handleEdit(item)}
                    variant="danger"
                  >
                    Edit
                  </Button>
                  <Button
                    style={{ width: "80px" }}
                    onClick={() => props.handleDelete(item.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            );
          })}
        </Card>
      </div>
    </div>
  );
};
export default ContactList;
