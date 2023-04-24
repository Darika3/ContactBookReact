import React, { useState } from 'react'
import AddTodo from './components/AddContact/AddContact'
import TododList from './components/ContactList/ContactList';
import EditTodo from './components/EditContact/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [contacts, setContacts]= useState([]);
const [editTodo, setEditTodo]= useState({});
const [modal, setModal] = useState(false)
  const handleTask = (newObj)=>{
    let newContacts = [...contacts]
    newContacts.push(newObj)
    setContacts(newContacts);
    
  };
 
  const handleDelete=(id)=>{
    let newContacts=contacts.filter((item)=>item.id !== id )
    setContacts(newContacts)
  }
const handleEdit=(taskToEdit)=>{
  setModal(true);
setEditTodo(taskToEdit);
}
console.log(editTodo);
const handleCloseModal=()=>{
  setModal(false);
}

const handleSaveTask=(updatedTask)=>{
const newContacts=contacts.map((item)=>{
  if(item.id===updatedTask.id){
    return updatedTask
  }
  return item 
})
setContacts(newContacts);
handleCloseModal();
}

  return (<div><AddTodo handleTask={handleTask} />
  <TododList handleEdit={handleEdit} handleDelete={handleDelete}  contacts={contacts}/>
  {modal?( <EditTodo handleSaveTask={handleSaveTask} editTodo={editTodo} handleCloseModal={handleCloseModal} />):null}
  </div>)}

export default App