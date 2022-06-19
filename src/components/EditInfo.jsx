import React from 'react';
import { Td, SmallButton, EditInput } from '../styles/StyledComps';

function EditInfo({ editContactData, handleEdit }) {
  return (
    <>
      <Td data-heading="Name">
        <EditInput
          type="text"
          name="contactName"
          placeholder="Name"
          value={editContactData.contactName}
          onChange={handleEdit}
        />
      </Td>
      <Td data-heading="Company">
        <EditInput
          type="text"
          name="company"
          placeholder="Company"
          value={editContactData.company}
          onChange={handleEdit}
        />
      </Td>
      <Td data-heading="Email">
        <EditInput
          type="email"
          name="primaryEmailAddress"
          placeholder="Email"
          value={editContactData.primaryEmailAddress}
          onChange={handleEdit}
        />
      </Td>
      <Td data-heading="Mobile">
        <EditInput
          type="number"
          name="mobilephone"
          placeholder="Mobile Phone"
          value={editContactData.mobilephone}
          onChange={handleEdit}
        />
      </Td>
      <Td data-heading="Home">
        <EditInput
          type="text"
          name="homephone"
          placeholder="Home Phone"
          value={editContactData.homephone}
          onChange={handleEdit}
        />
      </Td>
      <Td data-heading="Work">
        <EditInput
          type="text"
          name="workphone"
          placeholder="Work Phone"
          value={editContactData.workphone}
          onChange={handleEdit}
        />
      </Td>
      <Td data-heading="Save">
        <SmallButton type="submit">
          <i className="fas fa-check-circle"></i>
        </SmallButton>
      </Td>
    </>
  );
}

export default EditInfo;
