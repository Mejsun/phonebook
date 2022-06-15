import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useEffect, useRef, useState } from 'react'
import { ContactsWrapper, Header, ContactForm, Subheader, Table, Thead, Tr, Td} from '../styles/StyledComps';
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
  const tableRef = useRef()
  const headers =  ['Name', 'Company', 'Email', 'Mobile', 'Home', 'Work', 'Edit', 'Delete']

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
    <ContactsWrapper>
    {getToken ? ( 
      <>
      <Header>Contacts list</Header>
      <ContactForm onSubmit={editSubmit}>
      <Table ref={tableRef}>
      <Thead>
        <Tr>{
          headers.map((header,i) => (<Td key={i}><Subheader>{header}</Subheader></Td>))}
        </Tr>
      </Thead>
        <tbody>
        {contacts.map((contact)=> (<Tr key={contact.contactName}>
          {editContactId === contact.id ? 
          (<EditInfo handleEdit={handleEdit} editContactData={editContactData}/>): 
          (<StaticInfo contact={contact} editId={editId} handleDelete={handleDelete}/>)}   
          </Tr>)).sort((a,b)=> a.key.localeCompare(b.key))}
          </tbody>
      </Table>
      </ContactForm>
      <AddContact handleAddFormSubmit={handleAddFormSubmit} handleAddFormChange={handleAddFormChange} />
    </>) : (window.location = '/') }
    </ContactsWrapper>
  )
}

export default Contacts