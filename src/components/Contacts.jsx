import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import {
  ContactsWrapper,
  Options,
  Header,
  ContactForm,
  Subheader,
  Thead,
  Tr,
  Td
} from '../styles/StyledComps';
import AddContact from './AddContact';
import EditInfo from './EditInfo';
import StaticInfo from './StaticInfo';
import { Link } from 'react-router-dom';

function Contacts() {
  const getToken = localStorage.getItem('token'); //local storage checking for token key/value
  const contactInfo = {
    contactName: '',
    company: '',
    primaryEmailAddress: '',
    mobilephone: '',
    homephone: '',
    workphone: ''
  }; //default contact info object
  const [contacts, setContacts] = useState([]); //set contacts data array
  const [addFormData, setAddFormData] = useState(contactInfo); //add new contact data state
  const [editContactData, setEditContactData] = useState(contactInfo); //edit contact data state
  const [editContactId, setEditContactId] = useState(null); // state for checking the contact id when editing
  const headers = ['Name', 'Company', 'Email', 'Mobile', 'Home', 'Work', 'Edit', 'Delete']; //table headers

  //regex to check email validity
  const emailRegex =
    /^[a-zA-Z0-9!#$%&'*+=?^_`{|}~\W]+@[a-zA-Z0-9!#$%&'*+=?^_`{|}~\W]+\.[a-z.]{2,}/gm;

  useEffect(() => {
    //populate the contacts with the data from api on page render
    axios
      .get('https://interview.intrinsiccloud.net/contacts', {
        headers: {
          Authorization: `Bearer ${getToken}` //check if the user is logged in
        }
      })
      .then((res) => {
        console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
          contactInfo.push(res.data[i]); //initial data for the contacts
        }
        setContacts(contactInfo);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [getToken]); //component dependant on getToken variable

  function handleAddFormChange(e) {
    //add new contact tracking the input values
    e.preventDefault();
    const fieldName = e.target.getAttribute('name'); //track the inputs by the name attribute
    const fieldValue = e.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData); //add the input data to the array
  }

  function handleAddFormSubmit(e) {
    //submit the new contact data
    e.preventDefault();
    const newContact = {
      //new contact object values
      id: nanoid(),
      contactName: addFormData.contactName,
      company: addFormData.company,
      primaryEmailAddress: addFormData.primaryEmailAddress,
      mobilephone: addFormData.mobilephone,
      homephone: addFormData.homephone,
      workphone: addFormData.workphone
    };
    //check if there is a valid name and company, email format, and at least one phone number existing
    if (
      (addFormData.contactName && addFormData.company) !== '' &&
      (addFormData.mobilephone.length ||
        addFormData.homephone.length ||
        addFormData.workphone.length) > 10 &&
      emailRegex.test(addFormData.primaryEmailAddress) === true
    ) {
      const newContacts = [...contacts, newContact]; //add the new contact data
      setContacts(newContacts); //add the newly created contact to the contacts list
    } else {
      window.alert(
        'Please complete name, company and email fields, and add at least one contact number'
      );
    }
  }

  function handleDelete(id) {
    //delete contact based on the id
    const removeContact = contacts.filter((contact) => {
      return contact.id !== id;
    }); //filter the contacts array to all except the selected contact
    if (window.confirm('Are you sure you want to delete this contact?')) {
      setContacts(removeContact);
    } else {
      setContacts(contacts);
    }
  }

  function handleEdit(e) {
    //edit the contact data
    e.preventDefault();
    const fieldName = e.target.getAttribute('name'); //track the inputs by the name attribute
    const fieldValue = e.target.value;
    const newFormData = { ...editContactData };
    newFormData[fieldName] = fieldValue;
    setEditContactData(newFormData); //add the input data to the array
  }

  function editId(e, contact) {
    //get the correct contact to be edited
    e.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      //populate the edit input with contacts existing data
      contactName: contact.contactName,
      company: contact.company,
      primaryEmailAddress: contact.primaryEmailAddress,
      mobilephone: contact.mobilephone,
      homephone: contact.homephone,
      workphone: contact.workphone
    };
    setEditContactData(formValues);
  }

  function editSubmit(e) {
    //submit the changes to contact data
    e.preventDefault();
    const edited = {
      //new contact data info
      id: editContactId,
      contactName: editContactData.contactName,
      company: editContactData.company,
      primaryEmailAddress: editContactData.primaryEmailAddress,
      mobilephone: editContactData.mobilephone,
      workphone: editContactData.workphone,
      homephone: editContactData.homephone
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = edited;
    setContacts(newContacts); //change the contact info in the contacts array
    setEditContactId(null);
  }

  return (
    <ContactsWrapper>
      {getToken ? (
        <>
          <Header>Contacts list</Header>
          <div style={{ width: '250px' }}>
            <Link to="/profile">
              <Options>Profile</Options>
            </Link>
          </div>
          <ContactForm onSubmit={editSubmit}>
            <table>
              <Thead>
                <Tr>
                  {headers.map((header, i) => (
                    <Td key={i}>
                      <Subheader>{header}</Subheader>
                    </Td>
                  ))}
                </Tr>
              </Thead>
              <tbody>
                {contacts
                  .map((contact) => (
                    <Tr key={contact.contactName}>
                      {editContactId === contact.id ? (
                        <EditInfo handleEdit={handleEdit} editContactData={editContactData} />
                      ) : (
                        <StaticInfo contact={contact} editId={editId} handleDelete={handleDelete} />
                      )}
                    </Tr>
                  ))
                  .sort((a, b) => a.key.localeCompare(b.key))}
              </tbody>
            </table>
          </ContactForm>
          <AddContact
            handleAddFormSubmit={handleAddFormSubmit}
            handleAddFormChange={handleAddFormChange}
          />
        </>
      ) : (
        (window.location = '/')
      )}
    </ContactsWrapper>
  );
}

export default Contacts;
