import React from 'react'
import { AddContactForm, ContactInput } from '../styles/StyledComps'

function AddContact( {handleAddFormSubmit, handleAddFormChange}) {
  return (
    <AddContactForm onSubmit={handleAddFormSubmit}>
        <ContactInput type = 'text' name='contactName' placeholder='Name' onChange={handleAddFormChange}/>
        <ContactInput type = 'text' name='company' placeholder='Company' onChange={handleAddFormChange}/>
        <ContactInput type = 'email' name='primaryEmailAddress' placeholder='Email' onChange={handleAddFormChange}/>
        <ContactInput type = 'number' name='mobilephone' placeholder='Mobile Phone' onChange={handleAddFormChange}/>
        <ContactInput type = 'text' name='homephone' placeholder='Home Phone' onChange={handleAddFormChange}/>
        <ContactInput type = 'text' name='workphone' placeholder='Work Phone' onChange={handleAddFormChange}/>
      </AddContactForm>
  )
}

export default AddContact