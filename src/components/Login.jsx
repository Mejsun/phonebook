import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Wrapper, Header, Subheader, Form, Input, PasswordInput, ShowHidePassword, Pass, Button, Options} from '../styles/StyledComps'
import { Link } from "react-router-dom";

function Login() {

  const [userData, setUserData] = useState({email: '', password: ''})
  const [view, setView] = useState(false)
  const [validationMessage, setValidationMessage] = useState('')
  const getToken = localStorage.getItem('token')

  async function handleSubmit (e){
    e.preventDefault();

    await axios.post('https://interview.intrinsiccloud.net/auth/login', {
      username: userData.email,
      password: userData.password,
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('email', userData.email) //save email
        localStorage.setItem('password', userData.password) //save email
        localStorage.setItem('token', res.data.token) //save email
        window.location = '/profile'
      })
      .catch(err => {
        console.log(err.response.data.message)
        setValidationMessage(err.response.data.message)
      })
    
  }

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9!#$%&'*+=?^_`{|}~\W]+@[a-zA-Z0-9!#$%&'*+=?^_`{|}~\W]+\.[a-z.]{2,}/gm
    let validateInfo = '' 

    if(!userData.email){
      validateInfo ='Please log in below'                 
    }else{
      if(userData.email){
        if(emailRegex.test(userData.email) === false){
          validateInfo ='Invalid email format'
        }else{
          validateInfo ='Valid email format'
        }
      }
    }
    setValidationMessage(validateInfo)
  }, [userData.email]) 



  return (
    <>
    <Wrapper>
    {getToken ? 
    (<>
      <Header>Welcome back!</Header>
      <div>
      <Link to='/profile'>
        <Options>Profile</Options>
        </Link> 
        <Link to='/contacts'>
        <Options>Contacts</Options>
        </Link> 
      </div>
    </>
      ) : (
        <>
        <Header>Welcome!</Header>
      <Subheader>{validationMessage}</Subheader>
      <Form>
        <label htmlFor='email'>Email</label>
        <Input type='email' onChange={(e)=>{setUserData({...userData, email: e.target.value})}} />
        <label htmlFor='password'>Password</label>
        <PasswordInput>
          <Pass type={view ? 'text' : 'password'} onChange={(e)=>{setUserData({...userData, password: e.target.value})}}/>
          <ShowHidePassword type='button' onClick={() => setView(!view)}><i className={view ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i></ShowHidePassword>
        </PasswordInput>
      </Form>
      <Button onClick={handleSubmit}>Login</Button>
        </>
      )
    }  
    </Wrapper>
    </>
  )
}

export default Login