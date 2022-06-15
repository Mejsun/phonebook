import React from 'react'
import { ContactInput, Form, Input, SmallButton } from '../styles/StyledComps'

function EditInfo({editContactData, handleEdit, editSubmit}) {
  return (
    <>
      <td><input type = 'text' name='fullname' placeholder='Name'
            value={editContactData.contactName} onChange={handleEdit}/></td>
      <td><input type = 'text' name='company' placeholder='Company'
            value={editContactData.company} onChange={handleEdit}/></td>
      <td><input type = 'email' name='email' placeholder='Email'
            value={editContactData.primaryEmailAddress} onChange={handleEdit}/></td>
      <td><input type = 'number' name='mobilephone' placeholder='Mobile Phone'
            value={editContactData.mobilephone} onChange={handleEdit}/></td>
      <td><input type = 'text' name='homephone' placeholder='Home Phone'
            value={editContactData.homephone} onChange={handleEdit}/></td>
      <td><input type = 'text' name='workphone' placeholder='Work Phone'
            value={editContactData.workphone} onChange={handleEdit}/></td>
      <td><SmallButton type='submit'><i className="fas fa-check-circle"></i></SmallButton></td>
    </>
  )
}

export default EditInfo