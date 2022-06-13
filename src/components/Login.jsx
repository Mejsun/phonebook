import React from 'react'
import {Wrapper, Header, Subheader, Form, Input, PasswordInput, ShowHidePassword, Pass, Button} from '../styles/StyledComps'

function Login() {
  return (
    <div>
    <Wrapper>
      <Header>Welcome!</Header>
      <Subheader>Some message</Subheader>
      <Form>
        <label htmlFor='email'>Email</label>
        <Input type='email' />
        <label htmlFor='password'>Password</label>
        <PasswordInput>
          <Pass type='password'/>
          <ShowHidePassword type='button'>S</ShowHidePassword>
        </PasswordInput>
      </Form>
      <Button>Login</Button>
    </Wrapper>
    </div>
  )
}

export default Login