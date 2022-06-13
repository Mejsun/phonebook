import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { Button, ContactInput, AddContactForm, Header, Table, Wrapper, Thead, SmallButton, Tdata } from '../styles/StyledComps';
import data from '../tempdata.json'

function Contacts() {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({fullname: '', company: '', email: '', mobilephone: '', workphone:'', homephone:''})

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

    function deleteContact(id){
      const allContacts = [...contacts]
      if(window.confirm('Are you sure you want to remove this contact?')){
        allContacts.splice(id,1)
      }else{
        return allContacts
      }
      setContacts(allContacts)
    }

  return (
    <Wrapper>
        <Header>Contacts list</Header>
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
               {contacts.map((contact, id)=> (
                    <tr key={Math.random()}>
                        <Tdata>{contact.fullname}</Tdata>
                        <Tdata>{contact.company}</Tdata>
                        <Tdata>{contact.email}</Tdata>
                        <Tdata>
                          <select name='phone'>
                            <option>M:{contact.mobilephone}</option>
                            <option>W:{contact.workphone}</option>
                            <option>H:{contact.homephone}</option>
                          </select>
                        </Tdata>
                        <Tdata><SmallButton><i className="fas fa-edit"></i></SmallButton></Tdata>
                        <Tdata><SmallButton onClick={() => deleteContact(id)}><i className="fas fa-trash"></i></SmallButton></Tdata>
                    </tr>
               ))}
                </tbody>
                </Table>
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