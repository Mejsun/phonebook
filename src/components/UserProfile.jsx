import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Header,
  Logout,
  MainWrapper,
  Options,
  Profilepicture,
  SmallButton,
  Subheader,
  UserWrapper
} from '../styles/StyledComps';
import { Link } from 'react-router-dom';

function UserProfile() {
  const getToken = localStorage.getItem('token'); //local storage checking for token key/value
  const [user, setUser] = useState({ displayName: '', emailAddress: '', joinDate: '', userId: 0 }); //set user data state from the users input
  const [errorMessage, setErrorMessage] = useState(''); //show if there is error message to the user
  const [images, setImages] = useState([]); //profile images array
  const [imageSrc, setImageSrc] = useState([]); //source of profile image

  useEffect(() => {
    //populate the user profile with the data from api as soon as the page renders
    axios
      .get('https://interview.intrinsiccloud.net/profile', {
        headers: {
          Authorization: `Bearer ${getToken}` //check if the user is logged in
        }
      })
      .then((res) => {
        console.log(res.data);
        //populate default user object with data from the api
        setUser({
          ...user,
          displayName: res.data.displayName,
          joinDate: res.data.joinDate,
          emailAddress: res.data.emailAddress
        });
      })
      .catch((err) => {
        //console.log(err.message)
        setErrorMessage(err.message); //show error message if there is
      });
  }, [getToken]); //component dependant on getToken variable

  useEffect(() => {
    //fetch the profile picture from the api
    const profilepic = async () => {
      await axios
        .get(`https://interview.intrinsiccloud.net/profile/profileImage/${user.userId}`, {
          responseType: 'blob' //the picture in the api is in binary form
        })
        .then((res) => {
          console.log(res.data);
          const newImageUrl = [URL.createObjectURL(res.data)]; //get the default profilepicture and change it to a url string
          images.forEach((image) => newImageUrl.push(URL.createObjectURL(image))); //add the image from api to the images array
          setImageSrc(newImageUrl); //set the image from api as profile picture
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return profilepic;
  }, [user, images, getToken]); //array of dependencies

  function changeProfilePic(e) {
    //axios does not work in this function
    axios
      .post('https://interview.intrinsiccloud.net/profile/profileImage')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setImages([...e.target.files]); //add the uploaded image to the images array
  }

  /**
   commented out as it returns a 403 error
   function changePassword (){
     axios.post('https://interview.intrinsiccloud.net/profile/changePassword', {
      headers: {
        Authorization: `Bearer ${getToken}`
     }})
      .then(req => {
        console.log(req.data)
      })
      .catch(err => {
        console.log(err)
      })
    }    
  */

  function handleLogout() {
    localStorage.clear(); //empty localStorage
    window.location = '/'; //redirect the user back to login page
  }

  return (
    <MainWrapper>
      {getToken ? (
        <UserWrapper>
          <Profilepicture src={imageSrc[imageSrc.length - 1]} alt="profile" />
          <SmallButton type="button">
            <input
              type="file"
              accept="image/*"
              onChange={changeProfilePic}
              id="actual-btn"
              hidden
            />
            <label htmlFor="actual-btn">
              <i className="fas fa-edit"></i>
            </label>
          </SmallButton>
          <Header>{user.displayName}</Header>
          <Subheader>Joined on {user.joinDate}</Subheader>
          <Subheader>{user.emailAddress}</Subheader>
          <div>
            <Link to="/contacts">
              <Options>Contacts</Options>
            </Link>
            <Options disabled>Change password</Options>
            <Logout onClick={handleLogout}>Logout</Logout>
          </div>
        </UserWrapper>
      ) : (
        <div>{errorMessage}</div>
      )}
    </MainWrapper>
  );
}

export default UserProfile;
