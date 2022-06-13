import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { Button, ContactInput, AddContactForm, Header, Table, Wrapper, Thead, SmallButton, Tdata } from '../styles/StyledComps';
import data from '../tempdata.json'
import EditInfo from './EditInfo';
import StaticInfo from './StaticInfo';

function Contacts() {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({fullname: '', company: '', email: '', mobilephone: '', workphone:'', homephone:''})
  const [editContactData, setEditContactData] = useState({fullname: '', company: '', email: '', mobilephone: '', workphone:'', homephone:''})
  const [editContactId, setEditContactId] = useState(null)

  function handleAddFormChange(e){
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;
    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData)
  }

  function handleAddFormSubmit (e){
    e.preventDefault();
    const newContact = {id: nanoid(), fullname: addFormData.fullname, company: addFormData.company, email: addFormData.email, 
          mobilephone: addFormData.mobilephone, workphone: addFormData.workphone, homephone: addFormData.homephone}
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
    setAddFormData({fullname: '', company: '', email: '', mobilephone: '', workphone:'', homephone:''})
  }

    function handleDelete(id, e){
      e.preventDefault()
      const removeContact = contacts.filter((contact)=>{
        return contact.id !== id
      })
      if(window.confirm('Are you sure you want to delete this contact?')){
        setContacts(removeContact)
      }else{
        setContacts(contacts)
      }
    }

    function handleEdit(e){
      e.preventDefault()
      const fieldName = e.target.getAttribute('name');
      const fieldValue = e.target.value;
      const newFormData = {...editContactData};
      newFormData[fieldName] = fieldValue;
      setEditContactData(newFormData)
    }
    
    function editId (e, contact){
      e.preventDefault()
      setEditContactId(contact.id)
      const formValues = {
        fullname: contact.fullname,
        company: contact.company,
        email: contact.email,
        mobilephone: contact.mobilephone, 
        workphone:contact.workphone, 
        homephone: contact.workphone
      }
      setEditContactData(formValues)
    }

    function editSubmit (e){
      e.preventDefault()
      const edited = {
        id: editContactId,
        fullname: editContactData.fullname,
        company: editContactData.company,
        email: editContactData.email,
        mobilephone: editContactData.mobilephone,
        workphone: editContactData.workphone,
        homephone: editContactData.homephone,
      }
      const newContacts = [...contacts]
      const index = contacts.findIndex((contact)=> contact.id === editContactId)
      newContacts[index] = edited
      setContacts(newContacts)
      setEditContactId(null)
    }
  return (
    <Wrapper>
      <Header>Contacts list</Header>
      <form>
        <Table>
          <Thead>
            <tr>
              <Tdata>Name</Tdata>
              <Tdata>Company</Tdata>
              <Tdata>Email</Tdata>
              <Tdata>Phone</Tdata>
              <Tdata>Edit</Tdata>
              <Tdata>Delete</Tdata>
            </tr>
          </Thead>
          <tbody>
          {contacts.map((contact)=> (
          <>
          {editContactId === contact.id ? 
            (<EditInfo handleEdit={handleEdit} editContactData={editContactData}/>) : 
            (<StaticInfo contact={contact} editId={editId} handleDelete={handleDelete}/>)
          }   
          </>
          ))}
          </tbody>
        </Table>
      </form>
      <AddContactForm onSubmit={handleAddFormSubmit}>
        <ContactInput type = 'text' name='fullname' placeholder='Name' onChange={handleAddFormChange}/>
        <ContactInput type = 'text' name='company' placeholder='Company' onChange={handleAddFormChange}/>
        <ContactInput type = 'email' name='email' placeholder='Email' onChange={handleAddFormChange}/>
        <ContactInput type = 'number' name='mobilephone' placeholder='Mobile Phone' onChange={handleAddFormChange}/>
        <ContactInput type = 'text' name='workphone' placeholder='Work Phone' onChange={handleAddFormChange}/>
        <ContactInput type = 'text' name='homephone' placeholder='Home Phone' onChange={handleAddFormChange}/>
      </AddContactForm>
      <Button type= 'submit' onClick={handleAddFormSubmit}>Submit</Button>
    </Wrapper>
  )
}

export default Contacts