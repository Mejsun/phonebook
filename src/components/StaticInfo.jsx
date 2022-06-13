import React from 'react'
import { SmallButton, Tdata } from '../styles/StyledComps'

function StaticInfo({contact, editId, handleDelete}) {
    
  return (
    <tr>
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
    <Tdata><SmallButton type='button' onClick={(e)=> {editId(e, contact)}}><i className="fas fa-edit"></i></SmallButton></Tdata>
    <Tdata><SmallButton type='button' onClick={()=> {handleDelete(contact.id)}}><i className="fas fa-trash"></i></SmallButton></Tdata>
    </tr>
  )
}

export default StaticInfo