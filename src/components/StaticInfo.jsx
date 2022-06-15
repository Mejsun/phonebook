import React from 'react'
import { ContactInfo, Info, SmallButton, Subheader } from '../styles/StyledComps'

function StaticInfo({contact, editId, handleDelete}) {
    
  return (
      <>
        <td><Info>{contact.contactName}</Info></td>
        <td><Info>{contact.company}</Info></td>
        <td><Info>{contact.primaryEmailAddress}</Info></td>
        <td><Info>{contact.mobilephone}</Info></td>
        <td><Info>{contact.homephone}</Info></td>
        <td><Info>W: {contact.workphone}</Info></td>
        <td><SmallButton type='button' onClick={(e)=> {editId(e, contact)}}><i className="fas fa-edit"></i></SmallButton></td>
        <td><SmallButton type='button' onClick={()=> {handleDelete(contact.id)}}><i className="fas fa-trash"></i></SmallButton></td>    
      </>
  )
}

export default StaticInfo