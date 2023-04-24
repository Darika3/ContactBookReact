import React, { useState } from "react";
import "./EditContact.css";

const EditContact = (props) => {
  const [item, setItem] = useState(props.editTodo);

  const handleEditInput = (e) => {
    let newObj = { ...item };
    newObj.user = e.target.value;
    setItem(newObj);
  };
  const handleEditInput2 = (e) => {
    let newObj = { ...item };
    newObj.user2 = e.target.value;
    setItem(newObj);
  };
  const handleEditInput3 = (e) => {
    let newObj = { ...item };
    newObj.user3 = e.target.value;
    setItem(newObj);
  };
  const handleEditInput4 = (e) => {
    let newObj = { ...item };
    newObj.user4 = e.target.value;
    setItem(newObj);
  };
  console.log(item);
  return (
    <div className="main-modal">
      <div className="inner-modal" style={{ padding: "10px" }}>
        <input
          onChange={handleEditInput}
          value={item.user}
          type="text"
          className="inp-edit"
        />
        <input
          onChange={handleEditInput2}
          value={item.user2}
          type="text"
          className="inp-edit"
        />
        <input
          onChange={handleEditInput3}
          value={item.user3}
          type="text"
          className="inp-edit"
        />
        <input
          onChange={handleEditInput4}
          value={item.user4}
          type="text"
          className="inp-edit"
        />
        <br />
        <button
          style={{ marginTop: "10px", width: "100px" }}
          onClick={() => props.handleSaveTask(item)}
        >
          Save
        </button>

        <button
          style={{ marginTop: "10px", width: "100px" }}
          onClick={() => props.handleCloseModal()}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default EditContact;
