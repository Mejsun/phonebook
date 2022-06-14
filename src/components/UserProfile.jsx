import React, { useState } from 'react'
import axios from 'axios';
import Menu from './Menu'
import { Button, Header, Info, MainWrapper, Subheader, UserInfo, Wrapper } from '../styles/StyledComps'

function UserProfile() {

  const user = {
    "displayName": "string",
    "emailAddress": "string",
    "firstName": "string",
    "joinDate": "2022-06-14T11:24:11.123Z",
    "lastName": "string",
    "message": "string",
    "success": true,
    "userId": 0 
  }
  const getToken = localStorage.getItem('token')
  const [errorMessage, setErrorMessage] = useState('')

 axios.get('https://interview.intrinsiccloud.net/profile', {
      displayName: user.displayName,
      emailAddress: user.emailAddress,
      firstName: user.firstName,
      joinDate: user.joinDate,
      lastName: user.lastName,
      message: user.message,
      success: user.success,
      userId: user.userId,
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err.response)

      })
    
  return (
    <MainWrapper>
    {getToken ? 
    (
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
    </Wrapper>)
    : 
    {errorMessage}
    }
    </MainWrapper>
  )
}

export default UserProfile