import React from 'react'
import { AddContactForm, ContactInput, Subheader, Wrapper, SmallButton } from '../styles/StyledComps'

function AddContact( {handleAddFormSubmit, handleAddFormChange}) {
  return (
    <Wrapper>
      <Subheader>Add new contact</Subheader>
      <AddContactForm  onSubmit={handleAddFormSubmit} > 
        <ContactInput type = 'text' name='contactName' placeholder='Name' onChange={handleAddFormChange} required='required'/>
        <ContactInput type = 'text' name='company' placeholder='Company' onChange={handleAddFormChange} required/>
        <ContactInput type = 'email' name='primaryEmailAddress' placeholder='Email' onChange={handleAddFormChange} required/>
        <ContactInput type = 'number' name='mobilephone' placeholder='Mobile Phone' onChange={handleAddFormChange} required/>
        <ContactInput type = 'number' name='homephone' placeholder='Home Phone' onChange={handleAddFormChange} required/>
        <ContactInput type = 'number' name='workphone' placeholder='Work Phone' onChange={handleAddFormChange} required/>
      </AddContactForm>
      <SmallButton type= 'submit' onClick={handleAddFormSubmit}><i className='fas fa-plus'></i></SmallButton>
    </Wrapper>
  )
}

export default AddContact