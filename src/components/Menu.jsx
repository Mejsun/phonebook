import React from 'react'
import Login from './Login'
import Profile from './UserProfile'
import Contacts from './Contacts'
import { Link } from "react-router-dom";
import { Navbar, Navitem } from '../styles/StyledComps';

function Menu() {
  return (
    <Navbar>
        <Link to='/profile'><Navitem>Profile</Navitem></Link> 
        <Link to='/contacts'><Navitem>Contacts</Navitem></Link> 
    </Navbar>
  )
}

export default Menu