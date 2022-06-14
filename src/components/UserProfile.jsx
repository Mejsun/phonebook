import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Header, Info, MainWrapper, Subheader, UserInfo, Wrapper } from '../styles/StyledComps'

function UserProfile() {

  const [user, setUser] = useState({
    "displayName": "",
    "emailAddress": "",
    "joinDate": "",
  })
 
  const getToken = localStorage.getItem('token')
  const [errorMessage, setErrorMessage] = useState('')

  console.log(getToken)
  
  useEffect(() => {
    axios.get('https://interview.intrinsiccloud.net/profile', {
      headers: {
      Authorization: `Bearer ${getToken}`
     }
    })
      .then(res => {
        console.log(res.data)
        setUser({...user, displayName: res.data.displayName, joinDate: res.data.joinDate, emailAddress: res.data.emailAddress})
      })
      .catch(err => {
        console.log(err.response)
        setErrorMessage(err.message)
      })
  }, [getToken])
    
  console.log(user)

  return (
    <MainWrapper>
    {getToken ? 
    (
    <Wrapper>
      <img src='#' alt='profilepic'></img>
      <Header>{user.displayName}</Header>
      <Subheader>Joined on {user.joinDate}</Subheader>
      <Subheader>{user.emailAddress}</Subheader>
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