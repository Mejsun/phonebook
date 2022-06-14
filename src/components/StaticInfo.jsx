import React from 'react'
import { SmallButton } from '../styles/StyledComps'

function StaticInfo({contact, editId, handleDelete}) {
    
  return (
    <div>
    <details>
      <summary>{contact.contactName}</summary>
        <p>Company: {contact.company}</p>
        <p>Email: {contact.primaryEmailAddress}</p>
        <p>M: {contact.mobilephone}</p>
        <p>H: {contact.homephone}</p>
        <p>W: {contact.workphone}</p>
      </details>
      <div>
        <p><SmallButton type='button' onClick={(e)=> {editId(e, contact)}}><i className="fas fa-edit"></i></SmallButton></p>
        <p><SmallButton type='button' onClick={()=> {handleDelete(contact.id)}}><i className="fas fa-trash"></i></SmallButton></p>
      </div>
    </div>
  )
}

export default StaticInfo