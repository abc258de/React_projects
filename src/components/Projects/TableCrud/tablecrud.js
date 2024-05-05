import React, {useState, Fragment} from 'react';

import './tablecrud.css';
import data from './mock-data.json'; 
import {nanoid} from 'nanoid';

import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

function App() {

  // to access to data in mock-data.json
  const[contacts, setContacts]=useState(data); 

  // to allow adding data into the form
  const[addFormData, setAddFormData] = useState({
    fullName:'',
    address:'',
    phoneNumber:'',
    email:'' 
  });
   
  const[editFormData, setEditFormData] = useState({
    fullName:'',
    address:'',
    phoneNumber:'',
    email:''
  });

  const [editContactId, setEditContactId] = useState(null);



  // pour ajouter du nouveau contenu dans les champs du form
  const handleAddFormChange=(event)=>{
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = {...addFormData};
    newFormData[fieldName]=fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event)=>{
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = {...editFormData};
    newFormData[fieldName]=fieldValue;
    setEditFormData(newFormData);
  };

  //pour valider:submit
  const handleAddFormSubmit=(event)=>{
    event.preventDefault()

    const newContact={
      id:nanoid(),
      fullName: addFormData.fullName,
      address:addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email:addFormData.email
    };

    const newContacts=[...contacts, newContact] ;
    setContacts(newContacts);
  };

  const handleEditFormSubmit=(event)=>{
    event.preventDefault()

    const editedContact={
      id:editContactId,
      fullName: editFormData.fullName,
      address:editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email:editFormData.email
    };

    const newContacts=[...contacts] ;
    const index=contacts.findIndex((contact)=>contact.id===editContactId);
    newContacts[index]=editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };



  const handleEditClick = (event, contact)=>{
    event.preventDefault();
    setEditContactId(contact.id);

  const formValues={
    fullName: contact.fullName,
    address: contact.address,
    phoneNumber: contact.phoneNumber,
    email: contact.email,
  }

  setEditFormData(formValues);
};

const handleCancelClick = () => {
  setEditContactId(null);
}

const handleDeleteClick =(contactId) => { 
  const newContacts=[...contacts] ;
  const index=contacts.findIndex((contact)=>contact.id===editContactId);
  newContacts.splice(index,1);
  setContacts(newContacts);
  }

  return (
  <div className='wrapper_table'> 
    <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th> 
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead> 
        <tbody>
          {contacts.map((contact)=>(
              <Fragment>
                {editContactId===contact.id ? (
                <EditableRow 
                editFormData={editFormData} handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}
                />
                ):(
                <ReadOnlyRow 
                contact={contact} 
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                /> )}
              </Fragment>
            ))
          }

        </tbody>
      </table>
    </form>
    
    <div className='wrapper_addnewcontact'>
      <div className='addnewcontact'>  
        <h4>Add a new contact here</h4>

        {/* FORM TO ADD CONTENT - BELOW THE TABLE*/}

          
        <form className='form_newcontact' onSubmit={handleAddFormSubmit}>
          <input className='input_contact' type="text" name="fullName" required="required" placeholder="name" onChange={handleAddFormChange} />
          <input className='input_contact' type="text" name="address" required="required" placeholder="address" onChange={handleAddFormChange}/>
          <input className='input_contact' type="text" name="phoneNumber" required="required" placeholder="phone number" onChange={handleAddFormChange}/>
          <input className='input_contact' type="text" name="email" required="required" placeholder="email" onChange={handleAddFormChange}/>
          <button type="submit" class='butadd'>Add</button>
        </form>
      </div> 
    </div>

  </div>
  );
}

export default App;
