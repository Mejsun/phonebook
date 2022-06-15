import React from 'react'
import { Info, SmallButton, Td } from '../styles/StyledComps'

function StaticInfo({contact, editId, handleDelete}) {
    
  return (
      <>
        <Td data-heading = 'Name'><Info>{contact.contactName}</Info></Td>
        <Td data-heading = 'Company'><Info>{contact.company}</Info></Td>
        <Td data-heading = 'Email'><Info>{contact.primaryEmailAddress}</Info></Td>
        <Td data-heading = 'Mobile'><Info>{contact.mobilephone}</Info></Td>
        <Td data-heading = 'Home'><Info>{contact.homephone}</Info></Td>
        <Td data-heading = 'Work'><Info>{contact.workphone}</Info></Td>
        <Td data-heading = 'Edit'><SmallButton type='button' onClick={(e)=> {editId(e, contact)}}><i className="fas fa-edit"></i></SmallButton></Td>
        <Td data-heading = 'Delete'><SmallButton type='button' onClick={()=> {handleDelete(contact.id)}}><i className="fas fa-trash"></i></SmallButton></Td>    
      </>
  )
}

export default StaticInfo