import React from 'react'
import { AddContactForm, ContactInput, Subheader } from '../styles/StyledComps'

function AddContact( {handleAddFormSubmit, handleAddFormChange}) {
  return (
    <>
    <Subheader>Add new contact</Subheader>
    <AddContactForm  onSubmit={handleAddFormSubmit} > 
      <div>
        <ContactInput type = 'text' name='contactName' placeholder='Name' onChange={handleAddFormChange} required/>
        <ContactInput type = 'text' name='company' placeholder='Company' onChange={handleAddFormChange} required/>
        <ContactInput type = 'email' name='primaryEmailAddress' placeholder='Email' onChange={handleAddFormChange} required/>
      </div>
      <div>
        <ContactInput type = 'number' name='mobilephone' placeholder='Mobile Phone' onChange={handleAddFormChange} required/>
        <ContactInput type = 'text' name='homephone' placeholder='Home Phone' onChange={handleAddFormChange} required/>
        <ContactInput type = 'text' name='workphone' placeholder='Work Phone' onChange={handleAddFormChange} required/>
       </div>
    </AddContactForm>
    </>
  )
}

export default AddContact