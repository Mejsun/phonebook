import React from 'react'
import Login from './Login'
import Profile from './UserProfile'
import Contacts from './Contacts'
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
        <Link to='/profile'>Profile</Link> 
       <Link to='/contacts'>Contacts</Link> 
    </>
  )
}

export default Menu