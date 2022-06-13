import React from 'react'
import { Button, Header, Info, MainWrapper, Subheader, UserInfo, Wrapper } from '../styles/StyledComps'

function UserProfile() {
  return (
    <MainWrapper>
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
      <Button>Change the password</Button>
      <Button>Logout</Button>
    </Wrapper>
    </MainWrapper>
  )
}

export default UserProfile