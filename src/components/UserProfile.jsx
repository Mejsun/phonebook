import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Header, Logout, MainWrapper, Options, Profilepicture, SmallButton, Subheader, UserWrapper} from '../styles/StyledComps'

function UserProfile() {

  const [user, setUser] = useState({
    "displayName": "",
    "emailAddress": "",
    "joinDate": "",
    "userId": 0,
  })
 
  const getToken = localStorage.getItem('token')
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
        console.log(err.response.data)
        setErrorMessage(err.response.data.message)
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
          console.log(err.response.data)
          setErrorMessage(err.message)
        })
    }
    return profilepic
  }, [user, images, getToken])

  function changeProfilePic(e){
    setImages([...e.target.files])
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
        <Options>Contacts</Options>
        <Options>Change password</Options>
        <Logout>Logout</Logout>
      </div>
    </UserWrapper>)
    : 
    {errorMessage}
    }
    </MainWrapper>
  )
}

export default UserProfile