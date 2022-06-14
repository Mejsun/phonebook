import React from 'react'
import { SmallButton } from '../styles/StyledComps'

function EditInfo({editContactData, handleEdit}) {
  return (
    <>
        <input type = 'text' name='fullname' placeholder='Name'
            value={editContactData.contactName} onChange={handleEdit}/>
        <input type = 'text' name='company' placeholder='Company'
            value={editContactData.company} onChange={handleEdit}/>
        <input type = 'email' name='email' placeholder='Email'
            value={editContactData.primaryEmailAddress} onChange={handleEdit}/>
        <input type = 'number' name='mobilephone' placeholder='Mobile Phone'
            value={editContactData.mobilephone} onChange={handleEdit}/>
        <input type = 'text' name='homephone' placeholder='Home Phone'
            value={editContactData.homephone} onChange={handleEdit}/>
        <input type = 'text' name='workphone' placeholder='Work Phone'
            value={editContactData.workphone} onChange={handleEdit}/>
        <SmallButton type='submit'><i class="fas fa-check-circle"></i></SmallButton>
    </>
  )
}

export default EditInfo