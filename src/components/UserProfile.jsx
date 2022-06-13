import React from 'react'
import { Button, Header, Info, Subheader, UserInfo, Wrapper } from '../styles/StyledComps'

function UserProfile() {
  return (
    <div>
    <Wrapper>
      <img src='#' alt='profilepic'></img>
      <Header>Name Surname</Header>
      <Subheader>Joined on</Subheader>
      <UserInfo>
        <Info>Company</Info>
        <Info>Email</Info>
        <Info>Mobile phone</Info>
        <Info>Work phone</Info>
      </UserInfo>
      <Button>Logout</Button>
    </Wrapper>
    </div>
  )
}

export default UserProfile