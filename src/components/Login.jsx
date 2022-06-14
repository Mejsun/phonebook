import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Wrapper, Header, Subheader, Form, Input, PasswordInput, ShowHidePassword, Pass, Button} from '../styles/StyledComps'


function Login() {

  const [userData, setUserData] = useState({email: '', password: ''})
  const [view, setView] = useState(false)
  const [validationMessage, setValidationMessage] = useState('')
  

  const addDataIntoCache = (cacheName, url, response) => {
    // Converting our response into Actual Response form
    const data = new Response(JSON.stringify(response));
  
    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
        alert('Data Added into cache!')
      });
    }
  };

  async function handleSubmit (e){
    e.preventDefault();

    await axios.post('https://interview.intrinsiccloud.net/auth/login', {
      username: userData.email,
      password: userData.password
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('email', userData.email) //save email
        localStorage.setItem('token', res.data.token) //save email
        addDataIntoCache('profile data', 'http://localhost:3000/profile', 'sample')
        //window.location = '/profile'
      })
      .catch(err => {
        console.log(err)
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
    </Wrapper>
    </>
  )
}

export default Login