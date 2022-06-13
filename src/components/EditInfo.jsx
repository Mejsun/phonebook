import React from 'react'
import { SmallButton } from '../styles/StyledComps'

function EditInfo({editContactData, handleEdit}) {
  return (
    <tr>
        <td><input type = 'text' name='fullname' placeholder='Name'
            value={editContactData.fullname} onChange={handleEdit}
        /></td>
        <td><input type = 'text' name='company' placeholder='Company'
            value={editContactData.company} onChange={handleEdit}
        /></td>
        <td><input type = 'email' name='email' placeholder='Email'
            value={editContactData.email} onChange={handleEdit}
        /></td>
        <td>
            <select>
                <option><input type = 'number' name='mobilephone' placeholder='Mobile Phone'
                    value={editContactData.mobilephone} onChange={handleEdit}
                /></option>
                <option><input type = 'text' name='workphone' placeholder='Work Phone'
                    value={editContactData.workphone} onChange={handleEdit}
                /></option>
                <option><input type = 'text' name='homephone' placeholder='Home Phone'
                    value={editContactData.homephone} onChange={handleEdit}
                /></option>
            </select>
        </td>
        <td>
            <SmallButton type='submit'><i class="fas fa-check-circle"></i></SmallButton>
        </td>
    </tr>
  )
}

export default EditInfo