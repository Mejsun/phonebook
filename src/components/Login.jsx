import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Wrapper,
  Header,
  Subheader,
  Form,
  Input,
  PasswordInput,
  ShowHidePassword,
  Pass,
  Button,
  Options,
  Logout
} from '../styles/StyledComps';
import { Link } from 'react-router-dom';

function Login() {
  const [userData, setUserData] = useState({ email: '', password: '' }); //set user data state from the users input
  const [view, setView] = useState(false); // show/hide password state
  const [validationMessage, setValidationMessage] = useState(''); //show response data from the api call
  const getToken = localStorage.getItem('token'); //local storage checking for token key/value

  //call asynchronous function to check login data and return a message or token data
  async function handleSubmit(e) {
    e.preventDefault(); //prevent screen from rerendering

    await axios
      .post('https://interview.intrinsiccloud.net/auth/login', {
        //calling the server
        username: userData.email, //send the email in request
        password: userData.password //send the password in request
      })
      .then((res) => {
        //check if there is a valid response
        console.log(res.data);
        //save to local storage if email and password are correct
        localStorage.setItem('email', userData.email); //save email
        localStorage.setItem('token', res.data.token); //save token
        window.location = '/profile'; //redirect the user to profile page
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setValidationMessage(err.response.data.message); //if there is an error, show the error message to user
      });
  }

  useEffect(() => {
    //check email format validity while user is typing /onchange
    const emailRegex =
      /^[a-zA-Z0-9!#$%&'*+=?^_`{|}~\W]+@[a-zA-Z0-9!#$%&'*+=?^_`{|}~\W]+\.[a-z.]{2,}/gm;
    let validateInfo = '';
    if (!userData.email) {
      //default message if email input is empty
      validateInfo = 'Please log in below';
    } else {
      if (emailRegex.test(userData.email) === false) {
        validateInfo = 'Invalid email format';
      } else {
        validateInfo = 'Valid email format';
      }
    }
    setValidationMessage(validateInfo); //show the message to the user
  }, [userData.email]); //run the validation every time email input is changed of them changes

  function handleLogout() {
    localStorage.clear(); //empty localStorage
    window.location.reload(); //reload the page
  }

  return (
    <>
      <Wrapper>
        {getToken ? (
          <>
            <Header>Welcome back!</Header>
            <div>
              <Link to="/profile">
                <Options>Profile</Options>
              </Link>
              <Link to="/contacts">
                <Options>Contacts</Options>
              </Link>
              <Logout onClick={handleLogout}>Logout</Logout>
            </div>
          </>
        ) : (
          <>
            <Header>Welcome!</Header>
            <Subheader>{validationMessage}</Subheader>
            <Form>
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
              <label htmlFor="password">Password</label>
              <PasswordInput>
                <Pass
                  type={view ? 'text' : 'password'}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                />
                <ShowHidePassword type="button" onClick={() => setView(!view)}>
                  <i className={view ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}></i>
                </ShowHidePassword>
              </PasswordInput>
            </Form>
            <Button onClick={handleSubmit}>Login</Button>
          </>
        )}
      </Wrapper>
    </>
  );
}

export default Login;
