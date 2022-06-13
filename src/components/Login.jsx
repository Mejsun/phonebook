import React, { useState } from 'react'
import axios from 'axios'
import {Wrapper, Header, Subheader, Form, Input, PasswordInput, ShowHidePassword, Pass, Button} from '../styles/StyledComps'


function Login() {

  const [userData, setUserData] = useState({email: '', password: ''})
  const [resultData, setResultData] = useState('')
  const [view, setView] = useState(false)

  async function handleSubmit (e){
    e.preventDefault();

    const res = await axios.post('https://interview.intrinsiccloud.net/auth/login', {
      username: userData.email,
      password: userData.password
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log('error')
        console.log(err)
      })
    return res
  }



  return (
    <>
    <Wrapper>
      <Header>Welcome!</Header>
      <Subheader>Some message</Subheader>
      <Form>
        <label htmlFor='email'>Email</label>
        <Input type='email' />
        <label htmlFor='password'>Password</label>
        <PasswordInput>
          <Pass type={view ? 'text' : 'password'}/>
          <ShowHidePassword type='button' onClick={() => setView(!view)}><i className={view ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i></ShowHidePassword>
        </PasswordInput>
      </Form>
      <Button onClick={handleSubmit}>Login</Button>
    </Wrapper>
    </>
  )
}

export default Login