import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Header, Logout, MainWrapper, Options, Profilepicture, SmallButton, Subheader, UserWrapper} from '../styles/StyledComps'
import { Link } from "react-router-dom";

function UserProfile() {

  const [user, setUser] = useState({
    "displayName": "",
    "emailAddress": "",
    "joinDate": "",
    "userId": 0,
  })
 
  const getToken = localStorage.getItem('token')
  const getPassword = localStorage.getItem('password')
  const [errorMessage, setErrorMessage] = useState('')
  const [images, setImages] = useState([])
  const [imageSrc, setImageSrc] = useState([])

  
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
        //console.log(err.message)
        setErrorMessage(err.message)
      })
  }, [getToken, images])

  useEffect(() =>{
    const profilepic = async () =>{
      await axios.get(`https://interview.intrinsiccloud.net/profile/profileImage/${user.userId}`, {
        responseType: 'blob'
      }, {
        headers: {
        Authorization: `Bearer ${getToken}`
       }
      })
        .then(res => {
          console.log(res.data)
          const newImageUrl = [URL.createObjectURL(res.data)]
          images.forEach(image => newImageUrl.push(URL.createObjectURL(image)))
          setImageSrc(newImageUrl)
        })
        .catch(err => {
          console.log(err)
        })
    }
    return profilepic
  }, [user, images, getToken])

  function changeProfilePic(e){
    axios.post('https://interview.intrinsiccloud.net/profile/profileImage', {
      headers: {
      Authorization: `Bearer ${getToken}`
     }
    }).then(res => (
      console.log(res.data)
    )).catch(err => console.log(err))
    setImages([...e.target.files])
  }

  function changePassword (){
    axios.post('https://interview.intrinsiccloud.net/profile/changePassword', {
      headers: {
      Authorization: `Bearer ${getToken}`
     }
    }, {
      oldPassword: getPassword
     })
      .then(req => {
        console.log(req.data)
    })
      .catch(err => {
        console.log(err)
      })
  }

  function handleLogout (){
    localStorage.clear()
    window.location = '/'
  }
  return (
    <MainWrapper>
    {getToken ? 
    (
    <UserWrapper>
      <Profilepicture src= {imageSrc[imageSrc.length-1]} alt='profile' />
      <SmallButton type='button'>
      <input type='file' accept='image/*' onChange={changeProfilePic} id="actual-btn" hidden/>
      <label htmlFor="actual-btn"><i className="fas fa-edit"></i></label>
      </SmallButton>
      <Header>{user.displayName}</Header>
      <Subheader>Joined on {user.joinDate}</Subheader>
      <Subheader>{user.emailAddress}</Subheader>
      <div>
        <Link to='/contacts'>
        <Options>Contacts</Options>
        </Link> 
        <Options onClick={changePassword} disabled>Change password</Options>
        <Logout onClick={handleLogout}>Logout</Logout>
      </div>
    </UserWrapper>)
    : 
    (<div>{errorMessage}</div>)
    }
    </MainWrapper>
  )
}

export default UserProfile