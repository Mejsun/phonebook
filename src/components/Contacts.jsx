import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { MainWrapper, SmallButton, Header, ContactForm, Subheader, Table} from '../styles/StyledComps';
import AddContact from './AddContact';
import EditInfo from './EditInfo';
import StaticInfo from './StaticInfo';

function Contacts() {
  const getToken = localStorage.getItem('token')
  const contactInfo = {contactName: '', company: '', primaryEmailAddress: '', mobilephone:'', homephone:'', workphone:'' }
  const [contacts, setContacts] = useState([])
  const [addFormData, setAddFormData] = useState(contactInfo)
  const [editContactData, setEditContactData] = useState(contactInfo)
  const [editContactId, setEditContactId] = useState(null)
  
  useEffect(() => {
    axios.get('https://interview.intrinsiccloud.net/contacts', {
      headers: {
      Authorization: `Bearer ${getToken}`
     }})
      .then(res => {
        for(let i = 0; i< res.data.length; i++){
          contactInfo.push(res.data[i])
        }
        console.log(res.data)
        setContacts(contactInfo)    
      })
      .catch(err => {
        console.log(err.response)
      })
  }, [getToken])

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
    const newContact = {
      id: nanoid(), 
      contactName: addFormData.contactName, 
      company: addFormData.company, 
      primaryEmailAddress: addFormData.primaryEmailAddress, 
      mobilephone: addFormData.mobilephone, 
      homephone: addFormData.homephone, 
      workphone: addFormData.workphone, 
     }
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
    setAddFormData({contactName: '', company: '', primaryEmailAddress: '', mobilephone: '', homephone:'', workphone:''})
  }

  function handleDelete(id){
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
        contactName: contact.contactName,
        company: contact.company,
        primaryEmailAddress: contact.primaryEmailAddress,
        mobilephone: contact.mobilephone, 
        homephone: contact.homephone, 
        workphone: contact.workphone, 
      }
      setEditContactData(formValues)
    }

    function editSubmit (e){
      e.preventDefault()
      const edited = {
        id: editContactId,
        contactName: editContactData.contactName,
        company: editContactData.company,
        primaryEmailAddress: editContactData.primaryEmailAddress,
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
    <MainWrapper style={{flexDirection: 'column'}}>
      <Header>Contacts list</Header>
      <ContactForm onSubmit={editSubmit}>
      <Table>
      <thead>
        <td><Subheader>Name</Subheader></td>
        <td><Subheader>Email</Subheader></td>
        <td><Subheader>Company</Subheader></td>
        <td><Subheader>Mobile phone</Subheader></td>
        <td><Subheader>Home phone</Subheader></td>
        <td><Subheader>Work phone</Subheader></td>
        <td><Subheader>Edit</Subheader></td>
        <td><Subheader>Delete</Subheader></td>
      </thead>
          <tbody>
          {contacts.map((contact)=> (
          <tr key={contact.id}>
          {editContactId === contact.id ? 
            (
            <EditInfo handleEdit={handleEdit} editContactData={editContactData}/>)
          : 
            (<StaticInfo contact={contact} editId={editId} handleDelete={handleDelete}/>)
          }   
          </tr>
          )).sort()}
          </tbody>
      </Table>
      </ContactForm>
      <AddContact handleAddFormSubmit={handleAddFormSubmit} handleAddFormChange={handleAddFormChange} />
      <SmallButton type= 'submit' onClick={handleAddFormSubmit}><i className='fas fa-plus'></i></SmallButton>
    </MainWrapper>
  )
}

export default Contacts